import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    useSandpack,
    type CodeEditorRef,
    type SandpackThemeProp,
} from "@codesandbox/sandpack-react"
import { autocompletion, completionKeymap, acceptCompletion, type CompletionSource } from "@codemirror/autocomplete"
import {
    search,
    searchKeymap,
    highlightSelectionMatches,
    openSearchPanel,
    closeSearchPanel,
    searchPanelOpen,
} from "@codemirror/search"
import type { Extension } from "@codemirror/state"
import { EditorView, tooltips, keymap } from "@codemirror/view"
import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type MouseEvent as ReactMouseEvent,
    type KeyboardEvent as ReactKeyboardEvent,
} from "react"
import { Search } from "lucide-react"

export interface SandpackScriptEditorProps {
    value: string
    onChange?: (code: string) => void
    readOnly?: boolean
    showReadOnly?: boolean
    showLineNumbers?: boolean
    editorKey?: string
    autoComplete?: boolean | CompletionSource[]
    completionSources?: CompletionSource[]
    fileName?: string
    extensions?: Extension[]
    className?: string
    style?: React.CSSProperties
    theme?: SandpackThemeProp
    onSelectionContextMenu?: (selectedText: string, position: { x: number; y: number }) => void
    showSearch?: boolean
    dependencies?: Record<string, string>
    devDependencies?: Record<string, string>
    extraFiles?: Record<string, string | { code: string; hidden?: boolean; active?: boolean }>
}

const darkAutocompleteTheme = EditorView.theme({
    ".cm-tooltip": {
        backgroundColor: "#18181b !important",
        border: "1px solid #3f3f46 !important",
        color: "#f4f4f5 !important",
        borderRadius: "6px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6)",
        zIndex: "9999 !important",
        pointerEvents: "auto !important",
    },
    ".cm-tooltip.cm-tooltip-autocomplete": {
        borderRadius: "6px",
        overflow: "hidden",
        "& > ul": {
            fontFamily: "var(--font-mono, monospace)",
            padding: "4px 0",
            maxHeight: "16em",
            minWidth: "260px",
            scrollbarWidth: "thin",
            scrollbarColor: "#3f3f46 transparent",
        },
        "& > ul > li": {
            padding: "5px 10px",
            lineHeight: "1.4",
            color: "#e4e4e7",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
        },
        "& > ul > li[aria-selected]": {
            backgroundColor: "#2563eb !important",
            color: "#ffffff !important",
        },
        "& > ul > li:hover:not([aria-selected])": {
            backgroundColor: "#27272a !important",
        },
        "& > ul > completion-section": {
            borderBottom: "1px solid #3f3f46",
            color: "#a1a1aa",
            fontSize: "11px",
            padding: "4px 8px",
            opacity: "0.8",
        },
    },
    ".cm-completionMatchedText": {
        color: "#60a5fa !important",
        textDecoration: "underline",
        fontWeight: "600",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionMatchedText": {
        color: "#ffffff !important",
        textDecoration: "underline",
        fontWeight: "700",
    },
    ".cm-completionDetail": {
        color: "#a1a1aa",
        fontStyle: "italic",
        marginLeft: "auto",
        fontSize: "11px",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionDetail": {
        color: "#dbeafe !important",
    },
    ".cm-completionIcon": {
        opacity: "0.85",
        width: "1.2em",
        display: "inline-block",
        textAlign: "center",
        marginRight: "4px",
        fontSize: "12px",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionIcon": {
        color: "#ffffff !important",
        opacity: "1",
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
        color: "#a78bfa",
    },
    ".cm-completionIcon-variable, .cm-completionIcon-property": {
        color: "#38bdf8",
    },
    ".cm-completionIcon-keyword": {
        color: "#f472b6",
    },
    ".cm-completionIcon-class, .cm-completionIcon-interface": {
        color: "#fbbf24",
    },
    ".cm-completionIcon-constant": {
        color: "#34d399",
    },
    ".cm-completionIcon-type": {
        color: "#818cf8",
    },
    ".cm-tooltip.cm-completionInfo": {
        backgroundColor: "#18181b !important",
        border: "1px solid #3f3f46 !important",
        color: "#f4f4f5 !important",
        borderRadius: "6px",
        padding: "8px 12px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.6)",
        fontSize: "12px",
        lineHeight: "1.5",
    },
    ".cm-panels": {
        backgroundColor: "#18181b !important",
        color: "#f4f4f5 !important",
        zIndex: "20 !important",
    },
    ".cm-panels.cm-panels-top": {
        borderBottom: "1px solid #27272a !important",
    },
    ".cm-panels.cm-panels-bottom": {
        borderTop: "1px solid #27272a !important",
    },
    ".cm-panel.cm-search": {
        backgroundColor: "#18181b !important",
        color: "#f4f4f5 !important",
        padding: "6px 28px 6px 10px !important",
        fontFamily: "var(--font-sans, system-ui, sans-serif) !important",
        fontSize: "12px !important",
        display: "flex !important",
        flexWrap: "wrap !important",
        alignItems: "center !important",
        gap: "4px 6px !important",
        position: "relative !important",
    },
    ".cm-panel.cm-search [name=close]": {
        position: "absolute !important",
        top: "6px !important",
        right: "6px !important",
        cursor: "pointer !important",
        color: "#a1a1aa !important",
        backgroundColor: "transparent !important",
        border: "none !important",
        borderRadius: "4px !important",
        width: "20px !important",
        height: "20px !important",
        padding: "0 !important",
        fontSize: "16px !important",
        lineHeight: "1 !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        justifyContent: "center !important",
        transition: "background-color 0.15s, color 0.15s",
    },
    ".cm-panel.cm-search [name=close]:hover": {
        backgroundColor: "#27272a !important",
        color: "#ffffff !important",
    },
    ".cm-panel.cm-search input.cm-textfield": {
        backgroundColor: "#27272a !important",
        color: "#f4f4f5 !important",
        border: "1px solid #3f3f46 !important",
        borderRadius: "4px !important",
        padding: "2px 8px !important",
        fontSize: "12px !important",
        fontFamily: "var(--font-mono, monospace) !important",
        outline: "none !important",
        minWidth: "130px !important",
        maxWidth: "200px !important",
        height: "24px !important",
        margin: "0 !important",
        transition: "border-color 0.15s, box-shadow 0.15s",
    },
    ".cm-panel.cm-search input.cm-textfield:focus": {
        borderColor: "#3b82f6 !important",
        boxShadow: "0 0 0 1px #3b82f6 !important",
    },
    ".cm-panel.cm-search button.cm-button": {
        backgroundColor: "#27272a !important",
        color: "#e4e4e7 !important",
        border: "1px solid #3f3f46 !important",
        borderRadius: "4px !important",
        padding: "2px 8px !important",
        height: "24px !important",
        fontSize: "11px !important",
        fontWeight: "500 !important",
        cursor: "pointer !important",
        margin: "0 !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        justifyContent: "center !important",
        transition: "background-color 0.15s, color 0.15s",
    },
    ".cm-panel.cm-search button.cm-button:hover": {
        backgroundColor: "#3f3f46 !important",
        color: "#ffffff !important",
    },
    ".cm-panel.cm-search button.cm-button:active": {
        backgroundColor: "#52525b !important",
    },
    ".cm-panel.cm-search label": {
        fontSize: "11px !important",
        color: "#a1a1aa !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        gap: "4px !important",
        cursor: "pointer !important",
        margin: "0 2px !important",
        userSelect: "none !important",
    },
    ".cm-panel.cm-search label:hover": {
        color: "#f4f4f5 !important",
    },
    ".cm-panel.cm-search input[type=checkbox]": {
        accentColor: "#2563eb",
        cursor: "pointer",
        margin: "0 !important",
    },
    ".cm-panel.cm-search br": {
        flexBasis: "100% !important",
        height: "0px !important",
        margin: "0 !important",
        display: "block !important",
    },
    ".cm-searchMatch": {
        backgroundColor: "rgba(234, 179, 8, 0.35) !important",
        outline: "1px solid rgba(234, 179, 8, 0.6) !important",
        borderRadius: "2px",
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "rgba(249, 115, 22, 0.55) !important",
        outline: "1px solid rgba(249, 115, 22, 0.9) !important",
        borderRadius: "2px",
    },
    ".cm-selectionMatch": {
        backgroundColor: "rgba(59, 130, 246, 0.25) !important",
        borderRadius: "2px",
    },
}, { dark: true })

const lightAutocompleteTheme = EditorView.theme({
    ".cm-tooltip": {
        backgroundColor: "#ffffff !important",
        border: "1px solid #e2e8f0 !important",
        color: "#0f172a !important",
        borderRadius: "6px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        zIndex: "9999 !important",
        pointerEvents: "auto !important",
    },
    ".cm-tooltip.cm-tooltip-autocomplete": {
        borderRadius: "6px",
        overflow: "hidden",
        "& > ul": {
            fontFamily: "var(--font-mono, monospace)",
            padding: "4px 0",
            maxHeight: "16em",
            minWidth: "260px",
            scrollbarWidth: "thin",
            scrollbarColor: "#cbd5e1 transparent",
        },
        "& > ul > li": {
            padding: "5px 10px",
            lineHeight: "1.4",
            color: "#334155",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
        },
        "& > ul > li[aria-selected]": {
            backgroundColor: "#2563eb !important",
            color: "#ffffff !important",
        },
        "& > ul > li:hover:not([aria-selected])": {
            backgroundColor: "#f1f5f9 !important",
        },
        "& > ul > completion-section": {
            borderBottom: "1px solid #e2e8f0",
            color: "#64748b",
            fontSize: "11px",
            padding: "4px 8px",
            opacity: "0.8",
        },
    },
    ".cm-completionMatchedText": {
        color: "#2563eb !important",
        textDecoration: "underline",
        fontWeight: "600",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionMatchedText": {
        color: "#ffffff !important",
        textDecoration: "underline",
        fontWeight: "700",
    },
    ".cm-completionDetail": {
        color: "#64748b",
        fontStyle: "italic",
        marginLeft: "auto",
        fontSize: "11px",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionDetail": {
        color: "#dbeafe !important",
    },
    ".cm-completionIcon": {
        opacity: "0.85",
        width: "1.2em",
        display: "inline-block",
        textAlign: "center",
        marginRight: "4px",
        fontSize: "12px",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionIcon": {
        color: "#ffffff !important",
        opacity: "1",
    },
    ".cm-tooltip.cm-completionInfo": {
        backgroundColor: "#ffffff !important",
        border: "1px solid #e2e8f0 !important",
        color: "#0f172a !important",
        borderRadius: "6px",
        padding: "8px 12px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        fontSize: "12px",
        lineHeight: "1.5",
    },
    ".cm-panels": {
        backgroundColor: "#f8fafc !important",
        color: "#0f172a !important",
        zIndex: "20 !important",
    },
    ".cm-panels.cm-panels-top": {
        borderBottom: "1px solid #e2e8f0 !important",
    },
    ".cm-panels.cm-panels-bottom": {
        borderTop: "1px solid #e2e8f0 !important",
    },
    ".cm-panel.cm-search": {
        backgroundColor: "#f8fafc !important",
        color: "#0f172a !important",
        padding: "6px 28px 6px 10px !important",
        fontFamily: "var(--font-sans, system-ui, sans-serif) !important",
        fontSize: "12px !important",
        display: "flex !important",
        flexWrap: "wrap !important",
        alignItems: "center !important",
        gap: "4px 6px !important",
        position: "relative !important",
    },
    ".cm-panel.cm-search [name=close]": {
        position: "absolute !important",
        top: "6px !important",
        right: "6px !important",
        cursor: "pointer !important",
        color: "#64748b !important",
        backgroundColor: "transparent !important",
        border: "none !important",
        borderRadius: "4px !important",
        width: "20px !important",
        height: "20px !important",
        padding: "0 !important",
        fontSize: "16px !important",
        lineHeight: "1 !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        justifyContent: "center !important",
        transition: "background-color 0.15s, color 0.15s",
    },
    ".cm-panel.cm-search [name=close]:hover": {
        backgroundColor: "#e2e8f0 !important",
        color: "#0f172a !important",
    },
    ".cm-panel.cm-search input.cm-textfield": {
        backgroundColor: "#ffffff !important",
        color: "#0f172a !important",
        border: "1px solid #cbd5e1 !important",
        borderRadius: "4px !important",
        padding: "2px 8px !important",
        fontSize: "12px !important",
        fontFamily: "var(--font-mono, monospace) !important",
        outline: "none !important",
        minWidth: "130px !important",
        maxWidth: "200px !important",
        height: "24px !important",
        margin: "0 !important",
        transition: "border-color 0.15s, box-shadow 0.15s",
    },
    ".cm-panel.cm-search input.cm-textfield:focus": {
        borderColor: "#2563eb !important",
        boxShadow: "0 0 0 1px #2563eb !important",
    },
    ".cm-panel.cm-search button.cm-button": {
        backgroundColor: "#ffffff !important",
        color: "#334155 !important",
        border: "1px solid #cbd5e1 !important",
        borderRadius: "4px !important",
        padding: "2px 8px !important",
        height: "24px !important",
        fontSize: "11px !important",
        fontWeight: "500 !important",
        cursor: "pointer !important",
        margin: "0 !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        justifyContent: "center !important",
        transition: "background-color 0.15s, color 0.15s",
    },
    ".cm-panel.cm-search button.cm-button:hover": {
        backgroundColor: "#e2e8f0 !important",
        color: "#0f172a !important",
    },
    ".cm-panel.cm-search button.cm-button:active": {
        backgroundColor: "#cbd5e1 !important",
    },
    ".cm-panel.cm-search label": {
        fontSize: "11px !important",
        color: "#64748b !important",
        display: "inline-flex !important",
        alignItems: "center !important",
        gap: "4px !important",
        cursor: "pointer !important",
        margin: "0 2px !important",
        userSelect: "none !important",
    },
    ".cm-panel.cm-search label:hover": {
        color: "#0f172a !important",
    },
    ".cm-panel.cm-search input[type=checkbox]": {
        accentColor: "#2563eb",
        cursor: "pointer",
        margin: "0 !important",
    },
    ".cm-panel.cm-search br": {
        flexBasis: "100% !important",
        height: "0px !important",
        margin: "0 !important",
        display: "block !important",
    },
    ".cm-searchMatch": {
        backgroundColor: "rgba(250, 204, 21, 0.4) !important",
        outline: "1px solid rgba(234, 179, 8, 0.7) !important",
        borderRadius: "2px",
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "rgba(249, 115, 22, 0.45) !important",
        outline: "1px solid rgba(249, 115, 22, 0.8) !important",
        borderRadius: "2px",
    },
    ".cm-selectionMatch": {
        backgroundColor: "rgba(59, 130, 246, 0.2) !important",
        borderRadius: "2px",
    },
}, { dark: false })

function SyncScript({ value, onChange, fileName }: {
    value: string
    onChange?: (code: string) => void
    fileName: string
}) {
    const { sandpack } = useSandpack()
    const filePath = `/${fileName}`
    const code = sandpack.files[filePath]?.code
    const lastCodeRef = useRef(code ?? "")
    const previousValueRef = useRef(value)
    const onChangeRef = useRef(onChange)
    const updateFileRef = useRef(sandpack.updateFile)
    onChangeRef.current = onChange
    updateFileRef.current = sandpack.updateFile

    useEffect(() => {
        if (code !== undefined && code !== lastCodeRef.current) {
            lastCodeRef.current = code
            onChangeRef.current?.(code)
        }
    }, [code])

    useEffect(() => {
        if (value === previousValueRef.current) return

        previousValueRef.current = value
        if (value === code) return

        lastCodeRef.current = value
        updateFileRef.current(filePath, value)
    }, [code, filePath, value])

    return null
}

const EMPTY_COMPLETIONS: CompletionSource[] = []
const EMPTY_EXTENSIONS: Extension[] = []

const SandpackScriptEditorInstance: React.FC<SandpackScriptEditorProps> = ({
                                                                               value,
                                                                               onChange,
                                                                               readOnly,
                                                                               showReadOnly,
                                                                               showLineNumbers = true,
                                                                               editorKey,
                                                                               autoComplete = false,
                                                                               completionSources = EMPTY_COMPLETIONS,
                                                                               fileName = "index.js",
                                                                               extensions = EMPTY_EXTENSIONS,
                                                                               className,
                                                                               style,
                                                                               theme,
                                                                               onSelectionContextMenu,
                                                                               showSearch = true,
                                                                               dependencies,
                                                                               devDependencies,
                                                                               extraFiles,
                                                                           }) => {
    const entryFile = "/__apitester_entry__.js"
    const editorRef = useRef<CodeEditorRef | null>(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    // Sandpack resets its file state when these prop identities change.
    const [files] = useState(() => ({
        [`/${fileName}`]: { code: value, active: true },
        [entryFile]: { code: "export default {};", hidden: true },
        ...(extraFiles ?? {}),
    }))
    const depsKey = useMemo(() => {
        if (!dependencies && !devDependencies) return ""
        const deps = Object.entries(dependencies ?? {}).sort().map(([k, v]) => `${k}@${v}`).join(",")
        const devDeps = Object.entries(devDependencies ?? {}).sort().map(([k, v]) => `${k}@${v}`).join(",")
        return `:${deps}:${devDeps}`
    }, [dependencies, devDependencies])

    const customSetup = useMemo(() => ({
        entry: entryFile,
        ...(dependencies ? { dependencies } : {}),
        ...(devDependencies ? { devDependencies } : {}),
    }), [entryFile, depsKey])
    const providerOptions = useMemo(() => ({
        autorun: false,
        activeFile: `/${fileName}`,
        visibleFiles: [`/${fileName}`],
    }), [fileName])

    const effectiveTheme: SandpackThemeProp = theme ?? "dark"
    const isDark = effectiveTheme !== "light"
    const themeExtension = useMemo(() => isDark ? darkAutocompleteTheme : lightAutocompleteTheme, [isDark])

    const tooltipExtension = useMemo(() => {
        if (typeof document === "undefined") return []
        return tooltips({ parent: document.body })
    }, [])

    const searchExtensions = useMemo(() => {
        if (!showSearch) return []
        return [
            search({ top: true }),
            highlightSelectionMatches(),
            keymap.of([
                ...searchKeymap,
                { key: "Mod-h", run: openSearchPanel, scope: "editor search-panel" },
            ]),
        ]
    }, [showSearch])

    const searchListenerExtension = useMemo(() => {
        if (!showSearch) return []
        let lastOpen = false
        return EditorView.updateListener.of((update) => {
            const isOpen = searchPanelOpen(update.state)
            if (isOpen !== lastOpen) {
                lastOpen = isOpen
                setIsSearchOpen(isOpen)
            }
        })
    }, [showSearch])

    const baseExtensions = useMemo(() => {
        const result: Extension[] = [
            themeExtension,
            tooltipExtension,
            ...searchExtensions,
            searchListenerExtension,
            ...extensions,
        ]
        return result
    }, [extensions, searchExtensions, searchListenerExtension, themeExtension, tooltipExtension])

    const customCompletionKeymap = useMemo(() => {
        return keymap.of([
            { key: "Tab", run: acceptCompletion },
            ...completionKeymap.filter((binding) => binding.key !== "Enter"),
        ])
    }, [])

    const editorExtensions = useMemo(() => {
        if (!autoComplete && completionSources.length === 0) return undefined
        const sources = Array.isArray(autoComplete)
            ? autoComplete
            : completionSources.length > 0
                ? completionSources
                : undefined
        const autocompletionConfig = {
            defaultKeymap: false,
            ...(sources ? { override: sources } : {}),
        }
        return {
            extensions: [
                autocompletion(autocompletionConfig),
                customCompletionKeymap,
                ...baseExtensions,
            ],
            extensionsKeymap: [],
        }
    }, [autoComplete, completionSources, customCompletionKeymap, baseExtensions])

    const handleContextMenu = (event: ReactMouseEvent) => {
        if (!onSelectionContextMenu) return

        const editor = editorRef.current?.getCodemirror()
        if (!editor) return

        const {from, to} = editor.state.selection.main
        const selectedText = editor.state.sliceDoc(from, to)
        if (!selectedText) return

        event.preventDefault()
        onSelectionContextMenu(selectedText, {x: event.clientX, y: event.clientY})
    }

    const handleToggleSearch = () => {
        const editor = editorRef.current?.getCodemirror()
        if (!editor) return

        if (searchPanelOpen(editor.state)) {
            closeSearchPanel(editor)
        } else {
            openSearchPanel(editor)
        }
    }

    const handleKeyDown = (event: ReactKeyboardEvent) => {
        if (!showSearch) return
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f") {
            const editor = editorRef.current?.getCodemirror()
            if (editor && !searchPanelOpen(editor.state)) {
                event.preventDefault()
                openSearchPanel(editor)
            }
        }
    }

    const combinedStyle = useMemo<React.CSSProperties>(() => ({
        ...(className ? { height: "100%" } : {}),
        ...style,
    }), [className, style])

    return (
        <SandpackProvider
            key={editorKey}
            files={files}
            theme={effectiveTheme}
            style={combinedStyle}
            customSetup={customSetup}
            options={providerOptions}
        >
            <SyncScript value={value} onChange={onChange} fileName={fileName} />
            <SandpackLayout
                className={`relative ${className ?? ""}`}
                style={combinedStyle}
                onContextMenu={handleContextMenu}
                onKeyDown={handleKeyDown}
            >
                {showSearch && !isSearchOpen && (
                    <button
                        type="button"
                        onClick={handleToggleSearch}
                        title="Search (Ctrl+F)"
                        aria-label="Search code"
                        className="absolute top-2 right-2 z-10 flex items-center justify-center h-6 w-6 rounded text-muted-foreground/70 hover:text-foreground hover:bg-muted bg-background/80 backdrop-blur-xs border border-border/50 transition-all cursor-pointer shadow-xs opacity-70 hover:opacity-100"
                    >
                        <Search className="h-3.5 w-3.5" />
                    </button>
                )}
                <SandpackCodeEditor
                    ref={editorRef}
                    className={className}
                    style={combinedStyle}
                    showTabs={false}
                    showLineNumbers={showLineNumbers}
                    showRunButton={false}
                    wrapContent
                    readOnly={readOnly}
                    showReadOnly={showReadOnly}
                    {...editorExtensions}
                    extensions={editorExtensions?.extensions ?? baseExtensions}
                />
            </SandpackLayout>
        </SandpackProvider>
    )
}

export const SandpackScriptEditor: React.FC<SandpackScriptEditorProps> = ({ theme = "dark", ...props }) => {
    const depsKey = useMemo(() => {
        if (!props.dependencies && !props.devDependencies) return ""
        const deps = Object.entries(props.dependencies ?? {}).sort().map(([k, v]) => `${k}@${v}`).join(",")
        const devDeps = Object.entries(props.devDependencies ?? {}).sort().map(([k, v]) => `${k}@${v}`).join(",")
        return `:${deps}:${devDeps}`
    }, [props.dependencies, props.devDependencies])

    return (
        <SandpackScriptEditorInstance
            key={`${props.editorKey ?? ""}:${props.fileName ?? "index.js"}:${theme}${depsKey}`}
            theme={theme}
            {...props}
        />
    )
}

