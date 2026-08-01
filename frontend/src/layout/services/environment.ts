import axios from "@/config/axios.ts"
import type {Response} from "@/types/response.ts"

export interface EnvironmentEntry {
  name: string
  variables: Record<string, string>
}

export const EnvironmentServices = {
  readEnvironments: async (collectionId: string): Promise<EnvironmentEntry[]> => {
    const response = await axios.get<Response<{environments: EnvironmentEntry[]}>>(`/collection/${collectionId}/environments`)
    return response.data.data.environments
  },

  writeEnvironments: async (collectionId: string, environments: EnvironmentEntry[]): Promise<string> => {
    const response = await axios.put<Response<null>>(`/collection/${collectionId}/environments`, {environments})
    return response.data.message
  },
}
