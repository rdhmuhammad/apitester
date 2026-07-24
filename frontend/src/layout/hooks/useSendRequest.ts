import type {ItemUrl} from "@/pages/editor/types/api.ts";
import axios from "@/config/axios.ts";
import type {SendResponse} from "@/types/response.ts";
import type {AxiosResponse} from "axios";
import {getFile} from "@/lib/fileStore.ts";

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
        if (item.type === "file" && item.id) {
            const file = getFile(item.id)
            if (file) {
                dt.append(item.key, file)
                continue
            }
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

const blobToDataUrl = (blob: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    })

export const useSendRequest = async (request: ISendRequest):Promise<SendResponse> => {
    const isFormData = request.contentType === "multipart/form-data"
    const response = await axios.request({
        method: request.method,
        headers: {
            ...(isFormData ? {} : {"Content-Type": request.contentType}),
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
        responseType: "blob",
    }) as AxiosResponseWithDuration<Blob>

    const contentType = (response.headers["content-type"] as string)?.toLowerCase() ?? ""
    const isJson = contentType.includes("application/json") || contentType.includes("text/")
    const isBinary = !!contentType && !isJson

    let data: any
    let responseSize: string

    if (isBinary) {
        const blob = response.data as Blob
        data = await blobToDataUrl(blob)
        responseSize = (blob.size / 1024).toFixed(2)
    } else {
        const text = await (response.data as Blob).text()
        try {
            data = JSON.parse(text)
        } catch {
            data = text
        }
        responseSize = (new Blob([text]).size / 1024).toFixed(2)
    }

    return {
        rawRequest: buildRawRequest(request),
        protocol: "HTTP/1.1",
        responseTime: response.duration ?? 0,
        responseSize,
        statusCode: response?.status ?? 0,
        statusText: response?.statusText ?? 'UNKNOWN',
        data,
        contentType,
        isBinary,
    }
}
