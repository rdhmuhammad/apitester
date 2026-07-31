import {useEffect, useState} from "react"
import {
  Play, Plus, Trash2, ChevronUp, ChevronDown, CheckCircle2, XCircle,
  Clock, Code, MoveUp, MoveDown, Layers, Settings,
} from "lucide-react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Button} from "@/components/ui/button.tsx"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {
  selectActiveScenario,
  selectTestResults,
  selectIsRunning,
  selectHasUnsavedChanges,
  updateScenarioSteps,
  updateScenarioRawContent,
  fetchTestContent,
  saveTestFile,
} from "@/app/slices/testScenarioSlice.ts"
import {selectAllRequests, type FlatRequest} from "@/app/slices/collectionSlices.ts"
import {useTestRunner} from "@/layout/hooks/useTestRunner.ts"
import type {AssertionRule, CaptureRule, HttpMethod, StepResult, TestHeader, TestStep} from "@/pages/editor/types/testScenario.ts"
import {cn} from "@/lib/utils.ts"
import EnvironmentVariablesDialog from "@/pages/editor/components/EnvironmentVariablesDialog.tsx"

const methodColors: Record<HttpMethod, string> = {
  GET: 'bg-emerald-100 text-emerald-700',
  POST: 'bg-amber-100 text-amber-700',
  PUT: 'bg-blue-100 text-blue-700',
  PATCH: 'bg-violet-100 text-violet-700',
  DELETE: 'bg-rose-100 text-rose-700',
  HEAD: 'bg-cyan-100 text-cyan-700',
  OPTIONS: 'bg-purple-100 text-purple-700',
}

const methods: HttpMethod[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']

const statusIcon = (status?: StepResult['status']) => {
  switch (status) {
    case 'passed': return <CheckCircle2 className="w-4 h-4 text-emerald-600"/>
    case 'failed': return <XCircle className="w-4 h-4 text-rose-600"/>
    case 'running': return <Clock className="w-4 h-4 text-indigo-600 animate-pulse"/>
    case 'skipped': return <Clock className="w-4 h-4 text-slate-400"/>
    default: return null
  }
}

const InsertStepZone: React.FC<{ onInsert: () => void }> = ({ onInsert }) => (
  <div className="group relative h-4 -my-1 flex items-center justify-center z-10">
    <div className="absolute inset-x-4 top-1/2 h-px bg-indigo-300 opacity-0 group-hover:opacity-100 transition" />
    <button
      type="button"
      onClick={onInsert}
      className="relative opacity-0 group-hover:opacity-100 transition h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow hover:bg-indigo-700"
      title="Insert step here"
    >
      <Plus className="w-3.5 h-3.5"/>
    </button>
  </div>
)

const TestScenarioEditor: React.FC = () => {
  const dispatch = useAppDispatch()
  const scenario = useAppSelector(selectActiveScenario)
  const results = useAppSelector(selectTestResults)
  const isRunning = useAppSelector(selectIsRunning)
  const hasUnsavedChanges = useAppSelector(selectHasUnsavedChanges)

  const [viewMode, setViewMode] = useState<'visual' | 'raw'>('visual')
  const [rawContent, setRawContent] = useState('')
  const [rawContentDirty, setRawContentDirty] = useState(false)
  const [envDialogOpen, setEnvDialogOpen] = useState(false)
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({})
  const allRequests = useAppSelector(selectAllRequests)
  const [stepSearch, setStepSearch] = useState<Record<string, {open: boolean; query: string}>>({})
  const {run: runTests, runStep} = useTestRunner()

  useEffect(() => {
    if (scenario && !scenario.content && scenario.id) {
      dispatch(fetchTestContent(scenario.id))
    }
  }, [scenario?.id, dispatch])

  if (!scenario) {
    return (
      <div className="flex items-center justify-center py-20 text-sm text-slate-400">
        Select a test suite from the sidebar
      </div>
    )
  }

  const steps = scenario.steps ?? []

  const toggleExpand = (id: string) => {
    setExpandedSteps((prev) => ({...prev, [id]: !prev[id]}))
  }

  const handleRunStep = (index: number) => {
    runStep(index)
  }

  const handleUpdateSteps = (newSteps: TestStep[]) => {
    dispatch(updateScenarioSteps({id: scenario.id, steps: newSteps}))
  }

  const handleUpdateStep = (index: number, updated: Partial<TestStep>) => {
    const updatedList = [...steps]
    updatedList[index] = {...updatedList[index], ...updated}
    handleUpdateSteps(updatedList)
  }

  const handleAddStep = () => {
    const newStep: TestStep = {
      id: `step-${Date.now()}`,
      name: `Step ${steps.length + 1} — New Request`,
      method: 'GET',
      url: '{{baseUrl}}/resource',
      headers: [{key: 'Content-Type', value: 'application/json'}],
      body: '',
      assertions: [{id: `ast-${Date.now()}`, expression: 'response.status === 200'}],
      captures: [],
    }
    handleUpdateSteps([...steps, newStep])
    setExpandedSteps((prev) => ({...prev, [newStep.id]: true}))
  }

  const handleInsertStep = (index: number) => {
    const newStep: TestStep = {
      id: `step-${Date.now()}`,
      name: 'New Request',
      method: 'GET',
      url: '{{baseUrl}}/resource',
      headers: [{key: 'Content-Type', value: 'application/json'}],
      body: '',
      assertions: [{id: `ast-${Date.now()}`, expression: 'response.status === 200'}],
      captures: [],
    }
    const updated = [...steps]
    updated.splice(index, 0, newStep)
    handleUpdateSteps(updated)
    setExpandedSteps((prev) => ({...prev, [newStep.id]: true}))
  }

  const handleDeleteStep = (index: number) => {
    if (steps.length <= 1) return
    handleUpdateSteps(steps.filter((_, i) => i !== index))
  }

  const handleMoveStep = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === steps.length - 1)) return
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    const updated = [...steps]
    const temp = updated[index]
    updated[index] = updated[targetIndex]
    updated[targetIndex] = temp
    handleUpdateSteps(updated)
  }

  const handleAddAssertion = (stepIndex: number) => {
    const step = steps[stepIndex]
    const newAst: AssertionRule = {id: `ast-${Date.now()}`, expression: 'response.status === 200'}
    handleUpdateStep(stepIndex, {assertions: [...(step.assertions || []), newAst]})
  }

  const handleUpdateAssertion = (stepIndex: number, astId: string, expr: string) => {
    const step = steps[stepIndex]
    const updated = (step.assertions || []).map((ast) => (ast.id === astId ? {...ast, expression: expr} : ast))
    handleUpdateStep(stepIndex, {assertions: updated})
  }

  const handleDeleteAssertion = (stepIndex: number, astId: string) => {
    const step = steps[stepIndex]
    handleUpdateStep(stepIndex, {assertions: (step.assertions || []).filter((ast) => ast.id !== astId)})
  }

  const handleAddCapture = (stepIndex: number) => {
    const step = steps[stepIndex]
    const newCap: CaptureRule = {id: `cap-${Date.now()}`, varName: 'newVar', expression: 'response.body.id'}
    handleUpdateStep(stepIndex, {captures: [...(step.captures || []), newCap]})
  }

  const handleUpdateCapture = (stepIndex: number, capId: string, field: 'varName' | 'expression', value: string) => {
    const step = steps[stepIndex]
    const updated = (step.captures || []).map((cap) => (cap.id === capId ? {...cap, [field]: value} : cap))
    handleUpdateStep(stepIndex, {captures: updated})
  }

  const handleDeleteCapture = (stepIndex: number, capId: string) => {
    const step = steps[stepIndex]
    handleUpdateStep(stepIndex, {captures: (step.captures || []).filter((cap) => cap.id !== capId)})
  }

  const handleHeaderChange = (stepIndex: number, hIdx: number, newKey: string, newValue: string) => {
    const step = steps[stepIndex]
    const newHeaders = [...(step.headers || [])]
    if (hIdx >= 0 && hIdx < newHeaders.length) {
      if (newKey) {
        newHeaders[hIdx] = {key: newKey, value: newValue}
      } else {
        newHeaders.splice(hIdx, 1)
      }
    } else if (newKey) {
      newHeaders.push({key: newKey, value: newValue})
    }
    handleUpdateStep(stepIndex, {headers: newHeaders})
  }

  const handleAddHeader = (stepIndex: number) => {
    const step = steps[stepIndex]
    handleUpdateStep(stepIndex, {headers: [...(step.headers || []), {key: '', value: ''}]})
  }

  const handleDeleteHeader = (stepIndex: number, hIdx: number) => {
    const step = steps[stepIndex]
    const newHeaders = (step.headers || []).filter((_, i) => i !== hIdx)
    handleUpdateStep(stepIndex, {headers: newHeaders})
  }

  const handleApplyRequest = (stepIndex: number, req: FlatRequest) => {
    const reqHeaders: TestHeader[] = Object.entries(req.headers).map(([key, value]) => ({key, value}))
    handleUpdateStep(stepIndex, {
      name: req.name,
      method: req.method as HttpMethod,
      url: req.url,
      headers: reqHeaders,
      body: req.body,
    })
    setStepSearch((prev) => {
      const next = {...prev}
      delete next[steps[stepIndex].id]
      return next
    })
  }

  const handleViewRaw = () => {
    if (viewMode === 'visual') {
      setRawContent(scenario.content)
      setRawContentDirty(false)
      setViewMode('raw')
    } else {
      if (rawContentDirty) {
        dispatch(updateScenarioRawContent({id: scenario.id, content: rawContent}))
      }
      setViewMode('visual')
    }
  }

  const handleSave = () => {
    dispatch(saveTestFile({name: scenario.id, steps: scenario.steps}))
  }

  const handleRunAll = () => {
    runTests()
  }

  return (
    <div className="space-y-4 p-4">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-600">
            <Layers className="w-4 h-4 text-indigo-500"/>
            <span>
              Total Steps: <strong className="text-slate-900">{steps.length}</strong>
            </span>
          </div>
          <div className="h-4 w-px bg-slate-200"/>
          <span className="text-xs text-slate-500 font-mono">tests/{scenario.filename}</span>
          {hasUnsavedChanges && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200">
              Unsaved
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleViewRaw} className="text-xs">
            <Code className="w-3.5 h-3.5 mr-1"/>
            {viewMode === 'visual' ? 'View Raw' : 'Visual'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setEnvDialogOpen(true)} className="text-xs">
            <Settings className="w-3.5 h-3.5 mr-1"/>
            Variables
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave} disabled={!hasUnsavedChanges} className="text-xs">
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={handleAddStep} className="text-xs">
            <Plus className="w-3.5 h-3.5 mr-1"/>
            Add Step
          </Button>
          <Button size="sm" onClick={handleRunAll} disabled={isRunning}
                  className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
            <Play className="w-3.5 h-3.5 mr-1"/>
            Run All
          </Button>
        </div>
      </div>

      {/* Raw View */}
      {viewMode === 'raw' && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <textarea
            value={rawContent}
            onChange={(e) => {
              setRawContent(e.target.value)
              setRawContentDirty(true)
            }}
            className="w-full h-[600px] p-4 font-mono text-xs text-slate-800 bg-transparent resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>
      )}

      {/* Visual Steps List */}
      {viewMode === 'visual' && (
        <div className="space-y-3">
          <InsertStepZone onInsert={() => handleInsertStep(0)} />
          {steps.map((step, index) => {
            const isExpanded = !!expandedSteps[step.id]
            const result = results.find((r) => r?.stepIndex === index)
            return [
              <div
                key={step.id}
                className={cn(
                  'rounded-xl border bg-white shadow-sm transition-all group',
                  result?.status === 'passed' && 'border-emerald-300',
                  result?.status === 'failed' && 'border-rose-300',
                  result?.status === 'running' && 'border-indigo-400 animate-pulse',
                  !result && 'border-slate-200',
                )}
              >
                {/* Step Header */}
                <div
                  onClick={() => toggleExpand(step.id)}
                  className="p-3 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none border-b border-slate-100"
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <span className="font-mono text-xs font-bold text-slate-400 w-6">#{index + 1}</span>
                    <span className={cn('rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wider', methodColors[step.method])}>
                      {step.method}
                    </span>
                    <div className="relative flex-1">
                      <Input
                        value={step.name}
                        onChange={(e) => handleUpdateStep(index, {name: e.target.value})}
                        onFocus={() => setStepSearch(prev => ({...prev, [step.id]: {open: true, query: step.name}}))}
                        onBlur={() => setTimeout(() => setStepSearch(prev => {
                          const next = {...prev}
                          delete next[step.id]
                          return next
                        }), 200)}
                        onClick={(e) => e.stopPropagation()}
                        className="h-7 text-xs font-medium border-0 bg-transparent shadow-none focus-visible:ring-1 px-1 w-full"
                        placeholder="Search or type step name..."
                      />
                      {stepSearch[step.id]?.open && step.name.trim() && (() => {
                        const q = step.name.toLowerCase()
                        const matched = allRequests.filter(r => r.name.toLowerCase().includes(q)).slice(0, 8)
                        if (matched.length === 0) return null
                        return (
                          <div
                            className="absolute top-full left-0 right-0 z-50 mt-1 max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg"
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {matched.map((req) => (
                              <button
                                key={req.name + req.method + req.url}
                                type="button"
                                onMouseDown={(e) => {
                                  e.stopPropagation()
                                  handleApplyRequest(index, req)
                                }}
                                className="flex w-full items-center gap-2 px-3 py-2 text-xs hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                              >
                                <span className={cn(
                                  'rounded-md px-1.5 py-0.5 text-[10px] font-bold shrink-0',
                                  methodColors[req.method as HttpMethod] ?? 'bg-slate-100 text-slate-600'
                                )}>
                                  {req.method}
                                </span>
                                <span className="text-slate-700 truncate">{req.name}</span>
                                <span className="text-slate-400 font-mono text-[10px] truncate ml-auto">{req.url}</span>
                              </button>
                            ))}
                          </div>
                        )
                      })()}
                    </div>
                    {statusIcon(result?.status)}
                  </div>

                  <div className="flex items-center space-x-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleRunStep(index)} disabled={isRunning}>
                      <Play className="w-3.5 h-3.5"/>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0"
                            onClick={() => handleMoveStep(index, 'up')} disabled={index === 0}>
                      <MoveUp className="w-3.5 h-3.5"/>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0"
                            onClick={() => handleMoveStep(index, 'down')} disabled={index === steps.length - 1}>
                      <MoveDown className="w-3.5 h-3.5"/>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-rose-500 hover:text-rose-700"
                            onClick={() => handleDeleteStep(index)} disabled={steps.length <= 1}>
                      <Trash2 className="w-3.5 h-3.5"/>
                    </Button>
                    {isExpanded
                      ? <ChevronUp className="w-4 h-4 text-slate-400"/>
                      : <ChevronDown className="w-4 h-4 text-slate-400"/>}
                  </div>
                </div>

                {/* Step Body */}
                {isExpanded && (
                  <div className="p-3">
                    <Tabs defaultValue="request" className="gap-0">
                      <TabsList className="h-8 rounded-lg bg-slate-100">
                        <TabsTrigger value="request" className="text-xs">Request</TabsTrigger>
                        <TabsTrigger value="headers" className="text-xs">Headers</TabsTrigger>
                        <TabsTrigger value="assertions" className="text-xs">
                          Assertions ({step.assertions?.length ?? 0})
                        </TabsTrigger>
                        <TabsTrigger value="captures" className="text-xs">
                          Captures ({step.captures?.length ?? 0})
                        </TabsTrigger>
                        <TabsTrigger value="response" className="text-xs">Response</TabsTrigger>
                      </TabsList>

                      {/* Request Tab */}
                      <TabsContent value="request" className="pt-3 space-y-3">
                        <div className="flex gap-2">
                          <Select value={step.method}
                                  onValueChange={(v) => handleUpdateStep(index, {method: v as HttpMethod})}>
                            <SelectTrigger className="w-[110px] h-8 text-xs">
                              <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                              {methods.map((m) => (
                                <SelectItem key={m} value={m} className="text-xs">{m}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            value={step.url}
                            onChange={(e) => handleUpdateStep(index, {url: e.target.value})}
                            className="h-8 text-xs font-mono"
                            placeholder="{{baseUrl}}/path"
                          />
                        </div>
                        <textarea
                          value={step.body ?? ''}
                          onChange={(e) => handleUpdateStep(index, {body: e.target.value})}
                          placeholder="Request body (JSON)"
                          className="w-full h-32 p-3 font-mono text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg resize-y focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          spellCheck={false}
                        />
                      </TabsContent>

                      {/* Headers Tab */}
                      <TabsContent value="headers" className="pt-3 space-y-2">
                        {(step.headers || []).map((h, hIdx) => (
                          <div key={hIdx} className="flex gap-2 items-center">
                            <Input value={h.key}
                                   onChange={(e) => handleHeaderChange(index, hIdx, e.target.value, h.value)}
                                   className="h-8 text-xs font-mono w-1/3" placeholder="Header name"/>
                            <Input value={String(h.value)}
                                   onChange={(e) => handleHeaderChange(index, hIdx, h.key, e.target.value)}
                                   className="h-8 text-xs font-mono flex-1" placeholder="Value"/>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-rose-500"
                                    onClick={() => handleDeleteHeader(index, hIdx)}>
                              <Trash2 className="w-3.5 h-3.5"/>
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" onClick={() => handleAddHeader(index)} className="text-xs">
                          <Plus className="w-3.5 h-3.5 mr-1"/> Add Header
                        </Button>
                      </TabsContent>

                      {/* Assertions Tab */}
                      <TabsContent value="assertions" className="pt-3 space-y-2">
                        {(step.assertions || []).map((ast) => {
                          const astResult = result?.assertionResults.find(r => r.ruleId === ast.id)
                          return (
                            <div key={ast.id} className="flex gap-2 items-center">
                              {astResult && (
                                astResult.passed
                                  ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0"/>
                                  : <XCircle className="w-4 h-4 text-rose-600 shrink-0"/>
                              )}
                              <Input value={ast.expression}
                                     onChange={(e) => handleUpdateAssertion(index, ast.id, e.target.value)}
                                     className="h-8 text-xs font-mono flex-1"
                                     placeholder="response.status === 200"/>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-rose-500"
                                      onClick={() => handleDeleteAssertion(index, ast.id)}>
                                <Trash2 className="w-3.5 h-3.5"/>
                              </Button>
                            </div>
                          )
                        })}
                        <Button variant="outline" size="sm" onClick={() => handleAddAssertion(index)} className="text-xs">
                          <Plus className="w-3.5 h-3.5 mr-1"/> Add Assertion
                        </Button>
                      </TabsContent>

                      {/* Captures Tab */}
                      <TabsContent value="captures" className="pt-3 space-y-2">
                        {(step.captures || []).map((cap) => {
                          const capResult = result?.captureResults.find(r => r.ruleId === cap.id)
                          return (
                            <div key={cap.id} className="flex gap-2 items-center">
                              <Input value={cap.varName}
                                     onChange={(e) => handleUpdateCapture(index, cap.id, 'varName', e.target.value)}
                                     className="h-8 text-xs font-mono w-1/4" placeholder="varName"/>
                              <span className="text-slate-400 text-xs">=</span>
                              <Input value={cap.expression}
                                     onChange={(e) => handleUpdateCapture(index, cap.id, 'expression', e.target.value)}
                                     className="h-8 text-xs font-mono flex-1" placeholder="response.body.id"/>
                              {capResult?.value !== undefined && (
                                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 truncate max-w-[120px]">
                                  {String(capResult.value)}
                                </span>
                              )}
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-rose-500"
                                      onClick={() => handleDeleteCapture(index, cap.id)}>
                                <Trash2 className="w-3.5 h-3.5"/>
                              </Button>
                            </div>
                          )
                        })}
                        <Button variant="outline" size="sm" onClick={() => handleAddCapture(index)} className="text-xs">
                          <Plus className="w-3.5 h-3.5 mr-1"/> Add Capture
                        </Button>
                      </TabsContent>

                      {/* Response Tab */}
                      <TabsContent value="response" className="pt-3">
                        {result?.response ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <span className={cn('font-bold px-2 py-0.5 rounded',
                                result.response.status < 300 ? 'bg-emerald-100 text-emerald-700' :
                                result.response.status < 400 ? 'bg-amber-100 text-amber-700' :
                                'bg-rose-100 text-rose-700')}>
                                {result.response.status} {result.response.statusText}
                              </span>
                              <span className="text-slate-500">{result.durationMs}ms</span>
                            </div>
                            <pre className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 overflow-auto max-h-64">
                              {JSON.stringify(result.response.body, null, 2)}
                            </pre>
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400 py-8 text-center">
                            {result?.error ?? 'No response data available.'}
                          </div>
                        )}
                      </TabsContent>
                    </Tabs>

                    {result?.error && (
                      <div className="mt-3 p-2 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700">
                        {result.error}
                      </div>
                    )}
                  </div>
                )}
              </div>,
              <InsertStepZone key={`insert-after-${step.id}`} onInsert={() => handleInsertStep(index + 1)} />
            ]
          })}
        </div>
      )}
      <EnvironmentVariablesDialog open={envDialogOpen} onOpenChange={setEnvDialogOpen}/>
    </div>
  )
}

export default TestScenarioEditor
