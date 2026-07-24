import 'ace-builds/src-noconflict/ace.js'
import 'ace-builds/src-noconflict/mode-json.js'
import AceEditor from "react-ace";
import {Card} from "@/components/ui/card.tsx";
import {SearchIcon, ToggleLeft, ToggleRight, Trash2, Plus} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import CustomToast from "@/components/common/toast";
import {cn} from "@/lib/utils.ts";
import React, {useEffect, useRef, useState} from "react";
import type {IAceEditor} from "react-ace/lib/types";
import type {ItemUrl} from "@/pages/editor/types/api.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {selectRequestBody, setBody} from "@/app/slices/requestSlices.ts";
import {setFile, removeFile} from "@/lib/fileStore.ts";

export type ContentType = "application/json" | "multipart/form-data";

interface IBodyEditor {
    contentType: ContentType
}

export const BodyEditor: React.FC<IBodyEditor> = (
    {
        contentType,
    }) => {

    const selectBody = useAppSelector(selectRequestBody);
    const dispatch = useAppDispatch()

    type MenuState = {
        open: boolean;
        x: number;
        y: number;
        selectedText: string;
    }

    const editorRef = useRef<IAceEditor | null>(null)
    const editorContainerRef = useRef<HTMLDivElement | null>(null)
    const [editorHeight, setEditorHeight] = useState(280)
    const [menu, setMenu] = useState<MenuState>({
        open: false,
        x: 0,
        y: 0,
        selectedText: ""
    })

    useEffect(() => {
        const container = editorContainerRef.current
        if (!container) return

        setEditorHeight(container.clientHeight)

        const resizeObserver = new ResizeObserver((entries) => {
            const nextHeight = entries[0]?.contentRect.height
            if (!nextHeight) return
            setEditorHeight(nextHeight)
            editorRef.current?.editor.resize()
        })

        resizeObserver.observe(container)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    const onClosePopup = () => {
        setMenu((m) => (m.open ? {...m, open: false} : m))
    }

    const onEditorLoad = (editor: IAceEditor) => {
        editorRef.current = editor

        editor.container.addEventListener("contextmenu", (ev: MouseEvent) => {
            const selectedText = editor.getSelectedText()
            if (selectedText) {
                ev.preventDefault()
                setMenu({
                    open: true,
                    x: ev.clientX,
                    y: ev.clientY,
                    selectedText
                })
            }
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

    const toggleMultipartField = (field: keyof ItemUrl, pId: string) => {
        const body = (selectBody?.formdata ?? []).map((item) => {
            if (item.id !== pId) return item;
            const nextValue =
                field === "disabled"
                    ? !item[field]
                    : item[field] === "text" ? "file" : "text"
            const updated = {
                ...item,
                [field]: nextValue
            };
            if (field === "type") {
                updated.value = ""
                updated.src = ""
                if (nextValue === "text") removeFile(pId)
            }
            return updated as ItemUrl;
        })
        dispatch(setBody({body: body}))
    }

    const updateFormdataField = (pId: string, field: keyof ItemUrl, value: string | boolean) => {
        const body = (selectBody?.formdata ?? []).map((item) =>
            item.id === pId ? {...item, [field]: value} : item
        )
        dispatch(setBody({body: body}))
    }

    const removeFormdataField = (pId: string) => {
        removeFile(pId)
        const body = (selectBody?.formdata ?? []).filter((item) => item.id !== pId)
        dispatch(setBody({body: body}))
    }

    const addFormdataField = (key: string, value: string, description: string, type: string) => {
        const id = crypto.randomUUID()
        const newVar: ItemUrl = {id, key, value, description, type, src: type === 'file' ? value : ""}
        if (type === 'file' && newFileRef.current) {
            setFile(id, newFileRef.current)
            newFileRef.current = null
        }
        const body = [...(selectBody?.formdata ?? []), newVar]
        dispatch(setBody({body: body}))
    }

    const [newFdKey, setNewFdKey] = useState("")
    const [newFdValue, setNewFdValue] = useState("")
    const [newFdValueType, setNewFdValueType] = useState<"file" | "text">("text")
    const [newFdDesc, setNewFdDesc] = useState("")
    const newFileRef = useRef<File | null>(null)

    switch (contentType) {
        case "application/json":
            return (
                <div className="relative rounded-lg overflow-hidden">
                    <div
                        ref={editorContainerRef}
                        className="min-h-[280px] resize-y overflow-auto rounded-lg border border-slate-200"
                        onClick={menu.open ? onClosePopup : undefined}
                    >
                        <AceEditor
                            placeholder="Request body in json"
                            mode="json"
                            theme="github"
                            name="blah2"
                            fontSize={14}
                            width="100%"
                            height={`${editorHeight}px`}
                            lineHeight={19}
                            onLoad={onEditorLoad}
                            onChange={e => {
                                dispatch(setBody({body: e}))
                            }}
                            showPrintMargin={true}
                            showGutter={true}
                            value={selectBody?.raw ?? ""}
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
                        <span className="col-span-2"/>
                    </div>
                    {selectBody?.formdata?.map((item) => (
                        <div key={item.id ?? item.key}
                             className={cn(
                                 "grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center",
                                 item.disabled && "opacity-50"
                             )}>
                            <div className="col-span-3">
                                <Input
                                    value={item.key}
                                    onChange={(e) => updateFormdataField(item.id!, "key", e.target.value)}
                                    className="h-8 bg-white"
                                    disabled={item.disabled}
                                />
                            </div>
                            <div className="col-span-3 pl-2">
                                <div className={cn(
                                    "flex h-8 items-center justify-between rounded-md border border-slate-200 bg-white",
                                    "transition-[color,box-shadow]",
                                    " focus-within:ring-[3px] focus-within:ring-gray-300",
                                )}>
                                    {item.type === "file" ? (
                                        <div className="ml-2">
                                            <input
                                                id={`file-${item.id}`}
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0]
                                                    if (file) {
                                                        setFile(item.id!, file)
                                                        updateFormdataField(item.id!, "src", file.name)
                                                    }
                                                }}
                                                disabled={item.disabled}
                                            />
                                            <label
                                                htmlFor={`file-${item.id}`}
                                                className="cursor-pointer rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 hover:bg-slate-200"
                                            >
                                                {item.src ? item.src : "Choose File"}
                                            </label>
                                        </div>
                                    ) : (
                                        <Input
                                            value={item.value}
                                            onChange={(event) => updateFormdataField(item.id!, "value", event.target.value)}
                                            className={cn(
                                                "h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0",
                                                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            )}
                                            disabled={item.disabled}
                                            placeholder="value"
                                        />
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="xs"
                                        onClick={e => {
                                            e.preventDefault()
                                            toggleMultipartField("type", item.id!)
                                        }}
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
                            <div className="col-span-4 pl-3">
                                <Input
                                    value={item.description ?? ""}
                                    onChange={(e) => updateFormdataField(item.id!, "description", e.target.value)}
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
                                        onClick={() => toggleMultipartField("disabled", item.id!)}
                                    className="h-8 w-8 p-0"
                                >
                                    {!item.disabled ? (
                                        <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                    ) : (
                                        <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                    )}
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                        onClick={() => removeFormdataField(item.id!)}
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                    <Trash2 className="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center">
                        <div className="col-span-3">
                            <Input
                                value={newFdKey}
                                onChange={(e) => setNewFdKey(e.target.value)}
                                className="h-8"
                                placeholder="key"
                            />
                        </div>
                            <div className="col-span-3 pl-2">
                                <div className={cn(
                                    "flex h-8 items-center justify-between rounded-md border border-slate-200 bg-white",
                                    "transition-[color,box-shadow]",
                                    " focus-within:ring-[3px] focus-within:ring-gray-300",
                                )}>
                                    {newFdValueType === "file" ? (
                                        <div className="ml-2">
                                            <input
                                                id="file-new-fd"
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0]
                                                    if (file) {
                                                        newFileRef.current = file
                                                        setNewFdValue(file.name)
                                                        setNewFdValueType("file")
                                                    }
                                                }}
                                            />
                                            <label
                                                htmlFor={`file-new-fd`}
                                                className="cursor-pointer rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 hover:bg-slate-200"
                                            >
                                                {newFdValue ? newFdValue : "Choose File"}
                                            </label>
                                        </div>
                                    ) : (
                                        <Input
                                            onChange={(event) => {
                                                setNewFdValue(event.target.value)
                                                setNewFdValueType("text")
                                            }}
                                            value={newFdValue}
                                            className={cn(
                                                "h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0",
                                                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            )}
                                            placeholder="value"
                                        />
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="xs"
                                        onClick={e => {
                                            e.preventDefault()
                                            setNewFdValueType(newFdValueType === "file" ? "text" : "file")
                                        }}
                                        className={cn(
                                            "mr-2 select-none rounded-sm border border-slate-200",
                                            "px-2 py-0.5 text-[11px] font-medium text-slate-500 ",
                                            "hover:bg-gray-100",
                                            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                        )}
                                    >
                                        {newFdValueType}
                                    </Button>
                                </div>
                            </div>
                        <div className="col-span-4 pl-3">
                            <Input
                                value={newFdDesc}
                                onChange={(e) => setNewFdDesc(e.target.value)}
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
                                    if (!newFdKey.trim()) return
                                    addFormdataField(newFdKey.trim(), newFdValue, newFdDesc, newFdValueType)
                                    setNewFdKey("")
                                    setNewFdValue("")
                                    setNewFdDesc("")
                                }}
                                className="h-8 w-8 p-0"
                            >
                                <Plus className="h-4 w-4"/>
                            </Button>
                        </div>
                    </div>
                </div>
            )
        default:
            return null
    }
}
