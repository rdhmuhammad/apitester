import {useEffect, useState} from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {cn} from "@/lib/utils.ts";
import {
    ArrowDownToLine,
    ArrowUpFromLine,
    Braces,
    Folder,
    Globe,
    Maximize2,
    Minimize2,
    Play,
    Plus,
    Save,
    Trash2
} from "lucide-react";
import {SandpackScriptEditor} from "@/components/ui/sandpack-script-editor.tsx";
import {type Collection, CollectionServices} from "@/layout/services/collection.ts";
import {useCollectionPushPull} from "@/layout/hooks/useCollectionPushPull.ts";
import {runScript} from "@/layout/hooks/useScriptRunner.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addVariable,
    removeVariable,
    selectCollectionScript,
    selectVariable,
    setCollectionScript,
    updateVariable
} from "@/app/slices/collectionSlices.ts";
import type {CollectionVar} from "@/pages/editor/types/api.ts";
import type {ScriptLog, SendResponse} from "@/types/response.ts";

interface CollectionManagerDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const CollectionManagerDialog: React.FC<CollectionManagerDialogProps> = ({open, onOpenChange}) => {
    const {pull, push, isPulling, isPushing} = useCollectionPushPull()
    const [collections, setCollections] = useState<Collection[]>([])
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [envKey, setEnvKey] = useState("")
    const [envValue, setEnvValue] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const variables = useAppSelector(selectVariable)
    const collectionScript = useAppSelector(selectCollectionScript)

    const [isScriptExpanded, setIsScriptExpanded] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [runResult, setRunResult] = useState("")
    const [runLogs, setRunLogs] = useState<ScriptLog[]>([])
    const [runMutations, setRunMutations] = useState<Record<string, string | null>>({})
    const [runError, setRunError] = useState<string | null>(null)
    const [showOutput, setShowOutput] = useState(false)

    useEffect(() => {
        if (!open) return
        setLoading(true)
        CollectionServices.listCollections().then((list) => {
            setCollections(list)
            const selected = list.find((c) => c.is_selected)
            setSelectedId(selected?.id ?? null)
        }).finally(() => setLoading(false))
    }, [open])

    const handleRowClick = async (id: string) => {
        const updated = await CollectionServices.selectCollection(id)
        setCollections((prev) =>
            prev.map((c) => ({...c, is_selected: c.id === updated.id}))
        )
        setSelectedId(id)
    }

    const handleAddVariable = () => {
        if (!envKey.trim()) return
        const newVar: CollectionVar = {
            id: crypto.randomUUID(),
            key: envKey.trim(),
            value: envValue,
            type: "string",
            category: "",
        }
        dispatch(addVariable(newVar))
        setEnvKey("")
        setEnvValue("")
    }

    const handleUpdateVariable = (id: string, field: "key" | "value", val: string) => {
        const existing = variables.find((v) => v.id === id)
        if (!existing) return
        dispatch(updateVariable({...existing, [field]: val}))
    }

    const handleDeleteVariable = (id: string) => {
        dispatch(removeVariable({id}))
    }

    const handleRunScript = async () => {
        if (!collectionScript.trim() || isRunning) return
        setIsRunning(true)
        setRunError(null)
        setShowOutput(true)
        try {
            const varMap: Record<string, string> = {}
            for (const v of variables) {
                varMap[v.key] = v.value
            }
            const dummyRes: SendResponse = {
                rawRequest: "",
                responseTime: 0,
                responseSize: "0",
                protocol: "",
                statusCode: 0,
                statusText: "",
                data: {},
            }
            const output = await runScript({script: collectionScript, response: dummyRes, variables: varMap})
            setRunResult(typeof output.result === "string" ? output.result : JSON.stringify(output.result, null, 2))
            setRunLogs(output.logs)
            setRunMutations(output.mutations)
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Unknown error"
            setRunError(msg)
            setRunResult("")
            setRunLogs([])
            setRunMutations({})
        } finally {
            setIsRunning(false)
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent
                className={cn("flex flex-col h-[80vh] pt-6 pb-4 px-4 transition-[max-width] duration-300 ease-in-out", isScriptExpanded ? "max-w-5xl" : "max-w-3xl")}>
                {!isScriptExpanded && (
                    <AlertDialogHeader className="shrink-0 mb-3">
                        <AlertDialogTitle>Collection Manager</AlertDialogTitle>
                        <AlertDialogDescription>
                            Manage your local collection files and environment variables.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                )}

                <Tabs orientation="vertical" defaultValue="collection" className="flex-row gap-0 flex-1 min-h-0">
                    {!isScriptExpanded && (
                        <TabsList className="flex-col h-full w-12 shrink-0 rounded-lg">
                            <TabsTrigger value="environment"><Globe className="h-4 w-4 m-0"/></TabsTrigger>
                            <TabsTrigger value="collection"><Folder className="h-4 w-4 m-0"/></TabsTrigger>
                            <TabsTrigger value="scripts"><Braces className="h-4 w-4 m-0"/></TabsTrigger>
                        </TabsList>
                    )}

                    <div className={cn("flex-1 min-w-0", !isScriptExpanded && "pl-4")}>
                        {!isScriptExpanded && (
                            //  Collections
                            <TabsContent value="collection" className="flex flex-col h-full min-h-0">
                                <div className="flex-1 overflow-auto rounded-lg border border-slate-200">
                                    <div
                                        className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                                        <span className="col-span-1"/>
                                        <span className="col-span-4">Collection Name</span>
                                        <span className="col-span-5">File Path</span>
                                        <span className="col-span-2"/>
                                    </div>
                                    {loading ? (
                                        <div className="px-3 py-6 text-center text-sm text-slate-400">
                                            Loading...
                                        </div>
                                    ) : collections.length === 0 && (
                                        <div className="px-3 py-6 text-center text-sm text-slate-400">
                                            No collections yet. Add one below.
                                        </div>
                                    )}
                                    {collections.map((col) => (
                                        <div
                                            key={col.id}
                                            className={cn(
                                                "grid grid-cols-12 border-t border-slate-200 px-3 py-3 items-center cursor-pointer",
                                                selectedId === col.id && "bg-indigo-50"
                                            )}
                                            onClick={() => handleRowClick(col.id)}
                                        >
                                            <div className="col-span-1 flex justify-center">
                                                <div
                                                    className={cn(
                                                        "h-4 w-4 rounded-full border-2 flex items-center justify-center",
                                                        selectedId === col.id ? "border-indigo-600" : "border-slate-300"
                                                    )}
                                                >
                                                    {selectedId === col.id && (
                                                        <div className="h-2 w-2 rounded-full bg-indigo-600"/>
                                                    )}
                                                </div>
                                            </div>
                                            <span
                                                className="col-span-4 text-sm font-medium text-slate-700">{col.name}</span>
                                            <span
                                                className="col-span-7 text-sm text-slate-500 truncate">{col.path || "(no file)"}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="shrink-0 pt-3">
                                    {selectedId && (
                                        <div
                                            className="flex items-center justify-end gap-2 pt-2 mt-2 border-t border-slate-200">
                                            <Button variant="outline" size="sm" disabled={isPulling}
                                                    onClick={() => pull().then(() => onOpenChange(false))}>
                                                <ArrowDownToLine className="h-4 w-4 mr-1"/> Pull
                                            </Button>
                                            <Button variant="outline" size="sm" disabled={isPushing}
                                                    onClick={() => push()}>
                                                <ArrowUpFromLine className="h-4 w-4 mr-1"/> Push
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        )}

                        {!isScriptExpanded && (
                            <TabsContent value="environment" className="flex flex-col h-full min-h-0">
                                <div className="flex-1 overflow-auto rounded-lg border border-slate-200">
                                    <div
                                        className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                                        <span className="col-span-5">Key</span>
                                        <span className="col-span-5">Value</span>
                                        <span className="col-span-2"/>
                                    </div>
                                    {variables.length === 0 && (
                                        <div className="px-3 py-6 text-center text-sm text-slate-400">
                                            No environment variables. Add one below.
                                        </div>
                                    )}
                                    {variables.map((v) => (
                                        <div key={v.id}
                                             className="grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center gap-2">
                                            <div className="col-span-5">
                                                <Input
                                                    value={v.key}
                                                    onChange={(e) => handleUpdateVariable(v.id, "key", e.target.value)}
                                                    className="h-8 text-sm"
                                                />
                                            </div>
                                            <div className="col-span-5">
                                                <Input
                                                    value={v.value}
                                                    onChange={(e) => handleUpdateVariable(v.id, "value", e.target.value)}
                                                    className="h-8 text-sm"
                                                />
                                            </div>
                                            <div className="col-span-2 flex justify-end">
                                                <Button variant="ghost" size="sm"
                                                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                                        onClick={() => handleDeleteVariable(v.id)}>
                                                    <Trash2 className="h-4 w-4"/>
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="shrink-0 pt-3">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            value={envKey}
                                            onChange={(e) => setEnvKey(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") handleAddVariable()
                                            }}
                                            placeholder="Key"
                                            className="flex-1"
                                        />
                                        <Input
                                            value={envValue}
                                            onChange={(e) => setEnvValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") handleAddVariable()
                                            }}
                                            placeholder="Value"
                                            className="flex-1"
                                        />
                                        <Button variant="outline" size="sm" onClick={handleAddVariable}>
                                            <Plus className="h-4 w-4 mr-1"/> Add
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                        )}

                        <TabsContent value="scripts"
                                     className={cn("flex flex-col min-h-0", isScriptExpanded ? "h-full" : "h-full")}>
                            {isScriptExpanded && (
                                <div className="flex items-center justify-between shrink-0 mb-2 px-1">
                                    <span
                                        className="text-sm font-medium text-slate-700">Collection Pre-request Script</span>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0"
                                            onClick={() => setIsScriptExpanded(false)}>
                                        <Minimize2 className="h-4 w-4"/>
                                    </Button>
                                </div>
                            )}
                            <div className="flex items-center gap-2 shrink-0 mb-2">
                                <Button variant="outline" size="sm" disabled={isPushing} onClick={() => push()}>
                                    <Save className="h-4 w-4 mr-1"/> Save
                                </Button>
                                <Button variant="outline" size="sm" disabled={isRunning || !collectionScript.trim()}
                                        onClick={handleRunScript}>
                                    <Play className="h-4 w-4 mr-1"/> Run
                                </Button>
                                {!isScriptExpanded && (
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 ml-auto"
                                            onClick={() => setIsScriptExpanded(true)}>
                                        <Maximize2 className="h-4 w-4"/>
                                    </Button>
                                )}
                            </div>
                            <div
                                className={cn("min-h-0 rounded-lg border border-slate-200 overflow-hidden", isScriptExpanded ? "flex-1" : "flex-[1_0_280px]")}>
                                <SandpackScriptEditor
                                    value={collectionScript}
                                    onChange={(code) => dispatch(setCollectionScript({script: code}))}
                                />
                            </div>
                            {showOutput && (
                                <div
                                    className={cn("shrink-0 overflow-auto rounded-lg border border-slate-200 mt-2", isScriptExpanded ? "flex-[0_0_200px]" : "flex-[0_0_180px]")}>
                                    <div
                                        className="px-3 py-1.5 bg-slate-100 text-xs font-medium text-slate-600 flex items-center justify-between">
                                        <span>Output</span>
                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400"
                                                onClick={() => setShowOutput(false)}>
                                            <Trash2 className="h-3 w-3"/>
                                        </Button>
                                    </div>
                                    <div className="p-3 space-y-2 text-xs font-mono">
                                        {isRunning && (
                                            <div className="text-slate-400">Running...</div>
                                        )}
                                        {runError && (
                                            <div className="text-red-500 whitespace-pre-wrap">{runError}</div>
                                        )}
                                        {runResult && !runError && (
                                            <div>
                                                <div className="text-slate-500 mb-1">Result:</div>
                                                <pre className="text-slate-700 whitespace-pre-wrap">{runResult}</pre>
                                            </div>
                                        )}
                                        {Object.keys(runMutations).length > 0 && (
                                            <div>
                                                <div className="text-slate-500 mb-1">Mutations:</div>
                                                {Object.entries(runMutations).map(([k, v]) => (
                                                    <div key={k} className="flex gap-2">
                                                        <span className="text-slate-700">{k}</span>
                                                        <span className="text-slate-400">→</span>
                                                        <span className="text-slate-700">{v ?? "(deleted)"}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {runLogs.map((log, i) => {
                                            const colors: Record<string, string> = {
                                                error: "text-red-500",
                                                warn: "text-amber-500",
                                                info: "text-blue-500",
                                                log: "text-slate-600",
                                            }
                                            return (
                                                <div key={i} className="flex gap-2">
                                                    <span
                                                        className={cn("shrink-0", colors[log.type] ?? "text-slate-600")}>[{log.type}]</span>
                                                    <span className="text-slate-700 break-all">{log.message}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </TabsContent>
                    </div>
                </Tabs>

                <AlertDialogFooter className='shrink-0 mt-3'>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CollectionManagerDialog
