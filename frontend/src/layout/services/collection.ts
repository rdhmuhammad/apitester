import type {DocsContent, GetCollectionResponse} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";
import type {Response} from "@/types/response.ts";

export const CollectionServices = {
    getCollection: async (): Promise<GetCollectionResponse> =>{
        const response = await axios.get<Response<GetCollectionResponse>>('/collection/read')
        return response.data.data
    },
    updateCollection: async (data: DocsContent): Promise<string> => {
        const response = await axios.put<Response<null>>('/collection/update', {content: data})
        return response.data.message
    },

    uploadCollection: async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append("file", file)

        const response = await axios.post<Response<null>>('/collection/upload', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        return response.data.message
    },

}
