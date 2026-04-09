import type {GetCollectionResponse} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";

export const CollectionServices = {
    getCollection: async (): Promise<GetCollectionResponse> =>{
        const response = await axios.get<GetCollectionResponse>('/collection/read')
        return response.data
    },

}