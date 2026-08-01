import {Sidebar, SidebarContent} from "@/components/ui/sidebar.tsx";
import {type ReactNode, useEffect, useRef, useState} from "react";
import {ChevronDown, ChevronRight, FileCode2, Folder, FolderGit2, FolderOpen, Search} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    type ColtReqMethod,
    type DirTree,
    selectDirTree,
    setActiveRequest,
    setActiveTree,
    selectDirtyRequestIds
} from "@/app/slices/collectionSlices.ts";
import {cn} from "@/lib/utils.ts";
import TestScenarioSidebar from "@/layout/components/TestScenarioSidebar.tsx";


const methodColorClass: Record<ColtReqMethod, string> = {
    GET: "text-emerald-600",
    POST: "text-amber-600",
    PUT: "text-blue-600",
    PATCH: "text-violet-600",
    DELETE: "text-red-600"
};

const isFolderDirty = (node: DirTree, dirtyIds: string[]): boolean => {
    if (node.category === "REQ") return dirtyIds.includes(node.id)
    if (node?.item) {
        return Array.from(node.item.values()).some((child) => isFolderDirty(child, dirtyIds))
    }
    return false
}

const SidebarLayout: React.FC = () => {
    const tree = useAppSelector(selectDirTree)
    const dispatch = useAppDispatch()
    const dirtyRequestIds = useAppSelector(selectDirtyRequestIds)
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState('')
    const expandedBeforeSearch = useRef<Record<string, boolean>>({})

    const countFolders = (t: Map<string, DirTree>): number => {
        let count = 0
        for (const [, node] of t) {
            if (node.category === "FOLD") count++
            if (node.item) count += countFolders(node.item)
        }
        return count
    }

    const matchesSearch = (node: DirTree, query: string): boolean => {
        if (!query) return true
        const q = query.toLowerCase()
        if (node.name.toLowerCase().includes(q)) return true
        if (node.category === "FOLD" && node.item) {
            return Array.from(node.item.values()).some(child => matchesSearch(child, q))
        }
        return false
    }

    useEffect(() => {
        if (searchQuery) {
            expandedBeforeSearch.current = {...expandedFolders}
            const autoExpand: Record<string, boolean> = {}
            const walkAndExpand = (t: Map<string, DirTree>) => {
                for (const [, node] of t) {
                    if (node.category === "FOLD" && matchesSearch(node, searchQuery)) {
                        autoExpand[node.id] = true
                        if (node.item) walkAndExpand(node.item)
                    }
                }
            }
            walkAndExpand(tree)
            setExpandedFolders(autoExpand)
        } else if (Object.keys(expandedBeforeSearch.current).length > 0) {
            setExpandedFolders(expandedBeforeSearch.current)
            expandedBeforeSearch.current = {}
        }
    }, [searchQuery])

    const toggleRequest = (reqId: string)=>{
        dispatch(setActiveRequest({id: reqId}))
        dispatch(setActiveTree({id: reqId, status: true}))
    }

    const toggleFolder = (folderId: string) => {
        setExpandedFolders((prevState=>({
            ...prevState,
            [folderId]: !prevState[folderId]
        })));
    };

    useEffect(() => {
        const record: Record<string, boolean> = {}
        loadExpandFolder(tree, record)
        // setExpandedFolders(record)
    }, [tree]);

    const loadExpandFolder = (tree: Map<string, DirTree>, record: Record<string, boolean>) =>{
        for (const [key, val] of tree){
            if (val?.category === "FOLD"){
                record[key] = false
                if (val?.item) loadExpandFolder(val.item, record)
            }
        }
    }

    const renderNode = (node: DirTree, depth = 0): ReactNode => {
        if (searchQuery && !matchesSearch(node, searchQuery)) return null

        const indentStyle = {paddingLeft: `${depth * 14}px`};

        if (node.category === "FOLD") {
            const isOpen = Boolean(expandedFolders[node.id]);

            return (
                <div key={node.id} className="space-y-1">
                    <button
                        type="button"
                        onClick={() => toggleFolder(node.id)}
                        style={indentStyle}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                        {isOpen ? <ChevronDown className="h-4 w-4 text-slate-500"/> :
                            <ChevronRight className="h-4 w-4 text-slate-500"/>}
                        {isOpen ? <FolderOpen className="h-4 w-4 text-indigo-500"/> :
                            <Folder className="h-4 w-4 text-indigo-500"/>}
                        <span className="truncate">{node.name}</span>
                        {isFolderDirty(node, dirtyRequestIds) && (
                            <span className="ml-auto h-2 w-2 rounded-full bg-orange-400 shrink-0" />
                        )}
                    </button>
                    {isOpen && node?.item && (
                        <div className="space-y-1">
                            {Array.from(node?.item?.entries()).map(([_, child]) => {
                                return renderNode(child, depth + 1)
                            })}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <button
                key={node.id}
                type="button"
                style={indentStyle}
                onClick={()=>toggleRequest(node.id)}
                className={cn('flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-slate-100 ', node.isActive && 'bg-indigo-100')}
            >
                <FileCode2 className="h-4 w-4 text-slate-400"/>
                <span className={`w-12 text-xs font-semibold ${methodColorClass[node?.method ?? "GET"]}`}>{node?.method ?? "GET"}</span>
                <span className="truncate text-slate-700">{node.name}</span>
                {dirtyRequestIds.includes(node.id) && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-orange-400 shrink-0" />
                )}
            </button>
        );
    };

    return (
        <Sidebar
            className="fixed left-0 top-[60px] z-30 h-[calc(100dvh-60px)] w-64 flex-col border-r border-gray-200 bg-white"
            collapsible={"none"}
        >
            <SidebarContent className="flex flex-col overflow-y-auto px-3 py-2 bg-white">
                <div className="px-3 pb-2">
                    <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search collections & test suites..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs pl-8 pr-3 py-1.5 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
                        />
                    </div>
                </div>
                <div className="mb-2 px-2 flex items-center space-x-1.5">
                    <FolderGit2 className="w-4 h-4 text-indigo-600" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Collections ({countFolders(tree)})</p>
                </div>
                <div className="">
                    {Array.from(tree.entries()).map(([_, collection])=>{
                       return renderNode(collection)
                    })}
                </div>
                <TestScenarioSidebar searchQuery={searchQuery}/>
            </SidebarContent>
        </Sidebar>
    );
};

export default SidebarLayout;
