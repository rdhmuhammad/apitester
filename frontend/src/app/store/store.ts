import {type Action, configureStore, type ThunkAction} from "@reduxjs/toolkit";
import {enableMapSet} from "immer";
import collectionReducer from "@/app/slices/collectionSlices.ts";
import environmentReducer from "@/app/slices/environmentSlice.ts";
import authReducer from "@/app/slices/authSlice.ts";

enableMapSet();

export const store = configureStore({
    reducer: {
        collection: collectionReducer,
        environment: environmentReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: ['collection.dirTree'],
            },
        }),
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
