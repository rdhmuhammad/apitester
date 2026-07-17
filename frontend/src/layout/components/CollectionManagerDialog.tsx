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
import {ArrowDownToLine, ArrowUpFromLine, FileUp, Folder, Globe, Plus, Trash2} from "lucide-react";
import {CollectionServices, type Collection} from "@/layout/services/collection.ts";
import {useCollectionPushPull} from "@/layout/hooks/useCollectionPushPull.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {addVariable, removeVariable, updateVariable, selectVariable} from "@/app/slices/collectionSlices.ts";
import type {CollectionVar} from "@/pages/editor/types/api.ts";

interface CollectionManagerDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

async function pickFilePath(): Promise<string | null> {
    console.log(window.electronAPI)
    if (window.electronAPI) {
        const result = await window.electronAPI.openFileDialog()
        if (result.canceled || result.filePaths.length === 0) return null
        return result.filePaths[0]
    }

    return new Promise((resolve) => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = ".json,application/json"
        input.onchange = () => {
            const file = input.files?.[0]
            resolve(file ? ((file as any).path ?? file.name) : null)
        }
        input.click()
    })
}

const CollectionManagerDialog: React.FC<CollectionManagerDialogProps> = ({open, onOpenChange}) => {
    const {pull, push, isPulling, isPushing} = useCollectionPushPull()
    const [collections, setCollections] = useState<Collection[]>([])
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [newName, setNewName] = useState("")
    const [newFilePath, setNewFilePath] = useState("")
    const [envKey, setEnvKey] = useState("")
    const [envValue, setEnvValue] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const variables = useAppSelector(selectVariable)

    useEffect(() => {
        if (!open) return
        setLoading(true)
        CollectionServices.listCollections().then((list) => {
            setCollections(list)
            const selected = list.find((c) => c.is_selected)
            setSelectedId(selected?.id ?? null)
        }).finally(() => setLoading(false))
    }, [open])

    const handleBrowseFile = async () => {
        const path = await pickFilePath()
        if (path) setNewFilePath(path)
    }

    const handleAdd = async () => {
        if (!newName.trim()) return
        const created = await CollectionServices.createCollection(newName.trim(), newFilePath)
        setCollections((prev) => [...prev, created])
        setNewName("")
        setNewFilePath("")
    }

    const handleDelete = async (id: string) => {
        await CollectionServices.deleteCollection(id)
        setCollections((prev) => prev.filter((c) => c.id !== id))
        if (selectedId === id) setSelectedId(null)
    }

    const handleRowClick = async (id: string) => {
        const updated = await CollectionServices.selectCollection(id)
        setCollections((prev) =>
            prev.map((c) => ({...c, is_selected: c.id === updated.id}))
        )
        setSelectedId(id)
    }

    const handleBrowseRowFile = async (id: string) => {
        const path = await pickFilePath()
        if (!path) return
        const updated = await CollectionServices.updateCollection(id, {path})
        setCollections((prev) =>
            prev.map((c) => (c.id === id ? updated : c))
        )
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

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="flex flex-col h-[80vh] pt-6 pb-4 px-4 max-w-3xl">
                <AlertDialogHeader className="shrink-0 mb-3">
                    <AlertDialogTitle>Collection Manager</AlertDialogTitle>
                    <AlertDialogDescription>
                        Manage your local collection files and environment variables.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <Tabs orientation="vertical" defaultValue="collection" className="flex-row gap-0 flex-1 min-h-0">
                    <TabsList className="flex-col h-full w-12 shrink-0 rounded-lg">
                        <TabsTrigger value="environment"><Globe className="h-4 w-4 m-0"/></TabsTrigger>
                        <TabsTrigger value="collection"><Folder className="h-4 w-4 m-0"/></TabsTrigger>
                    </TabsList>

                    <div className="flex-1 min-w-0 pl-4">
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
                                            "grid grid-cols-12 border-t border-slate-200 px-3 py-2 items-center cursor-pointer",
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
                                        <span className="col-span-4 text-sm font-medium text-slate-700">{col.name}</span>
                                        <span
                                            className="col-span-5 text-sm text-slate-500 truncate">{col.path || "(no file)"}</span>
                                        <div className="col-span-2 flex justify-end gap-1">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleBrowseRowFile(col.id)
                                                    }}>
                                                <FileUp className="h-4 w-4"/>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handleDelete(col.id)
                                                    }}>
                                                <Trash2 className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                                </div>

                            <div className="shrink-0 pt-3">
                                <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Input
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        onKeyDown={(e) => { if (e.key === "Enter") handleBrowseFile() }}
                                        placeholder="Collection name"
                                        className="flex-1"
                                    />
                                    <Button variant="outline" size="sm" onClick={handleBrowseFile}>
                                        <FileUp className="h-4 w-4 mr-1"/> Browse
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={handleAdd}>
                                        <Plus className="h-4 w-4 mr-1"/> Add
                                    </Button>
                                </div>
                                {newFilePath && (
                                    <p className="text-xs text-slate-500 truncate px-1">Path: {newFilePath}</p>
                                )}
                            </div>

                            {selectedId && (
                                <div className="flex items-center justify-end gap-2 pt-2 mt-2 border-t border-slate-200">
                                    <Button variant="outline" size="sm" disabled={isPulling} onClick={() => pull().then(() => onOpenChange(false))}>
                                        <ArrowDownToLine className="h-4 w-4 mr-1"/> Pull
                                    </Button>
                                    <Button variant="outline" size="sm" disabled={isPushing} onClick={() => push()}>
                                        <ArrowUpFromLine className="h-4 w-4 mr-1"/> Push
                                    </Button>
                                </div>
                            )}
                            </div>
                        </TabsContent>

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
                                    onKeyDown={(e) => { if (e.key === "Enter") handleAddVariable() }}
                                    placeholder="Key"
                                    className="flex-1"
                                />
                                <Input
                                    value={envValue}
                                    onChange={(e) => setEnvValue(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") handleAddVariable() }}
                                    placeholder="Value"
                                    className="flex-1"
                                />
                                <Button variant="outline" size="sm" onClick={handleAddVariable}>
                                    <Plus className="h-4 w-4 mr-1"/> Add
                                </Button>
                            </div>
                            </div>
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
