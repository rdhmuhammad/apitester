import type {CollectionAuth, CollectionInfo, CollectionItem, CollectionResponse, CollectionVar, DocsContent, ItemUrl} from "@/pages/editor/types/api.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store/store.ts";
import {isArrayEmpty} from "@/lib/utils.ts";
import type {ScriptLog, SendResponse} from "@/types/response.ts";
import {
    type ActiveItem,
    type ColtCat,
    type ColtReqMethod,
    type DirTree,
    fetchCollections,
    initialState, type ScriptResultDto, type ScriptMutationDto
} from "@/app/slices/index.ts";
import {
    addHeader,
    addHeaderReducer,
    addQueryParam,
    addQueryParamReducer,
    addUrlPath,
    addUrlPathReducer,
    removeHeader,
    removeHeaderReducer,
    removeQueryParam,
    removeQueryParamReducer,
    removeUrlPath,
    removeUrlPathReducer,
    setBody,
    setBodyReducer,
    setMethod,
    setMethodReducer,
    setUrlPath,
    setUrlPathReducer,
    setUrlRaw,
    setUrlRawReducer,
    updateHeader,
    updateHeaderReducer,
    updateQueryParam,
    updateQueryParamReducer,
    updateUrlPath,
    updateUrlPathReducer,
} from "@/app/slices/requestSlices.ts";

const DEFAULT_BASE_URL_VALUE = "__CURRENT_ORIGIN__"

const collectionSlices = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        addActiveRequest(state, action: PayloadAction<{ id: string }>) {
            if (!state.data?.item) return
            const selected = diveActiveRequest(action.payload.id, state.data.item)
            if (!selected?.request) return

            state.openRequestTabs = state.openRequestTabs.filter((item) => item.id !== action.payload.id)
            state.openRequestTabs.push({
                id: action.payload.id,
                request: selected.request,
                response: null,
                exampleResponse: selected.response,
            })
            state.activeTabId = action.payload.id
        },
        removeActiveRequest(state, action: PayloadAction<{ id: string }>) {
            state.openRequestTabs = state.openRequestTabs.filter(item => item.id !== action.payload.id)
            if (state.activeTabId === action.payload.id) {
                state.activeTabId = state.openRequestTabs[state.openRequestTabs.length - 1]?.id ?? ''
            }
        },
        setActiveTabId(state, action: PayloadAction<{ id: string }>) {
            state.activeTabId = action.payload.id
        },
        setCurrentRequest(state, action: PayloadAction<CollectionItem>) {
            const currentIndex = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (currentIndex < 0) {
                state.openRequestTabs.push({
                    id: action.payload.id,
                    request: action.payload.request ?? null,
                    response: null,
                    exampleResponse: action.payload.response,
                })
                if (!state.activeTabId) {
                    state.activeTabId = action.payload.id
                }
                return
            }

            state.openRequestTabs[currentIndex].request = action.payload.request ?? null
            if (action.payload.response) {
                state.openRequestTabs[currentIndex].exampleResponse = action.payload.response
            }
        },
        setCurrentResponse(state, action: PayloadAction<{ id: string; response: SendResponse | null }>) {
            const currentIndex = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (currentIndex < 0) return

            state.openRequestTabs[currentIndex].response = action.payload.response
        },
        setActiveRequestScript(state, action: PayloadAction<{ script: string }>) {
            if (!state.data?.item || !state.activeTabId) return

            const selected = diveActiveRequest(state.activeTabId, state.data.item)
            if (!selected) return

            if (!selected.event?.length) {
                selected.event = [{
                    listen: 'test',
                    script: {
                        exec: action.payload.script.split('\n'),
                        type: 'text/javascript'
                    }
                }]
                return
            }

            selected.event[0] = {
                ...selected.event[0],
                script: {
                    ...selected.event[0].script,
                    exec: action.payload.script.split('\n'),
                    type: selected.event[0].script?.type ?? 'text/javascript'
                }
            }
        },
        setCollectionScript(state, action: PayloadAction<{ script: string }>) {
            if (!state.data) return
            const prereq = state.data.event?.find(e => e.listen === 'prerequest')
            if (prereq) {
                prereq.script = { exec: action.payload.script.split('\n'), type: 'text/javascript' }
            } else {
                if (!state.data.event) state.data.event = []
                state.data.event.push({
                    listen: 'prerequest',
                    script: { exec: action.payload.script.split('\n'), type: 'text/javascript' }
                })
            }
        },
        setCollectionInfo(state, action: PayloadAction<CollectionInfo>) {
            if (!state.data) return

            state.data.info = action.payload
        },
        setCollectionAuth(state, action: PayloadAction<CollectionAuth | undefined>) {
            if (!state.data) return

            state.data.auth = action.payload
        },
        addVariable(state, action: PayloadAction<CollectionVar>) {
            state.variable.push(action.payload)
            syncCollectionVariables(state)
        },
        removeVariable(state, action: PayloadAction<{ id: string }>) {
            state.variable = state.variable.filter((item) => item.id !== action.payload.id)
            syncCollectionVariables(state)
        },
        updateVariable(state, action: PayloadAction<CollectionVar>) {
            state.variable = state.variable.map((v) =>
                v.id === action.payload.id ? action.payload : v
            )
            syncCollectionVariables(state)
        },
        setVariables(state, action: PayloadAction<CollectionVar[]>) {
            state.variable = action.payload
            syncCollectionVariables(state)
        },
        addBaseUrl(state, action: PayloadAction<CollectionVar>) {
            state.baseUrl.push(action.payload)
            syncCollectionVariables(state)
        },
        removeBaseUrl(state, action: PayloadAction<{ id: string }>) {
            state.baseUrl = state.baseUrl.filter((item) => item.id !== action.payload.id)
            syncCollectionVariables(state)
        },
        setActiveTree(state, action: PayloadAction<{id: string, status: boolean}>){
            diveActiveTree(action.payload.id, action.payload.status, state.dirTree)
        },
        clearDirtyRequestIds(state) {
            state.dirtyRequestIds = []
        },
        saveActiveToData(state) {
            if (!state.data?.item) return

            for (const active of state.openRequestTabs) {
                if (!active.request) continue

                const target = diveActiveRequest(active.id, state.data.item)
                if (!target) continue

                target.request = active.request
                if (active.exampleResponse) {
                    target.response = active.exampleResponse
                }
            }

            state.dirtyRequestIds = []
        },
        setAuthType(state, action: PayloadAction<{ authType: "none" | "inherit" | "bearer" }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, state.activeTabId)
            if (idx < 0) return
            state.openRequestTabs[idx].authType = action.payload.authType
        },
        setScriptResult(state, action: PayloadAction<{
            id: string;
            result: ScriptResultDto[];
            logs: ScriptLog[];
            mutations: ScriptMutationDto[] | Record<string, string | null>
            }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return
            state.openRequestTabs[idx].scriptResult = action.payload.result
            state.openRequestTabs[idx].scriptLogs = action.payload.logs
            state.openRequestTabs[idx].scriptMutations = action.payload.mutations

        },
        saveExampleResponse(state, action: PayloadAction<{ id: string; name: string }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return

            const active = state.openRequestTabs[idx]
            if (!active.response || !active.request) return

            const example: CollectionResponse = {
                id: crypto.randomUUID(),
                name: action.payload.name,
                status: active.response.statusText,
                code: active.response.statusCode,
                header: active.request.header.map(h => ({ key: h.key, value: h.value, id: h.id })),
                cookie: [],
                body: JSON.stringify(active.response.data),
                originalRequest: active.request,
            }

            active.exampleResponse = [...(active.exampleResponse ?? []), example]
            if (!state.dirtyRequestIds.includes(action.payload.id)) {
                state.dirtyRequestIds.push(action.payload.id)
            }
        },
        addExampleResponse(state, action: PayloadAction<{ id?: string; name?: string } | undefined>) {
            const targetId = action.payload?.id ?? state.activeTabId
            const idx = targetId
                ? findCurrentActiveRequestIndex(state.openRequestTabs, targetId)
                : (state.openRequestTabs.length - 1)
            if (idx < 0 || !state.openRequestTabs[idx]) return

            const active = state.openRequestTabs[idx]

            // Only clone from current active request of the tab
            const clonedRequest = active.request
                ? JSON.parse(JSON.stringify(active.request))
                : { method: "GET", header: [], url: { raw: "", host: [""], path: [""], query: [] } }

            const newId = crypto.randomUUID()
            const count = (active.exampleResponse?.length ?? 0) + 1
            const exampleName = action?.payload?.name?.trim() || `Example ${count}`

            const newExample: CollectionResponse = {
                id: newId,
                name: exampleName,
                status: "OK",
                code: 200,
                header: [],
                cookie: [],
                body: "",
                originalRequest: clonedRequest,
            }

            active.exampleResponse = [...(active.exampleResponse ?? []), newExample]
            active.activeExampleId = newId

            if (!state.dirtyRequestIds.includes(active.id)) {
                state.dirtyRequestIds.push(active.id)
            }
        },
        removeExampleResponse(state, action: PayloadAction<{ id?: string; exampleId?: string; requestId?: string; index?: number } | string>) {
            const exampleId = typeof action.payload === 'string'
                ? action.payload
                : (action.payload.id ?? action.payload.exampleId ?? '')
            const index = typeof action.payload === 'object' ? action.payload.index : undefined
            const requestId = typeof action.payload === 'object' ? action.payload.requestId : undefined

            if (!exampleId && index === undefined) return

            for (const tab of state.openRequestTabs) {
                if (requestId && tab.id !== requestId) continue

                if (exampleId && tab.exampleResponse?.some(ex => ex.id === exampleId)) {
                    tab.exampleResponse = tab.exampleResponse.filter(ex => ex.id !== exampleId)
                    if (tab.activeExampleId === exampleId) {
                        tab.activeExampleId = null
                    }
                    if (!state.dirtyRequestIds.includes(tab.id)) {
                        state.dirtyRequestIds.push(tab.id)
                    }
                } else if (!exampleId && index !== undefined && tab.exampleResponse && tab.exampleResponse[index]) {
                    const removed = tab.exampleResponse[index]
                    tab.exampleResponse = tab.exampleResponse.filter((_, idx) => idx !== index)
                    if (removed?.id && tab.activeExampleId === removed.id) {
                        tab.activeExampleId = null
                    }
                    if (!state.dirtyRequestIds.includes(tab.id)) {
                        state.dirtyRequestIds.push(tab.id)
                    }
                }
            }

            const removeExampleFromTree = (items: CollectionItem[]) => {
                for (const it of items) {
                    if (requestId && it.id !== requestId && !it.item) continue
                    if (exampleId && it.response?.some(ex => ex.id === exampleId)) {
                        it.response = it.response.filter(ex => ex.id !== exampleId)
                        if (!state.dirtyRequestIds.includes(it.id)) {
                            state.dirtyRequestIds.push(it.id)
                        }
                    } else if (!exampleId && index !== undefined && (!requestId || it.id === requestId) && it.response && it.response[index]) {
                        it.response = it.response.filter((_, idx) => idx !== index)
                        if (!state.dirtyRequestIds.includes(it.id)) {
                            state.dirtyRequestIds.push(it.id)
                        }
                    }
                    if (it.item) {
                        removeExampleFromTree(it.item)
                    }
                }
            }
            if (state.data?.item) {
                removeExampleFromTree(state.data.item)
            }
        },
        setActiveExampleId(state, action: PayloadAction<{ id?: string; exampleId: string | null }>) {
            const targetId = action.payload.id || state.activeTabId
            const tab = state.openRequestTabs.find(t => t.id === targetId)
            if (!tab) return

            tab.activeExampleId = action.payload.exampleId

            if (action.payload.exampleId && tab.exampleResponse) {
                const example = tab.exampleResponse.find(ex => ex.id === action.payload.exampleId)
                if (example && !example.originalRequest) {
                    example.originalRequest = tab.request
                        ? JSON.parse(JSON.stringify(tab.request))
                        : { method: "GET", header: [], url: { raw: "", host: [""], path: [""], query: [] } }
                }
            }
        },
        updateExampleResponseBody(state, action: PayloadAction<{ id?: string; exampleId?: string; body: string }>) {
            const targetId = action.payload.id || state.activeTabId
            const tab = state.openRequestTabs.find(t => t.id === targetId)
            const exampleId = action.payload.exampleId || tab?.activeExampleId
            if (!tab || !exampleId) return

            const example = tab.exampleResponse?.find(ex => ex.id === exampleId)
            if (example) {
                example.body = action.payload.body
                if (!state.dirtyRequestIds.includes(tab.id)) {
                    state.dirtyRequestIds.push(tab.id)
                }
            }
        },
        updateExampleResponseStatus(state, action: PayloadAction<{ id?: string; exampleId?: string; code: number; status: string }>) {
            const targetId = action.payload.id || state.activeTabId
            const tab = state.openRequestTabs.find(t => t.id === targetId)
            const exampleId = action.payload.exampleId || tab?.activeExampleId
            if (!tab || !exampleId) return

            const example = tab.exampleResponse?.find(ex => ex.id === exampleId)
            if (example) {
                example.code = action.payload.code
                example.status = action.payload.status
                if (!state.dirtyRequestIds.includes(tab.id)) {
                    state.dirtyRequestIds.push(tab.id)
                }
            }
        },
        renameExampleResponse(state, action: PayloadAction<{ id?: string; exampleId?: string; name: string }>) {
            const targetId = action.payload.id || state.activeTabId
            const tab = state.openRequestTabs.find(t => t.id === targetId)
            const exampleId = action.payload.exampleId || tab?.activeExampleId
            if (!tab || !exampleId) return

            const example = tab.exampleResponse?.find(ex => ex.id === exampleId)
            if (example) {
                example.name = action.payload.name
                if (!state.dirtyRequestIds.includes(tab.id)) {
                    state.dirtyRequestIds.push(tab.id)
                }
            }
        },
        updateExampleResponseHeader(state, action: PayloadAction<{ id?: string; exampleId?: string; header: ItemUrl[] }>) {
            const targetId = action.payload.id || state.activeTabId
            const tab = state.openRequestTabs.find(t => t.id === targetId)
            const exampleId = action.payload.exampleId || tab?.activeExampleId
            if (!tab || !exampleId) return

            const example = tab.exampleResponse?.find(ex => ex.id === exampleId)
            if (example) {
                example.header = action.payload.header
                if (!state.dirtyRequestIds.includes(tab.id)) {
                    state.dirtyRequestIds.push(tab.id)
                }
            }
        },
        createNewRequest(state) {
            if (!state.data?.item) return

            const id = crypto.randomUUID()
            const newItem: CollectionItem = {
                id,
                name: 'New Request',
                request: {
                    method: 'GET',
                    header: [],
                    url: { raw: '', host: [''], path: [''], query: [] },
                },
            }

            state.data.item.push(newItem)

            state.dirTree.set(id, {
                id,
                name: 'New Request',
                isActive: false,
                category: 'REQ',
                method: 'GET',
            })

            state.openRequestTabs.push({
                id,
                request: newItem.request!,
                response: null,
            })

            state.activeTabId = id
            state.dirtyRequestIds.push(id)
        },
        deleteRequest(state, action: PayloadAction<{ id: string }>) {
            if (!state.data?.item) return

            removeCollectionItem(state.data.item, action.payload.id)
            removeDirTreeNode(state.dirTree, action.payload.id)

            state.openRequestTabs = state.openRequestTabs.filter(item => item.id !== action.payload.id)
            state.dirtyRequestIds = state.dirtyRequestIds.filter(id => id !== action.payload.id)

            if (state.activeTabId === action.payload.id) {
                state.activeTabId = state.openRequestTabs[state.openRequestTabs.length - 1]?.id ?? ''
            }
        },
        deleteFolder(state, action: PayloadAction<{ id: string }>) {
            if (!state.data?.item) return

            const targetNode = findDirTreeNode(state.dirTree, action.payload.id)
            const descendantIds = targetNode ? collectDescendantIds(targetNode) : []

            removeCollectionItem(state.data.item, action.payload.id)
            removeDirTreeNode(state.dirTree, action.payload.id)

            state.openRequestTabs = state.openRequestTabs.filter(item => !descendantIds.includes(item.id))
            state.dirtyRequestIds = state.dirtyRequestIds.filter(id => !descendantIds.includes(id))

            if (descendantIds.includes(state.activeTabId)) {
                state.activeTabId = state.openRequestTabs[state.openRequestTabs.length - 1]?.id ?? ''
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCollections.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(fetchCollections.fulfilled, (state, action) => {
            state.openRequestTabs = []
            state.activeTabId = ''
            let docsContent = action.payload.content;
            if (docsContent) {
                state.data = docsContent
                state.cachedRequest = flattenCollections(docsContent.item)
                state.dirTree = diveCollection(docsContent.item)
                const reduced = docsContent?.variable?.reduce((acc, item)=>{
                    if (isBaseUrlVariable(item)){
                        acc.baseUrl.push(item)
                    }else {
                        acc.variable.push(item)
                    }
                    return acc
                }, {
                    baseUrl: [] as CollectionVar[],
                    variable: [] as CollectionVar[]
                });
                state.baseUrl = reduced?.baseUrl ?? [{
                    id: 'base_url',
                    key: 'base_url',
                    value: DEFAULT_BASE_URL_VALUE,
                    category: 'BASE_URL',
                    type: 'string'
                }]
                state.variable = reduced?.variable ?? []
            }
            state.dirtyRequestIds = []
            state.status = 'succeeded'
        })
        builder.addCase(fetchCollections.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(setMethod, setMethodReducer)
        builder.addCase(addHeader, addHeaderReducer)
        builder.addCase(updateHeader, updateHeaderReducer)
        builder.addCase(removeHeader, removeHeaderReducer)
        builder.addCase(addQueryParam, addQueryParamReducer)
        builder.addCase(updateQueryParam, updateQueryParamReducer)
        builder.addCase(removeQueryParam, removeQueryParamReducer)
        builder.addCase(setBody, setBodyReducer)
        builder.addCase(addUrlPath, addUrlPathReducer)
        builder.addCase(updateUrlPath, updateUrlPathReducer)
        builder.addCase(removeUrlPath, removeUrlPathReducer)
        builder.addCase(setUrlPath, setUrlPathReducer)
        builder.addCase(setUrlRaw, setUrlRawReducer)
    }
})

export default collectionSlices.reducer

export const {
    addActiveRequest,
    removeActiveRequest,
    setActiveTabId,
    setActiveTree,
    setCurrentRequest,
    setCurrentResponse,
    setActiveRequestScript,
    setCollectionScript,
    setCollectionInfo,
    setCollectionAuth,
    addVariable,
    removeVariable,
    updateVariable,
    setVariables,
    addBaseUrl,
    removeBaseUrl,
    clearDirtyRequestIds,
    saveActiveToData,
    setAuthType,
    setScriptResult,
    saveExampleResponse,
    addExampleResponse,
    removeExampleResponse,
    setActiveExampleId,
    updateExampleResponseBody,
    updateExampleResponseStatus,
    renameExampleResponse,
    updateExampleResponseHeader,
    createNewRequest,
    deleteRequest,
    deleteFolder,
} = collectionSlices.actions

export const deleteExampleResponse = removeExampleResponse

export const setActiveRequest = addActiveRequest
export type {ColtReqMethod, DirTree} from "@/app/slices/index.ts"

// SELECTOR
export const selectVariable = (state: RootState): CollectionVar[] => state.collection?.variable ?? []

export const selectAuth = (state: RootState): CollectionAuth  => state.collection?.data?.auth ?? {type: 'string'}

export const selectCollectionInfo = (state: RootState): CollectionInfo | null =>
    state.collection?.data?.info ?? null

export const selectCollectionData = (state: RootState): DocsContent | null =>
    state.collection?.data ?? null

export const selectBaseUrl = (state: RootState): CollectionVar[] => state.collection?.baseUrl ?? []

export const selectBaseUrlValues = (state: RootState): string[] =>
    selectBaseUrl(state).map((item) => resolveBaseUrlValue(item.value)).filter(Boolean)

export const selectActiveTabId = (state: RootState): string =>
    state.collection?.activeTabId ?? ''

export const selectActiveRequestTab = (state: RootState): ActiveItem | null => {
    return getActiveRequestById(state, state.collection?.activeTabId)
}

export const selectActiveRequestScript = (state: RootState): string => {
    const selectedRequest = selectRequest(state)
    const exec = selectedRequest?.event?.[0]?.script?.exec ?? []
    return exec.join('\n')
}

export const selectCollectionScript = (state: RootState): string => {
    const prereq = state.collection?.data?.event?.find(e => e.listen === 'prerequest')
    return prereq?.script?.exec?.join('\n') ?? ''
}

export const selectOpenRequestTabs = (state: RootState): ActiveItem[] => state.collection?.openRequestTabs ?? []

export const selectRequest = (state: RootState): CollectionItem | null => {
    const current = getCurrentActiveRequest(state)
    if (!current) return null
    return buildSelectedRequest(state, current)
}

export const selectRequestById = (state: RootState, id: string): CollectionItem | null => {
    const current = getActiveRequestById(state, id)
    if (!current) return null
    return buildSelectedRequest(state, current)
}

export const selectResponse = (state: RootState): SendResponse | null =>
    getCurrentActiveRequest(state)?.response ?? null

export const selectResponseById = (state: RootState, id: string): SendResponse | null =>
    getActiveRequestById(state, id)?.response ?? null

export const selectDirtyRequestIds = (state: RootState): string[] =>
    state.collection?.dirtyRequestIds ?? []

export interface FlatRequest {
    name: string
    method: string
    url: string
    headers: Record<string, string>
    body: string
}

const flattenRequests = (items: CollectionItem[]): FlatRequest[] => {
    const result: FlatRequest[] = []
    for (const it of items) {
        if (it.request) {
            const headers: Record<string, string> = {}
            for (const h of it.request.header ?? []) {
                if (h.key) headers[h.key] = h.value ?? ''
            }
            result.push({
                name: it.name,
                method: (it.request.method ?? 'GET').toUpperCase(),
                url: it.request.url?.raw ?? '',
                headers,
                body: typeof it.request.body?.raw === 'string' ? it.request.body.raw : '',
            })
        }
        if (it.item) {
            result.push(...flattenRequests(it.item))
        }
    }
    return result
}

export const selectAllRequests = (state: RootState): FlatRequest[] =>
    flattenRequests(state.collection?.data?.item ?? [])

export const selectAuthType = (state: RootState): "none" | "inherit" | "bearer" => {
    const current = getCurrentActiveRequest(state)
    if (current?.authType) return current.authType

    const request = selectRequest(state)
    const authHeader = request?.request?.header?.find(h => h.key === 'Authorization')
    if (!authHeader) return "none"

    if (state.collection?.data?.auth) return "inherit"

    return "bearer"
}

export const selectScriptResult = (state: RootState): ScriptResultDto[] | null =>
    getCurrentActiveRequest(state)?.scriptResult ?? null

export const selectScriptLogs = (state: RootState): ScriptLog[] =>
    getCurrentActiveRequest(state)?.scriptLogs ?? []

export const selectScriptMutations = (state: RootState): ScriptMutationDto[] | Record<string, string | null> =>
    getCurrentActiveRequest(state)?.scriptMutations ?? []

export const selectDirTree = (state: RootState): Map<string, DirTree> => {
    if (state.collection?.dirTree) {
        return state.collection.dirTree
    }
    return new Map<string, DirTree>()
}

export const selectActiveExampleId = (state: RootState): string | null =>
    getCurrentActiveRequest(state)?.activeExampleId ?? null

export const selectActiveExample = (state: RootState): CollectionResponse | null => {
    const current = getCurrentActiveRequest(state)
    if (!current?.activeExampleId || !current.exampleResponse) return null
    return current.exampleResponse.find(ex => ex.id === current.activeExampleId) ?? null
}

const buildSelectedRequest = (state: RootState, current: ActiveItem): CollectionItem | null => {
    const collectionItem = state.collection?.data?.item
        ? diveActiveRequest(current.id, state.collection.data.item)
        : null

    let targetRequest = current.request ?? collectionItem?.request
    if (current.activeExampleId && current.exampleResponse) {
        const example = current.exampleResponse.find(ex => ex.id === current.activeExampleId)
        if (example?.originalRequest) {
            targetRequest = example.originalRequest
        }
    }

    if (!collectionItem) {
        return {
            id: current.id,
            name: '',
            request: targetRequest ?? undefined,
            response: current.exampleResponse,
        }
    }

    return {
        ...collectionItem,
        request: targetRequest ?? collectionItem.request,
        response: current.exampleResponse ?? collectionItem.response,
    }
}

// HELPER HOOKS
const diveActiveRequest = (id: string, item: CollectionItem[]): CollectionItem | null => {
    for (const it of item) {
        if (it.id === id) return it

        if (it.item) {
            const selc = diveActiveRequest(id, it.item)
            if (selc) return selc
        }
    }

    return null
}

const diveActiveTree = (id: string, status: boolean, item: Map<string, DirTree>) => {
    const it = item.get(id);
    if (it) {
        it.isActive = status
    }
    item.forEach(val => {
        if (val.item) diveActiveTree(id,status, val.item)
    })
}

const setDeactiveTree = (item: Map<string, DirTree>) => {
    item.forEach(it => {
        it.isActive = false
        if (it.item) setDeactiveTree(it.item)
    })
}

const findCurrentActiveRequestIndex = (items: ActiveItem[], id?: string) => {
    if (!items.length) return -1
    if (!id) return items.length - 1
    return items.findIndex((item) => item.id === id)
}

const getCurrentActiveRequest = (state: RootState): ActiveItem | null => {
    if (state.collection?.activeTabId) {
        return getActiveRequestById(state, state.collection.activeTabId)
    }

    const openRequestTabs = state.collection?.openRequestTabs ?? []
    return openRequestTabs.length > 0 ? openRequestTabs[openRequestTabs.length - 1] : null
}

const getActiveRequestById = (state: RootState, id: string): ActiveItem | null => {
    const openRequestTabs = state.collection?.openRequestTabs ?? []
    return openRequestTabs.find((item) => item.id === id) ?? null
}

const isBaseUrlVariable = (item: CollectionVar) =>
    item.key.toLowerCase().includes('base_url') || item.category?.toUpperCase() === 'BASE_URL'

const resolveBaseUrlValue = (value: string): string => {
    if (value === DEFAULT_BASE_URL_VALUE || !value.trim()) {
        return typeof window !== 'undefined' ? window.location.origin : ''
    }
    return value
}

const syncCollectionVariables = (state: typeof initialState) => {
    if (!state.data) return
    state.data.variable = [...state.baseUrl, ...state.variable]
}

const flattenCollections = (item: CollectionItem[]): CollectionItem[] => {
    return Array.from(diveCollection(item), ([_, value]) => ({value})).map(it => ({
        id: it.value.id,
        name: it.value.name,
        isActive: false,
        category: it.value.category as ColtCat,
        method: (it.value.method as ColtReqMethod) ?? "GET"
    }));
}

const diveCollection = (item: CollectionItem[]): Map<string, DirTree> => {
    let trees: Map<string, DirTree> = new Map<string, DirTree>()
    for (const it of item) {
        if (isArrayEmpty(it.item)) {
            let category = it.request ? 'REQ' : "FOLD";
            trees.set(it.id, {
                id: it.id,
                name: it.name,
                isActive: false,
                category: category as ColtCat,
                method: (it.request?.method as ColtReqMethod) ?? "GET"
            })
            continue
        }

        let tree: DirTree = {
            id: it.id,
            name: it.name,
            isActive: false,
            // @ts-ignore
            item: diveCollection(it.item),
            category: "FOLD"
        }
        trees.set(it.id, tree)
    }

    return trees
}

const removeCollectionItem = (items: CollectionItem[], id: string): boolean => {
    const idx = items.findIndex(item => item.id === id)
    if (idx >= 0) {
        items.splice(idx, 1)
        return true
    }
    for (const item of items) {
        if (item.item && removeCollectionItem(item.item, id)) return true
    }
    return false
}

const removeDirTreeNode = (tree: Map<string, DirTree>, id: string): boolean => {
    if (tree.has(id)) {
        tree.delete(id)
        return true
    }
    for (const [, node] of tree) {
        if (node.item && removeDirTreeNode(node.item, id)) return true
    }
    return false
}

const findDirTreeNode = (tree: Map<string, DirTree>, id: string): DirTree | undefined => {
    if (tree.has(id)) return tree.get(id)
    for (const [, node] of tree) {
        if (node.item) {
            const found = findDirTreeNode(node.item, id)
            if (found) return found
        }
    }
    return undefined
}

const collectDescendantIds = (node: DirTree): string[] => {
    if (node.category === 'REQ') return [node.id]
    if (!node.item) return []
    const ids: string[] = []
    for (const [, child] of node.item) {
        ids.push(...collectDescendantIds(child))
    }
    return ids
}
