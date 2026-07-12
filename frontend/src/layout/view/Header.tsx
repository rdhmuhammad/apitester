import type {ChangeEvent} from "react";
import {useEffect, useMemo, useRef, useState} from "react";
import {Images} from "@/config/constant/Images.tsx";
import {cn, getContentType, getJsonSizeInKB} from "@/lib/utils.ts";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {ArrowDownToLine, ArrowUpFromLine, LoaderCircle, Plus, Send, Upload} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addBaseUrl,
    selectActiveRequest,
    selectBaseUrlValues,
    selectCollectionData,
    selectRequest, selectVariable,
    setCurrentResponse,
    selectDirtyRequestIds,
    clearDirtyRequestIds
} from "@/app/slices/collectionSlices.ts";
import type {HeaderAction} from "@/layout/types/headerContext.ts";
import {useSendRequest} from "@/layout/hooks/useSendRequest.ts";
import CustomToast from "@/components/common/toast";
import {type ColtReqMethod, fetchCollections} from "@/app/slices";
import type {ActiveItem} from "@/app/slices/index.ts";
import type {CollectionItem, CollectionVar, DocsContent, ItemUrl} from "@/pages/editor/types/api.ts";
import {CollectionServices} from "@/layout/services/collection.ts";
import {addQueryParam, updateQueryParam, setUrlRaw} from "@/app/slices/requestSlices.ts";

const findItemInTree = (items: CollectionItem[], id: string): CollectionItem | null => {
    for (const item of items) {
        if (item.id === id) return item
        if (item.item) {
            const found = findItemInTree(item.item, id)
            if (found) return found
        }
    }
    return null
}

const mergeActiveRequests = (data: DocsContent, requests: ActiveItem[]): DocsContent => {
    for (const active of requests) {
        if (!active.request) continue
        const found = findItemInTree(data.item, active.id)
        if (found) {
            found.request = active.request
        }
    }
    return data
}

const HeaderLayout: React.FC<{ onSend: HeaderAction }> = (
    {
        onSend
    }) => {
    const dispatch = useAppDispatch()
    const currRequest = useAppSelector(selectRequest)
    const baseUrlOptions = useAppSelector(selectBaseUrlValues)
    const variables = useAppSelector(selectVariable)
    const collectionData = useAppSelector(selectCollectionData)
    const activeRequests = useAppSelector(selectActiveRequest)
    const dirtyRequestIds = useAppSelector(selectDirtyRequestIds)
    const dirtyRequestNames = useMemo(() => {
        return dirtyRequestIds.map(id => {
            const item = findItemInTree(collectionData?.item ?? [], id)
            return {id, name: item?.name ?? 'Untitled'}
        })
    }, [dirtyRequestIds, collectionData])
    const uploadInputRef = useRef<HTMLInputElement | null>(null)
    const runtimeBaseUrl = typeof window !== "undefined" ? window.location.origin : ""

    useEffect(() => {
        const raw = currRequest?.request?.url?.raw ?? ''
        const queryIndex = raw.indexOf('?')
        setEndpoint(queryIndex >= 0 ? raw.slice(0, queryIndex) : raw)
    }, [currRequest?.request?.url?.raw]);

    useEffect(() => {
        setRequestMethod(currRequest?.request?.method ?? 'GET')
    }, [currRequest?.request?.method]);

    useEffect(() => {
        if (baseUrlOptions.length === 0) {
            setSelectedBaseUrl(runtimeBaseUrl)
            return
        }

        setSelectedBaseUrl((currentValue) => {
            if (currentValue && baseUrlOptions.includes(currentValue)) {
                return currentValue
            }

            return baseUrlOptions[0] ?? runtimeBaseUrl
        })
    }, [baseUrlOptions, runtimeBaseUrl]);

    const [gitAction, setGitAction] = useState<"pull" | "push" | null>(null);
    const requestMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
    const methodColorClass: Record<ColtReqMethod[number], string> = {
        GET: "bg-emerald-600",
        POST: "bg-amber-600",
        PUT: "bg-blue-600",
        PATCH: "bg-violet-600",
        DELETE: "bg-red-600"
    };
    const [requestMethod, setRequestMethod] = useState<ColtReqMethod[number]>("GET");
    const [selectedBaseUrl, setSelectedBaseUrl] = useState("");
    const [endpoint, setEndpoint] = useState(currRequest?.request?.url.raw ?? "");
    const [newBaseUrl, setNewBaseUrl] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [pendingDestructiveAction, setPendingDestructiveAction] = useState<"pull" | "upload" | null>(null);
    const resolveVariableValue = (value: string): string => {
        return value.replace(/\{\{([^{}]+)\}\}/g, (_, key: string) => {
            const matchedVariable = variables.find((item) => item.key === key.trim())
            return matchedVariable?.value ?? `{{${key}}}`
        })
    }

    const parseQueryParamsFromUrl = (url: string): { cleanUrl: string; params: ItemUrl[] } => {
        const queryIndex = url.indexOf('?')
        if (queryIndex === -1) return {cleanUrl: url, params: []}

        const beforeQuery = url.slice(0, queryIndex)
        const afterQuery = url.slice(queryIndex + 1)
        const hashIndex = afterQuery.indexOf('#')
        const queryString = hashIndex >= 0 ? afterQuery.slice(0, hashIndex) : afterQuery
        const hash = hashIndex >= 0 ? afterQuery.slice(hashIndex) : ''

        const params: ItemUrl[] = []
        const searchParams = new URLSearchParams(queryString)
        searchParams.forEach((value, key) => {
            params.push({key, value, disabled: false})
        })

        return {cleanUrl: beforeQuery + hash, params}
    }

    const formatEndpoint = (endpoint: string): string => {
        const sanitizedEndpoint = endpoint.replace(/\{\{[^{}]+\}\}/g, "").trim()

        if (/^https?:\/\//i.test(sanitizedEndpoint)) {
            try {
                const parsedUrl = new URL(sanitizedEndpoint)
                return `${parsedUrl.pathname}${parsedUrl.hash}`
            } catch (_) {
                return sanitizedEndpoint.split('?')[0]
            }
        }

        return sanitizedEndpoint.split('?')[0]
    }



    const handleSendRequest = () => {
        if (!currRequest?.id || isSending) return
        if (onSend) onSend()
        setIsSending(true)
        useSendRequest({
            baseUrl: selectedBaseUrl,
            endpoint: formatEndpoint(endpoint),
            method: requestMethod,
            headers: (currRequest?.request?.header ?? [])
                .filter(h => !h.disabled)
                .map((header) => ({
                    ...header,
                    value: resolveVariableValue(header.value ?? "")
                })),
            requestParams: (currRequest?.request?.url.query ?? [])
                .filter(q => !q.disabled),
            contentType: getContentType(currRequest),
            raw: currRequest?.request?.body?.raw,
            formData: currRequest?.request?.body?.formdata
        }).then((response) => {
            response && dispatch(setCurrentResponse({
                id: currRequest.id,
                response
            }))
        }).catch(response => {
            console.log(response)
            response && dispatch(setCurrentResponse({
                id: currRequest.id,
                response: response?.response?.data ?? null
            }))
            response && dispatch(setCurrentResponse({
                id: currRequest.id,
                response: {
                    protocol: 'HTTP/1.1',
                    responseSize: getJsonSizeInKB(response?.response?.data),
                    responseTime: response?.duration,
                    statusCode: response?.response?.status,
                    data: response?.response?.data,
                    statusText: response?.response?.statusText
                }
            }))
            CustomToast.error(response.message);
        }).finally(() => setIsSending(false))
    };

    const handleConfirmGitAction = async (action: string | null) => {
        if (!action) return

        switch (action) {
            case "pull":
                dispatch(fetchCollections())
                setGitAction(null)
                break

            case "push":
                if (!collectionData) {
                    CustomToast.error("No collection data to save")
                    setGitAction(null)
                    return
                }

                try {
                    const merged = mergeActiveRequests(structuredClone(collectionData), activeRequests)
                    const msg = await CollectionServices.updateCollection(merged)
                    dispatch(fetchCollections())
                    CustomToast.success(msg || "Collection updated successfully")
                } catch (error: any) {
                    const message = error?.response?.data?.message || error?.message || "Failed to update collection"
                    CustomToast.error(message)
                } finally {
                    setGitAction(null)
                }
                break
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!collectionData || isSending) return
            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault()
                handleSendRequest()
            }
            if ((event.ctrlKey || event.metaKey) && event.key === "s") {
                event.preventDefault()
                setGitAction("push")
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    })

    const handleAddBaseUrl = () => {
        const trimmed = newBaseUrl.trim()
        if (!trimmed) return
        const newVar: CollectionVar = {
            id: crypto.randomUUID(),
            key: 'base_url',
            value: trimmed,
            category: 'BASE_URL',
            type: 'string'
        }
        dispatch(addBaseUrl(newVar))
        setNewBaseUrl('')
    }

    const handleUploadCollection = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        try {
            const message = await CollectionServices.uploadCollection(file)
            dispatch(fetchCollections())
            CustomToast.success(message || "Collection uploaded successfully")
        } catch (error: any) {
            const message = error?.response?.data?.message || error?.message || "Failed to upload collection"
            CustomToast.error(message)
        } finally {
            event.target.value = ""
        }
    }

    return (
        <header className="fixed top-0 z-50 w-full gap-4 h-[60px] bg-white border-b border-gray-200 px-6 shadow-sm
         flex flex-row items-center">
            <div className="basis-1/4 flex flex-row h-full items-center gap-3">
                <img
                    src={Images.APP_LOGO}
                    alt='Stock management'
                    className='w-[30px] h-[37px] object-cover'
                />
                <h1 className="text-xl italic font-semibold text-gray-800">
                    Apitester
                </h1>
                <div className="flex items-center h-full gap-2 ml-4">
                    <input
                        ref={uploadInputRef}
                        type="file"
                        accept=".json,application/json"
                        className="hidden"
                        onChange={handleUploadCollection}
                    />
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={() => {
                            if (dirtyRequestIds.length > 0) {
                                setPendingDestructiveAction("pull")
                            } else {
                                setGitAction("pull")
                            }
                        }}
                    >
                        <ArrowDownToLine className="h-4 w-4 mr-1"/>

                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        disabled={!collectionData}
                        onClick={() => {
                            if (dirtyRequestIds.length > 0 && collectionData) {
                                setPendingDestructiveAction("upload")
                            } else {
                                uploadInputRef.current?.click()
                            }
                        }}
                    >
                        <Upload className="h-4 w-4 mr-1"/>

                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        disabled={!collectionData}
                        onClick={() => setGitAction("push")}
                    >
                        <ArrowUpFromLine className="h-4 w-4 mr-1"/>

                    </Button>
                </div>
            </div>
            {/*<div className="mx-4 h-full w-px bg-indigo-500" />*/}
            {/* REQUEST URL */}
            <div className="basis-3/4 flex items-center h-full gap-3">
                <Select
                    value={requestMethod}
                    disabled={!collectionData}
                    onValueChange={(value) => setRequestMethod(value as ColtReqMethod[number])}
                >
                    <SelectTrigger
                        className={cn("min-w-[110px] font-semibold text-white", methodColorClass[requestMethod])}>
                        <SelectValue placeholder="Method"/>
                    </SelectTrigger>
                    <SelectContent>
                        {requestMethods.map((method) => (
                            <SelectItem key={method} value={method} className={cn("font-semibold", "text-black")}>
                                {method}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex w-full items-center rounded-md border border-input bg-transparent shadow-xs">
                    {baseUrlOptions.length > 0 ? (
                        <Select
                            value={selectedBaseUrl}
                            disabled={!collectionData}
                            onValueChange={setSelectedBaseUrl}
                        >
                            <SelectTrigger 
                                className="w-[240px] rounded-none border-0 border-r border-input shadow-none focus-visible:ring-0">
                                <SelectValue placeholder="Select Base URL"/>
                            </SelectTrigger>
                            <SelectContent>
                                {baseUrlOptions.map((baseUrl) => (
                                    <SelectItem key={baseUrl} value={baseUrl}>
                                        {baseUrl}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ) : (
                        <div className="flex w-full items-center">
                            <Input
                                value={newBaseUrl}
                                disabled={!collectionData}
                                onChange={(e) => setNewBaseUrl(e.target.value)}
                                className="border-0 rounded-none shadow-none focus-visible:ring-0"
                                placeholder="https://api.example.com"
                                aria-label="Add base URL"
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                disabled={!collectionData || !newBaseUrl.trim()}
                                className="h-full rounded-none border-l border-input px-2 shrink-0"
                                onClick={handleAddBaseUrl}
                            >
                                <Plus className="h-4 w-4"/>
                            </Button>
                        </div>
                    )}
                    <Input
                        value={formatEndpoint(endpoint)}
                        disabled={!collectionData}
                        onChange={(event) => {
                            const value = event.target.value
                            const {cleanUrl, params} = parseQueryParamsFromUrl(value)
                            setEndpoint(cleanUrl)
                            dispatch(setUrlRaw({raw: cleanUrl}))
                            const currentParams = currRequest?.request?.url?.query ?? []
                            params.forEach((param) => {
                                const existing = currentParams.find(p => p.key === param.key)
                                if (existing) {
                                    dispatch(updateQueryParam({
                                        query: {...existing, value: param.value}
                                    }))
                                } else {
                                    dispatch(addQueryParam({query: param}))
                                }
                            })
                        }}
                        className="border-0 rounded-none shadow-none focus-visible:ring-0"
                        placeholder="/v1/users"
                        aria-label="Endpoint path"
                    />
                </div>
                <Button
                    disabled={!collectionData || isSending}
                    onClick={handleSendRequest}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap"
                >
                    {isSending ? (
                        <LoaderCircle className="h-4 w-4 mr-2 animate-spin"/>
                    ) : (
                        <Send className="h-4 w-4 mr-2"/>
                    )}
                    Send Request
                </Button>
            </div>
            <AlertDialog open={Boolean(gitAction)} onOpenChange={(open) => !open && setGitAction(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Git Action</AlertDialogTitle>
                        <AlertDialogDescription>
                            {gitAction === "push"
                                ? "This will push your changes to remote repository. Do you want to continue?"
                                : "This will pull latest changes from remote repository. Do you want to continue?"}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleConfirmGitAction(gitAction)}>
                            {gitAction === "push" ? "Confirm Push" : "Confirm Pull"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={Boolean(pendingDestructiveAction)}
                         onOpenChange={(open) => !open && setPendingDestructiveAction(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                            <div>
                                <p className="mb-2">The following requests have unsaved changes. What would you like to
                                    do?</p>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    {dirtyRequestNames.map(({id, name}) => (
                                        <li key={id}>{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button
                            variant="outline"
                            onClick={() => {
                                const action = pendingDestructiveAction
                                dispatch(clearDirtyRequestIds())
                                setPendingDestructiveAction(null)
                                if (action === "pull") {
                                    setGitAction("pull")
                                } else {
                                    setTimeout(() => uploadInputRef.current?.click(), 0)
                                }
                            }}
                        >
                            Discard & {pendingDestructiveAction === "pull" ? "Pull" : "Upload"}
                        </Button>
                        <Button
                            onClick={async () => {
                                const action = pendingDestructiveAction
                                setPendingDestructiveAction(null)
                                if (!collectionData) return
                                try {
                                    const merged = mergeActiveRequests(structuredClone(collectionData), activeRequests)
                                    await CollectionServices.updateCollection(merged)
                                    dispatch(fetchCollections())
                                } catch (error: unknown) {
                                    const err = error as { response?: { data?: { message?: string } }; message?: string }
                                    const message = err?.response?.data?.message || err?.message || "Failed to save"
                                    CustomToast.error(message)
                                    return
                                }
                                if (action === "pull") {
                                    dispatch(fetchCollections())
                                } else {
                                    setTimeout(() => uploadInputRef.current?.click(), 0)
                                }
                            }}
                        >
                            Push & {pendingDestructiveAction === "pull" ? "Pull" : "Upload"}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </header>
    )
}

export default HeaderLayout
