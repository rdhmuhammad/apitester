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
import {selectAuth, selectSelectedRequest} from "@/app/slices/collectionSlices.ts";
import {
    removeHeader,
    selectHeader,
    selectReqParam,
    selectRequestBody,
    updateHeader,
    updateQueryParam
} from "@/app/slices/requestSlices.ts";
import type {ItemUrl} from "@/pages/editor/types/api.ts";
import {BodyEditor, type ContentType} from "@/pages/editor/components/RequestConfig/BodyEditor.tsx";

// Data Store import
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";

const IndicatorConfigTabs: React.FC = () => {
    const currRequest = useAppSelector(selectSelectedRequest)
    const dispatch = useAppDispatch()


    const enabledParams = useAppSelector((state) => {
        return selectReqParam(state).reduce((acc, dt) => {
            acc[dt.key] = dt?.disabled ? !dt.disabled : true;
            return acc;
        }, {} as Record<string, boolean>) ?? {}

    })

    const headers = useAppSelector((state) => {
        const header = selectHeader(state).map((item) => ({...item}));
        const auth = selectAuth(state);
        if (auth.bearer && auth.bearer.length > 0) {
            header.push({key: 'Authorization', value: auth.bearer[0].value})
        }

        return header
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
            dispatch(updateHeader({header: {key: 'Authorization', value: ''}}))
        } else if (authValue === 'none') {
            dispatch(removeHeader({key: "Authorization"}))
        }
    }, [authValue]);


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
                        {currRequest?.request?.url?.query?.map((item) => (
                            <div key={item.key}
                                 className={cn(
                                     "grid grid-cols-12 border-t border-slate-200 px-3 py-2",
                                     item.disabled ? "bg-gray-400" : "bg-white-300"
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
                                        onClick={() => dispatch(updateQueryParam({
                                            query: {
                                                ...item,
                                                disabled: !item.disabled
                                            }
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
                        />
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default IndicatorConfigTabs
