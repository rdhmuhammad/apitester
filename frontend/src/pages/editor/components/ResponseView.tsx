import {Badge} from "@/components/ui/badge.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import { HTTP_STATUS_GROUPS, HTTP_STATUS_MAP, getHttpStatusText } from "@/lib/httpStatus.ts";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {ChevronDown, Download, Eye, EyeOff, Link2, Pencil, Plus, X} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addExampleResponse,
    removeExampleResponse,
    renameExampleResponse,
    saveExampleResponse,
    selectActiveExample,
    selectActiveExampleId,
    selectActiveRequestTab,
    selectResponse,
    selectScriptLogs,
    selectScriptMutations,
    selectScriptResult,
    setActiveExampleId,
    updateExampleResponseBody,
    updateExampleResponseStatus,
} from "@/app/slices/collectionSlices.ts";
import type {ScriptType} from "@/app/slices/index.ts";
import type {ScriptLog} from "@/types/response.ts";
import {useCallback, useEffect, useMemo, useState} from "react";
import {SandpackScriptEditor} from "@/components/ui/sandpack-script-editor.tsx";
import * as XLSX from 'xlsx';
import { cn } from "@/lib/utils";

interface NormalizedMutation {
    key: string
    value: string | null
    type?: ScriptType
}

const SectionHeader: React.FC<{
    label: string
    count?: number
    open: boolean
    onToggle: () => void
}> = ({label, count, open, onToggle}) => (
    <CollapsibleTrigger asChild onClick={onToggle}>
        <div className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-50 rounded-md">
            <div className="flex items-center gap-2">
                <ChevronDown
                    className="h-4 w-4 text-slate-500 transition-transform duration-200"
                    style={{transform: open ? "rotate(0deg)" : "rotate(-90deg)"}}
                />
                <span className="text-sm font-medium text-slate-700">{label}</span>
                {count !== undefined && count > 0 && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0">{count}</Badge>
                )}
            </div>
        </div>
    </CollapsibleTrigger>
)

const LogEntry: React.FC<{ log: ScriptLog }> = ({log}) => {
    const time = new Date(log.timestamp).toISOString().slice(11, 23)
    const colors: Record<string, string> = {
        error: "text-red-400",
        warn: "text-amber-400",
        info: "text-blue-400",
        log: "text-slate-200",
    }
    return (
        <div className="flex items-start gap-2 py-0.5 font-mono text-xs">
            <span className="text-slate-500 shrink-0">{time}</span>
            {log.scriptType && (
                <span className={cn(
                    "px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase shrink-0 leading-none self-center",
                    log.scriptType === "prerequest"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                )}>
                    {log.scriptType === "prerequest" ? "Pre-request" : "Post-request"}
                </span>
            )}
            <span className={colors[log.type] ?? "text-slate-200"}>[{log.type}]</span>
            <span className="text-slate-300 break-all">{log.message}</span>
        </div>
    )
}

const ResponseView: React.FC = () => {
    const dispatch = useAppDispatch()
    const currResponse = useAppSelector(selectResponse)
    const selectedRequest = useAppSelector(selectActiveRequestTab)
    const scriptResult = useAppSelector(selectScriptResult)
    const scriptLogs = useAppSelector(selectScriptLogs)
    const scriptMutations = useAppSelector(selectScriptMutations)
    const examples = selectedRequest?.exampleResponse ?? []

    const activeExampleId = useAppSelector(selectActiveExampleId)
    const activeExample = useAppSelector(selectActiveExample)
    const sourceTab = activeExampleId ?? "actual"

    const [editingExampleId, setEditingExampleId] = useState<string | null>(null)
    const [editingName, setEditingName] = useState("")

    const startRename = (ex: any) => {
        setEditingExampleId(ex.id ?? "")
        setEditingName(ex.name)
    }

    const saveRename = (exampleId: string) => {
        if (exampleId && editingName.trim()) {
            dispatch(renameExampleResponse({ exampleId, name: editingName.trim() }))
        }
        setEditingExampleId(null)
    }

    const responseCode = activeExample?.code ?? currResponse?.statusCode
    const responseStatus = activeExample?.status ?? currResponse?.statusText ?? (responseCode ? getHttpStatusText(responseCode) : "OK")
    const badgeColor = (() => {
        if (!responseCode) return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
        const s = Math.floor(responseCode / 100)
        if (s === 1) return "bg-sky-100 text-sky-700 dark:bg-sky-950/70 dark:text-sky-400"
        if (s === 2) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400"
        if (s === 3) return "bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-400"
        if (s === 4) return "bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400"
        return "bg-red-100 text-red-700 dark:bg-red-950/70 dark:text-red-400"
    })()

    const responseBody = useMemo(() => {
        if (activeExample) return activeExample.body
        return JSON.stringify(currResponse?.data)
    }, [activeExample, currResponse])

    const prettyResponse = useMemo(() => {
        if (!responseBody) return ""
        try {
            return JSON.stringify(JSON.parse(responseBody), null, 2)
        } catch {
            return responseBody
        }
    }, [responseBody])

    const normalizedScriptResults = useMemo((): Array<{ type?: ScriptType; display: string }> => {
        if (scriptResult === null || scriptResult === undefined) return []
        const list = Array.isArray(scriptResult) ? scriptResult : [scriptResult]
        return list.map((item: any) => {
            if (item && typeof item === "object" && "type" in item) {
                const data = item.data
                let display = ""
                try {
                    display = typeof data === "string" ? data : JSON.stringify(data, null, 2)
                } catch {
                    display = String(data)
                }
                return { type: item.type as ScriptType, display: display || "(empty)" }
            }
            let display = ""
            try {
                display = typeof item === "string" ? item : JSON.stringify(item, null, 2)
            } catch {
                display = String(item)
            }
            return { display: display || "(empty)" }
        }).filter(item => item.display !== "(empty)" || item.type)
    }, [scriptResult])

    const normalizedMutations = useMemo((): NormalizedMutation[] => {
        if (!scriptMutations) return []
        if (Array.isArray(scriptMutations)) {
            const list: NormalizedMutation[] = []
            for (const item of scriptMutations) {
                if (item && typeof item === "object") {
                    const itemType = (item as any).type as ScriptType | undefined
                    const mutationsObj = (item as any).mutations || (item as any).data
                    if (mutationsObj && typeof mutationsObj === "object") {
                        for (const [key, value] of Object.entries(mutationsObj)) {
                            list.push({
                                key,
                                value: value as string | null,
                                type: itemType,
                            })
                        }
                    } else if ("key" in item) {
                        list.push({
                            key: (item as any).key,
                            value: (item as any).value ?? null,
                            type: itemType,
                        })
                    }
                }
            }
            return list
        }
        if (typeof scriptMutations === "object") {
            return Object.entries(scriptMutations).map(([key, value]) => ({
                key,
                value,
            }))
        }
        return []
    }, [scriptMutations])

    const hasLogs = scriptLogs.length > 0
    const hasMutations = normalizedMutations.length > 0
    const hasMutationTypes = useMemo(() => normalizedMutations.some(m => !!m.type), [normalizedMutations])
    const hasResult = normalizedScriptResults.length > 0
    const [responseOpen, setResponseOpen] = useState(true)
    const [resultOpen, setResultOpen] = useState(true)
    const [mutationsOpen, setMutationsOpen] = useState(true)
    const [logsOpen, setLogsOpen] = useState(true)

    const [dialogOpen, setDialogOpen] = useState(false)
    const [exampleName, setExampleName] = useState("")

    const [visualizeExcel, setVisualizeExcel] = useState(false)
    const [excelHeaders, setExcelHeaders] = useState<string[]>([])
    const [excelData, setExcelData] = useState<any[][]>([])

    const responseContentType = currResponse?.contentType ?? ""
    const isImage = responseContentType.startsWith("image/")
    const isAudio = responseContentType.startsWith("audio/")
    const isVideo = responseContentType.startsWith("video/")
    const isPdf = responseContentType === "application/pdf"
    const isExcel = responseContentType === "application/vnd.ms-excel"
        || responseContentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    useEffect(() => {
        setVisualizeExcel(false)
        setExcelHeaders([])
        setExcelData([])
    }, [currResponse])

    const handleSaveExample = () => {
        if (!selectedRequest?.id || !exampleName.trim() || !currResponse) return
        dispatch(saveExampleResponse({id: selectedRequest.id, name: exampleName.trim()}))
        setExampleName("")
        setDialogOpen(false)
    }

    const dataUrlToArrayBuffer = (dataUrl: string): ArrayBuffer => {
        const base64 = dataUrl.split(',')[1]
        const binaryString = atob(base64)
        const bytes = new Uint8Array(binaryString.length)
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i)
        }
        return bytes.buffer
    }

    const handleVisualize = useCallback(() => {
        if (!isExcel || !currResponse?.data) return
        if (visualizeExcel) {
            setVisualizeExcel(false)
            return
        }
        try {
            const workbook = XLSX.read(dataUrlToArrayBuffer(currResponse.data as string), {type: 'array'})
            const sheetName = workbook.SheetNames[0]
            const sheet = workbook.Sheets[sheetName]
            const data = XLSX.utils.sheet_to_json(sheet, {header: 1}) as any[][]
            if (data.length > 0) {
                setExcelHeaders(data[0].map(String))
                setExcelData(data.slice(1))
            }
            setVisualizeExcel(true)
        } catch {
            setVisualizeExcel(false)
        }
    }, [isExcel, currResponse?.data, visualizeExcel])

    const onSourceChange = useCallback((value: string) => {
        if (value === "actual") {
            dispatch(setActiveExampleId({ exampleId: null }))
        } else {
            dispatch(setActiveExampleId({ exampleId: value }))
        }
    }, [dispatch])

    const handleRemoveExample = useCallback((exampleId: string | undefined, index: number) => {
        if (activeExampleId === exampleId) {
            dispatch(setActiveExampleId({ exampleId: null }))
        }
        dispatch(removeExampleResponse({ id: exampleId, exampleId, requestId: selectedRequest?.id, index }))
    }, [activeExampleId, dispatch, selectedRequest?.id])

    const handleAddNewExample = useCallback(() => {
        dispatch(addExampleResponse({ id: selectedRequest?.id }))
    }, [dispatch, selectedRequest?.id])

    return (
        <>
            <section
                className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-foreground">Response</h2>
                        {activeExample ? (
                            <Select
                                value={String(activeExample.code ?? 200)}
                                onValueChange={(val) => {
                                    const code = parseInt(val, 10)
                                    const status = getHttpStatusText(code, activeExample.status || "OK")
                                    dispatch(updateExampleResponseStatus({ exampleId: activeExample.id, code, status }))
                                }}
                            >
                                <SelectTrigger
                                    size="sm"
                                    className={cn(
                                        "h-7 w-auto min-w-[110px] gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-md border border-transparent shadow-none cursor-pointer transition-colors",
                                        badgeColor
                                    )}
                                    title="Select HTTP response status code"
                                >
                                    <SelectValue>
                                        {activeExample.code ?? 200} {activeExample.status ?? getHttpStatusText(activeExample.code ?? 200)}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px]">
                                    {HTTP_STATUS_GROUPS.map((grp) => (
                                        <SelectGroup key={grp.group}>
                                            <SelectLabel className="text-[11px] font-semibold text-muted-foreground px-2 py-1">
                                                {grp.group}
                                            </SelectLabel>
                                            {grp.items.map((item) => (
                                                <SelectItem key={item.code} value={String(item.code)} className="text-xs">
                                                    <span className="font-semibold">{item.code}</span>
                                                    <span className="text-muted-foreground">{item.status}</span>
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    ))}
                                    {activeExample.code && !HTTP_STATUS_MAP[activeExample.code] && (
                                        <SelectGroup key="custom">
                                            <SelectLabel className="text-[11px] font-semibold text-muted-foreground px-2 py-1">
                                                Custom
                                            </SelectLabel>
                                            <SelectItem value={String(activeExample.code)} className="text-xs">
                                                <span className="font-semibold">{activeExample.code}</span>
                                                <span className="text-muted-foreground">{activeExample.status}</span>
                                            </SelectItem>
                                        </SelectGroup>
                                    )}
                                </SelectContent>
                            </Select>
                        ) : (
                            responseCode && <Badge className={badgeColor}>{`${responseCode} ${responseStatus}`}</Badge>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {sourceTab === "actual" && (
                            <>
                                <span>{currResponse?.responseTime ?? 0} ms</span>
                                <span>{currResponse?.responseSize ?? 0} kb</span>
                                <span>{currResponse?.protocol}</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="border-b border-border px-4 pt-2 flex items-center gap-1.5 overflow-x-auto">
                    <Tabs value={sourceTab} onValueChange={onSourceChange}>
                        <TabsList className="h-8 rounded-lg bg-muted flex items-center">
                            <TabsTrigger value="actual" className="h-7 px-3 text-xs">
                                Actual Response
                            </TabsTrigger>
                            {examples.map((ex, i) => {
                                const tabValue = ex.id || String(i)
                                return (
                                    <TabsTrigger
                                        key={tabValue}
                                        value={tabValue}
                                        className="group relative h-7 px-2 text-xs flex items-center gap-1.5"
                                    >
                                        {editingExampleId === ex.id ? (
                                            <input
                                                type="text"
                                                autoFocus
                                                value={editingName}
                                                onChange={(e) => setEditingName(e.target.value)}
                                                onBlur={() => saveRename(ex.id!)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") saveRename(ex.id!)
                                                    if (e.key === "Escape") setEditingExampleId(null)
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                                className="h-5 w-24 rounded border border-border bg-background px-1 text-xs text-foreground focus:outline-hidden"
                                            />
                                        ) : (
                                            <span
                                                onDoubleClick={(e) => {
                                                    e.stopPropagation()
                                                    startRename(ex)
                                                }}
                                                title="Double-click to rename"
                                            >
                                                Example: {ex.name}
                                            </span>
                                        )}
                                        <button
                                            type="button"
                                            aria-label="Rename example"
                                            className="inline-flex h-4 w-4 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground pointer-events-auto transition-colors opacity-70 hover:opacity-100"
                                            title="Rename example"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                startRename(ex)
                                            }}
                                        >
                                            <Pencil className="size-2.5" />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Remove example"
                                            className="inline-flex h-4 w-4 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground pointer-events-auto transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                handleRemoveExample(ex.id, i)
                                            }}
                                        >
                                            <X className="size-3" />
                                        </button>
                                    </TabsTrigger>
                                )
                            })}
                        </TabsList>
                    </Tabs>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground shrink-0 rounded-md"
                        title="Add response example"
                        aria-label="Add response example"
                        onClick={handleAddNewExample}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <Tabs defaultValue="pretty" className="flex-1 overflow-hidden p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <TabsList className="h-9 rounded-lg bg-muted">
                            <TabsTrigger value="pretty">Pretty</TabsTrigger>
                            <TabsTrigger value="console">Console</TabsTrigger>
                        </TabsList>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled={!currResponse || Boolean(activeExample)}
                                    title={activeExample ? "Save is disabled when viewing an example" : undefined}
                                    onClick={() => setDialogOpen(true)}>
                                <Download className="mr-1 h-4 w-4"/>
                                Save
                            </Button>
                            <Button variant="outline" size="sm">
                                <Link2 className="mr-1 h-4 w-4"/>
                                Share
                            </Button>
                            <Button variant="outline" size="sm" disabled={!isExcel} onClick={handleVisualize}>
                                {visualizeExcel ? <EyeOff className="mr-1 h-4 w-4"/> : <Eye className="mr-1 h-4 w-4"/>}
                                {visualizeExcel ? 'Show Raw' : 'Visualize'}
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="pretty" className={cn("h-[calc(100%-3.2rem)]", !prettyResponse?.trim() && "min-h-[280px]")}>
                        <div className={cn("h-full", !prettyResponse?.trim() && "min-h-[280px]")}>
                            {isImage && currResponse?.data ? (
                                <div className="flex items-center justify-center h-[300px] bg-slate-100 rounded-md">
                                    <img src={currResponse.data as string} alt="response"
                                         className="max-w-full max-h-full object-contain"/>
                                </div>
                            ) : isAudio && currResponse?.data ? (
                                <div className="flex items-center justify-center py-8">
                                    <audio controls src={currResponse.data as string} className="w-full max-w-md"/>
                                </div>
                            ) : isVideo && currResponse?.data ? (
                                <div className="flex items-center justify-center">
                                    <video controls src={currResponse.data as string}
                                           className="max-w-full max-h-[400px]"/>
                                </div>
                            ) : isPdf && currResponse?.data ? (
                                <iframe src={currResponse.data as string}
                                        className="w-full h-[500px] border-0 rounded-md"/>
                            ) : isExcel && visualizeExcel ? (
                                <div className="h-full overflow-auto rounded-md border border-slate-200">
                                    <table className="w-full text-sm border-collapse">
                                        <thead className="sticky top-0 z-10">
                                        <tr className="bg-slate-100">
                                            {excelHeaders.map((h, i) => (
                                                <th key={i}
                                                    className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700 whitespace-nowrap">{h}</th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {excelData.map((row, ri) => (
                                            <tr key={ri} className="hover:bg-slate-50 even:bg-slate-50/50">
                                                {excelHeaders.map((_, ci) => (
                                                    <td key={ci}
                                                        className="border border-slate-200 px-3 py-1.5 text-slate-600 whitespace-nowrap">{row[ci] != null ? String(row[ci]) : ''}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <SandpackScriptEditor
                                    editorKey={activeExample?.id ?? "actual-response"}
                                    readOnly={!activeExample}
                                    value={prettyResponse}
                                    onChange={(newCode) => {
                                        if (activeExample?.id) {
                                            dispatch(updateExampleResponseBody({ exampleId: activeExample.id, body: newCode }))
                                        }
                                    }}
                                    fileName="response.json"
                                    showLineNumbers={false}
                                    className={cn("h-full", !prettyResponse?.trim() && "min-h-[280px]")}
                                    style={{
                                        height: "100%",
                                        ...(!prettyResponse?.trim() ? { minHeight: "280px" } : {}),
                                    }}
                                />
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="console" className="h-[calc(100%-3.2rem)] overflow-auto">
                        {activeExample ? (
                            <div className="flex items-center justify-center h-full text-sm text-slate-400">
                                No console data for example responses
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {/* Request Raw */}
                                {currResponse?.rawRequest && (
                                    <Collapsible open={responseOpen} onOpenChange={setResponseOpen}
                                                 className="rounded-lg border border-slate-200">
                                        <SectionHeader
                                            label="Request Raw"
                                            open={responseOpen}
                                            onToggle={() => setResponseOpen(!responseOpen)}
                                        />
                                        <CollapsibleContent className="px-3 pb-3">
                                        <pre
                                            className="font-mono text-xs text-slate-300 bg-[#272822] rounded-md p-3 overflow-auto max-h-[200px] whitespace-pre-wrap">
                                            {currResponse.rawRequest}
                                        </pre>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                {/* Script Result */}
                                {hasResult && (
                                    <Collapsible open={resultOpen} onOpenChange={setResultOpen}
                                                 className="rounded-lg border border-slate-200">
                                        <SectionHeader
                                            label="Script Result"
                                            open={resultOpen}
                                            count={normalizedScriptResults.length > 1 ? normalizedScriptResults.length : undefined}
                                            onToggle={() => setResultOpen(!resultOpen)}
                                        />
                                        <CollapsibleContent className="px-3 pb-3 space-y-2">
                                            {normalizedScriptResults.map((res, idx) => (
                                                <div key={idx}
                                                     className="rounded-md border border-border/50 bg-[#272822] p-3">
                                                    {res.type && (
                                                        <div
                                                            className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-700/50">
                                                        <span className={cn(
                                                            "px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase",
                                                            res.type === "prerequest"
                                                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                                        )}>
                                                            {res.type === "prerequest" ? "Pre-request Script" : "Post-request Script"}
                                                        </span>
                                                        </div>
                                                    )}
                                                    <pre
                                                        className="font-mono text-xs text-slate-300 overflow-auto max-h-[200px] whitespace-pre-wrap">
                                                    {res.display}
                                                </pre>
                                                </div>
                                            ))}
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                {/* Mutations */}
                                {hasMutations && (
                                    <Collapsible open={mutationsOpen} onOpenChange={setMutationsOpen}
                                                 className="rounded-lg border border-slate-200">
                                        <SectionHeader
                                            label="Mutations"
                                            count={normalizedMutations.length}
                                            open={mutationsOpen}
                                            onToggle={() => setMutationsOpen(!mutationsOpen)}
                                        />
                                        <CollapsibleContent className="px-3 pb-3">
                                            <div className="overflow-hidden rounded-md border border-slate-200">
                                                <div
                                                    className={cn(
                                                        "grid bg-slate-100 px-3 py-1.5 text-xs font-medium uppercase text-slate-600",
                                                        hasMutationTypes ? "grid-cols-[1fr_1fr_auto]" : "grid-cols-2"
                                                    )}>
                                                    <span>Key</span>
                                                    <span>Value</span>
                                                    {hasMutationTypes && <span className="w-28 text-right">Type</span>}
                                                </div>
                                                {normalizedMutations.map((mut, idx) => (
                                                    <div key={idx}
                                                         className={cn(
                                                             "grid items-center border-t border-slate-200 px-3 py-1.5 text-xs",
                                                             hasMutationTypes ? "grid-cols-[1fr_1fr_auto]" : "grid-cols-2"
                                                         )}>
                                                        <span
                                                            className="font-mono text-slate-700 truncate">{mut.key}</span>
                                                        <span className="font-mono text-slate-500 truncate">
                                                            {mut.value ?? "(deleted)"}
                                                        </span>
                                                        {hasMutationTypes && (
                                                            <div className="w-28 flex justify-end">
                                                                {mut.type && (
                                                                    <span className={cn(
                                                                        "px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase",
                                                                        mut.type === "prerequest"
                                                                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                                                                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                                                    )}>
                                                                        {mut.type === "prerequest" ? "Pre-request" : "Post-request"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                {/* Console Logs */}
                                {hasLogs && (
                                    <Collapsible open={logsOpen} onOpenChange={setLogsOpen}
                                                 className="rounded-lg border border-slate-200">
                                        <SectionHeader
                                            label="Console Logs"
                                            count={scriptLogs.length}
                                            open={logsOpen}
                                            onToggle={() => setLogsOpen(!logsOpen)}
                                        />
                                        <CollapsibleContent className="px-3 pb-3">
                                            <div
                                                className="bg-[#272822] rounded-md p-3 max-h-[300px] overflow-auto font-mono">
                                                {scriptLogs.map((log, i) => (
                                                    <LogEntry key={i} log={log}/>
                                                ))}
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                {!currResponse?.rawRequest && !hasResult && !hasMutations && !hasLogs && (
                                    <div
                                        className="flex items-center justify-center h-full text-sm text-slate-400 py-12">
                                        Send a request to see console output
                                    </div>
                                )}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </section>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Save Example Response</DialogTitle>
                        <DialogDescription>
                            Enter a name for this response example.
                        </DialogDescription>
                    </DialogHeader>
                    <Input
                        value={exampleName}
                        onChange={(e) => setExampleName(e.target.value)}
                        placeholder="e.g. Success 200"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSaveExample()
                        }}
                    />
                    <DialogFooter>
                        <Button variant="outline" size="sm" onClick={() => setDialogOpen(false)}>Cancel</Button>
                        <Button size="sm" disabled={!exampleName.trim()} onClick={handleSaveExample}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ResponseView
