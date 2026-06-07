import RequestConfigTabs from "@/pages/editor/components/RequestConfigTabs.tsx";
import ResponseView from "@/pages/editor/components/ResponseView.tsx";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus, XIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    type ColtReqMethod,
    removeActiveRequest,
    selectActiveRequest,
    selectSelectedRequestId,
    selectRequestById,
    setSelectedRequestId, setActiveTree
} from "@/app/slices/collectionSlices.ts";
import {cn} from "@/lib/utils.ts";

const methodStyle: Record<ColtReqMethod, string> = {
    GET: "bg-emerald-100 text-emerald-700",
    POST: "bg-amber-100 text-amber-700",
    PUT: "bg-blue-100 text-blue-700",
    PATCH: "bg-violet-100 text-violet-700",
    DELETE: "bg-rose-100 text-rose-700",
};

const Editor: React.FC = () => {
    const dispatch = useAppDispatch()
    const {requestTabs, activeTabId} = useAppSelector((state) => {
        const activeRequest = selectActiveRequest(state)
        const selectedRequestId = selectSelectedRequestId(state)

        return {
            requestTabs: activeRequest.map((item) => {
                const requestItem = selectRequestById(state, item.id)
                return {
                    id: item.id,
                    label: requestItem?.name ?? "Untitled Request",
                    method: ((item.request?.method ?? requestItem?.request?.method ?? "GET").toUpperCase() as ColtReqMethod),
                }
            }),
            activeTabId: selectedRequestId || activeRequest[activeRequest.length - 1]?.id || "",
        }
    })

    const handleTabChange = (id: string) => {
        if (!id) return
        dispatch(setSelectedRequestId({id}))
    }

    const handleRemoveTab = (id: string) => {
        dispatch(removeActiveRequest({id}))
        dispatch(setActiveTree({id: id, status: false}))
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
                        <h3 className="mt-1 text-3xl font-semibold text-slate-900">Auth Collection</h3>
                    </div>

                    <Tabs value={activeTabId} onValueChange={handleTabChange} className="gap-0">
                        <div className="flex items-end justify-between gap-3">
                            <TabsList
                                className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-slate-200 bg-transparent p-0">
                                {requestTabs.map((tab) => (
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
                                        <span
                                            className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 group-data-[state=active]:text-slate-500">
                                            <Button variant='ghost'
                                                    onClick={(event) => {
                                                        event.preventDefault()
                                                        event.stopPropagation()
                                                        handleRemoveTab(tab.id)
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

                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                disabled
                                className="mb-1 h-9 shrink-0 rounded-lg border border-dashed border-slate-300 bg-white/70 px-3 text-slate-600 hover:border-slate-400 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Plus className="mr-1 h-4 w-4"/>
                                New Tab
                            </Button>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col px-4 pb-4 pt-[140px]">
                <div
                    className={cn('rounded-b-2xl rounded-tr-2xl border border-t-0 border-slate-200',
                        ' bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.45)]')
                    }>
                    <RequestConfigTabs/>
                    <div className="border-t border-slate-200 bg-slate-50/60 p-3">
                        <ResponseView/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
