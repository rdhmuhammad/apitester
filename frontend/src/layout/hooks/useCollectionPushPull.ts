import {useCallback, useState} from "react"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {fetchCollections} from "@/app/slices/index.ts"
import {selectCollectionData} from "@/app/slices/collectionSlices.ts"
import {CollectionServices} from "@/layout/services/collection.ts"

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
        } finally {
            setIsPushing(false)
        }
    }, [docsContent])

    return {pull, push, isPulling, isPushing}
}
