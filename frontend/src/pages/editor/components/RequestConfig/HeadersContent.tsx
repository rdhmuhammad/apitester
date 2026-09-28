import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { cn, getIPAddress } from "@/lib/utils.ts";
import { Eye, EyeOff, Plus, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import {
    addHeader,
    removeHeader,
    selectHeader,
    updateHeader,
} from "@/app/slices/requestSlices.ts";
import type { ItemUrl } from "@/pages/editor/types/api.ts";

export interface HeadersContentProps {
    headers?: ItemUrl[];
    updateHeaders?: (headers: ItemUrl[]) => void;
    className?: string;
}

export const HeadersContent: React.FC<HeadersContentProps> = ({
    headers: propHeaders,
    updateHeaders: propUpdateHeaders,
    className,
}) => {
    const dispatch = useAppDispatch();
    const reduxHeaders = useAppSelector(selectHeader);
    const headers = propHeaders ?? reduxHeaders ?? [];

    const [newHeaderKey, setNewHeaderKey] = useState("");
    const [newHeaderValue, setNewHeaderValue] = useState("");
    const [showSysHeader, setShowSysHeader] = useState(false);

    const sysHeaders: ItemUrl[] = [
        { id: "sys-cache", key: "Cache-Control", value: "no-cache", disabled: false },
        { id: "sys-ua", key: "User-Agent", value: "ApiTesterAgent/0.0.1", disabled: false },
        { id: "sys-host", key: "Host", value: getIPAddress(), disabled: false },
        { id: "sys-accept", key: "Accept", value: "*/*", disabled: false },
        { id: "sys-encoding", key: "Accept-Encoding", value: "gzip, deflate, br", disabled: false },
    ];

    const headerShow = showSysHeader ? [...headers, ...sysHeaders] : headers;

    const handleUpdateHeader = (next: ItemUrl) => {
        if (propUpdateHeaders) {
            propUpdateHeaders(headers.map((item) => (item.id === next.id ? next : item)));
        } else {
            dispatch(updateHeader({ header: next }));
        }
    };

    const handleToggleHeader = (item: ItemUrl) => {
        handleUpdateHeader({ ...item, disabled: !item.disabled });
    };

    const handleDeleteHeader = (id?: string) => {
        if (!id) return;
        if (propUpdateHeaders) {
            propUpdateHeaders(headers.filter((entry) => entry.id !== id));
        } else {
            dispatch(removeHeader({ id }));
        }
    };

    const handleAddHeader = () => {
        if (!newHeaderKey.trim()) return;
        const newH: ItemUrl = {
            id: crypto.randomUUID(),
            key: newHeaderKey.trim(),
            value: newHeaderValue,
            disabled: false,
        };
        if (propUpdateHeaders) {
            propUpdateHeaders([...headers, newH]);
        } else {
            dispatch(addHeader({ header: newH }));
        }
        setNewHeaderKey("");
        setNewHeaderValue("");
    };

    return (
        <div className={className}>
            <Button
                variant="ghost"
                size="xs"
                className="mb-4 rounded-full bg-gray-100 hover:bg-gray-200 items-center"
                onClick={() => setShowSysHeader((value) => !value)}
            >
                {showSysHeader ? (
                    <>
                        <Eye className="text-slate-600" size={10} />
                        <span className="text-[10px] font-medium text-slate-600">Hide auto-generated headers</span>
                    </>
                ) : (
                    <>
                        <EyeOff className="text-slate-600" size={10} />
                        <span className="text-[10px] font-medium text-slate-600">Show auto-generated headers</span>
                    </>
                )}
            </Button>
            <div className="overflow-hidden rounded-lg border border-border">
                <div className="grid grid-cols-12 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <span className="col-span-5">Header</span>
                    <span className="col-span-5">Value</span>
                    <span className="col-span-2" />
                </div>
                {headerShow.map((item) => {
                    const isSystem = item.id?.startsWith("sys-");
                    return (
                        <div
                            key={item.id ?? item.key}
                            className={cn(
                                "grid grid-cols-12 border-t border-border px-3 py-2 items-center",
                                item.disabled && "opacity-50"
                            )}
                        >
                            <Input
                                value={item.key}
                                readOnly
                                className="col-span-5 h-8 bg-background"
                                disabled={item.disabled || isSystem}
                            />
                            <Input
                                value={item.value}
                                onChange={(event) =>
                                    handleUpdateHeader({ ...item, value: event.target.value })
                                }
                                className="col-span-5 ml-3 h-8 bg-background"
                                disabled={item.disabled || isSystem}
                                readOnly={isSystem}
                            />
                            <div className="col-span-2 ml-3 flex justify-end gap-1">
                                {!isSystem && (
                                    <>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleToggleHeader(item)}
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
                                            onClick={() => handleDeleteHeader(item.id)}
                                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
                <div className="grid grid-cols-12 border-t border-border px-3 py-2 items-center">
                    <Input
                        value={newHeaderKey}
                        onChange={(event) => setNewHeaderKey(event.target.value)}
                        className="col-span-5 h-8"
                        placeholder="header key"
                    />
                    <Input
                        value={newHeaderValue}
                        onChange={(event) => setNewHeaderValue(event.target.value)}
                        className="col-span-5 ml-3 h-8"
                        placeholder="header value"
                    />
                    <div className="col-span-2 flex justify-end">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleAddHeader}
                            className="h-8 w-8 p-0"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadersContent;
