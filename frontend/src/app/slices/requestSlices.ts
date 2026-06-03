import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "@/app/slices/index.ts";
import type {ItemUrl, RequestBody} from "@/pages/editor/types/api.ts";
import type {RootState} from "@/app/store/store.ts";

const mapParam = (param: ItemUrl, payload: ItemUrl): ItemUrl => {
    return param.key === payload.key ? {
        key: payload.key,
        value: payload.value,
        description: payload?.description,
        disabled: payload?.disabled
    } : param
}

const requestSlices = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setEndpoint(state, action: PayloadAction<string>){

        },
        setBody(state, action: PayloadAction<string | ItemUrl[]>) {
            if (!state.currRequest?.request) {
                return;
            }

            if (!state.currRequest.request.body) {
                state.currRequest.request.body = { mode: 'raw' };
            }

            if (typeof action.payload === 'string') {
                state.currRequest.request.body.mode = 'raw';
                state.currRequest.request.body.raw = action.payload
            } else {
                state.currRequest.request.body.mode = 'formdata';
                state.currRequest.request.body.formdata = action.payload
            }
        },
        setHeader(state, action: PayloadAction<ItemUrl>) {
            if (state?.currRequest?.request?.header) {
                state.currRequest.request.header.map(param => mapParam(param, action.payload))
            }
        },
        setParams(state, action: PayloadAction<ItemUrl>) {
            if (state?.currRequest?.request?.url?.query) {
                state?.currRequest?.request?.url?.query.map(param => mapParam(param, action.payload))
            }
        },

    },
})

export default requestSlices.reducer

export const {
    setBody,
    setHeader,
    setParams,
} = requestSlices.actions

export const selectRequestBody = (state: RootState): RequestBody | undefined => state.collection?.currRequest?.request?.body

export const selectHeader = (state: RootState): ItemUrl[] => state.collection?.currRequest?.request?.header ?? []

export const selectReqParam = (state: RootState): ItemUrl[] => state.collection?.currRequest?.request?.url?.query ?? []