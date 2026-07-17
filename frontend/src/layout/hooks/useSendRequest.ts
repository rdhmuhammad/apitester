import type {ItemUrl} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";
import type {SendResponse} from "@/types/response.ts";
import type {AxiosResponse} from "axios";

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

type AxiosResponseWithDuration<T = unknown> = AxiosResponse<T> & {
    duration?: number
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

export const buildRawRequest = (request: ISendRequest): string => {
    const allHeaders = [
        {key: 'Content-Type', value: request.contentType},
        ...request.headers,
    ].filter(h => h.value)

    const headerLines = allHeaders
        .map(h => `${h.key}: ${h.value}`)
        .join('\n')

    const queryString = request.requestParams.length > 0
        ? '?' + request.requestParams.map(p => `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value ?? '')}`).join('&')
        : ''

    let host = ''
    try {
        host = new URL(request.baseUrl).host
    } catch {
        host = request.baseUrl
    }

    let bodyStr = ''
    if (request.contentType === 'application/json') {
        bodyStr = request.raw ?? ''
    } else if (request.contentType === 'multipart/form-data' && request.formData) {
        bodyStr = request.formData
            .map(f => `${f.key}: ${f.value}`)
            .join('\n')
    }

    const lines = [
        `${request.method} ${request.baseUrl}${request.endpoint}${queryString} HTTP/1.1`,
        `Host: ${host}`,
        headerLines,
        '',
        bodyStr,
    ]

    return lines.join('\n')
}

export const useSendRequest = async (request: ISendRequest):Promise<SendResponse> => {
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
            ? (request.raw ?? "{}") :
            formData(request.formData ?? []),
        responseType: "json",
    }) as AxiosResponseWithDuration

    return Promise.resolve({
        rawRequest: buildRawRequest(request),
        protocol: "HTTP/1.1",
        responseTime: response.duration ?? 0,
        responseSize: JSON.stringify(response?.data ?? {}).length.toString(),
        statusCode: response?.status ?? 0,
        statusText: response?.statusText ?? 'UNKNOWN',
        data: response?.data ?? {}
    })
}
