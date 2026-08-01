import axios from "@/config/axios.ts"
import type {Response} from "@/types/response.ts"
import type {TestStep} from "@/pages/editor/types/testScenario.ts"

export interface TestFileInfo {
  name: string
  filename: string
  totalSteps: number
}

export interface TestFileContent {
  name: string
  steps: TestStep[]
}

export const TestScenarioServices = {
  listTests: async (collectionId: string): Promise<TestFileInfo[]> => {
    const response = await axios.get<Response<TestFileInfo[]>>(`/collection/${collectionId}/tests`)
    return response.data.data
  },

  readTest: async (collectionId: string, name: string): Promise<TestFileContent> => {
    const response = await axios.get<Response<TestFileContent>>(`/collection/${collectionId}/tests/${name}`)
    return response.data.data
  },

  writeTest: async (collectionId: string, name: string, payload: TestFileContent): Promise<string> => {
    const response = await axios.put<Response<null>>(`/collection/${collectionId}/tests/${name}`, payload)
    return response.data.message
  },

  deleteTest: async (collectionId: string, name: string): Promise<string> => {
    const response = await axios.delete<Response<null>>(`/collection/${collectionId}/tests/${name}`)
    return response.data.message
  },
}
