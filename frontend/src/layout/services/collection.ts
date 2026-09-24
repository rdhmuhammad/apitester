import type {GetCollectionResponse} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";
import type {Response} from "@/types/response.ts";

export interface Collection {
    id: string
    name: string
    is_selected: boolean
    path: string
    updated_at: string
    created_at: string
}

export const CollectionServices = {
    getCollection: async (): Promise<GetCollectionResponse> => {
        const response = await axios.get<Response<GetCollectionResponse>>('/collection/read')
        return response.data.data
    },

    writeCollection: async (content: string): Promise<string> => {
        const response = await axios.put<Response<null>>('/collection/write', content, {
            headers: {"Content-Type": "application/json"}
        })
        return response.data.message
    },
}
