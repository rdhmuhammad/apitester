import {FileText, CheckCircle2, XCircle, Trash2, FolderGit2} from "lucide-react"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {
  selectScenarios,
  selectHasUnsavedChanges,
  openTestScenarioTab,
  deleteTestFile,
} from "@/app/slices/testScenarioSlice.ts"
import {setActiveTabId, selectActiveTabId} from "@/app/slices/collectionSlices.ts"
import {toTestTabId} from "@/lib/tabUtils.ts"
import {cn} from "@/lib/utils.ts"

const TestScenarioSidebar: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const dispatch = useAppDispatch()
  const scenarios = useAppSelector(selectScenarios)
  const activeTabId = useAppSelector(selectActiveTabId)
  const hasUnsavedChanges = useAppSelector(selectHasUnsavedChanges)

  const filteredScenarios = scenarios.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.filename.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectScenario = (id: string) => {
    dispatch(openTestScenarioTab(id))
    dispatch(setActiveTabId({id: toTestTabId(id)}))
  }

  const handleDeleteScenario = (id: string) => {
    if (confirm('Are you sure you want to delete this scenario?')) {
      dispatch(deleteTestFile(id))
    }
  }

  return (
    <div className="mt-4">
      {/* Header & Add Button */}
      <div className="px-2 py-2 flex items-center border-b border-slate-100">
        <div className="flex items-center space-x-1.5">
          <FolderGit2 className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Test Suites ({scenarios.length})
          </span>
        </div>
      </div>

      {/* Scenario List */}
      <div className="py-1">
        {filteredScenarios.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs px-4">
            No suites found. Click <span className="text-indigo-600 font-medium">+ New Tab</span> in the editor to create one.
          </div>
        ) : (
          filteredScenarios.map((scenario) => {
            const isActive = activeTabId === toTestTabId(scenario.id)
            const stepCount = scenario.totalSteps || 0
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => handleSelectScenario(scenario.id)}
                className={cn(
                  'group relative flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-slate-100',
                  isActive && 'bg-indigo-100'
                )}
              >
                {scenario.lastRunStatus === 'passed' && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                )}
                {scenario.lastRunStatus === 'failed' && (
                  <XCircle className="h-4 w-4 text-rose-600 shrink-0" />
                )}
                {(!scenario.lastRunStatus || scenario.lastRunStatus === 'unrun') && (
                  <FileText className={cn('h-4 w-4 shrink-0', isActive ? 'text-indigo-600' : 'text-slate-400')} />
                )}
                <span className="capitalize flex-1 truncate text-slate-700">{scenario.name}</span>
                <span className="w-12 shrink-0 text-xs font-semibold text-slate-500">
                  {stepCount} step{stepCount === 1 ? '' : 's'}
                </span>
                {isActive && hasUnsavedChanges && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-orange-400 shrink-0" title="Unsaved changes" />
                )}

                {/* Delete Button on Hover */}
                {scenarios.length > 1 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteScenario(scenario.id)
                    }}
                    role="button"
                    className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded transition shrink-0"
                    title="Delete Scenario"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default TestScenarioSidebar
