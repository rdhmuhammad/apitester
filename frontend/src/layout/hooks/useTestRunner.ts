import {useCallback} from "react"
import {useAppDispatch} from "@/app/store/hooks.ts"
import {store} from "@/app/store/store.ts"
import {selectVariable, selectBaseUrlValues} from "@/app/slices/collectionSlices.ts"
import {selectActiveEnvironmentVariables} from "@/app/slices/environmentSlice.ts"
import {
  selectActiveScenario,
  selectTestResults,
  selectCapturedVariables,
  setTestResults,
  setIsRunning,
  setCapturedVariables,
} from "@/app/slices/testScenarioSlice.ts"
import type {StepResult} from "@/pages/editor/types/testScenario.ts"
import {evaluateAssertion, evaluateCapture} from "@/lib/assertionEngine.ts"
import {useSendRequest, parseBlobResponse} from "@/layout/hooks/useSendRequest.ts"
import type {ISendRequest} from "@/layout/hooks/useSendRequest.ts"
import type {ItemUrl} from "@/pages/editor/types/api.ts"
import type {SendResponse} from "@/pages/editor/types/testScenario.ts"

function resolveTemplate(str: string, vars: Record<string, string>): string {
  return str.replace(/\{\{([^{}]+)\}\}/g, (_, key) => {
    const k = key.trim()
    return vars[k] ?? `{{${key}}}`
  })
}

function parseStepUrl(rawUrl: string, fallbackBase: string) {
  let baseUrl = fallbackBase
  let endpoint = rawUrl
  const queryParams: ItemUrl[] = []

  if (/^https?:\/\//i.test(rawUrl)) {
    try {
      const parsed = new URL(rawUrl)
      baseUrl = `${parsed.protocol}//${parsed.host}`
      endpoint = parsed.pathname + parsed.hash
      parsed.searchParams.forEach((value, key) => {
        queryParams.push({key, value, disabled: false})
      })
    } catch {
      endpoint = rawUrl
    }
  } else {
    const queryIdx = endpoint.indexOf('?')
    if (queryIdx >= 0) {
      const raw = endpoint.slice(queryIdx + 1)
      const hashIdx = raw.indexOf('#')
      const query = hashIdx >= 0 ? raw.slice(0, hashIdx) : raw
      const searchParams = new URLSearchParams(query)
      searchParams.forEach((value, key) => {
        queryParams.push({key, value, disabled: false})
      })
      endpoint = hashIdx >= 0 ? endpoint.slice(0, queryIdx) + raw.slice(hashIdx) : endpoint.slice(0, queryIdx)
    }
  }

  return {baseUrl, endpoint, queryParams}
}

export function useTestRunner() {
  const dispatch = useAppDispatch()

  const run = useCallback(async () => {
    const state = store.getState()
    const scenario = selectActiveScenario(state)
    if (!scenario || !scenario.steps || scenario.steps.length === 0) return

    const steps = scenario.steps
    const collectionVars = selectVariable(state)
    const baseUrlOptions = selectBaseUrlValues(state)
        const defaultBaseUrl = baseUrlOptions[0] ?? ''
        const envVars = selectActiveEnvironmentVariables(state)

        dispatch(setIsRunning(true))

    const captured: Record<string, string> = {}
    const results: StepResult[] = new Array(steps.length)

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]


      results[i] = {
        stepId: step.id,
        stepIndex: i,
        status: 'running',
        assertionResults: [],
        captureResults: [],
        durationMs: 0,
      }
      dispatch(setTestResults([...results]))

      const mergedVars: Record<string, string> = {}
      for (const v of collectionVars) {
        mergedVars[v.key] = v.value
      }
      Object.assign(mergedVars, captured)
      if (defaultBaseUrl) mergedVars['base_url'] = defaultBaseUrl
      Object.assign(mergedVars, envVars)

      const resolvedUrl = resolveTemplate(step.url, mergedVars)
      console.log(step.url, mergedVars)
      const {baseUrl, endpoint, queryParams} = parseStepUrl(resolvedUrl, defaultBaseUrl)

      const stepHeaders: ItemUrl[] = (step.headers ?? [])
        .filter(h => h.key.trim())
        .map(h => ({
          id: crypto.randomUUID(),
          key: h.key,
          value: resolveTemplate(h.value, mergedVars),
        }))

      const hasJsonBody = stepHeaders.some(
        h => h.key?.toLowerCase() === 'content-type' && h.value?.toLowerCase().includes('json')
      )
      if (!hasJsonBody && step.body) {
        stepHeaders.push({
          id: crypto.randomUUID(),
          key: 'Content-Type',
          value: 'application/json',
        })
      }

      const request: ISendRequest = {
        baseUrl,
        endpoint,
        method: step.method,
        headers: stepHeaders,
        requestParams: queryParams,
        contentType: hasJsonBody
          ? stepHeaders.find(h => h.key?.toLowerCase() === 'content-type')?.value ?? 'application/json'
          : 'application/json',
        raw: resolveTemplate(step.body ?? '', mergedVars),
      }

      await useSendRequest(request).then(async (response) => {
        const testResponse = {
          status: response.statusCode,
          statusText: response.statusText,
          headers: response.headers ?? {},
          body: response.data,
          responseTimeMs: response.responseTime,
          timestamp: new Date().toISOString(),
        }

        const assertionResults = (step.assertions || []).map(a => {
          const res = evaluateAssertion(a.expression, testResponse)
          return {...res, ruleId: a.id}
        })

        const captureResults = (step.captures || []).map(c => {
          const res = evaluateCapture(c.expression, c.varName, testResponse)
          if (res.value !== undefined) {
            captured[c.varName] = String(res.value)
          }
          return {...res, ruleId: c.id}
        })

        dispatch(setCapturedVariables({...captured}))

        const allPassed = assertionResults.length === 0 || assertionResults.every(a => a.passed)
        const stepStatus = allPassed && testResponse.status < 400 ? 'passed' : 'failed'

        results[i] = {
          stepId: step.id,
          stepIndex: i,
          status: stepStatus,
          response: testResponse,
          assertionResults,
          captureResults,
          durationMs: testResponse.responseTimeMs,
        }
        dispatch(setTestResults([...results]))
      }).catch(async (err) => {
        const errorMsg = err instanceof Error ? err.message : 'Execution error'
        let testResponse: SendResponse | undefined

        if (err?.response) {
          const blob = err.response?.data as Blob
          const contentType = err.response?.headers?.['content-type'] ?? ''
          const { data } = blob
            ? await parseBlobResponse(blob, contentType)
            : { data: null }

          const responseHeaders: Record<string, string> = {}
          if (err.response?.headers) {
            Object.entries(err.response.headers as Record<string, unknown>).forEach(([k, v]) => {
              if (typeof v === 'string') responseHeaders[k] = v
            })
          }

          testResponse = {
            status: err.response.status,
            statusText: err.response.statusText,
            headers: responseHeaders,
            body: data,
            responseTimeMs: 0,
            timestamp: new Date().toISOString(),
          }

          const assertionResults = (step.assertions || []).map(a => {
            const res = evaluateAssertion(a.expression, testResponse!)
            return {...res, ruleId: a.id}
          })

          const captureResults = (step.captures || []).map(c => {
            const res = evaluateCapture(c.expression, c.varName, testResponse!)
            if (res.value !== undefined) {
              captured[c.varName] = String(res.value)
            }
            return {...res, ruleId: c.id}
          })

          dispatch(setCapturedVariables({...captured}))

          results[i] = {
            stepId: step.id,
            stepIndex: i,
            status: 'failed',
            response: testResponse,
            assertionResults,
            captureResults,
            durationMs: 0,
            error: errorMsg,
          }
          dispatch(setTestResults([...results]))
        } else {
          results[i] = {
            stepId: step.id,
            stepIndex: i,
            status: 'failed',
            assertionResults: [],
            captureResults: [],
            durationMs: 0,
            error: errorMsg,
          }
          dispatch(setTestResults([...results]))
        }
      })
    }

    dispatch(setIsRunning(false))
  }, [dispatch])

  const runStep = useCallback(async (stepIndex: number) => {
    const state = store.getState()
    const scenario = selectActiveScenario(state)
    if (!scenario || !scenario.steps || stepIndex >= scenario.steps.length) return

    const steps = scenario.steps
    const collectionVars = selectVariable(state)
    const baseUrlOptions = selectBaseUrlValues(state)
    const defaultBaseUrl = baseUrlOptions[0] ?? ''
    const envVars = selectActiveEnvironmentVariables(state)

    dispatch(setIsRunning(true))

    const currentResults = selectTestResults(state)
    const results = [...currentResults]

    const step = steps[stepIndex]

    results[stepIndex] = {
      stepId: step.id,
      stepIndex,
      status: 'running',
      assertionResults: [],
      captureResults: [],
      durationMs: 0,
    }
    dispatch(setTestResults([...results]))

    const captured: Record<string, string> = {}
    const existingCaptured = selectCapturedVariables(state)
    Object.assign(captured, existingCaptured)

    const mergedVars: Record<string, string> = {}
    for (const v of collectionVars) {
      mergedVars[v.key] = v.value
    }
    Object.assign(mergedVars, captured)
    if (defaultBaseUrl) mergedVars['base_url'] = defaultBaseUrl
    Object.assign(mergedVars, envVars)

    const resolvedUrl = resolveTemplate(step.url, mergedVars)
    const {baseUrl, endpoint, queryParams} = parseStepUrl(resolvedUrl, defaultBaseUrl)

    const stepHeaders: ItemUrl[] = (step.headers ?? [])
      .filter(h => h.key.trim())
      .map(h => ({
        id: crypto.randomUUID(),
        key: h.key,
        value: resolveTemplate(h.value, mergedVars),
      }))

    const hasJsonBody = stepHeaders.some(
      h => h.key?.toLowerCase() === 'content-type' && h.value?.toLowerCase().includes('json')
    )
    if (!hasJsonBody && step.body) {
      stepHeaders.push({
        id: crypto.randomUUID(),
        key: 'Content-Type',
        value: 'application/json',
      })
    }

    const request: ISendRequest = {
      baseUrl,
      endpoint,
      method: step.method,
      headers: stepHeaders,
      requestParams: queryParams,
      contentType: hasJsonBody
        ? stepHeaders.find(h => h.key?.toLowerCase() === 'content-type')?.value ?? 'application/json'
        : 'application/json',
      raw: resolveTemplate(step.body ?? '', mergedVars),
    }

    await useSendRequest(request).then(async (response) => {
      const testResponse = {
        status: response.statusCode,
        statusText: response.statusText,
        headers: response.headers ?? {},
        body: response.data,
        responseTimeMs: response.responseTime,
        timestamp: new Date().toISOString(),
      }

      const assertionResults = (step.assertions || []).map(a => {
        const res = evaluateAssertion(a.expression, testResponse)
        return {...res, ruleId: a.id}
      })

      const captureResults = (step.captures || []).map(c => {
        const res = evaluateCapture(c.expression, c.varName, testResponse)
        if (res.value !== undefined) {
          captured[c.varName] = String(res.value)
        }
        return {...res, ruleId: c.id}
      })

      dispatch(setCapturedVariables({...captured}))

      const allPassed = assertionResults.length === 0 || assertionResults.every(a => a.passed)
      const stepStatus = allPassed && testResponse.status < 400 ? 'passed' : 'failed'

      results[stepIndex] = {
        stepId: step.id,
        stepIndex,
        status: stepStatus,
        response: testResponse,
        assertionResults,
        captureResults,
        durationMs: testResponse.responseTimeMs,
      }
      dispatch(setTestResults([...results]))
    }).catch(async (err) => {
      const errorMsg = err instanceof Error ? err.message : 'Execution error'
      let testResponse: SendResponse | undefined

      if (err?.response) {
        const blob = err.response?.data as Blob
        const contentType = err.response?.headers?.['content-type'] ?? ''
        const { data } = blob
          ? await parseBlobResponse(blob, contentType)
          : { data: null }

        const responseHeaders: Record<string, string> = {}
        if (err.response?.headers) {
          Object.entries(err.response.headers as Record<string, unknown>).forEach(([k, v]) => {
            if (typeof v === 'string') responseHeaders[k] = v
          })
        }

        testResponse = {
          status: err.response.status,
          statusText: err.response.statusText,
          headers: responseHeaders,
          body: data,
          responseTimeMs: 0,
          timestamp: new Date().toISOString(),
        }

        const assertionResults = (step.assertions || []).map(a => {
          const res = evaluateAssertion(a.expression, testResponse!)
          return {...res, ruleId: a.id}
        })

        const captureResults = (step.captures || []).map(c => {
          const res = evaluateCapture(c.expression, c.varName, testResponse!)
          if (res.value !== undefined) {
            captured[c.varName] = String(res.value)
          }
          return {...res, ruleId: c.id}
        })

        dispatch(setCapturedVariables({...captured}))

        results[stepIndex] = {
          stepId: step.id,
          stepIndex,
          status: 'failed',
          response: testResponse,
          assertionResults,
          captureResults,
          durationMs: 0,
          error: errorMsg,
        }
        dispatch(setTestResults([...results]))
      } else {
        results[stepIndex] = {
          stepId: step.id,
          stepIndex,
          status: 'failed',
          assertionResults: [],
          captureResults: [],
          durationMs: 0,
          error: errorMsg,
        }
        dispatch(setTestResults([...results]))
      }
    })

    dispatch(setIsRunning(false))
  }, [dispatch])

  return {run, runStep}
}
