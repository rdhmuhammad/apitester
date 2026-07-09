import AceEditor from "react-ace";
import React, {useEffect, useRef, useState} from "react";
import type {IAceEditor} from "react-ace/lib/types";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {selectSelectedRequestScript, setSelectedRequestScript} from "@/app/slices/collectionSlices.ts";

export const ScriptEditor: React.FC = () => {
    const dispatch = useAppDispatch()
    const scriptValue = useAppSelector(selectSelectedRequestScript)
    const editorRef = useRef<IAceEditor | null>(null)
    const editorContainerRef = useRef<HTMLDivElement | null>(null)
    const [editorHeight, setEditorHeight] = useState(280)

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

    return (
        <div
            ref={editorContainerRef}
            className="min-h-[280px] resize-y overflow-auto rounded-lg border border-slate-200"
        >
            <AceEditor
                placeholder="// Add request script here"
                mode="javascript"
                theme="github"
                name="request-script-editor"
                fontSize={14}
                width="100%"
                height={`${editorHeight}px`}
                lineHeight={19}
                onLoad={(editor) => {
                    editorRef.current = editor
                }}
                onChange={(value) => {
                    dispatch(setSelectedRequestScript({script: value}))
                }}
                showPrintMargin={true}
                showGutter={true}
                value={scriptValue}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    enableMobileMenu: true,
                    useWorker: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
        </div>
    )
}

export default ScriptEditor
