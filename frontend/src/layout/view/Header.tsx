import type {ChangeEvent} from "react";
import {useEffect, useRef, useState} from "react";
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
import {ArrowDownToLine, ArrowUpFromLine, Plus, Send, Upload} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addBaseUrl,
    selectActiveRequest,
    selectBaseUrlValues,
    selectCollectionData,
    selectRequest, selectVariable,
    setCurrentResponse
} from "@/app/slices/collectionSlices.ts";
import type {HeaderAction} from "@/layout/types/headerContext.ts";
import {useSendRequest} from "@/layout/hooks/useSendRequest.ts";
import CustomToast from "@/components/common/toast";
import {type ColtReqMethod, fetchCollections} from "@/app/slices";
import type {CollectionItem, CollectionVar, DocsContent} from "@/pages/editor/types/api.ts";
import {CollectionServices} from "@/layout/services/collection.ts";

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
    const uploadInputRef = useRef<HTMLInputElement | null>(null)
    const runtimeBaseUrl = typeof window !== "undefined" ? window.location.origin : ""

    useEffect(() => {
        setEndpoint(currRequest?.request?.url?.raw ?? '')
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
    const resolveVariableValue = (value: string): string => {
        return value.replace(/\{\{([^{}]+)\}\}/g, (_, key: string) => {
            const matchedVariable = variables.find((item) => item.key === key.trim())
            return matchedVariable?.value ?? `{{${key}}}`
        })
    }

    const formatEndpoint = (endpoint: string): string => {
        const sanitizedEndpoint = endpoint.replace(/\{\{[^{}]+\}\}/g, "").trim()

        if (/^https?:\/\//i.test(sanitizedEndpoint)) {
            try {
                const parsedUrl = new URL(sanitizedEndpoint)
                return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
            } catch (_) {
                return sanitizedEndpoint
            }
        }

        return sanitizedEndpoint
    }



    const handleSendRequest = () => {
        if (!currRequest?.id) return
        if (onSend) onSend()
        useSendRequest({
            baseUrl: selectedBaseUrl,
            endpoint: formatEndpoint(endpoint),
            method: requestMethod,
            headers: currRequest?.request?.header.map((header) => ({
                ...header,
                value: resolveVariableValue(header.value ?? "")
            })) ?? [],
            requestParams: currRequest?.request?.url.query ?? [],
            contentType: getContentType(currRequest),
            raw: currRequest?.request?.body?.raw,
            formData: currRequest?.request?.body?.formdata
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
        }).then((response) => {
            response && dispatch(setCurrentResponse({
                id: currRequest.id,
                response
            }))
        })
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

    const mergeActiveRequests = (data: DocsContent, requests: typeof activeRequests): DocsContent => {
        for (const active of requests) {
            if (!active.request) continue
            const found = findItemInTree(data.item, active.id)
            if (found) {
                found.request = active.request
            }
        }
        return data
    }

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
                        onClick={() => setGitAction("pull")}
                    >
                        <ArrowDownToLine className="h-4 w-4 mr-1"/>

                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={() => uploadInputRef.current?.click()}
                    >
                        <Upload className="h-4 w-4 mr-1"/>

                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
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
                                onChange={(e) => setNewBaseUrl(e.target.value)}
                                className="border-0 rounded-none shadow-none focus-visible:ring-0"
                                placeholder="https://api.example.com"
                                aria-label="Add base URL"
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-full rounded-none border-l border-input px-2 shrink-0"
                                onClick={handleAddBaseUrl}
                            >
                                <Plus className="h-4 w-4"/>
                            </Button>
                        </div>
                    )}
                    <Input
                        value={formatEndpoint(endpoint)}
                        onChange={(event) => setEndpoint(event.target.value)}
                        className="border-0 rounded-none shadow-none focus-visible:ring-0"
                        placeholder="/v1/users"
                        aria-label="Endpoint path"
                    />
                </div>
                <Button
                    onClick={handleSendRequest}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap"
                >
                    <Send className="h-4 w-4 mr-2"/>
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
        </header>
    )
}

export default HeaderLayout
