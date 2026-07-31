import RequestConfigTabs from "@/pages/editor/components/RequestConfigTabs.tsx";
import ResponseView from "@/pages/editor/components/ResponseView.tsx";
import WelcomeEditor from "@/pages/editor/components/WelcomeEditor.tsx";
import TestScenarioEditor from "@/pages/editor/components/TestScenarioEditor.tsx";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {FileCode2, FileText, Plus, XIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    type ColtReqMethod,
    createNewRequest,
    removeActiveRequest,
    selectActiveTabId,
    selectCollectionInfo,
    selectDirtyRequestIds,
    selectOpenRequestTabs,
    selectRequestById,
    setActiveTabId,
    setActiveTree,
} from "@/app/slices/collectionSlices.ts";
import {
    closeTestScenarioTab,
    createTestFile,
    selectActiveTestIds,
    selectScenarios,
} from "@/app/slices/testScenarioSlice.ts";
import {fromTestTabId} from "@/lib/tabUtils.ts";
import {cn} from "@/lib/utils.ts";

const methodStyle: Record<ColtReqMethod | 'TEST', string> = {
    GET: "bg-emerald-100 text-emerald-700",
    POST: "bg-amber-100 text-amber-700",
    PUT: "bg-blue-100 text-blue-700",
    PATCH: "bg-violet-100 text-violet-700",
    DELETE: "bg-rose-100 text-rose-700",
    TEST: "bg-indigo-100 text-indigo-700",
};

interface EditorTab {
    id: string
    label: string
    method: ColtReqMethod | 'TEST'
    type: 'request' | 'test'
}

const Editor: React.FC = () => {
    const dispatch = useAppDispatch()
    const collectionInfo = useAppSelector(selectCollectionInfo)
    const dirtyRequestIds = useAppSelector(selectDirtyRequestIds)
    const activeTabId = useAppSelector(selectActiveTabId)
    const scenarios = useAppSelector(selectScenarios)

    const {allTabs, effectiveActiveTabId} = useAppSelector((state) => {
        const openRequestTabs = selectOpenRequestTabs(state)
        const activeTestIds = selectActiveTestIds(state)

        const requestTabs: EditorTab[] = openRequestTabs.map((item) => {
            const requestItem = selectRequestById(state, item.id)
            return {
                id: item.id,
                type: 'request',
                label: requestItem?.name ?? "Untitled Request",
                method: ((item.request?.method ?? requestItem?.request?.method ?? "GET").toUpperCase() as ColtReqMethod),
            }
        })

        const testTabs: EditorTab[] = activeTestIds.map((tabId) => {
            const scenarioId = fromTestTabId(tabId)
            const scenario = scenarios.find(s => s.id === scenarioId)
            return {
                id: tabId,
                type: 'test',
                label: scenario?.name ?? scenarioId,
                method: 'TEST',
            }
        })

        const tabs = [...requestTabs, ...testTabs]
        const effectiveId = (activeTabId && tabs.some(t => t.id === activeTabId) ? activeTabId : tabs[tabs.length - 1]?.id) || ""

        return {
            allTabs: tabs,
            effectiveActiveTabId: effectiveId,
        }
    })

    const activeTab = allTabs.find(t => t.id === effectiveActiveTabId)

    const handleTabChange = (id: string) => {
        if (!id) return
        dispatch(setActiveTabId({id}))
    }

    const handleRemoveTab = (tab: EditorTab) => {
        if (tab.type === 'test') {
            dispatch(closeTestScenarioTab(tab.id))
            const remaining = allTabs.filter(t => t.id !== tab.id)
            dispatch(setActiveTabId({id: remaining[remaining.length - 1]?.id ?? ''}))
        } else {
            dispatch(removeActiveRequest({id: tab.id}))
            dispatch(setActiveTree({id: tab.id, status: false}))
        }
    }

    return (
        <div className="h-full overflow-auto bg-[linear-gradient(180deg,#eef4ff_0%,#f8fafc_22%,#f8fafc_100%)]">
            <div className={cn(
                'fixed top-[60px] right-0 left-0 z-40 border-b border-slate-200/80',
                ' bg-white/80 backdrop-blur md:left-64')
            }>
                <div className="mx-auto flex w-full max-w-[1500px] flex-col px-4 pt-4">
                    <div className="pb-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Workspace
                        </p>
                        <h3 className="mt-1 text-3xl font-semibold text-slate-900">{collectionInfo ? collectionInfo?.name : 'Collection' }</h3>
                        <h3 className="mt-1 text-sm font-normal text-slate-500">{collectionInfo ? collectionInfo?.description : '' }</h3>
                    </div>

                    <Tabs value={effectiveActiveTabId} onValueChange={handleTabChange} className="gap-0">
                        <div className="flex items-end justify-between gap-3">
                            <TabsList
                                className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none  border-slate-200 bg-transparent p-0">
                                {allTabs.map((tab) => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="group relative h-11 flex-none rounded-none border border-transparent border-b-0 bg-transparent px-3 text-slate-500 shadow-none transition-all hover:bg-white hover:text-slate-700 data-[state=active]:border-slate-200 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_-1px_0_0_rgba(255,255,255,1),0_6px_18px_-14px_rgba(15,23,42,0.45)]"
                                    >
                                        <span
                                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-[0.16em] ${methodStyle[tab.method]}`}>
                                            {tab.method}
                                        </span>
                                        <span className="max-w-[140px] truncate text-sm font-medium">{tab.label}</span>
                                        {tab.type === 'request' && dirtyRequestIds.includes(tab.id) && (
                                            <span className="ml-1 h-2 w-2 rounded-full bg-orange-400 inline-block shrink-0" />
                                        )}
                                        <span
                                            className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 group-data-[state=active]:text-slate-500">
                                            <Button variant='ghost'
                                                    onClick={(event) => {
                                                        event.preventDefault()
                                                        event.stopPropagation()
                                                        handleRemoveTab(tab)
                                                    }}
                                            >
                                                <XIcon
                                                    size={12}
                                                />
                                            </Button>
                                        </span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="mb-1 h-9 shrink-0 rounded-lg border border-dashed border-slate-300 bg-white/70 px-3 text-slate-600 hover:border-slate-400 hover:bg-white"
                                    >
                                        <Plus className="mr-1 h-4 w-4"/>
                                        New Tab
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem onClick={() => dispatch(createNewRequest())}>
                                        <FileCode2 className="mr-2 h-4 w-4 text-emerald-600" />
                                        New Request
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => dispatch(createTestFile())}>
                                        <FileText className="mr-2 h-4 w-4 text-indigo-600" />
                                        Create Test Suite
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col px-4 pb-4 pt-[140px]">
                {!activeTab ? (
                    <div
                        className={cn('rounded-2xl border border-t-0 border-slate-200',
                            ' bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)]')
                        }>
                        <WelcomeEditor/>
                    </div>
                ) : activeTab.type === 'test' ? (
                    <div
                        className={cn('rounded-2xl border border-t-0 border-slate-200',
                            ' bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)]')
                        }>
                        <TestScenarioEditor/>
                    </div>
                ) : (
                    <div
                        className={cn('rounded-b-2xl rounded-tr-2xl border border-t-0 border-slate-200',
                            ' bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)]')
                        }>
                        <RequestConfigTabs/>
                        <div className="pt-3">
                            <ResponseView/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Editor;
