import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store/store.ts";
import {type CollectionState, initialState} from "@/app/slices/index.ts";
import type {ItemUrl, Request, RequestBody, RequestURL} from "@/pages/editor/types/api.ts";

const mapParam = (param: ItemUrl, payload: ItemUrl): ItemUrl => {
    return param.key === payload.key ? {
        key: payload.key,
        value: payload.value,
        description: payload.description,
        disabled: payload.disabled,
        type: payload.type,
        src: payload.src,
    } : param
}

type SetMethodPayload = {
    method: string
}

type HeaderPayload = {
    header: ItemUrl
}

type RemoveHeaderPayload = {
    key: string
}

type QueryParamPayload = {
    query: ItemUrl
}

type RemoveQueryParamPayload = {
    key: string
}

type SetBodyPayload = {
    body: string | ItemUrl[]
}

type AddUrlPathPayload = {
    path: string
}

type UpdateUrlPathPayload = {
    index: number
    value: string
}

type RemoveUrlPathPayload = {
    index: number
}

type SetUrlPathPayload = {
    path: string[]
}

type SetUrlRawPayload = {
    raw: string
}

const getSelectedRequest = (state: CollectionState): Request | null => {
    const selectedRequestId = state.selectedRequestId
    if (selectedRequestId) {
        const currentActive = state.activeRequest.find((item) => item.id === selectedRequestId)
        if (currentActive?.request) return currentActive.request
    }

    const currentActive = state.activeRequest[state.activeRequest.length - 1]
    return currentActive?.request ?? null
}

const getCurrentRequestFromState = (state: RootState): Request | null => {
    const selectedRequestId = state.collection?.selectedRequestId
    if (selectedRequestId) {
        return getRequestByIdFromState(state, selectedRequestId)
    }

    const currentActive = state.collection?.activeRequest?.[state.collection.activeRequest.length - 1]
    return currentActive?.request ?? null
}

const getRequestByIdFromState = (state: RootState, id: string): Request | null => {
    const currentActive = state.collection?.activeRequest?.find((item) => item.id === id)
    return currentActive?.request ?? null
}

const getQueryString = (raw: string) => {
    const queryIndex = raw.indexOf("?")
    return queryIndex >= 0 ? raw.slice(queryIndex) : ""
}

const normalizePathSegments = (path: string[]) => path.filter(Boolean)

const parseRawToPath = (raw: string): string[] => {
    if (!raw.trim()) return []

    const rawWithoutQuery = raw.split("?")[0]
    let pathname = rawWithoutQuery

    if (/^https?:\/\//i.test(rawWithoutQuery)) {
        try {
            pathname = new URL(rawWithoutQuery).pathname
        } catch {
            pathname = rawWithoutQuery
        }
    }

    return pathname.split("/").filter(Boolean)
}

const syncRawWithPath = (url: RequestURL) => {
    const queryString = getQueryString(url.raw)
    const nextPath = normalizePathSegments(url.path)
    url.path = nextPath
    url.raw = `${nextPath.length > 0 ? `/${nextPath.join("/")}` : ""}${queryString}`
}

export const setMethodReducer = (state: CollectionState, action: PayloadAction<SetMethodPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.method = action.payload.method
}

export const addHeaderReducer = (state: CollectionState, action: PayloadAction<HeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.header.push(action.payload.header)
}

export const updateHeaderReducer = (state: CollectionState, action: PayloadAction<HeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest?.header) return;

    const hasKey = currentRequest.header.some(header => header.key === action.payload.header.key);
    if (hasKey) {
        currentRequest.header.forEach((item) => {
            if (item.key === action.payload.header.key) {
                return action.payload.header
            }
            return item
        })
        return;
    }

    currentRequest.header.push(action.payload.header)
}

export const removeHeaderReducer = (state: CollectionState, action: PayloadAction<RemoveHeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.header = currentRequest.header.filter((item) => item.key !== action.payload.key)
}

export const addQueryParamReducer = (state: CollectionState, action: PayloadAction<QueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query.push(action.payload.query)
}

export const updateQueryParamReducer = (state: CollectionState, action: PayloadAction<QueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query = currentRequest.url.query.map((param) => mapParam(param, action.payload.query))
}

export const removeQueryParamReducer = (state: CollectionState, action: PayloadAction<RemoveQueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query = currentRequest.url.query.filter((item) => item.key !== action.payload.key)
}

export const setBodyReducer = (state: CollectionState, action: PayloadAction<SetBodyPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    if (!currentRequest.body) {
        currentRequest.body = {mode: "raw"}
    }

    if (typeof action.payload.body === "string") {
        currentRequest.body.mode = "raw"
        currentRequest.body.raw = action.payload.body
        delete currentRequest.body.formdata
        return
    }

    currentRequest.body.mode = "formdata"
    currentRequest.body.formdata = action.payload.body
    delete currentRequest.body.raw
}

export const addUrlPathReducer = (state: CollectionState, action: PayloadAction<AddUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path.push(action.payload.path)
    syncRawWithPath(currentRequest.url)
}

export const updateUrlPathReducer = (
    state: CollectionState,
    action: PayloadAction<UpdateUrlPathPayload>
) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return
    if (action.payload.index < 0 || action.payload.index >= currentRequest.url.path.length) return

    currentRequest.url.path[action.payload.index] = action.payload.value
    syncRawWithPath(currentRequest.url)
}

export const removeUrlPathReducer = (state: CollectionState, action: PayloadAction<RemoveUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path = currentRequest.url.path.filter((_, index) => index !== action.payload.index)
    syncRawWithPath(currentRequest.url)
}

export const setUrlPathReducer = (state: CollectionState, action: PayloadAction<SetUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path = action.payload.path
    syncRawWithPath(currentRequest.url)
}

export const setUrlRawReducer = (state: CollectionState, action: PayloadAction<SetUrlRawPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.raw = action.payload.raw
    currentRequest.url.path = parseRawToPath(action.payload.raw)
}

const requestSlices = createSlice({
    name: "request",
    initialState,
    reducers: {
        setMethod: setMethodReducer,
        addHeader: addHeaderReducer,
        updateHeader: updateHeaderReducer,
        removeHeader: removeHeaderReducer,
        addQueryParam: addQueryParamReducer,
        updateQueryParam: updateQueryParamReducer,
        removeQueryParam: removeQueryParamReducer,
        setBody: setBodyReducer,
        addUrlPath: addUrlPathReducer,
        updateUrlPath: updateUrlPathReducer,
        removeUrlPath: removeUrlPathReducer,
        setUrlPath: setUrlPathReducer,
        setUrlRaw: setUrlRawReducer,
    },
})

export default requestSlices.reducer

export const {
    setMethod,
    addHeader,
    updateHeader,
    removeHeader,
    addQueryParam,
    updateQueryParam,
    removeQueryParam,
    setBody,
    addUrlPath,
    updateUrlPath,
    removeUrlPath,
    setUrlPath,
    setUrlRaw,
} = requestSlices.actions

export const setEndpoint = setUrlRaw
export const setHeader = updateHeader
export const setParams = updateQueryParam

export const selectRequestMethod = (state: RootState): string =>
    getCurrentRequestFromState(state)?.method ?? "GET"

export const selectRequestHeader = (state: RootState): ItemUrl[] =>
    getCurrentRequestFromState(state)?.header ?? []

export const selectRequestBody = (state: RootState): RequestBody | undefined =>
    getCurrentRequestFromState(state)?.body

export const selectRequestUrlPath = (state: RootState): string[] =>
    getCurrentRequestFromState(state)?.url?.path ?? []

export const selectRequestUrlRaw = (state: RootState): string =>
    getCurrentRequestFromState(state)?.url?.raw ?? ""

export const selectRequestUrl = (state: RootState): RequestURL | null =>
    getCurrentRequestFromState(state)?.url ?? null

export const selectHeader = selectRequestHeader
export const selectReqParam = (state: RootState): ItemUrl[] =>
    getCurrentRequestFromState(state)?.url?.query ?? []
