import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store/store.ts";
import {type CollectionState, initialState} from "@/app/slices/index.ts";
import type {ItemUrl, Request, RequestBody, RequestURL} from "@/pages/editor/types/api.ts";
import {
    mergeQueryParams,
    parseQueryParams,
    parseRawToPath,
    replaceRawQuery,
    syncPathVariables,
} from "@/lib/urlUtils.ts";

const mapParam = (param: ItemUrl, payload: ItemUrl): ItemUrl => {
    return param.id === payload.id ? {
        id: payload.id,
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
    id?: string
}

type HeaderPayload = {
    header: ItemUrl
}

type RemoveHeaderPayload = {
    id: string
}

type QueryParamPayload = {
    query: ItemUrl
}

type RemoveQueryParamPayload = {
    id: string
}

type SetBodyPayload = {
    body: string | ItemUrl[]
}

type SetBodyModePayload = {
    mode: "raw" | "formdata"
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

type PathVariablePayload = {
    key: string
    value: string
}

const getSelectedRequest = (state: CollectionState): Request | null => {
    const activeTabId = state.activeTabId
    const currentActive = activeTabId
        ? state.openRequestTabs.find((item) => item.id === activeTabId)
        : state.openRequestTabs[state.openRequestTabs.length - 1]

    if (!currentActive) return null

    if (currentActive.activeExampleId && currentActive.exampleResponse) {
        const example = currentActive.exampleResponse.find(ex => ex.id === currentActive.activeExampleId)
        if (example) {
            const orig: Request = example.originalRequest ?? (currentActive.request
                ? JSON.parse(JSON.stringify(currentActive.request))
                : { method: 'GET', header: [], url: { raw: '', host: [''], path: [''], query: [] } })
            example.originalRequest = orig
            return orig
        }
    }

    return currentActive.request ?? null
}

const getCurrentRequestFromState = (state: RootState): Request | null => {
    const activeTabId = state.collection?.activeTabId
    if (activeTabId) {
        return getRequestByIdFromState(state, activeTabId)
    }

    const currentActive = state.collection?.openRequestTabs?.[state.collection.openRequestTabs.length - 1]
    if (!currentActive) return null

    if (currentActive.activeExampleId && currentActive.exampleResponse) {
        const example = currentActive.exampleResponse.find(ex => ex.id === currentActive.activeExampleId)
        if (example?.originalRequest) {
            return example.originalRequest
        }
        if (example) {
            return currentActive.request ?? null
        }
    }

    return currentActive?.request ?? null
}

const getRequestByIdFromState = (state: RootState, id: string): Request | null => {
    const currentActive = state.collection?.openRequestTabs?.find((item) => item.id === id)
    if (!currentActive) return null

    if (currentActive.activeExampleId && currentActive.exampleResponse) {
        const example = currentActive.exampleResponse.find(ex => ex.id === currentActive.activeExampleId)
        if (example?.originalRequest) {
            return example.originalRequest
        }
        if (example) {
            return currentActive.request ?? null
        }
    }

    return currentActive.request ?? null
}

const getQueryString = (raw: string) => {
    const queryIndex = raw.indexOf("?")
    return queryIndex >= 0 ? raw.slice(queryIndex) : ""
}

const normalizePathSegments = (path: string[]) => path.filter(Boolean)

const syncRawWithPath = (url: RequestURL) => {
    const queryString = getQueryString(url.raw)
    const nextPath = normalizePathSegments(url.path)
    url.path = nextPath
    url.raw = `${nextPath.length > 0 ? `/${nextPath.join("/")}` : ""}${queryString}`
    url.variable = syncPathVariables(url.raw, url.variable)
}

// Params table -> endpoint: the query part of `raw` always mirrors the enabled params.
const syncRawWithQuery = (url: RequestURL) => {
    url.raw = replaceRawQuery(url.raw ?? "", url.query ?? [])
}

const markDirty = (state: CollectionState) => {
    const id = state.activeTabId || state.openRequestTabs[state.openRequestTabs.length - 1]?.id
    if (id && !state.dirtyRequestIds.includes(id)) {
        state.dirtyRequestIds.push(id)
    }
}

export const setMethodReducer = (state: CollectionState, action: PayloadAction<SetMethodPayload>) => {
    const targetId = action.payload.id || state.activeTabId || state.openRequestTabs[state.openRequestTabs.length - 1]?.id
    const currentActive = targetId ? state.openRequestTabs.find((item) => item.id === targetId) : null

    if (currentActive) {
        if (currentActive.activeExampleId && currentActive.exampleResponse) {
            const example = currentActive.exampleResponse.find(ex => ex.id === currentActive.activeExampleId)
            if (example) {
                const orig: Request = example.originalRequest ?? (currentActive.request
                    ? JSON.parse(JSON.stringify(currentActive.request))
                    : { method: action.payload.method, header: [], url: { raw: '', host: [''], path: [''], query: [] } })
                orig.method = action.payload.method
                example.originalRequest = orig
                if (targetId && !state.dirtyRequestIds.includes(targetId)) {
                    state.dirtyRequestIds.push(targetId)
                }
                return
            }
        }

        if (!currentActive.request) {
            currentActive.request = {
                method: action.payload.method,
                header: [],
                url: { raw: '', host: [''], path: [''], query: [] }
            }
        } else {
            currentActive.request.method = action.payload.method
        }
        if (targetId && !state.dirtyRequestIds.includes(targetId)) {
            state.dirtyRequestIds.push(targetId)
        }
        return
    }

    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.method = action.payload.method
    markDirty(state)
}

export const addHeaderReducer = (state: CollectionState, action: PayloadAction<HeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.header = currentRequest.header ?? []
    currentRequest.header.push(action.payload.header)
    markDirty(state)
}

export const updateHeaderReducer = (state: CollectionState, action: PayloadAction<HeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return;

    if (!currentRequest.header) currentRequest.header = []

    const hasKey = currentRequest.header.some(header => header.id === action.payload.header.id);
    if (hasKey) {
        currentRequest.header = currentRequest.header.map((item) =>
            item.id === action.payload.header.id ? action.payload.header : item
        )
    } else {
        currentRequest.header.push(action.payload.header)
    }
    markDirty(state)
}

export const removeHeaderReducer = (state: CollectionState, action: PayloadAction<RemoveHeaderPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.header = (currentRequest.header ?? []).filter((item) => item.id !== action.payload.id)
    markDirty(state)
}

export const addQueryParamReducer = (state: CollectionState, action: PayloadAction<QueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query = currentRequest.url.query ?? []
    currentRequest.url.query.push(action.payload.query)
    syncRawWithQuery(currentRequest.url)
    markDirty(state)
}

export const updateQueryParamReducer = (state: CollectionState, action: PayloadAction<QueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query = (currentRequest.url.query ?? []).map((param) => mapParam(param, action.payload.query))
    syncRawWithQuery(currentRequest.url)
    markDirty(state)
}

export const removeQueryParamReducer = (state: CollectionState, action: PayloadAction<RemoveQueryParamPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.query = (currentRequest.url.query ?? []).filter((item) => item.id !== action.payload.id)
    syncRawWithQuery(currentRequest.url)
    markDirty(state)
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
    } else {
        currentRequest.body.mode = "formdata"
        currentRequest.body.formdata = action.payload.body
    }
    markDirty(state)
}

export const setBodyModeReducer = (state: CollectionState, action: PayloadAction<SetBodyModePayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    if (!currentRequest.body) {
        currentRequest.body = {
            mode: action.payload.mode,
            raw: "",
            formdata: [],
        }
    } else {
        currentRequest.body.mode = action.payload.mode
        if (action.payload.mode === "formdata" && !currentRequest.body.formdata) {
            currentRequest.body.formdata = []
        }
        if (action.payload.mode === "raw" && currentRequest.body.raw === undefined) {
            currentRequest.body.raw = ""
        }
    }
    markDirty(state)
}

export const addUrlPathReducer = (state: CollectionState, action: PayloadAction<AddUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path.push(action.payload.path)
    syncRawWithPath(currentRequest.url)
    markDirty(state)
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
    markDirty(state)
}

export const removeUrlPathReducer = (state: CollectionState, action: PayloadAction<RemoveUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path = currentRequest.url.path.filter((_, index) => index !== action.payload.index)
    syncRawWithPath(currentRequest.url)
    markDirty(state)
}

export const setUrlPathReducer = (state: CollectionState, action: PayloadAction<SetUrlPathPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    currentRequest.url.path = action.payload.path
    syncRawWithPath(currentRequest.url)
    markDirty(state)
}

// Endpoint -> params table: `raw` is stored as typed, query rows and path variables are derived from it.
export const setUrlRawReducer = (state: CollectionState, action: PayloadAction<SetUrlRawPayload>) => {
    const currentRequest = getSelectedRequest(state)
    if (!currentRequest) return

    const {raw} = action.payload
    currentRequest.url.raw = raw
    currentRequest.url.path = parseRawToPath(raw)
    currentRequest.url.query = mergeQueryParams(currentRequest.url.query ?? [], parseQueryParams(raw))
    currentRequest.url.variable = syncPathVariables(raw, currentRequest.url.variable)
    markDirty(state)
}

export const updatePathVariableReducer = (state: CollectionState, action: PayloadAction<PathVariablePayload>) => {
    const currentRequest = getSelectedRequest(state)
    const variable = currentRequest?.url.variable?.find((item) => item.key === action.payload.key)
    if (!variable) return

    variable.value = action.payload.value
    markDirty(state)
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
        setBodyMode: setBodyModeReducer,
        addUrlPath: addUrlPathReducer,
        updateUrlPath: updateUrlPathReducer,
        removeUrlPath: removeUrlPathReducer,
        setUrlPath: setUrlPathReducer,
        setUrlRaw: setUrlRawReducer,
        updatePathVariable: updatePathVariableReducer,
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
    setBodyMode,
    addUrlPath,
    updateUrlPath,
    removeUrlPath,
    setUrlPath,
    setUrlRaw,
    updatePathVariable,
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

const NO_PATH_VARIABLES: ItemUrl[] = []
export const selectPathVariables = (state: RootState): ItemUrl[] =>
    getCurrentRequestFromState(state)?.url?.variable ?? NO_PATH_VARIABLES
