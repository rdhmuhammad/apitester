import {useEffect} from "react"
import {FileText, Plus, CheckCircle2, XCircle, Trash2, FolderGit2} from "lucide-react"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {
  selectScenarios,
  selectActiveTestId,
  selectHasUnsavedChanges,
  setActiveTestId,
  fetchTestFiles,
  createTestFile,
  deleteTestFile,
} from "@/app/slices/testScenarioSlice.ts"
import {cn} from "@/lib/utils.ts"

const TestScenarioSidebar: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const dispatch = useAppDispatch()
  const scenarios = useAppSelector(selectScenarios)
  const activeTestId = useAppSelector(selectActiveTestId)
  const hasUnsavedChanges = useAppSelector(selectHasUnsavedChanges)

  useEffect(() => {
    dispatch(fetchTestFiles())
  }, [dispatch])

  const filteredScenarios = scenarios.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.filename.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectScenario = (id: string) => {
    dispatch(setActiveTestId(id))
  }

  const handleNewScenario = () => {
    dispatch(createTestFile())
  }

  const handleDeleteScenario = (id: string) => {
    if (confirm('Are you sure you want to delete this scenario?')) {
      dispatch(deleteTestFile(id))
    }
  }

  return (
    <div className="mt-4">
      {/* Header & Add Button */}
      <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center space-x-1.5">
          <FolderGit2 className="w-4 h-4 text-indigo-600" />
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Test Suites ({scenarios.length})
          </span>
        </div>
        <button
          onClick={handleNewScenario}
          className="px-2 py-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded text-xs font-medium transition flex items-center gap-1 shadow-2xs"
          title="Create New .http Test Scenario"
        >
          <Plus className="w-3.5 h-3.5 text-indigo-600" />
          <span>New</span>
        </button>
      </div>

      {/* Scenario List */}
      <div className="py-1">
        {filteredScenarios.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs px-4">
            No suites found. Click <span className="text-indigo-600 font-medium">+ New</span> to create one.
          </div>
        ) : (
          filteredScenarios.map((scenario) => {
            const isActive = scenario.id === activeTestId
            return (
              <div
                key={scenario.id}
                onClick={() => handleSelectScenario(scenario.id)}
                className={cn(
                  'group relative px-3 py-2.5 text-xs cursor-pointer transition-all flex items-center justify-between border-r-4',
                  isActive
                    ? 'bg-indigo-50 border-indigo-600 font-medium text-indigo-900'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <div className="flex items-start space-x-2.5 min-w-0 flex-1 pr-2">
                  <div className="mt-0.5 shrink-0">
                    {scenario.lastRunStatus === 'passed' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                    {scenario.lastRunStatus === 'failed' && (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    )}
                    {(!scenario.lastRunStatus || scenario.lastRunStatus === 'unrun') && (
                      <FileText className={cn('w-4 h-4', isActive ? 'text-indigo-600' : 'text-slate-400')} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-xs truncate">
                      {scenario.name}
                      {isActive && hasUnsavedChanges && (
                        <span className="ml-1 w-2 h-2 rounded-full bg-amber-500 inline-block" title="Unsaved changes" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                        {scenario.filename}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {scenario.totalSteps || 0} step{(scenario.totalSteps || 0) === 1 ? '' : 's'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delete Button on Hover */}
                {scenarios.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteScenario(scenario.id)
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded transition shrink-0"
                    title="Delete Scenario"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default TestScenarioSidebar
