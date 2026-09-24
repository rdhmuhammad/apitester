import React, {useCallback, useEffect, useMemo, useRef, useState} from "react"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {selectActiveRequestScript, selectActiveTabId, setActiveRequestScript} from "@/app/slices/collectionSlices.ts"
import {SandpackScriptEditor} from "@/components/ui/sandpack-script-editor"
import {pmCompletionSource, resCompletionSource} from "@/lib/pmCompletions"
import {type Diagnostic, linter} from "@codemirror/lint";
import {useDebouncedCallback} from "use-debounce";

export const getJavaScriptDiagnostic = (value: string): Diagnostic | null => {
    if (!value.trim()) return null

    try {
        new Function("response", "pm", value)
        return null
    } catch (error) {
        let err = error
        if (err instanceof SyntaxError && /await/i.test(err.message)) {
            try {
                new Function("response", "pm", `(async () => {\n${value}\n})`)
                return null
            } catch (asyncError) {
                err = asyncError
            }
        }

        const message = err instanceof Error ? err.message : "Invalid JavaScript"
        const positionMatch = /position (\d+)/i.exec(message)
        const lineMatch = /line (\d+)/i.exec(message)
        const tokenMatch = /Unexpected (?:token|identifier)\s+['"]?([^'"\s]+)['"]?/i.exec(message)

        let from = 0
        if (positionMatch) {
            const position = Number(positionMatch[1])
            from = Math.min(position, Math.max(value.length - 1, 0))
        } else if (lineMatch) {
            const lineNum = Number(lineMatch[1])
            const lines = value.split("\n")
            let charCount = 0
            for (let i = 0; i < Math.min(lineNum - 1, lines.length); i++) {
                charCount += lines[i].length + 1
            }
            from = Math.min(charCount, Math.max(value.length - 1, 0))
        } else if (tokenMatch && tokenMatch[1]) {
            const token = tokenMatch[1]
            const idx = value.lastIndexOf(token)
            from = idx !== -1 ? idx : Math.max(value.length - 1, 0)
        } else {
            from = Math.max(value.length - 1, 0)
        }

        return {
            from,
            to: Math.min(from + 1, value.length),
            severity: "error",
            message,
        }
    }
}

const SCRIPT_DEPENDENCIES = {"crypto-js": "^4.2.0"}
const SCRIPT_COMPLETIONS = [pmCompletionSource, resCompletionSource]

export const ScriptEditor: React.FC = () => {
    const dispatch = useAppDispatch()
    const scriptValue = useAppSelector(selectActiveRequestScript)
    const activeTabId = useAppSelector(selectActiveTabId)

    const [script, setScript] = useState(scriptValue)
    const lastDispatchedRef = useRef(scriptValue)
    const activeTabRef = useRef(activeTabId)

    const debouncedDispatch = useDebouncedCallback((code: string) => {
        lastDispatchedRef.current = code
        dispatch(setActiveRequestScript({script: code}))
    }, 300)

    useEffect(() => {
        if (activeTabRef.current !== activeTabId) {
            activeTabRef.current = activeTabId
            debouncedDispatch.cancel()
            lastDispatchedRef.current = scriptValue
            setScript(scriptValue)
            return
        }

        if (scriptValue !== lastDispatchedRef.current) {
            lastDispatchedRef.current = scriptValue
            setScript(scriptValue)
        }
    }, [activeTabId, scriptValue, debouncedDispatch])

    useEffect(() => {
        return () => {
            debouncedDispatch.cancel()
        }
    }, [debouncedDispatch])

    const scriptDiagnostic = useMemo(() => getJavaScriptDiagnostic(script), [script])

    const scriptLinter = useMemo(() => linter((view) => {
        const diagnostic = getJavaScriptDiagnostic(view.state.doc.toString())
        return diagnostic ? [diagnostic] : []
    }, {delay: 200}), [])
    const scriptExtensions = useMemo(() => [scriptLinter], [scriptLinter])

    const handleChange = useCallback((code: string) => {
        setScript(code)
        debouncedDispatch(code)
    }, [debouncedDispatch])

    return (
        <div className="relative rounded-lg overflow-hidden">
            <div className="min-h-[280px] resize-y overflow-hidden rounded-lg border border-slate-200">
                <SandpackScriptEditor
                    editorKey={activeTabId}
                    showSearch={true}
                    fileName="script.js"
                    theme="dark"
                    extensions={scriptExtensions}
                    value={script}
                    onChange={handleChange}
                    autoComplete={SCRIPT_COMPLETIONS}
                    dependencies={SCRIPT_DEPENDENCIES}
                />
            </div>
            {scriptDiagnostic && (
                <p role="alert" className="mt-2 rounded-md border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs text-red-700 dark:text-red-300">
                    Invalid JavaScript: {scriptDiagnostic.message}
                </p>
            )}
        </div>
    )
}

export default ScriptEditor
