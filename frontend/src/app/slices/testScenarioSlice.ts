import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/app/store/store.ts"
import type {StepResult, TestScenario, TestStep} from "@/pages/editor/types/testScenario.ts"
import {parseHttpContent, serializeHttpContent} from "@/lib/httpParser.ts"
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
  async (payload: {name: string; content: string}, {getState}) => {
    const collectionId = getState().testScenario.collectionId
    if (!collectionId) throw new Error('No active collection')
    await TestScenarioServices.writeTest(collectionId, payload.name, payload.content)
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
    const template = `### Step 1 — New Request
GET {{baseUrl}}/resource
Accept: application/json

>> {%
  assert response.status === 200
%}`

    await TestScenarioServices.writeTest(collectionId, name, template)
    return {name, filename, content: template}
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

      const serialized = serializeHttpContent(action.payload.steps)
      scenario.steps = action.payload.steps
      scenario.content = serialized
      state.hasUnsavedChanges = true
    },
    updateScenarioRawContent(state, action: PayloadAction<{id: string; content: string}>) {
      const scenario = state.scenarios.find(s => s.id === action.payload.id)
      if (!scenario) return

      scenario.content = action.payload.content
      state.hasUnsavedChanges = true

      try {
        scenario.steps = parseHttpContent(action.payload.content)
      } catch {
        // keep old steps on parse error
      }
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
          return {...prev, name: f.name, filename: f.filename}
        }
        return {
          id: f.name,
          name: f.name,
          filename: f.filename,
          description: '',
          content: '',
          steps: [],
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

      const steps = parseHttpContent(action.payload.content)
      if (steps.length === 0 && action.payload.content.trim()) {
        return
      }
      scenario.content = action.payload.content
      scenario.steps = steps
    })

    builder.addCase(createTestFile.fulfilled, (state, action) => {
      const {name, filename, content} = action.payload
      const steps = parseHttpContent(content)
      state.scenarios.push({
        id: name,
        name,
        filename,
        description: '',
        content,
        steps,
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
