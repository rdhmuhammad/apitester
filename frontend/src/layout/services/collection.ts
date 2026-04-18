import type {GetCollectionResponse} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";
import type {Response} from "@/types/response.ts";

export const CollectionServices = {
    getCollection: async (): Promise<GetCollectionResponse> =>{
        const response = await axios.get<Response<GetCollectionResponse>>('/collection/read')
        return response.data.data
    },

}