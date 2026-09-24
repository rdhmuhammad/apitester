import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {
    addVariable,
    removeVariable,
    selectVariable,
    updateVariable,
} from "@/app/slices/collectionSlices.ts";
import type {CollectionVar} from "@/pages/editor/types/api.ts";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus, Trash2} from "lucide-react";

type VariableDraft = { key: string; value: string };
const NEW_VARIABLE_DRAFT = "__new__";

const VariableManage: React.FC = () => {
    const dispatch = useAppDispatch();
    const variables = useAppSelector(selectVariable);

    const [drafts, setDrafts] = useState<Record<string, VariableDraft>>({
        [NEW_VARIABLE_DRAFT]: {key: "", value: ""},
    });

    const createVariable = drafts[NEW_VARIABLE_DRAFT] ?? {key: "", value: ""};

    const handleAddVariable = () => {
        if (!createVariable.key.trim()) return;
        const newVar: CollectionVar = {
            id: crypto.randomUUID(),
            key: createVariable.key.trim(),
            value: createVariable.value,
            type: "string",
            category: "",
        };
        dispatch(addVariable(newVar));
        setDrafts((current) => ({
            ...current,
            [NEW_VARIABLE_DRAFT]: {key: "", value: ""},
        }));
    };

    const handleUpdateVariable = (id: string, field: "key" | "value", value: string) => {
        const variable = variables.find((item) => item.id === id);
        if (!variable) return;

        const draft = drafts[id] ?? {key: variable.key, value: variable.value};
        const next = {...draft, [field]: value};
        if (!next.key.trim()) return;

        dispatch(updateVariable({...variable, [field]: value}));
        setDrafts((current) => {
            const updated = {...current};
            delete updated[id];
            return updated;
        });
    };

    const handleDeleteVariable = (id: string) => {
        dispatch(removeVariable({id}));
        setDrafts((current) => {
            const updated = {...current};
            delete updated[id];
            return updated;
        });
    };

    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="flex-1 overflow-auto rounded-lg border border-border">
                <div className="grid grid-cols-12 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <span className="col-span-5">Key</span>
                    <span className="col-span-5">Value</span>
                    <span className="col-span-2 text-right">Action</span>
                </div>
                {variables.length === 0 && (
                    <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                        No collection variables. Add one below.
                    </div>
                )}
                {variables.map((v) => {
                    const draft = drafts[v.id] ?? {key: v.key, value: v.value};
                    return (
                        <div
                            key={v.id}
                            className="grid grid-cols-12 border-t border-border px-3 py-2 items-center gap-2"
                        >
                            <div className="col-span-5">
                                <Input
                                    value={draft.key}
                                    onChange={(e) =>
                                        setDrafts((current) => ({
                                            ...current,
                                            [v.id]: {...draft, key: e.target.value},
                                        }))
                                    }
                                    onBlur={() => handleUpdateVariable(v.id, "key", draft.key)}
                                    className="h-8 text-sm"
                                />
                            </div>
                            <div className="col-span-5">
                                <Input
                                    value={draft.value}
                                    onChange={(e) =>
                                        setDrafts((current) => ({
                                            ...current,
                                            [v.id]: {...draft, value: e.target.value},
                                        }))
                                    }
                                    onBlur={() => handleUpdateVariable(v.id, "value", draft.value)}
                                    className="h-8 text-sm"
                                />
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteVariable(v.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="shrink-0 pt-3">
                <div className="flex items-center gap-2">
                    <Input
                        value={createVariable.key}
                        onChange={(e) =>
                            setDrafts((current) => ({
                                ...current,
                                [NEW_VARIABLE_DRAFT]: {
                                    ...current[NEW_VARIABLE_DRAFT],
                                    key: e.target.value,
                                },
                            }))
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddVariable();
                        }}
                        placeholder="Key"
                        className="flex-1"
                    />
                    <Input
                        value={createVariable.value}
                        onChange={(e) =>
                            setDrafts((current) => ({
                                ...current,
                                [NEW_VARIABLE_DRAFT]: {
                                    ...current[NEW_VARIABLE_DRAFT],
                                    value: e.target.value,
                                },
                            }))
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddVariable();
                        }}
                        placeholder="Value"
                        className="flex-1"
                    />
                    <Button variant="outline" size="sm" onClick={handleAddVariable}>
                        <Plus className="h-4 w-4 mr-1" /> Add
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VariableManage;
