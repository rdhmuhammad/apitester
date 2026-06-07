import {type Action, configureStore, type ThunkAction} from "@reduxjs/toolkit";
import {enableMapSet} from "immer";
import collectionReducer from "@/app/slices/collectionSlices.ts";

enableMapSet();

export const store = configureStore({
    reducer: {
        collection: collectionReducer
    }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
