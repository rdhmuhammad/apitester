import React, {useRef, useState} from 'react'
import {Badge} from "@/components/ui/badge.tsx";
import {Clock3, Eye, EyeOff, FileJson2, FileText, SearchIcon, ShieldCheck, ToggleLeft, ToggleRight} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {cn} from "@/lib/utils.ts";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-json";

import type {IAceEditor} from "react-ace/lib/types";
import {Card} from "@/components/ui/card.tsx";
import CustomToast from "@/components/common/toast";

type ContentType = "application/json" | "multipart/form-data";

const IndicatorConfigTabs: React.FC = () => {

    // ===============> Request Params
    const [enabledParams, setEnabledParams] = useState<Record<string, boolean>>({
        page: true,
        limit: true,
        sort: true
    });

    const [queryParams, setQueryParams] = useState([
        {key: "page", value: "1", description: "Current page number", enable: true},
        {key: "limit", value: "20", description: "Rows per page", enable: true},
        {key: "sort", value: "created_at:desc", description: "Sort order", enable: true}
    ]);
    type AuthType = "none" | "inherit" | "bearer";

    interface AuthValueProps {
        authType: AuthType;
    }

    // ===============> Authorization
    const AuthNotif: React.FC<AuthValueProps> = ({authType}) => {
        switch (authType) {
            case "none":
                return (
                    <div
                        className="flex items-center gap-2 font-medium border-orange-200 bg-orange-50 p-3 text-orange-700">
                        <ShieldCheck className="h-4 w-4"/>
                        No auth will be sent for this request.
                    </div>
                );
            case "bearer":
                return (
                    <div
                        className="flex items-center gap-2 font-medium border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
                        <ShieldCheck className="h-4 w-4"/>
                        Authorization is scoped to this request only.
                    </div>
                );
            case "inherit":
            default:
                return (
                    <div
                        className="flex items-center gap-2 font-medium border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
                        <ShieldCheck className="h-4 w-4"/>
                        Using token from parent collection
                    </div>
                );
        }
    }

    const AuthValue: React.FC<AuthValueProps> = ({authType}) => {
        switch (authType) {
            case "none":
                return (
                    <div>
                        <p className="text-sm font-medium text-slate-700">Authorization Value</p>
                        <Input className="bg-gray-100" disabled={true} type="text" readOnly/>
                    </div>
                );
            case "bearer":
                return (
                    <div>
                        <p className="text-sm font-medium text-slate-700">Bearer Token</p>
                        <Input type="password" value="****************************" readOnly/>
                    </div>
                );
            case "inherit":
            default:
                return (
                    <div>
                        <p className="text-sm font-medium text-slate-700">Inherited Authorization</p>
                        <Input className="bg-gray-100" type="text" value="****************************" readOnly/>
                    </div>
                );
        }
    };

    const [authValue, setAuthValue] = useState<AuthType>("inherit")

    // ===============> Headers
    const [headers, setHeaders] = useState([
        {key: "Content-Type", value: "application/json"},
        {key: "Authorization", value: "Bearer <token>"},
        {key: "X-Request-ID", value: "editor-sample-001"}
    ])

    const [showSysHeader, setShowSysHeader] = useState(false)

    // ===============> Request Body
    const [contentType, setContentType] = useState<ContentType>("application/json")

    type MenuState = {
        open: boolean;
        x: number;
        y: number;
        selectedText: string;
    }
    const editorRef = useRef<IAceEditor | null>(null)
    const [menu, setMenu] = useState<MenuState>({
        open: false,
        x: 0,
        y: 0,
        selectedText: ""
    })

    const onClosePopup = () => {
        setMenu((m) => (m.open ? {...m, open: false} : m))
    }

    const onEditorLoad = (editor: IAceEditor) => {
        editorRef.current = editor

        editor.container.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault()
            const selectedText = editor.getSelectedText()
            setMenu({
                open: true,
                x: ev.clientX,
                y: ev.clientY,
                selectedText
            })
        })
    }

    interface IVariable {
        key: string;
        value: string;
    }

    const [variable] = useState<IVariable[]>([
        {key: "userId", value: "1"},
        {key: "token", value: "k1lkedlqk"}
    ])
    const [searchVariable, setSearchVariable] = useState("")

    const filteredVariables = variable.filter((item) =>
        item.key.toLowerCase().includes(searchVariable.toLowerCase())
    );

    const [multipartReq, setMultipartReq] = useState([
        {key: "username", value: "ridho", type: "text", description: "username for user", enable: true},
        {key: "profile", value: null, type: "file", description: "only accept jpeg", enable: true},
    ])

    const setMultipartFieldType = (key: string) => {
        let result = multipartReq.map(dt => {
            if (dt.key === key) {
                if (dt.type === "text") {
                    dt.type = "file"
                } else {
                    dt.type = "text"
                }
            }
            return dt
        })
        setMultipartReq(result)
    }

    const renderRequestEditor = () => {
        switch (contentType) {
            case "application/json":
                return (
                    <div className="relative rounded-lg overflow-hidden">
                        <div
                            onClick={menu.open ? onClosePopup : undefined}
                        >
                            <AceEditor
                                placeholder="Request body in json"
                                mode="json"
                                theme="github"
                                name="blah2"
                                fontSize={14}
                                width="full"
                                lineHeight={19}
                                onLoad={onEditorLoad}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                setOptions={{
                                    enableBasicAutocompletion: false,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: false,
                                    enableMobileMenu: true,
                                    useWorker: false,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                }}/>
                        </div>
                        {
                            menu.open && (
                                <Card className="fixed p-2 min-h-[80px]"
                                      style={{
                                          top: menu.y,
                                          left: menu.x,
                                          zIndex: 1000,
                                      }}
                                >
                                    <div className="inline-flex items-center rounded-md border px-2 h-[25px]">
                                        <SearchIcon size={14}/>
                                        <Input className=" border-0 rounded-none shadow-none focus-visible:ring-0"
                                               size={10}
                                               placeholder="Find variable"
                                               value={searchVariable}
                                               onChange={(e) => {
                                                   setSearchVariable(e.target.value)
                                               }}
                                        />
                                    </div>
                                    <div className="mt-3 flex flex-col px-1">
                                        {filteredVariables.map((vr) => (
                                            <Button variant="ghost" size="sm" key={vr.key}
                                                    onClick={event => {
                                                        event.preventDefault()
                                                        CustomToast.success("Success modify variable data")
                                                        setMenu((menu) => ({...menu, open: false}))
                                                    }}
                                                    className="flex h-6 w-full items-center justify-start hover:bg-gray-100">
                                                    <span
                                                        className="mr-1 h-[12px] w-[12px] rounded-full bg-emerald-400"></span>
                                                <div className="text-sm leading-none">{vr.key}</div>
                                            </Button>
                                        ))}
                                    </div>
                                </Card>
                            )
                        }
                    </div>
                )
            case "multipart/form-data":
                return (
                    <div className="relative rounded-lg overflow-hidden border border-slate-200">
                        <div
                            className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                            <span className="col-span-3">Key</span>
                            <span className="col-span-3">Value</span>
                            <span className="col-span-4">Description</span>
                        </div>
                        {multipartReq.map((item) => (
                            <div key={item.key}
                                 className={cn(
                                     "grid grid-cols-12 border-t border-slate-200 px-3 py-2",
                                     item.enable ? "bg-white-300" : "bg-gray-400"
                                 )}>
                                <div className="col-span-3">
                                    <Input
                                        value={item.key}
                                        readOnly
                                        className="h-8 bg-white"
                                        disabled={!item.enable}
                                    />
                                </div>
                                <div className="col-span-3 pl-2">
                                    <div className={cn(
                                        "flex h-8 items-center rounded-md border border-slate-200 bg-white",
                                        "transition-[color,box-shadow]",
                                        " focus-within:ring-[3px] focus-within:ring-gray-300",
                                    )}>
                                        <Input
                                            value={item.value}
                                            type={item.type}
                                            onChange={(event) =>
                                                setQueryParams((prev) =>
                                                    prev.map((param) =>
                                                        param.key === item.key ? {
                                                            ...param,
                                                            value: event.target.value
                                                        } : param
                                                    ))}
                                            className={cn(
                                                "h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0",
                                                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            )}
                                            disabled={!item.enable}
                                        />
                                        <Button
                                            variant="ghost"
                                            size="xs"
                                            onClick={e=>{
                                                e.preventDefault()
                                                setMultipartFieldType(item.key)
                                            }}
                                            disabled={!item.enable}
                                            className={cn(
                                                "mr-2 select-none rounded-sm border border-slate-200",
                                                "px-2 py-0.5 text-[11px] font-medium text-slate-500 ",
                                                "hover:bg-gray-100",
                                                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            )}
                                        >
                                            {item.type}
                                        </Button>
                                    </div>

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
                                        onClick={() => {
                                            let editedReq = multipartReq.map(dt => {
                                                if (dt.key === item.key) {
                                                    dt.enable = !dt.enable
                                                }
                                                return dt
                                            })
                                            setMultipartReq(editedReq)
                                        }}
                                        className="h-8 justify-center self-end"
                                    >
                                        {item.enable ? (
                                            <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                        ) : (
                                            <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            default:
                return null
        }
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
                            <AuthValue authType={authValue}/>
                        </div>
                        <div
                            className="md:col-span-2 rounded-md border text-sm">
                            <AuthNotif authType={authValue}/>
                        </div>
                    </div>
                </TabsContent>

                {/* Headers */}
                <TabsContent value="headers" className="p-4">
                    <Button variant="ghost" size="xs"
                            className="bg-gray-100 hover:bg-gray-200 rounded-full items-center mb-4"
                            onClick={() => setShowSysHeader(!showSysHeader)}>
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
                        {headers.map((item) => (
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
                        {renderRequestEditor()}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default IndicatorConfigTabs
