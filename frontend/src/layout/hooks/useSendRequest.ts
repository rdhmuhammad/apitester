import type {ItemUrl} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";

export interface ISendRequest {
    baseUrl: string
    endpoint: string
    method: string
    headers: ItemUrl[]
    requestParams: ItemUrl[]
    contentType: string
    raw?: string
    formData?: ItemUrl[]
}

const formData = (request: ItemUrl[]): FormData => {
    const dt = new FormData()
    for (const item of request) {
        if (item.key === "file") {
            //TODO: handle multipart
            // if (item.src instanceof File || item.src instanceof Blob){
            //     formData.append(item.key, item.src)
            // }
        }
        dt.append(item.key, item.value ?? "")
    }
    return dt
}

export const useSendRequest = async (request: ISendRequest) => {
    const response = await axios.request({
        method: request.method,
        headers: {
            "Content-Type": request.contentType,
            ...request.headers.reduce((acc, it) => {
                acc[it.key] = it.value ?? ""
                return acc
            }, {} as Record<string, string>)
        },
        baseURL: request.baseUrl,
        url: request.endpoint,
        params: request.requestParams.reduce((acc, it) => {
            acc[it.key] = it.value ?? ""
            return acc
        }, {} as Record<string, string>),
        data: request.contentType === "application/json"
            ? request.raw ?? "" :
            formData(request.formData ?? []),
        responseType: "json",
    })

    console.log(response.data)
}