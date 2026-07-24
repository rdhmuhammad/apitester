import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    useSandpack,
} from "@codesandbox/sandpack-react"
import { useEffect, useMemo, useRef } from "react"

export interface SandpackScriptEditorProps {
    value: string
    onChange: (code: string) => void
    readOnly?: boolean
}

function SyncScript({ value, onChange }: { value: string; onChange: (code: string) => void }) {
    const { sandpack } = useSandpack()
    const lastSyncedRef = useRef(value)
    const onChangeRef = useRef(onChange)
    onChangeRef.current = onChange

    useEffect(() => {
        if (value !== lastSyncedRef.current) {
            sandpack.updateFile("/index.js", value)
            lastSyncedRef.current = value
        }
    }, [value, sandpack])

    useEffect(() => {
        const code = sandpack.files["/index.js"]?.code
        if (code !== undefined && code !== lastSyncedRef.current) {
            lastSyncedRef.current = code
            onChangeRef.current(code)
        }
    }, [sandpack.files])

    return null
}

export const SandpackScriptEditor: React.FC<SandpackScriptEditorProps> = ({
    value,
    onChange,
    readOnly,
}) => {
    const files = useMemo(() => ({
        "/index.js": { code: value, active: true },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])

    return (
        <SandpackProvider
            files={files}
            customSetup={{
                entry: "/index.js",
            }}
            options={{
                autorun: false,
            }}
        >
            <SyncScript value={value} onChange={onChange} />
            <SandpackLayout>
                <SandpackCodeEditor
                    showTabs={false}
                    showLineNumbers
                    showRunButton={false}
                    wrapContent
                    readOnly={readOnly}
                />
            </SandpackLayout>
        </SandpackProvider>
    )
}
