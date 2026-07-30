import axios from "@/config/axios.ts"
import type {Response} from "@/types/response.ts"

export interface TestFileInfo {
  name: string
  filename: string
}

export const TestScenarioServices = {
  listTests: async (collectionId: string): Promise<TestFileInfo[]> => {
    const response = await axios.get<Response<TestFileInfo[]>>(`/collection/${collectionId}/tests`)
    return response.data.data
  },

  readTest: async (collectionId: string, name: string): Promise<string> => {
    const response = await axios.get<Response<string>>(`/collection/${collectionId}/tests/${name}`)
    return response.data.data
  },

  writeTest: async (collectionId: string, name: string, content: string): Promise<string> => {
    const response = await axios.put<Response<null>>(`/collection/${collectionId}/tests/${name}`, content, {
      headers: {"Content-Type": "application/json"}
    })
    return response.data.message
  },

  deleteTest: async (collectionId: string, name: string): Promise<string> => {
    const response = await axios.delete<Response<null>>(`/collection/${collectionId}/tests/${name}`)
    return response.data.message
  },
}
