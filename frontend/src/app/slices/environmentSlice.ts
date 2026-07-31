import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/app/store/store.ts"
import type {EnvironmentEntry} from "@/layout/services/environment.ts"
import {EnvironmentServices} from "@/layout/services/environment.ts"
import {createAppAsyncThunk} from "@/app/store/withTypes.ts"

interface EnvironmentState {
  environments: EnvironmentEntry[]
  activeEnvironment: string | null
  status: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState: EnvironmentState = {
  environments: [],
  activeEnvironment: null,
  status: 'idle',
}

export const fetchEnvironments = createAppAsyncThunk(
  'environment/fetchEnvironments',
  async (collectionId: string) => {
    return await EnvironmentServices.readEnvironments(collectionId)
  }
)

export const saveEnvironments = createAppAsyncThunk(
  'environment/saveEnvironments',
  async ({collectionId, environments}: {collectionId: string; environments: EnvironmentEntry[]}) => {
    await EnvironmentServices.writeEnvironments(collectionId, environments)
    return environments
  }
)

const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setActiveEnvironment(state, action: PayloadAction<string>) {
      state.activeEnvironment = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEnvironments.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchEnvironments.fulfilled, (state, action) => {
      state.environments = action.payload
      if (!state.activeEnvironment && action.payload.length > 0) {
        state.activeEnvironment = action.payload[0].name
      }
      state.status = 'succeeded'
    })
    builder.addCase(fetchEnvironments.rejected, (state) => {
      state.status = 'rejected'
    })
    builder.addCase(saveEnvironments.fulfilled, (state, action) => {
      state.environments = action.payload
    })
  },
})

export const {setActiveEnvironment} = environmentSlice.actions
export default environmentSlice.reducer

export const selectEnvironments = (state: RootState) => state.environment.environments
export const selectActiveEnvironment = (state: RootState) => state.environment.activeEnvironment
export const selectEnvironmentStatus = (state: RootState) => state.environment.status

export const selectActiveEnvironmentVariables = (state: RootState): Record<string, string> => {
  const envs = state.environment.environments
  const activeName = state.environment.activeEnvironment
  if (!activeName) return {}
  const env = envs.find(e => e.name === activeName)
  return env?.variables ?? {}
}
