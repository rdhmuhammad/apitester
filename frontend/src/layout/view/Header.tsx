import {useEffect, useState} from "react";
import {Images} from "@/config/constant/Images.tsx";
import {cn, getContentType} from "@/lib/utils.ts";
import {isTestTab} from "@/lib/tabUtils.ts";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {LoaderCircle, Plus, Send, Settings} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addBaseUrl,
    addVariable,
    removeVariable,
    selectActiveTabId,
    selectBaseUrlValues,
    selectCollectionData,
    selectRequest,
    selectActiveRequestScript,
    selectVariable,
    setCurrentResponse,
    setScriptLogs,
    setScriptMutations,
    setScriptResult,
    updateVariable,
} from "@/app/slices/collectionSlices.ts";
import type {HeaderAction} from "@/layout/types/headerContext.ts";
import {buildRawRequest, parseBlobResponse, useSendRequest} from "@/layout/hooks/useSendRequest.ts";
import {runScript} from "@/layout/hooks/useScriptRunner.ts";
import CustomToast from "@/components/common/toast";
import type {ColtReqMethod} from "@/app/slices";
import type {CollectionVar, ItemUrl} from "@/pages/editor/types/api.ts";
import {addQueryParam, updateQueryParam, setUrlRaw} from "@/app/slices/requestSlices.ts";
import CollectionManagerDialog from "@/layout/components/CollectionManagerDialog.tsx";
import {useCollectionPushPull} from "@/layout/hooks/useCollectionPushPull.ts";
import {selectActiveEnvironmentVariables} from "@/app/slices/environmentSlice.ts"

const HeaderLayout: React.FC<{ onSend: HeaderAction }> = (
    {
        onSend
    }) => {
    const dispatch = useAppDispatch()
    const currRequest = useAppSelector(selectRequest)
    const baseUrlOptions = useAppSelector(selectBaseUrlValues)
    const variables = useAppSelector(selectVariable)
    const scriptValue = useAppSelector(selectActiveRequestScript)
    const collectionData = useAppSelector(selectCollectionData)
    const envVars = useAppSelector(selectActiveEnvironmentVariables)
    const activeTabId = useAppSelector(selectActiveTabId)

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
            setSelectedBaseUrl("")
            return
        }

        setSelectedBaseUrl((currentValue) => {
            if (currentValue && baseUrlOptions.includes(currentValue)) {
                return currentValue
            }

            return baseUrlOptions[0] ?? ""
        })
    }, [baseUrlOptions]);

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
    const [managerOpen, setManagerOpen] = useState(false);
    const {pull, push, isPulling, isPushing} = useCollectionPushPull()
    const resolveVariableValue = (value: string): string => {
        return value.replace(/\{\{([^{}]+)\}\}/g, (_, key: string) => {
            const k = key.trim()
            const matchedVar = variables.find((item) => item.key === k)
            return envVars[k] ?? matchedVar?.value ?? `{{${key}}}`
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
            params.push({id: crypto.randomUUID(), key, value, disabled: false})
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
        }).then(async (response) => {
            if (!response) return
            dispatch(setCurrentResponse({ id: currRequest.id, response }))
            if (!scriptValue?.trim()) return

            try {
                const varsObj: Record<string, string> = {}
                variables.forEach(v => { varsObj[v.key] = v.value })

                const { result, mutations, logs } = await runScript({
                    script: scriptValue,
                    response,
                    variables: varsObj,
                })

                for (const [key, value] of Object.entries(mutations)) {
                    const existing = variables.find(v => v.key === key)
                    if (value === null) {
                        if (existing) dispatch(removeVariable({ id: existing.id }))
                    } else if (existing) {
                        dispatch(updateVariable({ ...existing, value }))
                    } else {
                        dispatch(addVariable({
                            id: crypto.randomUUID(),
                            key,
                            value,
                            type: "string",
                            category: "",
                        }))
                    }
                }
                dispatch(setScriptResult({ id: currRequest.id, result }))
                dispatch(setScriptMutations({ id: currRequest.id, mutations }))
                dispatch(setScriptLogs({ id: currRequest.id, logs }))
            } catch (err: any) {
                CustomToast.error(`Script error: ${err.message}`)
            }
        }).catch(async response => {
            if (!response) return
            const blob = response?.response?.data as Blob
            const contentType = response?.response?.headers?.["content-type"] ?? ""
            const { data, size, isBinary } = blob
                ? await parseBlobResponse(blob, contentType)
                : { data: null, size: "0", isBinary: false }
            dispatch(setCurrentResponse({
                id: currRequest.id,
                response: {
                    rawRequest: buildRawRequest({
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
                    }),
                    protocol: 'HTTP/1.1',
                    responseSize: size,
                    responseTime: response?.duration,
                    statusCode: response?.response?.status,
                    data,
                    statusText: response?.response?.statusText,
                    contentType,
                    isBinary,
                }
            }))
            CustomToast.error(response.message as string);
        }).finally(() => setIsSending(false))
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!collectionData || isSending || isPulling || isPushing) return
            if (!event.ctrlKey && !event.metaKey) return
            switch (event.key) {
                case "Enter":
                    event.preventDefault()
                    handleSendRequest()
                    break
                case "s":
                    event.preventDefault()
                    push()
                    break
                case "p":
                    event.preventDefault()
                    pull()
                    break
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
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={() => setManagerOpen(true)}
                    >
                        <Settings className="h-4 w-4"/>
                    </Button>
                    <CollectionManagerDialog open={managerOpen} onOpenChange={setManagerOpen}/>
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
                    {(baseUrlOptions.length > 0) ? (
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
                    disabled={!collectionData || isSending || isTestTab(activeTabId)}
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
        </header>
    )
}

export default HeaderLayout
