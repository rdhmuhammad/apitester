import {useQuery} from "@tanstack/react-query";
import {CollectionServices} from "@/layout/services/collection.ts";

export const useCollectionRead = ()=>{
    return useQuery({
        queryKey: ['collections'],
        queryFn: ()=> CollectionServices.getCollection(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}