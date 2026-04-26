import AceEditor from "react-ace";
import {Card} from "@/components/ui/card.tsx";
import {SearchIcon, ToggleLeft, ToggleRight} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import CustomToast from "@/components/common/toast";
import {cn} from "@/lib/utils.ts";
import React, {useRef, useState} from "react";
import type {IAceEditor} from "react-ace/lib/types";
import type {ItemUrl} from "@/pages/editor/types/api.ts";

export type ContentType = "application/json" | "multipart/form-data";

interface IBodyEditor {
    contentType: ContentType
    bodyJSON: string
    multipart: ItemUrl[]
    handleUpdateBody: (body: string | ItemUrl[]) => void
}

export const BodyEditor: React.FC<IBodyEditor> = (
    {
        contentType,
        bodyJSON,
        multipart,
        handleUpdateBody
    }) => {
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

    const toggleMultipartField = (field: keyof ItemUrl, pKey: string) => {
        multipart.forEach((item) => {
            if (item.key !== pKey) return item;
            const nextValue =
                field === "disabled"
                    ? !item[field] :
                    item[field] === "text" ? "file" : "text"
            return {
                ...item,
                [field]: nextValue
            };
        })
        handleUpdateBody(multipart)
    }

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
                            onChange={handleUpdateBody}
                            showPrintMargin={true}
                            showGutter={true}
                            value={bodyJSON ?? ""}
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
                    {multipart ? multipart.map((item) => (
                        <div key={item.key}
                             className={cn(
                                 "grid grid-cols-12 border-t border-slate-200 px-3 py-2",
                                 !item.disabled ? "bg-white-300" : "bg-gray-400"
                             )}>
                            <div className="col-span-3">
                                <Input
                                    value={item.key}
                                    readOnly
                                    className="h-8 bg-white"
                                    disabled={item.disabled}
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
                                        onChange={(event) => {
                                            multipart.forEach((param) =>
                                                param.key === item.key ? {
                                                    ...param,
                                                    value: event.target.value
                                                } : param
                                            )
                                            handleUpdateBody(multipart)
                                        }}
                                        className={cn(
                                            "h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0",
                                            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                        )}
                                        disabled={item.disabled}
                                    />
                                    <Button
                                        variant="ghost"
                                        size="xs"
                                        onClick={e => {
                                            e.preventDefault()
                                            toggleMultipartField("type", item.key)
                                        }}
                                        disabled={item.disabled}
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
                                        toggleMultipartField("disabled", item.key)
                                    }}
                                    className="h-8 justify-center self-end"
                                >
                                    {!item.disabled ? (
                                        <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                    ) : (
                                        <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                    )}
                                </Button>
                            </div>
                        </div>
                    )) : <></>}
                </div>
            )
        default:
            return null
    }
}