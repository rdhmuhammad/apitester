import {useEffect, useState} from "react"
import {Plus, Trash2} from "lucide-react"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx"
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx"
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts"
import {
  fetchEnvironments,
  saveEnvironments,
  setActiveEnvironment,
  selectEnvironments,
  selectActiveEnvironment,
  selectEnvironmentStatus,
} from "@/app/slices/environmentSlice.ts"
import {selectCollectionId} from "@/app/slices/testScenarioSlice.ts"
import type {EnvironmentEntry} from "@/layout/services/environment.ts"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const EnvironmentVariablesDialog: React.FC<Props> = ({open, onOpenChange}) => {
  const dispatch = useAppDispatch()
  const environments = useAppSelector(selectEnvironments)
  const activeEnv = useAppSelector(selectActiveEnvironment)
  const status = useAppSelector(selectEnvironmentStatus)
  const collectionId = useAppSelector(selectCollectionId)

  const [selectedName, setSelectedName] = useState<string>("")
  const [editing, setEditing] = useState<Record<string, string>>({})
  const [newKey, setNewKey] = useState("")
  const [newValue, setNewValue] = useState("")

  useEffect(() => {
    if (open && collectionId) {
      dispatch(fetchEnvironments(collectionId))
    }
  }, [open, collectionId, dispatch])

  useEffect(() => {
    if (activeEnv) {
      setSelectedName(activeEnv)
      const env = environments.find(e => e.name === activeEnv)
      setEditing(env?.variables ? {...env.variables} : {})
    }
  }, [activeEnv, environments])

  const handleSelectEnv = (name: string) => {
    const env = environments.find(e => e.name === name)
    setSelectedName(name)
    setEditing(env?.variables ? {...env.variables} : {})
  }

  const handleSetVariable = (key: string, value: string) => {
    setEditing(prev => ({...prev, [key]: value}))
  }

  const handleRemoveVariable = (key: string) => {
    setEditing(prev => {
      const next = {...prev}
      delete next[key]
      return next
    })
  }

  const handleAddVariable = () => {
    const key = newKey.trim()
    if (!key || editing[key] !== undefined) return
    setEditing(prev => ({...prev, [key]: newValue}))
    setNewKey("")
    setNewValue("")
  }

  const handleSave = () => {
    if (!collectionId) return

    const updated: EnvironmentEntry[] = environments.map(e => {
      if (e.name === selectedName) {
        return {...e, variables: editing}
      }
      return e
    })

    dispatch(saveEnvironments({collectionId, environments: updated})).then(() => {
      dispatch(setActiveEnvironment(selectedName))
      onOpenChange(false)
    })
  }

  const handleCreateEnv = () => {
    const name = prompt("Environment name:")
    if (!name || environments.some(e => e.name === name)) return

    const updated = [...environments, {name, variables: {}}]
    if (!collectionId) return
    dispatch(saveEnvironments({collectionId, environments: updated})).then(() => {
      dispatch(setActiveEnvironment(name))
    })
  }

  const handleDeleteEnv = () => {
    if (!collectionId || !selectedName) return
    if (!confirm(`Delete environment "${selectedName}"?`)) return

    const updated = environments.filter(e => e.name !== selectedName)
    dispatch(saveEnvironments({collectionId, environments: updated})).then(() => {
      if (updated.length > 0) {
        dispatch(setActiveEnvironment(updated[0].name))
      }
    })
  }

  const entries = Object.entries(editing)
  const loading = status === 'pending'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Environment Variables</DialogTitle>
          <DialogDescription>
            Manage environment-specific variables and select the active environment for template resolution.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Environment Selector + Actions */}
          <div className="flex items-center gap-2">
            <Select value={selectedName} onValueChange={handleSelectEnv} disabled={loading || environments.length === 0}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select environment..." />
              </SelectTrigger>
              <SelectContent>
                {environments.map(env => (
                  <SelectItem key={env.name} value={env.name}>{env.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={handleCreateEnv} className="text-xs">
              <Plus className="w-3.5 h-3.5 mr-1"/>New
            </Button>
            {environments.length > 1 && selectedName && (
              <Button variant="outline" size="sm" onClick={handleDeleteEnv} className="text-xs text-rose-600 hover:text-rose-700">
                <Trash2 className="w-3.5 h-3.5"/>
              </Button>
            )}
          </div>

          {!selectedName ? (
            <div className="text-center py-8 text-sm text-slate-400">
              {loading ? 'Loading...' : 'No environments. Click "New" to create one.'}
            </div>
          ) : (
            <>
              {/* Variables Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-slate-50 border-b text-xs font-semibold text-slate-500">
                  <div className="col-span-4">Key</div>
                  <div className="col-span-7">Value</div>
                  <div className="col-span-1"/>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {entries.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-400">
                      No variables yet. Add one below.
                    </div>
                  ) : (
                    entries.map(([key, value]) => (
                      <div key={key} className="grid grid-cols-12 gap-2 px-3 py-1.5 border-b last:border-b-0 items-center">
                        <div className="col-span-4">
                          <Input
                            value={key}
                            disabled
                            className="h-7 text-xs font-mono bg-slate-50"
                          />
                        </div>
                        <div className="col-span-7">
                          <Input
                            value={value}
                            onChange={(e) => handleSetVariable(key, e.target.value)}
                            className="h-7 text-xs font-mono"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-slate-400 hover:text-rose-600"
                            onClick={() => handleRemoveVariable(key)}
                          >
                            <Trash2 className="w-3 h-3"/>
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Add Variable */}
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Key"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddVariable()}
                  className="h-8 text-xs font-mono"
                />
                <Input
                  placeholder="Value"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddVariable()}
                  className="h-8 text-xs font-mono"
                />
                <Button variant="outline" size="sm" onClick={handleAddVariable} className="text-xs shrink-0">
                  <Plus className="w-3.5 h-3.5"/>
                </Button>
              </div>
            </>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave} disabled={loading || !selectedName}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EnvironmentVariablesDialog
