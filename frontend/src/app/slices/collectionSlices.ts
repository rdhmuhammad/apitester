import type {CollectionItem, CollectionVar, DocsContent, ItemUrl} from "@/pages/editor/types/api.ts";
import {createAppAsyncThunk} from "@/app/store/withTypes.ts";
import {CollectionServices} from "@/layout/services/collection.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store/store.ts";
import {isArrayEmpty} from "@/lib/utils.ts";


export type ColtReqMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type ColtStatusLoad = 'idle' | 'pending' | 'succeeded' | 'rejected'
export type ColtCat = 'REQ' | 'FOLD'

export interface DirTree {
    id: string
    name: string
    item?: Map<string, DirTree>
    isActive: boolean
    method?: ColtReqMethod
    category: ColtCat
}

interface CollectionState {
    data: DocsContent | null
    currRequest: CollectionItem | null
    dirTree: Map<string, DirTree>
    status: ColtStatusLoad
}

export const fetchCollections = createAppAsyncThunk(
    'collections/fetchCollections',
    async () => {
        return await CollectionServices.getCollection()
    }
)

const initialState: CollectionState = {
    data: null,
    currRequest: null,
    status: 'idle',
    dirTree: new Map<string, DirTree>()
}

const collectionSlices = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        setActiveTree(state, action: PayloadAction<{ id: string }>) {
            diveActiveTree(action.payload.id, state?.dirTree);
        },
        setCurrentRequest(state, action: PayloadAction<CollectionItem>){
          state.currRequest = action.payload
        },
        setActiveRequest(state, action: PayloadAction<{ id: string }>) {
            const selected = diveActiveRequest(action.payload.id, state?.data?.item ?? []);
            if (selected) state.currRequest = selected
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCollections.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(fetchCollections.fulfilled, (state, action) => {
            if (action.payload.content) {
                state.data = action.payload.content
            }
            state.status = 'succeeded'
        })
        builder.addCase(fetchCollections.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export default collectionSlices.reducer

export const { setActiveRequest, setCurrentRequest, setActiveTree } = collectionSlices.actions

// SELECTOR
export const selectColVar = (state: RootState): CollectionVar[] => state.collection?.data?.variable ?? []

export const selectBaseUrl = (state: RootState): string[] =>{
    let urls = []
    if (state.collection?.data?.variable){
        for (const vr of state.collection?.data?.variable){
            if (vr?.category === 'BASE_URL') urls.push(vr?.value)
        }
    }
    return urls
}

export const selectRequest = (state: RootState): CollectionItem | null => state.collection?.currRequest

export const selectDirTree = (state: RootState): Map<string, DirTree> => {
    if (!isArrayEmpty(state.collection?.data?.item)) {
        // @ts-ignore
        return diveCollection(state.collection?.data?.item);
    }
    return new Map<string, DirTree>()
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

const diveActiveTree = (id: string, item: Map<string, DirTree>) => {
    const it = item.get(id);
    if (it) {
        setDeactiveTree(item)
        it.isActive = true
    }
    item.forEach(val => {
        if (val.item) diveActiveTree(id, val.item)
    })
}

const setDeactiveTree = (item: Map<string, DirTree>) => {
    item.forEach(it => {
        it.isActive = false
        if (it.item) setDeactiveTree(it.item)
    })
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