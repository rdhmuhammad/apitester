import type {AssertionRule, CaptureRule, HttpMethod, TestStep} from "@/pages/editor/types/testScenario.ts"

/**
 * Parses raw .http file content into structured TestStep array
 * format:
 * ### Step Name
 * GET {{baseUrl}}/path
 * Header-Name: value
 *
 * { body }
 *
 * >> {%
 *   assert response.status === 200
 *   capture userId = response.body.id
 * %}
 */
export function parseHttpContent(content: string): TestStep[] {
  if (!content || !content.trim()) return []

  const clean = content.replace(/^\uFEFF/, '')
  const stepBlocks = clean.split(/^###\s+/m).filter((block) => block.trim().length > 0)

  const result = stepBlocks.map((block, index) => {
    const lines = block.split(/\r?\n/)

    const stepName = lines[0].trim() || `Step ${index + 1}`

    let method: HttpMethod = 'GET'
    let url = ''
    const headers: Record<string, string> = {}
    const bodyLines: string[] = []
    const assertions: AssertionRule[] = []
    const captures: CaptureRule[] = []

    let mode: 'request_line' | 'headers' | 'body' | 'magic_block' = 'request_line'

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]

      if (line.trim().startsWith('>> {%')) {
        mode = 'magic_block'
        continue
      }

      if (mode === 'magic_block' && line.trim().endsWith('%}')) {
        mode = 'body'
        continue
      }

      if (mode === 'magic_block') {
        const trimmed = line.trim()
        if (trimmed.startsWith('assert ')) {
          const expr = trimmed.replace(/^assert\s+/, '').trim()
          if (expr) {
            assertions.push({
              id: `assert-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
              expression: expr,
            })
          }
        } else if (trimmed.startsWith('capture ')) {
          const capMatch = trimmed.match(/^capture\s+([a-zA-Z0-9_$]+)\s*=\s*(.+)$/)
          if (capMatch) {
            captures.push({
              id: `cap-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
              varName: capMatch[1].trim(),
              expression: capMatch[2].trim(),
            })
          }
        }
        continue
      }

      if (mode === 'request_line') {
        const trimmedLine = line.trim()
        if (!trimmedLine) continue

        const reqMatch = trimmedLine.match(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(.+)$/i)
        if (reqMatch) {
          method = reqMatch[1].toUpperCase() as HttpMethod
          url = reqMatch[2].trim()
          mode = 'headers'
        }
        continue
      }

      if (mode === 'headers') {
        const trimmedLine = line.trim()
        if (trimmedLine === '') {
          mode = 'body'
          continue
        }

        const headerMatch = line.match(/^([a-zA-Z0-9_\-]+)\s*:\s*(.+)$/)
        if (headerMatch) {
          headers[headerMatch[1].trim()] = headerMatch[2].trim()
        } else {
          mode = 'body'
          bodyLines.push(line)
        }
        continue
      }

      if (mode === 'body') {
        bodyLines.push(line)
      }
    }

    const bodyText = bodyLines.join('\n').trim()

    return {
      id: `step-${index + 1}-${Math.random().toString(36).substring(2, 7)}`,
      name: stepName,
      method,
      url: url || '{{baseUrl}}/',
      headers,
      body: bodyText,
      assertions,
      captures,
    }
  })

  if (result.length === 1 && result[0].name.includes('###')) {
    return []
  }

  return result
}

/**
 * Serializes a list of TestStep objects back to .http format
 */
export function serializeHttpContent(steps: TestStep[]): string {
  return steps
    .map((step) => {
      let result = `### ${step.name}\n`
      result += `${step.method} ${step.url}\n`

      if (step.headers && Object.keys(step.headers).length > 0) {
        Object.entries(step.headers).forEach(([key, value]) => {
          if (key && value) {
            result += `${key}: ${value}\n`
          }
        })
      }

      if (step.body && step.body.trim()) {
        result += `\n${step.body.trim()}\n`
      }

      if ((step.assertions && step.assertions.length > 0) || (step.captures && step.captures.length > 0)) {
        result += `\n>> {%\n`
        step.assertions?.forEach((ast) => {
          if (ast.expression.trim()) {
            result += `  assert ${ast.expression.trim()}\n`
          }
        })
        step.captures?.forEach((cap) => {
          if (cap.varName.trim() && cap.expression.trim()) {
            result += `  capture ${cap.varName.trim()} = ${cap.expression.trim()}\n`
          }
        })
        result += `%}\n`
      }

      return result
    })
    .join('\n')
}
