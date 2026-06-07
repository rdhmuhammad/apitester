import type {CollectionItem, CollectionVar, DocsContent, Request} from "@/pages/editor/types/api.ts";
import type {SendResponse} from "@/types/response.ts";
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
    selectedRequestId: string
    activeRequest: ActiveItem[]
    cachedRequest: CollectionItem[]
    dirTree: Map<string, DirTree>
    status: ColtStatusLoad
}

export interface ActiveItem{
    id: string
    request: Request | null
    response: SendResponse | null
}

export const fetchCollections = createAppAsyncThunk(
    'collections/fetchCollections',
    async () => {
        return await CollectionServices.getCollection()
    }
)

export const initialState: CollectionState = {
    data: null,
    selectedRequestId: '',
    activeRequest: [],
    cachedRequest: [],
    variable: [],
    baseUrl: [],
    status: 'idle',
    dirTree: new Map<string, DirTree>(),
}
