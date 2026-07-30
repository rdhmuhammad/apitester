import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/app/store/store.ts"
import type {StepResult, TestScenario, TestStep} from "@/pages/editor/types/testScenario.ts"
import type {TestFileContent} from "@/layout/services/testScenario.ts"
import {createAppAsyncThunk} from "@/app/store/withTypes.ts"
import {CollectionServices} from "@/layout/services/collection.ts"
import {TestScenarioServices} from "@/layout/services/testScenario.ts"

interface TestScenarioState {
  collectionId: string | null
  scenarios: TestScenario[]
  activeTestId: string | null
  testResults: StepResult[]
  isRunning: boolean
  capturedVariables: Record<string, string>
  hasUnsavedChanges: boolean
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState: TestScenarioState = {
  collectionId: null,
  scenarios: [],
  activeTestId: null,
  testResults: [],
  isRunning: false,
  capturedVariables: {},
  hasUnsavedChanges: false,
  status: 'idle',
}

const defaultSteps: TestStep[] = [
  {
    id: 'step-1',
    name: 'Step 1 — New Request',
    method: 'GET',
    url: '{{baseUrl}}/resource',
    headers: [{key: 'Accept', value: 'application/json'}],
    body: '',
    assertions: [{id: 'assert-1', expression: 'response.status === 200'}],
    captures: [],
  },
]

function serializeSteps(steps: TestStep[]): string {
  return steps
    .map((step) => {
      let result = `### ${step.name}\n`
      result += `${step.method} ${step.url}\n`

      step.headers?.forEach((h) => {
        if (h.key && h.value) {
          result += `${h.key}: ${h.value}\n`
        }
      })

      if (step.body && step.body.trim()) {
        result += `\n${step.body.trim()}\n`
      }

      if (step?.assertions?.length > 0 || step?.captures?.length > 0) {
        result += `\n>> {%\n`
        step.assertions?.forEach((a) => {
          if (a.expression.trim()) {
            result += `  assert ${a.expression.trim()}\n`
          }
        })
        step.captures?.forEach((c) => {
          if (c.varName.trim() && c.expression.trim()) {
            result += `  capture ${c.varName.trim()} = ${c.expression.trim()}\n`
          }
        })
        result += `%}\n`
      }

      return result
    })
    .join('\n')
}

export const fetchTestFiles = createAppAsyncThunk(
  'testScenario/fetchTestFiles',
  async () => {
    const active = await CollectionServices.getActiveCollection()
    const files = await TestScenarioServices.listTests(active.id)
    return {collectionId: active.id, files}
  }
)

export const fetchTestContent = createAppAsyncThunk(
  'testScenario/fetchTestContent',
  async (name: string, {getState}) => {
    const collectionId = getState().testScenario.collectionId
    if (!collectionId) throw new Error('No active collection')
    const content = await TestScenarioServices.readTest(collectionId, name)
    return {name, content}
  }
)

export const saveTestFile = createAppAsyncThunk(
  'testScenario/saveTestFile',
  async (payload: {name: string; steps: TestStep[]}, {getState}) => {
    const collectionId = getState().testScenario.collectionId
    if (!collectionId) throw new Error('No active collection')
    const content: TestFileContent = {name: payload.name, steps: payload.steps}
    await TestScenarioServices.writeTest(collectionId, payload.name, content)
  }
)

export const deleteTestFile = createAppAsyncThunk(
  'testScenario/deleteTestFile',
  async (name: string, {getState}) => {
    const collectionId = getState().testScenario.collectionId
    if (!collectionId) throw new Error('No active collection')
    await TestScenarioServices.deleteTest(collectionId, name)
  }
)

export const createTestFile = createAppAsyncThunk(
  'testScenario/createTestFile',
  async (_, {getState}) => {
    const state = getState().testScenario
    const collectionId = state.collectionId
    if (!collectionId) throw new Error('No active collection')

    const existing = state.scenarios
    let index = 1
    while (existing.find(s => s.filename === `scenario-${index}.http`)) {
      index++
    }
    const name = `scenario-${index}`
    const filename = `${name}.http`

    await TestScenarioServices.writeTest(collectionId, name, {name, steps: defaultSteps})
    return {name, filename, steps: defaultSteps}
  }
)

const testScenarioSlice = createSlice({
  name: 'testScenario',
  initialState,
  reducers: {
    setActiveTestId(state, action: PayloadAction<string | null>) {
      state.activeTestId = action.payload
      state.hasUnsavedChanges = false
      state.testResults = []
    },
    updateScenarioSteps(state, action: PayloadAction<{id: string; steps: TestStep[]}>) {
      const scenario = state.scenarios.find(s => s.id === action.payload.id)
      if (!scenario) return

      scenario.steps = action.payload.steps
      scenario.content = serializeSteps(action.payload.steps)
      state.hasUnsavedChanges = true
    },
    updateScenarioRawContent(state, action: PayloadAction<{id: string; content: string}>) {
      const scenario = state.scenarios.find(s => s.id === action.payload.id)
      if (!scenario) return

      scenario.content = action.payload.content
      state.hasUnsavedChanges = true
    },
    saveScenario(state, _action: PayloadAction<string>) {
      state.hasUnsavedChanges = false
    },
    setTestResults(state, action: PayloadAction<StepResult[]>) {
      state.testResults = action.payload
    },
    setIsRunning(state, action: PayloadAction<boolean>) {
      state.isRunning = action.payload
    },
    setCapturedVariables(state, action: PayloadAction<Record<string, string>>) {
      state.capturedVariables = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTestFiles.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchTestFiles.fulfilled, (state, action) => {
      state.collectionId = action.payload.collectionId
      const existing = state.scenarios
      state.scenarios = action.payload.files.map(f => {
        const prev = existing.find(s => s.id === f.name)
        if (prev && prev.content) {
          return {...prev, name: f.name, filename: f.filename, totalSteps: f.totalSteps}
        }
        return {
          id: f.name,
          name: f.name,
          filename: f.filename,
          description: '',
          content: '',
          steps: [],
          totalSteps: f.totalSteps,
          lastRunStatus: 'unrun',
        }
      })
      state.status = 'succeeded'
    })
    builder.addCase(fetchTestFiles.rejected, (state) => {
      state.status = 'rejected'
    })

    builder.addCase(fetchTestContent.fulfilled, (state, action) => {
      const scenario = state.scenarios.find(s => s.id === action.payload.name)
      if (!scenario) return

      const payload = action.payload.content
      if (!payload || !payload.steps) return

      scenario.steps = payload.steps
      scenario.content = serializeSteps(payload.steps)
      scenario.totalSteps = payload.steps.length
    })

    builder.addCase(createTestFile.fulfilled, (state, action) => {
      const {name, filename, steps} = action.payload
      state.scenarios.push({
        id: name,
        name,
        filename,
        description: '',
        content: serializeSteps(steps),
        steps,
        totalSteps: steps.length,
        lastRunStatus: 'unrun',
      })
      state.activeTestId = name
    })

    builder.addCase(deleteTestFile.fulfilled, (state, action) => {
      const name = action.meta.arg
      state.scenarios = state.scenarios.filter(s => s.id !== name)
      if (state.activeTestId === name) {
        state.activeTestId = state.scenarios[0]?.id ?? null
        state.testResults = []
      }
    })

    builder.addCase(saveTestFile.fulfilled, (state) => {
      state.hasUnsavedChanges = false
    })
  },
})

export default testScenarioSlice.reducer

export const {
  setActiveTestId,
  updateScenarioSteps,
  updateScenarioRawContent,
  saveScenario,
  setTestResults,
  setIsRunning,
  setCapturedVariables,
} = testScenarioSlice.actions

export const selectScenarios = (state: RootState): TestScenario[] => state.testScenario.scenarios
export const selectActiveTestId = (state: RootState): string | null => state.testScenario.activeTestId
export const selectActiveScenario = (state: RootState): TestScenario | null =>
  state.testScenario.scenarios.find(s => s.id === state.testScenario.activeTestId) ?? null
export const selectTestResults = (state: RootState): StepResult[] => state.testScenario.testResults
export const selectIsRunning = (state: RootState): boolean => state.testScenario.isRunning
export const selectCapturedVariables = (state: RootState): Record<string, string> => state.testScenario.capturedVariables
export const selectHasUnsavedChanges = (state: RootState): boolean => state.testScenario.hasUnsavedChanges
export const selectTestFilesStatus = (state: RootState): string => state.testScenario.status
