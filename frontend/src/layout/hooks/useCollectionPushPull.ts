import {useCallback, useState} from "react"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {fetchCollections} from "@/app/slices/index.ts"
import {selectCollectionData} from "@/app/slices/collectionSlices.ts"
import {CollectionServices} from "@/layout/services/collection.ts"
import CustomToast from "@/components/common/toast"

export function useCollectionPushPull() {
    const dispatch = useAppDispatch()
    const docsContent = useAppSelector(selectCollectionData)
    const [isPulling, setIsPulling] = useState(false)
    const [isPushing, setIsPushing] = useState(false)

    const pull = useCallback(async () => {
        setIsPulling(true)
        try {
            const active = await CollectionServices.getActiveCollection()
            await dispatch(fetchCollections(active.id)).unwrap()
            CustomToast.success("Collection pulled successfully")
        } catch {
            CustomToast.error("Failed to pull collection")
        } finally {
            setIsPulling(false)
        }
    }, [dispatch])

    const push = useCallback(async () => {
        if (!docsContent) return
        setIsPushing(true)
        try {
            const active = await CollectionServices.getActiveCollection()
            await CollectionServices.writeCollection(active.id, JSON.stringify(docsContent, null, 2))
            CustomToast.success("Collection pushed successfully")
        } catch {
            CustomToast.error("Failed to push collection")
        } finally {
            setIsPushing(false)
        }
    }, [docsContent])

    return {pull, push, isPulling, isPushing}
}
