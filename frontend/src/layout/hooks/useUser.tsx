import {useQuery} from "@tanstack/react-query";
import {UserServices} from "@/layout/services/user.ts";

export const useUserRead = () => {
    return useQuery({
        queryKey: ["current-user"],
        queryFn: () => UserServices.getCurrentUser(),
        staleTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
