import {useCallback, useState} from "react"
import {useAppDispatch} from "@/app/store/hooks.ts"
import {fetchCollections} from "@/app/slices/index.ts"
import {saveActiveToData, selectCollectionData} from "@/app/slices/collectionSlices.ts"
import {store} from "@/app/store/store.ts"
import {CollectionServices} from "@/layout/services/collection.ts"
import CustomToast from "@/components/common/toast"
import {fetchEnvironments} from "@/app/slices/environmentSlice.ts";

export function useCollectionPushPull() {
    const dispatch = useAppDispatch()
    const [isPulling, setIsPulling] = useState(false)
    const [isPushing, setIsPushing] = useState(false)

    const pull = useCallback(async () => {
        setIsPulling(true)
        try {
            const active = await CollectionServices.getActiveCollection()
            await dispatch(fetchCollections(active.id)).unwrap()
            await dispatch(fetchEnvironments(active.id)).unwrap()
            CustomToast.success("Collection pulled successfully")
        } catch {
            CustomToast.error("Failed to pull collection")
        } finally {
            setIsPulling(false)
        }
    }, [dispatch])

    const push = useCallback(async () => {
        setIsPushing(true)
        try {
            dispatch(saveActiveToData())
            const data = selectCollectionData(store.getState())
            const active = await CollectionServices.getActiveCollection()
            await CollectionServices.writeCollection(active.id, JSON.stringify(data, null, 2))
            CustomToast.success("Collection pushed successfully")
        } catch {
            CustomToast.error("Failed to push collection")
        } finally {
            setIsPushing(false)
        }
    }, [dispatch])

    return {pull, push, isPulling, isPushing}
}
