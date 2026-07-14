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
import {Eye, EyeOff, FileJson2, FileText, Plus, ToggleLeft, ToggleRight, Trash2} from "lucide-react";
import {selectAuth, selectRequest} from "@/app/slices/collectionSlices.ts";
import {
    addHeader,
    addQueryParam,
    removeHeader,
    removeQueryParam,
    selectHeader,
    selectReqParam,
    updateHeader,
    updateQueryParam
} from "@/app/slices/requestSlices.ts";
import type {ItemUrl} from "@/pages/editor/types/api.ts";
import {BodyEditor, type ContentType} from "@/pages/editor/components/RequestConfig/BodyEditor.tsx";
import ScriptEditor from "@/pages/editor/components/RequestConfig/ScriptEditor.tsx";

// Data Store import
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";

const IndicatorConfigTabs: React.FC = () => {
    const currRequest = useAppSelector(selectRequest)
    const dispatch = useAppDispatch()


    const enabledParams = useAppSelector((state) => {
        return selectReqParam(state).reduce((acc, dt) => {
            acc[dt.key] = dt?.disabled ? !dt.disabled : true;
            return acc;
        }, {} as Record<string, boolean>) ?? {}

    })


    const rootAuth = useAppSelector(selectAuth)

    // ===============> Authorization
    const [authValue, setAuthValue] = useState<AuthType>("inherit")
    useEffect(() => {
        if (authValue === 'inherit') {
            dispatch(updateHeader({
                header: {
                    key: 'Authorization',
                    value: (rootAuth.bearer && rootAuth.bearer[0].value) ?? ''
                }
            }))
        } else if (authValue === 'bearer') {
            dispatch(removeHeader({key: 'Authorization'}))
            dispatch(updateHeader({header: {key: 'Authorization', value: ''}}))
        } else if (authValue === 'none') {
            dispatch(removeHeader({key: 'Authorization'}))
        }
    }, [authValue]);

    // ===============> Headers
    const headers = useAppSelector(selectHeader)

    const [showSysHeader, setShowSysHeader] = useState(false)
    const sysHeader: ItemUrl[] = [
        {key: "Cache-Control", value: "no-cache"},
        {key: "User-Agent", value: "ApiTesterAgent/0.0.1"},
        {key: "Host", value: getIPAddress()},
        {key: "Accept", value: "*/**"},
        {key: "Accept-Encoding", value: "gzip, deflate, br"}
    ]

    const headerShow = useMemo(() => {
        if (!showSysHeader) return headers
        return [...headers, ...sysHeader]
    }, [headers, showSysHeader])

    // ===============> Add Param State
    const [newParamKey, setNewParamKey] = useState("")
    const [newParamValue, setNewParamValue] = useState("")
    const [newParamDesc, setNewParamDesc] = useState("")

    // ===============> Add Header State
    const [newHeaderKey, setNewHeaderKey] = useState("")
    const [newHeaderValue, setNewHeaderValue] = useState("")

    // ===============> Request Body
    const [contentType, setContentType] = useState<ContentType>("application/json")
    useEffect(() => {
        dispatch(updateHeader({
            header: {
                key: 'Content-Type',
                value: contentType,
                disabled: false
            }
        }))
    }, [contentType]);

    return (
        <section className="rounded-b-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                    <h2 className="text-sm font-semibold text-slate-800">Request Configuration</h2>
                    <p className="text-xs text-slate-500">Manage query params, auth, headers, and payload.</p>
                </div>
                {/*<div className="flex items-center gap-2">*/}
                {/*    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Connected</Badge>*/}
                {/*    <Badge variant="outline" className="text-slate-600">*/}
                {/*        <Clock3 className="mr-1 h-3.5 w-3.5"/>*/}
                {/*        Last run 4m ago*/}
                {/*    </Badge>*/}
                {/*</div>*/}
            </div>
            <Tabs defaultValue="params" className="gap-0">
                <div className="border-b border-slate-200 px-4 pt-3">
                    <TabsList className="h-10 rounded-lg bg-slate-100">
                        <TabsTrigger value="params">Params</TabsTrigger>
                        <TabsTrigger value="auth">Authorization</TabsTrigger>
                        <TabsTrigger value="headers">Headers</TabsTrigger>
                        <TabsTrigger value="body">Body</TabsTrigger>
                        <TabsTrigger value="scripts">Scripts</TabsTrigger>
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
                            <span className="col-span-2"/>
                        </div>
                        {currRequest?.request?.url?.query?.map((item) => (
                            <div key={item.key}
                                 className={cn(
                                     "grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center",
                                     item.disabled && "opacity-50"
                                 )}>
                                <div className="col-span-3">
                                    <Input
                                        value={item.key}
                                        readOnly
                                        className="h-8 bg-white"
                                        disabled={item.disabled}
                                    />
                                </div>
                                <div className="col-span-3 pl-3">
                                    <Input
                                        value={item.value}
                                        onChange={(event) => dispatch(updateQueryParam({
                                            query: {...item, value: event.target.value}
                                        }))}
                                        className="h-8 bg-white"
                                        disabled={item.disabled}
                                    />
                                </div>
                                <div className="col-span-4 pl-3 flex items-center justify-start">
                                    <Input
                                        value={item.description ?? ""}
                                        onChange={(event) => dispatch(updateQueryParam({
                                            query: {...item, description: event.target.value}
                                        }))}
                                        className="h-8 bg-white text-xs text-gray-500"
                                        disabled={item.disabled}
                                        placeholder="description"
                                    />
                                </div>
                                <div className="col-span-2 pl-3 flex items-center justify-end gap-1">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => dispatch(updateQueryParam({
                                            query: {
                                                ...item,
                                                disabled: !item.disabled
                                            }
                                        }))}
                                        className="h-8 w-8 p-0"
                                    >
                                        {enabledParams[item.key] ? (
                                            <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                        ) : (
                                            <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => dispatch(removeQueryParam({key: item.key}))}
                                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4"/>
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {/* Add Param Row */}
                        <div className="grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center">
                            <div className="col-span-3">
                                <Input
                                    value={newParamKey}
                                    onChange={(e) => setNewParamKey(e.target.value)}
                                    className="h-8"
                                    placeholder="key"
                                />
                            </div>
                            <div className="col-span-3 pl-3">
                                <Input
                                    value={newParamValue}
                                    onChange={(e) => setNewParamValue(e.target.value)}
                                    className="h-8"
                                    placeholder="value"
                                />
                            </div>
                            <div className="col-span-4 pl-3">
                                <Input
                                    value={newParamDesc}
                                    onChange={(e) => setNewParamDesc(e.target.value)}
                                    className="h-8 text-xs"
                                    placeholder="description"
                                />
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        if (!newParamKey.trim()) return
                                        dispatch(addQueryParam({
                                            query: {
                                                key: newParamKey.trim(),
                                                value: newParamValue,
                                                description: newParamDesc,
                                            }
                                        }))
                                        setNewParamKey("")
                                        setNewParamValue("")
                                        setNewParamDesc("")
                                    }}
                                    className="h-8 w-8 p-0"
                                >
                                    <Plus className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
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
                            onClick={() => setShowSysHeader((current) => !current)}>
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
                            className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                            <span className="col-span-5">Header</span>
                            <span className="col-span-5">Value</span>
                            <span className="col-span-2"/>
                        </div>
                        {headerShow.map((item) => (
                            <div key={item.key}
                                 className={cn(
                                     "grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center",
                                     item.disabled && "opacity-50"
                                 )}>
                                <div className="col-span-5">
                                    <Input value={item.key} readOnly className="h-8 bg-white"
                                           disabled={item.disabled}/>
                                </div>
                                <div className="col-span-5 pl-3">
                                    <Input
                                        value={item.value}
                                        onChange={(event) => dispatch(updateHeader({
                                            header: {...item, value: event.target.value}
                                        }))}
                                        className="h-8 bg-white"
                                        disabled={item.disabled}
                                    />
                                </div>
                                <div className="col-span-2 pl-3 flex items-center justify-end gap-1">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => dispatch(updateHeader({
                                            header: {...item, disabled: !item.disabled}
                                        }))}
                                        className="h-8 w-8 p-0"
                                    >
                                        {item.disabled ? (
                                            <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                        ) : (
                                            <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => dispatch(removeHeader({key: item.key}))}
                                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4"/>
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {/* Add Header Row */}
                        <div className="grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center">
                            <div className="col-span-5">
                                <Input
                                    value={newHeaderKey}
                                    onChange={(e) => setNewHeaderKey(e.target.value)}
                                    className="h-8"
                                    placeholder="header key"
                                />
                            </div>
                            <div className="col-span-5 pl-3">
                                <Input
                                    value={newHeaderValue}
                                    onChange={(e) => setNewHeaderValue(e.target.value)}
                                    className="h-8"
                                    placeholder="header value"
                                />
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        if (!newHeaderKey.trim()) return
                                        dispatch(addHeader({
                                            header: {
                                                key: newHeaderKey.trim(),
                                                value: newHeaderValue,
                                            }
                                        }))
                                        setNewHeaderKey("")
                                        setNewHeaderValue("")
                                    }}
                                    className="h-8 w-8 p-0"
                                >
                                    <Plus className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
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
                        />
                    </div>
                </TabsContent>

                <TabsContent value="scripts" className="p-4">
                    <div className="space-y-3">
                        <ScriptEditor/>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default IndicatorConfigTabs
