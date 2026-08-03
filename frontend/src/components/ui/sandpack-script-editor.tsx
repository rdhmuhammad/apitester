import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    useSandpack,
} from "@codesandbox/sandpack-react"
import { autocompletion, completionKeymap, type CompletionSource } from "@codemirror/autocomplete"
import { useEffect, useMemo, useRef } from "react"

export interface SandpackScriptEditorProps {
    value: string
    onChange: (code: string) => void
    readOnly?: boolean
    editorKey?: string
    autoComplete?: boolean | CompletionSource[]
}

function SyncScript({ onChange }: { onChange: (code: string) => void }) {
    const { sandpack } = useSandpack()
    const lastCodeRef = useRef(sandpack.files["/index.js"]?.code ?? "")
    const onChangeRef = useRef(onChange)
    onChangeRef.current = onChange

    useEffect(() => {
        const code = sandpack.files["/index.js"]?.code
        if (code !== undefined && code !== lastCodeRef.current) {
            lastCodeRef.current = code
            onChangeRef.current(code)
        }
    }, [sandpack.files])

    return null
}

export const SandpackScriptEditor: React.FC<SandpackScriptEditorProps> = ({
                                                                              value,
                                                                              onChange,
                                                                              readOnly,
                                                                              editorKey,
                                                                              autoComplete = false,
                                                                          }) => {
    const files = useMemo(() => ({
        "/index.js": { code: value, active: true },
    }), [value])

    const editorExtensions = useMemo(() => {
        if (!autoComplete) return undefined
        if (autoComplete === true) return {
            extensions: [autocompletion()],
            extensionsKeymap: [completionKeymap],
        }
        return {
            extensions: [autocompletion({ override: autoComplete })],
            extensionsKeymap: [completionKeymap],
        }
    }, [autoComplete])

    return (
        <SandpackProvider
            key={editorKey}
            files={files}
            customSetup={{
                entry: "/index.js",
            }}
            options={{
                autorun: false,
            }}
        >
            <SyncScript onChange={onChange} />
            <SandpackLayout>
                <SandpackCodeEditor
                    showTabs={false}
                    showLineNumbers
                    showRunButton={false}
                    wrapContent
                    readOnly={readOnly}
                    {...editorExtensions}
                />
            </SandpackLayout>
        </SandpackProvider>
    )
}