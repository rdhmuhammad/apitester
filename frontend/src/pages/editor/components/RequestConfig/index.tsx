import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { FileJson2, FileText, ToggleLeft, ToggleRight } from "lucide-react";
import AuthContent from "@/pages/editor/components/RequestConfig/AuthContent.tsx";
import ParamsContent from "@/pages/editor/components/RequestConfig/ParamsContent.tsx";
import HeadersContent from "@/pages/editor/components/RequestConfig/HeadersContent.tsx";
import { BodyEditor, type ContentType } from "@/pages/editor/components/RequestConfig/BodyEditor.tsx";
import ScriptEditor from "@/pages/editor/components/RequestConfig/ScriptEditor.tsx";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import { removeHeader, selectHeader, selectRequestBody, updateHeader } from "@/app/slices/requestSlices.ts";

export const RequestConfigTabs: React.FC = () => {
    const dispatch = useAppDispatch();
    const headers = useAppSelector(selectHeader);
    const requestBody = useAppSelector(selectRequestBody);

    const [contentType, setContentType] = useState<ContentType>(
        requestBody?.mode === "formdata" ? "multipart/form-data" : "application/json"
    );

    useEffect(() => {
        const nextType = requestBody?.mode === "formdata" ? "multipart/form-data" : "application/json";
        if (nextType !== contentType) {
            setContentType(nextType as ContentType);
        }
    }, [requestBody?.mode]);

    useEffect(() => {
        const ct = headers.find((h) => h.key.toLowerCase() === "content-type");
        if (!ct) return;
        dispatch(
            updateHeader({
                header: {
                    ...ct,
                    value: contentType,
                    disabled: false,
                },
            })
        );
    }, [contentType]);

    const hasContentType = headers.some(
        (h) => h.key.toLowerCase() === "content-type" && !h.disabled
    );

    const toggleBody = () => {
        const ct = headers.find((h) => h.key.toLowerCase() === "content-type");
        if (ct) {
            if (!ct.disabled) {
                dispatch(removeHeader({ id: ct.id! }));
            } else {
                dispatch(
                    updateHeader({
                        header: {
                            ...ct,
                            value: contentType,
                            disabled: false,
                        },
                    })
                );
            }
        } else {
            dispatch(
                updateHeader({
                    header: {
                        id: crypto.randomUUID(),
                        key: "Content-Type",
                        value: contentType,
                        disabled: false,
                    },
                })
            );
        }
    };

    return (
        <section className="rounded-b-xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div>
                    <h2 className="text-sm font-semibold text-foreground">Request Configuration</h2>
                    <p className="text-xs text-muted-foreground">Manage query params, auth, headers, and payload.</p>
                </div>
            </div>
            <Tabs defaultValue="params" className="gap-0">
                <div className="border-b border-border px-4 pt-3">
                    <TabsList className="h-10 rounded-lg bg-muted">
                        <TabsTrigger value="params">Params</TabsTrigger>
                        <TabsTrigger value="auth">Authorization</TabsTrigger>
                        <TabsTrigger value="headers">Headers</TabsTrigger>
                        <TabsTrigger value="body">Body</TabsTrigger>
                        <TabsTrigger value="scripts">Scripts</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="params" className="p-4">
                    <ParamsContent />
                </TabsContent>

                <TabsContent value="auth" className="p-4">
                    <AuthContent />
                </TabsContent>

                <TabsContent value="headers" className="p-4">
                    <HeadersContent />
                </TabsContent>

                <TabsContent value="body" className="p-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Select
                                value={contentType}
                                onValueChange={(value) => setContentType(value as ContentType)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="application/json">
                                        <FileJson2 className="h-4 w-4 text-indigo-500" />
                                        JSON Payload
                                    </SelectItem>
                                    <SelectItem value="multipart/form-data">
                                        <FileText className="h-4 w-4 text-indigo-500" />
                                        Multipart Form
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-slate-600">
                                    {contentType}
                                </Badge>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={toggleBody}
                                    className="h-8 w-8 p-0"
                                >
                                    {hasContentType ? (
                                        <ToggleRight className="h-4 w-4 text-emerald-600" />
                                    ) : (
                                        <ToggleLeft className="h-4 w-4 text-slate-400" />
                                    )}
                                </Button>
                            </div>
                        </div>
                        {hasContentType ? (
                            <BodyEditor contentType={contentType} />
                        ) : (
                            <div className="flex items-center justify-center py-12 text-sm text-slate-400">
                                Body disabled — toggle to enable
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="scripts" className="p-4">
                    <div className="space-y-3">
                        <ScriptEditor />
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default RequestConfigTabs;
