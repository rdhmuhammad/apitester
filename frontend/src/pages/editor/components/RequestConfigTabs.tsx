import React, {useEffect, useMemo, useState} from 'react'

// Component Import
import {Badge} from "@/components/ui/badge.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {cn, getIPAddress} from "@/lib/utils.ts";
import {AuthDropdownOps, AuthLabel, type AuthType} from "@/pages/editor/components/RequestConfig/AuthContent.tsx";

// Third Party Import
import {Clock3, Eye, EyeOff, FileJson2, FileText, ToggleLeft, ToggleRight} from "lucide-react";
import {selectRequest} from "@/app/slices/collectionSlices.ts";
import type {ItemUrl} from "@/pages/editor/types/api.ts";
import {BodyEditor, type ContentType} from "@/pages/editor/components/RequestConfig/BodyEditor.tsx";

// Data Store import
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {setCurrentRequest} from '@/app/slices/collectionSlices.ts'
import {useHeaderAction} from "@/layout/view/MainLayout.tsx";

const IndicatorConfigTabs: React.FC = () => {
    const currRequest = useAppSelector(selectRequest)
    const dispatch = useAppDispatch()
    const {setHeaderAction} = useHeaderAction()

    useEffect(() => {
        setHeaderAction(flushRequest)
    }, [setHeaderAction]);

    const flushRequest = () => {
        if (!currRequest?.request) return
        currRequest.request.url.query = queryParams.filter(dt=>!dt.disabled)
        currRequest.request.header = headers.filter(dt=>!dt.disabled)
        if (!currRequest.request.body) {
            dispatch(setCurrentRequest(currRequest))
            return;
        }
        currRequest.request.body.mode = contentType
        currRequest.request.body.raw = bodyJsonCached
        currRequest.request.body.formdata = multipartEdited
        dispatch(setCurrentRequest(currRequest))
    }

    // ===============> Request Params
    const [enabledParams, setEnabledParams] = useState<Record<string, boolean>>(
        currRequest?.request?.url?.query?.reduce((acc, dt) => {
            acc[dt.key] = false;
            return acc;
        }, {} as Record<string, boolean>) ?? {}
    );
    const [queryParams, setQueryParams] = useState<ItemUrl[]>(currRequest?.request?.url?.query ?? []);

    // ===============> Authorization
    const [authValue, setAuthValue] = useState<AuthType>("inherit")

    // ===============> Headers
    const [headers, setHeaders] = useState<ItemUrl[]>(
        currRequest?.request?.header.map((h) => ({
            key: h.key,
            value: h.value,
            description: h.description,
            disabled: false
        })) ?? []
    )

    const [showSysHeader, setShowSysHeader] = useState(false)
    const [headerShow, setHeaderShow] = useState(headers)
    const sysHeader: ItemUrl[] = [
        {key: "Cache-Control", value: "no-cache"},
        {key: "User-Agent", value: "ApiTesterAgent/0.0.1"},
        {key: "Host", value: getIPAddress()},
        {key: "Accept", value: "*/**"},
        {key: "Accept-Encoding", value: "gzip, deflate, br"}
    ]
    const handleShowSysHeader = (show: boolean) => {
        setShowSysHeader(show);
        if (show) {
            setHeaderShow([
                ...headers,
                ...sysHeader
            ])
        } else {
            setHeaderShow(headers)
        }
    }

    // ===============> Request Body
    const [contentType, setContentType] = useState<ContentType>("application/json")
    const [multipartEdited, setMultipartEdited] = useState<ItemUrl[] | []>(currRequest?.request?.body?.formdata ?? [])

    const [bodyJsonEdited, setBodyJsonEdited] = useState(currRequest?.request?.body?.raw ?? "")
    const bodyJsonCached = useMemo(() => bodyJsonEdited, [bodyJsonEdited])
    const handleUpdateBody = (body: string | ItemUrl[]) => {
        typeof body === "string"
            ? setBodyJsonEdited(body) :
            setMultipartEdited(body)
    }

    return (
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                    <h2 className="text-sm font-semibold text-slate-800">Request Configuration</h2>
                    <p className="text-xs text-slate-500">Manage query params, auth, headers, and payload.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Connected</Badge>
                    <Badge variant="outline" className="text-slate-600">
                        <Clock3 className="mr-1 h-3.5 w-3.5"/>
                        Last run 4m ago
                    </Badge>
                </div>
            </div>
            <Tabs defaultValue="params" className="gap-0">
                <div className="border-b border-slate-200 px-4 pt-3">
                    <TabsList className="h-10 rounded-lg bg-slate-100">
                        <TabsTrigger value="params">Params</TabsTrigger>
                        <TabsTrigger value="auth">Authorization</TabsTrigger>
                        <TabsTrigger value="headers">Headers</TabsTrigger>
                        <TabsTrigger value="body">Body</TabsTrigger>
                    </TabsList>
                </div>

                {/* Params */}
                <TabsContent value="params" className="p-4">
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                        <div
                            className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                            <span className="col-span-3">Key</span>
                            <span className="col-span-3">Value</span>
                            <span className="col-span-4">Description</span>
                        </div>
                        {queryParams.map((item) => (
                            <div key={item.key}
                                 className={cn(
                                     "grid grid-cols-12 border-t border-slate-200 px-3 py-2",
                                     enabledParams[item.key] ? "bg-white-300" : "bg-gray-400"
                                 )}>
                                <div className="col-span-3">
                                    <Input
                                        value={item.key}
                                        readOnly
                                        className="h-8 bg-white"
                                        disabled={!enabledParams[item.key]}
                                    />
                                </div>
                                <div className="col-span-3 pl-3">
                                    <Input
                                        value={item.value}
                                        onChange={(event) =>
                                            setQueryParams((prev) =>
                                                prev.map((param) =>
                                                    param.key === item.key ? {
                                                        ...param,
                                                        value: event.target.value
                                                    } : param
                                                ))}
                                        className="h-8 bg-white"
                                        disabled={!enabledParams[item.key]}
                                    />
                                </div>
                                <div className="col-span-5 pl-3 flex items-center justify-start">
                                    <p className="text-gray-500 text-[12px]">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="col-span-1 pl-3 flex justify-end">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setEnabledParams((prev) => ({
                                            ...prev,
                                            [item.key]: !prev[item.key]
                                        }))}
                                        className="h-8 justify-center self-end"
                                    >
                                        {enabledParams[item.key] ? (
                                            <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                        ) : (
                                            <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* Authorization */}
                <TabsContent value="auth" className="p-4">
                    <div className="grid gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-slate-700">Auth Type</p>
                            <Select
                                value={authValue}
                                onValueChange={(val) => setAuthValue(val as AuthType)}
                            >
                                <SelectTrigger>
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">No Auth</SelectItem>
                                    <SelectItem value="inherit">Inherit From Parent</SelectItem>
                                    <SelectItem value="bearer">Bearer Token</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <AuthDropdownOps authType={authValue}/>
                        </div>
                        <div
                            className="md:col-span-2 rounded-md border text-sm">
                            <AuthLabel authType={authValue}/>
                        </div>
                    </div>
                </TabsContent>

                {/* Headers */}
                <TabsContent value="headers" className="p-4">
                    <Button variant="ghost" size="xs"
                            className="bg-gray-100 hover:bg-gray-200 rounded-full items-center mb-4"
                            onClick={() => handleShowSysHeader(!showSysHeader)}>
                        {showSysHeader ?
                            <>
                                <Eye className="text-slate-600" size={10}/>
                                <p className="text-[10px] font-medium text-slate-600">9 auto-generated header hidden</p>
                            </> :
                            <>
                                <EyeOff className="text-slate-600" size={10}/>
                                <p className="text-[10px] font-medium text-slate-600">Hide 9 auto-generated header</p>
                            </>
                        }
                    </Button>
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                        <div
                            className="grid grid-cols-8 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                            <span className="col-span-3">Header</span>
                            <span className="col-span-5">Value</span>
                        </div>
                        {headerShow.map((item) => (
                            <div key={item.key}
                                 className="grid grid-cols-8 border-t border-slate-200 px-3 py-2">
                                <div className="col-span-3">
                                    <Input value={item.key} readOnly className="h-8 bg-white"/>
                                </div>
                                <div className="col-span-5 pl-3">
                                    <Input value={item.value} readOnly className="h-8 bg-white"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* Request Body */}
                <TabsContent value="body" className="p-4">
                    <div className="space-y-3">
                        {/*Dropdown*/}
                        <div className="flex items-center justify-between">
                            <Select value={contentType}
                                    onValueChange={val => {
                                        setContentType(val as ContentType)
                                    }}>
                                <SelectTrigger>
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="application/json">
                                        <FileJson2 className="h-4 w-4 text-indigo-500"/>
                                        JSON Payload
                                    </SelectItem>
                                    <SelectItem value="multipart/form-data">
                                        <FileText className="h-4 w-4 text-indigo-500"/>
                                        Multipart Form
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Badge variant="outline" className="text-slate-600">{contentType}</Badge>
                        </div>
                        <BodyEditor
                            contentType={contentType}
                            bodyJSON={currRequest?.request?.body?.raw ?? ""}
                            multipart={currRequest?.request?.body?.formdata ?? []}
                            handleUpdateBody={handleUpdateBody}
                        />
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default IndicatorConfigTabs
