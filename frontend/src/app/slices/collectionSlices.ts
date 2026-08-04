import type {CollectionAuth, CollectionInfo, CollectionItem, CollectionResponse, CollectionVar, DocsContent} from "@/pages/editor/types/api.ts";
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
    initialState
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
        setScriptResult(state, action: PayloadAction<{ id: string; type: "pre" | "post"; result: unknown }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return
            if (!state.openRequestTabs[idx].scriptResult) state.openRequestTabs[idx].scriptResult = {}
            state.openRequestTabs[idx].scriptResult[action.payload.type] = action.payload.result
        },
        setScriptLogs(state, action: PayloadAction<{ id: string; type: "pre" | "post"; logs: ScriptLog[] }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return
            if (!state.openRequestTabs[idx].scriptLogs) state.openRequestTabs[idx].scriptLogs = { pre: [], post: [] }
            state.openRequestTabs[idx].scriptLogs[action.payload.type] = action.payload.logs
        },
        setScriptMutations(state, action: PayloadAction<{ id: string; type: "pre" | "post"; mutations: Record<string, string | null> }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return
            if (!state.openRequestTabs[idx].scriptMutations) state.openRequestTabs[idx].scriptMutations = {}
            state.openRequestTabs[idx].scriptMutations[action.payload.type] = action.payload.mutations
        },
        saveExampleResponse(state, action: PayloadAction<{ id: string; name: string }>) {
            const idx = findCurrentActiveRequestIndex(state.openRequestTabs, action.payload.id)
            if (idx < 0) return

            const active = state.openRequestTabs[idx]
            if (!active.response || !active.request) return

            const example: CollectionResponse = {
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
    addVariable,
    removeVariable,
    updateVariable,
    addBaseUrl,
    removeBaseUrl,
    clearDirtyRequestIds,
    saveActiveToData,
    setAuthType,
    setScriptResult,
    setScriptLogs,
    setScriptMutations,
    saveExampleResponse,
    createNewRequest,
    deleteRequest,
    deleteFolder,
} = collectionSlices.actions

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

export const selectScriptResult = (state: RootState): { pre?: unknown; post?: unknown } =>
    getCurrentActiveRequest(state)?.scriptResult ?? {}

export const selectScriptLogs = (state: RootState): { pre?: ScriptLog[]; post?: ScriptLog[] } =>
    getCurrentActiveRequest(state)?.scriptLogs ?? { pre: [], post: [] }

export const selectScriptMutations = (state: RootState): { pre?: Record<string, string | null>; post?: Record<string, string | null> } =>
    getCurrentActiveRequest(state)?.scriptMutations ?? {}

export const selectDirTree = (state: RootState): Map<string, DirTree> => {
    if (state.collection?.dirTree) {
        return state.collection.dirTree
    }
    return new Map<string, DirTree>()
}

const buildSelectedRequest = (state: RootState, current: ActiveItem): CollectionItem | null => {
    const collectionItem = state.collection?.data?.item
        ? diveActiveRequest(current.id, state.collection.data.item)
        : null
    if (!collectionItem) {
        return {
            id: current.id,
            name: '',
            request: current.request ?? undefined,
            response: current.exampleResponse,
        }
    }

    return {
        ...collectionItem,
        request: current.request ?? collectionItem.request,
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
    if (value === DEFAULT_BASE_URL_VALUE || !value.trim()) return ''
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
