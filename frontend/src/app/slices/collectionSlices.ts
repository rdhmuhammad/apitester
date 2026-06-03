import type {CollectionItem, CollectionVar, ItemUrl, RequestBody} from "@/pages/editor/types/api.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store/store.ts";
import {isArrayEmpty} from "@/lib/utils.ts";
import type {SendResponse} from "@/types/response.ts";
import {type ColtCat, type ColtReqMethod, type DirTree, fetchCollections, initialState} from "@/app/slices/index.ts";

const collectionSlices = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        addActiveRequest(state, action: PayloadAction<{ id: string }>) {
            if (!state.activeRequest) state.activeRequest = []
            if (!state.data?.item) return
            const selected = state.data.item.filter(item => item && item.id === action.payload.id);
            if (selected.length === 1 && selected[0]?.request && selected[0].response)
                state.activeRequest.push({
                    id: action.payload.id,
                    request: selected[0].request,
                    response: selected[0].response,
                })
        },
        removeActiveRequest(state, action: PayloadAction<{ id: string }>) {
            if (!state.activeRequest) return
            state.activeRequest = state.activeRequest.filter(item => item.request && item.id !== action.payload.id)
        },
        addVariable(state, action: PayloadAction<CollectionVar>){
            if (!state.variable) state.variable = []
            state.variable.push(action.payload)
        },
        removeVariable(state, action: PayloadAction<{id: string}>){
            if (!state.variable) return

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCollections.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(fetchCollections.fulfilled, (state, action) => {
            let docsContent = action.payload.content;
            if (docsContent) {
                state.data = docsContent
                state.cachedRequest = flattenCollections(docsContent.item)
                const reduced = docsContent?.variable?.reduce((acc, item)=>{
                    if (item.key.toLowerCase().includes('base_url')){
                        acc.baseUrl.push(item)
                    }else {
                        acc.variable.push(item)
                    }
                    return acc
                }, {
                    baseUrl: [] as CollectionVar[],
                    variable: [] as CollectionVar[]
                });
                state.baseUrl = reduced?.baseUrl ?? [{key: 'base_url', value: 'http://localhost:8080'}]
                state.variable = reduced?.variable
            }
            state.status = 'succeeded'
        })
        builder.addCase(fetchCollections.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export default collectionSlices.reducer

export const {} = collectionSlices.actions

// SELECTOR
export const selectBaseUrl = (state: RootState): string[] => {
    let urls = []
    if (state.collection?.data?.variable) {
        for (const vr of state.collection?.data?.variable) {
            if (vr?.category === 'BASE_URL') urls.push(vr?.value)
        }
    }
    return urls
}

export const selectRequest = (state: RootState): CollectionItem | null => state.collection?.currRequest

export const selectResponse = (state: RootState): SendResponse | null => state.collection?.currResponse

export const selectRequestBody = (state: RootState): RequestBody | undefined => state.collection?.currRequest?.request?.body

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