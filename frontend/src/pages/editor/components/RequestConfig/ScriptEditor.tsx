import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts"
import { selectSelectedRequestScript, setSelectedRequestScript } from "@/app/slices/collectionSlices.ts"
import { SandpackScriptEditor } from "@/components/ui/sandpack-script-editor"

export const ScriptEditor: React.FC = () => {
    const dispatch = useAppDispatch()
    const scriptValue = useAppSelector(selectSelectedRequestScript)

    return (
        <div className="min-h-[280px] resize-y overflow-auto rounded-lg border border-slate-200">
            <SandpackScriptEditor
                value={scriptValue}
                onChange={(code) => dispatch(setSelectedRequestScript({ script: code }))}
            />
        </div>
    )
}

export default ScriptEditor
