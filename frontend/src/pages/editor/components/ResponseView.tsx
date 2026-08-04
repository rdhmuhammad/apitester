import {Badge} from "@/components/ui/badge.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
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
import {Download, Link2, Eye, EyeOff, ChevronDown} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    saveExampleResponse,
    selectResponse,
    selectScriptLogs,
    selectScriptMutations,
    selectScriptResult,
    selectActiveRequestTab,
} from "@/app/slices/collectionSlices.ts";
import {useMemo, useState, useCallback, useEffect} from "react";
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/ace.js'
import 'ace-builds/src-noconflict/mode-json.js'
import 'ace-builds/src-noconflict/theme-monokai.js'
import * as XLSX from 'xlsx';

const SectionHeader: React.FC<{
    label: string
    count?: number
    open: boolean
    onToggle: () => void
}> = ({ label, count, open, onToggle }) => (
    <CollapsibleTrigger asChild onClick={onToggle}>
        <div className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-50 rounded-md">
            <div className="flex items-center gap-2">
                <ChevronDown
                    className="h-4 w-4 text-slate-500 transition-transform duration-200"
                    style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
                />
                <span className="text-sm font-medium text-slate-700">{label}</span>
                {count !== undefined && count > 0 && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0">{count}</Badge>
                )}
            </div>
        </div>
    </CollapsibleTrigger>
)

const LogEntry: React.FC<{ log: { type: string; message: string; timestamp: number } }> = ({ log }) => {
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

    const { pre: preResult, post: postResult } = scriptResult
    const { pre: preLogs = [], post: postLogs = [] } = scriptLogs
    const { pre: preMutations = {}, post: postMutations = {} } = scriptMutations

    const [sourceTab, setSourceTab] = useState("actual")

    const activeExample = sourceTab === "actual"
        ? null
        : examples[Number(sourceTab)]

    const responseCode = activeExample?.code ?? currResponse?.statusCode
    const responseStatus = activeExample?.status ?? currResponse?.statusText ?? "OK"
    const badgeColor = (() => {
        if (!responseCode) return "bg-slate-100 text-slate-700"
        const s = Math.floor(responseCode / 100)
        if (s === 2) return "bg-emerald-100 text-emerald-700"
        if (s === 3) return "bg-blue-100 text-blue-700"
        if (s === 4) return "bg-amber-100 text-amber-700"
        return "bg-red-100 text-red-700"
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

    const prettyResult = useMemo(() => {
        return (val: unknown) => {
            if (val === null || val === undefined) return ""
            try { return typeof val === "string" ? val : JSON.stringify(val, null, 2) }
            catch { return String(val) }
        }
    }, [])

    const prettyPreResult = useMemo(() => prettyResult(preResult), [preResult, prettyResult])
    const prettyPostResult = useMemo(() => prettyResult(postResult), [postResult, prettyResult])

    const preMutationKeys = Object.keys(preMutations)
    const postMutationKeys = Object.keys(postMutations)
    const hasPreResult = prettyPreResult.length > 0
    const hasPostResult = prettyPostResult.length > 0
    const hasPreLogs = preLogs.length > 0
    const hasPostLogs = postLogs.length > 0
    const hasPreMutations = preMutationKeys.length > 0
    const hasPostMutations = postMutationKeys.length > 0
    const hasResult = hasPreResult || hasPostResult
    const hasLogs = hasPreLogs || hasPostLogs
    const hasMutations = hasPreMutations || hasPostMutations

    const [responseOpen, setResponseOpen] = useState(true)
    const [preResultOpen, setPreResultOpen] = useState(true)
    const [postResultOpen, setPostResultOpen] = useState(true)
    const [preMutationsOpen, setPreMutationsOpen] = useState(true)
    const [postMutationsOpen, setPostMutationsOpen] = useState(true)
    const [preLogsOpen, setPreLogsOpen] = useState(true)
    const [postLogsOpen, setPostLogsOpen] = useState(true)

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
        dispatch(saveExampleResponse({ id: selectedRequest.id, name: exampleName.trim() }))
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
            const workbook = XLSX.read(dataUrlToArrayBuffer(currResponse.data as string), { type: 'array' })
            const sheetName = workbook.SheetNames[0]
            const sheet = workbook.Sheets[sheetName]
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][]
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
        setSourceTab(value)
    }, [])

    return (
        <>
        <section
            className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-slate-800">Response</h2>
                    {responseCode && <Badge className={badgeColor}>{`${responseCode} ${responseStatus}`}</Badge>}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    {sourceTab === "actual" && (
                        <>
                            <span>{currResponse?.responseTime ?? 0} ms</span>
                            <span>{currResponse?.responseSize ?? 0} kb</span>
                            <span>{currResponse?.protocol}</span>
                        </>
                    )}
                </div>
            </div>

            <div className="border-b border-slate-200 px-4 pt-2">
                <Tabs value={sourceTab} onValueChange={onSourceChange}>
                    <TabsList className="h-8 rounded-lg bg-slate-100">
                        <TabsTrigger value="actual" className="h-7 px-3 text-xs">
                            Actual Response
                        </TabsTrigger>
                        {examples.map((ex, i) => (
                            <TabsTrigger
                                key={i}
                                value={String(i)}
                                className="h-7 px-3 text-xs"
                            >
                                Example: {ex.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <Tabs defaultValue="pretty" className="flex-1 overflow-hidden p-4">
                <div className="mb-3 flex items-center justify-between">
                    <TabsList className="h-9 rounded-lg bg-slate-100">
                        <TabsTrigger value="pretty">Pretty</TabsTrigger>
                        <TabsTrigger value="console">Console</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled={!currResponse} onClick={() => setDialogOpen(true)}>
                            <Download className="mr-1 h-4 w-4"/>
                            Save
                        </Button>
                        <Button variant="outline" size="sm">
                            <Link2 className="mr-1 h-4 w-4"/>
                            Share
                        </Button>
                        <Button variant="outline" size="sm" disabled={!isExcel} onClick={handleVisualize}>
                            {visualizeExcel ? <EyeOff className="mr-1 h-4 w-4" /> : <Eye className="mr-1 h-4 w-4" />}
                            {visualizeExcel ? 'Show Raw' : 'Visualize'}
                        </Button>
                    </div>
                </div>

                <TabsContent value="pretty" className="h-[calc(100%-3.2rem)]">
                    <div>
                        {isImage && currResponse?.data ? (
                            <div className="flex items-center justify-center h-[300px] bg-slate-100 rounded-md">
                                <img src={currResponse.data as string} alt="response" className="max-w-full max-h-full object-contain" />
                            </div>
                        ) : isAudio && currResponse?.data ? (
                            <div className="flex items-center justify-center py-8">
                                <audio controls src={currResponse.data as string} className="w-full max-w-md" />
                            </div>
                        ) : isVideo && currResponse?.data ? (
                            <div className="flex items-center justify-center">
                                <video controls src={currResponse.data as string} className="max-w-full max-h-[400px]" />
                            </div>
                        ) : isPdf && currResponse?.data ? (
                            <iframe src={currResponse.data as string} className="w-full h-[500px] border-0 rounded-md" />
                        ) : isExcel && visualizeExcel ? (
                            <div className="h-full overflow-auto rounded-md border border-slate-200">
                                <table className="w-full text-sm border-collapse">
                                    <thead className="sticky top-0 z-10">
                                        <tr className="bg-slate-100">
                                            {excelHeaders.map((h, i) => (
                                                <th key={i} className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700 whitespace-nowrap">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {excelData.map((row, ri) => (
                                            <tr key={ri} className="hover:bg-slate-50 even:bg-slate-50/50">
                                                {excelHeaders.map((_, ci) => (
                                                    <td key={ci} className="border border-slate-200 px-3 py-1.5 text-slate-600 whitespace-nowrap">{row[ci] != null ? String(row[ci]) : ''}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <AceEditor
                                readOnly
                                placeholder=""
                                mode="json"
                                theme="monokai"
                                width="full"
                                name="response"
                                fontSize={14}
                                lineHeight={19}
                                showPrintMargin={false}
                                showGutter={false}
                                highlightActiveLine={true}
                                value={prettyResponse}
                                setOptions={{
                                    enableBasicAutocompletion: false,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    enableMobileMenu: false,
                                    showLineNumbers: false,
                                    tabSize: 2,
                                }}/>
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
                                        <pre className="font-mono text-xs text-slate-300 bg-[#272822] rounded-md p-3 overflow-auto max-h-[200px] whitespace-pre-wrap">
                                            {currResponse.rawRequest}
                                        </pre>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Pre-request Script Result */}
                            {hasPreResult && (
                                <Collapsible open={preResultOpen} onOpenChange={setPreResultOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Pre-request Script Result"
                                        open={preResultOpen}
                                        onToggle={() => setPreResultOpen(!preResultOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <pre className="font-mono text-xs text-slate-300 bg-[#272822] rounded-md p-3 overflow-auto max-h-[200px]">
                                            {prettyPreResult}
                                        </pre>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Post-request Script Result */}
                            {hasPostResult && (
                                <Collapsible open={postResultOpen} onOpenChange={setPostResultOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Post-request Script Result"
                                        open={postResultOpen}
                                        onToggle={() => setPostResultOpen(!postResultOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <pre className="font-mono text-xs text-slate-300 bg-[#272822] rounded-md p-3 overflow-auto max-h-[200px]">
                                            {prettyPostResult}
                                        </pre>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Pre-request Mutations */}
                            {hasPreMutations && (
                                <Collapsible open={preMutationsOpen} onOpenChange={setPreMutationsOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Pre-request Mutations"
                                        count={preMutationKeys.length}
                                        open={preMutationsOpen}
                                        onToggle={() => setPreMutationsOpen(!preMutationsOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <div className="overflow-hidden rounded-md border border-slate-200">
                                            <div
                                                className="grid grid-cols-2 bg-slate-100 px-3 py-1.5 text-xs font-medium uppercase text-slate-600">
                                                <span>Key</span>
                                                <span>Value</span>
                                            </div>
                                            {preMutationKeys.map((key) => (
                                                <div key={key}
                                                    className="grid grid-cols-2 border-t border-slate-200 px-3 py-1.5 text-xs">
                                                    <span
                                                        className="font-mono text-slate-700 truncate">{key}</span>
                                                    <span className="font-mono text-slate-500 truncate">
                                                        {preMutations[key] ?? "(deleted)"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Post-request Mutations */}
                            {hasPostMutations && (
                                <Collapsible open={postMutationsOpen} onOpenChange={setPostMutationsOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Post-request Mutations"
                                        count={postMutationKeys.length}
                                        open={postMutationsOpen}
                                        onToggle={() => setPostMutationsOpen(!postMutationsOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <div className="overflow-hidden rounded-md border border-slate-200">
                                            <div
                                                className="grid grid-cols-2 bg-slate-100 px-3 py-1.5 text-xs font-medium uppercase text-slate-600">
                                                <span>Key</span>
                                                <span>Value</span>
                                            </div>
                                            {postMutationKeys.map((key) => (
                                                <div key={key}
                                                    className="grid grid-cols-2 border-t border-slate-200 px-3 py-1.5 text-xs">
                                                    <span
                                                        className="font-mono text-slate-700 truncate">{key}</span>
                                                    <span className="font-mono text-slate-500 truncate">
                                                        {postMutations[key] ?? "(deleted)"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Pre-request Console Logs */}
                            {hasPreLogs && (
                                <Collapsible open={preLogsOpen} onOpenChange={setPreLogsOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Pre-request Console Logs"
                                        count={preLogs.length}
                                        open={preLogsOpen}
                                        onToggle={() => setPreLogsOpen(!preLogsOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <div className="bg-[#272822] rounded-md p-3 max-h-[300px] overflow-auto font-mono">
                                            {preLogs.map((log, i) => (
                                                <LogEntry key={i} log={log}/>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {/* Post-request Console Logs */}
                            {hasPostLogs && (
                                <Collapsible open={postLogsOpen} onOpenChange={setPostLogsOpen}
                                    className="rounded-lg border border-slate-200">
                                    <SectionHeader
                                        label="Post-request Console Logs"
                                        count={postLogs.length}
                                        open={postLogsOpen}
                                        onToggle={() => setPostLogsOpen(!postLogsOpen)}
                                    />
                                    <CollapsibleContent className="px-3 pb-3">
                                        <div className="bg-[#272822] rounded-md p-3 max-h-[300px] overflow-auto font-mono">
                                            {postLogs.map((log, i) => (
                                                <LogEntry key={i} log={log}/>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}

                            {!currResponse?.rawRequest && !hasResult && !hasMutations && !hasLogs && (
                                <div className="flex items-center justify-center h-full text-sm text-slate-400 py-12">
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
                    onKeyDown={(e) => { if (e.key === "Enter") handleSaveExample() }}
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
