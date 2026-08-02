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
    getCollection: async (id: string): Promise<GetCollectionResponse> => {
        const response = await axios.get<Response<GetCollectionResponse>>(`/collection/read/${id}`)
        return response.data.data
    },

    listCollections: async (): Promise<Collection[]> => {
        const response = await axios.get<Response<Collection[]>>('/collection/list')
        return response.data.data
    },

    selectCollection: async (id: string): Promise<Collection> => {
        const response = await axios.put<Response<Collection>>(`/collection/select/${id}`)
        return response.data.data
    },

    getActiveCollection: async (): Promise<Collection> => {
        const response = await axios.get<Response<Collection>>('/collection/get-active')
        return response.data.data
    },

    writeCollection: async (id: string, content: string): Promise<string> => {
        const response = await axios.put<Response<null>>(`/collection/write/${id}`, content, {
            headers: {"Content-Type": "application/json"}
        })
        return response.data.message
    },
}
