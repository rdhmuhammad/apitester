import React, { useMemo } from "react"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts"
import { selectActiveTabId, selectActiveRequestScript, setActiveRequestScript } from "@/app/slices/collectionSlices.ts"
import { SandpackScriptEditor } from "@/components/ui/sandpack-script-editor"
import { pmCompletionSource, resCompletionSource } from "@/lib/completions.ts"

export const ScriptEditor: React.FC = () => {
    const dispatch = useAppDispatch()
    const scriptValue = useAppSelector(selectActiveRequestScript)
    const activeTabId = useAppSelector(selectActiveTabId)
    const completionSources = useMemo(() => [pmCompletionSource, resCompletionSource], [])

    return (
        <div className="min-h-[280px] resize-y overflow-auto rounded-lg border border-slate-200">
            <SandpackScriptEditor
                editorKey={activeTabId}
                value={scriptValue}
                onChange={(code) => dispatch(setActiveRequestScript({ script: code }))}
                autoComplete={completionSources}
            />
        </div>
    )
}

export default ScriptEditor