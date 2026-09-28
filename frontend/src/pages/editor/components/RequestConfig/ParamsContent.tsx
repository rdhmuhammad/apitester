import React, { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { Plus, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import {
    addQueryParam,
    removeQueryParam,
    selectReqParam,
    updateQueryParam,
} from "@/app/slices/requestSlices.ts";
import type { ItemUrl } from "@/pages/editor/types/api.ts";

export interface ParamsContentProps {
    query?: ItemUrl[];
    updateQuery?: (query: ItemUrl[]) => void;
    className?: string;
}

export const ParamsContent: React.FC<ParamsContentProps> = ({
    query: propQuery,
    updateQuery: propUpdateQuery,
    className,
}) => {
    const dispatch = useAppDispatch();
    const reduxQuery = useAppSelector(selectReqParam);
    const query = propQuery ?? reduxQuery ?? [];

    const [newParamKey, setNewParamKey] = useState("");
    const [newParamValue, setNewParamValue] = useState("");
    const [newParamDesc, setNewParamDesc] = useState("");

    const handleUpdateParam = (next: ItemUrl) => {
        if (propUpdateQuery) {
            propUpdateQuery(query.map((item) => (item.id === next.id ? next : item)));
        } else {
            dispatch(updateQueryParam({ query: next }));
        }
    };

    const handleToggleParam = (item: ItemUrl) => {
        handleUpdateParam({ ...item, disabled: !item.disabled });
    };

    const handleDeleteParam = (id?: string) => {
        if (!id) return;
        if (propUpdateQuery) {
            propUpdateQuery(query.filter((entry) => entry.id !== id));
        } else {
            dispatch(removeQueryParam({ id }));
        }
    };

    const handleAddParam = () => {
        if (!newParamKey.trim()) return;
        const newParam: ItemUrl = {
            id: crypto.randomUUID(),
            key: newParamKey.trim(),
            value: newParamValue,
            description: newParamDesc,
            disabled: false,
        };
        if (propUpdateQuery) {
            propUpdateQuery([...query, newParam]);
        } else {
            dispatch(addQueryParam({ query: newParam }));
        }
        setNewParamKey("");
        setNewParamValue("");
        setNewParamDesc("");
    };

    return (
        <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
            <div className="grid grid-cols-12 gap-x-2 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <span className="col-span-3">Key</span>
                <span className="col-span-3">Value</span>
                <span className="col-span-4">Description</span>
                <span className="col-span-2" />
            </div>
            {query.map((item) => (
                <div
                    key={item.id ?? item.key}
                    className={cn(
                        "grid grid-cols-12 gap-x-2 border-t border-border px-3 py-2 items-center",
                        item.disabled && "opacity-50"
                    )}
                >
                    <Input
                        value={item.key}
                        readOnly
                        className="col-span-3 h-8 bg-background"
                        disabled={item.disabled}
                    />
                    <Input
                        value={item.value}
                        onChange={(event) =>
                            handleUpdateParam({ ...item, value: event.target.value })
                        }
                        className="col-span-3 h-8 bg-background"
                        disabled={item.disabled}
                    />
                    <Input
                        value={item.description ?? ""}
                        onChange={(event) =>
                            handleUpdateParam({ ...item, description: event.target.value })
                        }
                        className="col-span-4 h-8 text-xs bg-background"
                        disabled={item.disabled}
                        placeholder="description"
                    />
                    <div className="col-span-2 flex justify-end gap-1">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleToggleParam(item)}
                            className="h-8 w-8 p-0"
                        >
                            {item.disabled ? (
                                <ToggleLeft className="h-4 w-4 text-muted-foreground" />
                            ) : (
                                <ToggleRight className="h-4 w-4 text-emerald-600" />
                            )}
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteParam(item.id)}
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
            <div className="grid grid-cols-12 gap-x-2 border-t border-border px-3 py-2 items-center">
                <Input
                    value={newParamKey}
                    onChange={(event) => setNewParamKey(event.target.value)}
                    className="col-span-3 h-8"
                    placeholder="key"
                />
                <Input
                    value={newParamValue}
                    onChange={(event) => setNewParamValue(event.target.value)}
                    className="col-span-3 h-8"
                    placeholder="value"
                />
                <Input
                    value={newParamDesc}
                    onChange={(event) => setNewParamDesc(event.target.value)}
                    className="col-span-4 h-8 text-xs"
                    placeholder="description"
                />
                <div className="col-span-2 flex justify-end">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleAddParam}
                        className="h-8 w-8 p-0"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ParamsContent;
