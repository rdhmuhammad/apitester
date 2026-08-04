import type {CollectionItem, CollectionResponse, CollectionVar, DocsContent, Request} from "@/pages/editor/types/api.ts";
import type {ScriptLog, SendResponse} from "@/types/response.ts";
import {createAppAsyncThunk} from "@/app/store/withTypes.ts";
import {CollectionServices} from "@/layout/services/collection.ts";

export type ColtReqMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type ColtStatusLoad = 'idle' | 'pending' | 'succeeded' | 'rejected'
export type ColtCat = 'REQ' | 'FOLD'
export type ColtBodyType= 'raw' | 'formdata'

export interface DirTree {
    id: string
    name: string
    item?: Map<string, DirTree>
    isActive: boolean
    method?: ColtReqMethod
    category: ColtCat
}

export interface CollectionState {
    data: DocsContent | null
    variable: CollectionVar[]
    baseUrl: CollectionVar[]
    activeTabId: string
    openRequestTabs: ActiveItem[]
    cachedRequest: CollectionItem[]
    dirTree: Map<string, DirTree>
    status: ColtStatusLoad
    dirtyRequestIds: string[]
}

export interface ActiveItem{
    id: string
    request: Request | null
    response: SendResponse | null
    exampleResponse?: CollectionResponse[]
    authType?: "none" | "inherit" | "bearer"
    scriptResult?: { pre?: unknown; post?: unknown }
    scriptLogs?: { pre?: ScriptLog[]; post?: ScriptLog[] }
    scriptMutations?: { pre?: Record<string, string | null>; post?: Record<string, string | null> }
}

export const fetchCollections = createAppAsyncThunk(
    'collections/fetchCollections',
    async (collectionId: string) => {
        return await CollectionServices.getCollection(collectionId)
    }
)

export const initialState: CollectionState = {
    data: null,
    activeTabId: '',
    openRequestTabs: [],
    cachedRequest: [],
    variable: [],
    baseUrl: [],
    status: 'idle',
    dirTree: new Map<string, DirTree>(),
    dirtyRequestIds: [],
}
