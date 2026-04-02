import {useState} from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Clock3, Download, FileJson2, Link2, Lock, ShieldCheck, ToggleLeft, ToggleRight} from "lucide-react";

const headerParams = [
    {key: "Content-Type", value: "application/json"},
    {key: "Authorization", value: "Bearer <token>"},
    {key: "X-Request-ID", value: "editor-sample-001"}
];

const sampleResponse = `{
  "success": true,
  "message": "Request completed successfully",
  "data": [
    {
      "id": "usr_1001",
      "name": "Avery Johnson",
      "email": "avery@example.com"
    },
    {
      "id": "usr_1002",
      "name": "Samira Noor",
      "email": "samira@example.com"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 234
  }
}`;

const Editor: React.FC = () => {
    const [queryParams, setQueryParams] = useState([
        {key: "page", value: "1", description: "Current page number"},
        {key: "limit", value: "20", description: "Rows per page"},
        {key: "sort", value: "created_at:desc", description: "Sort order"}
    ]);

    const [enabledParams, setEnabledParams] = useState<Record<string, boolean>>({
        page: true,
        limit: true,
        sort: true
    });

    const handleToggleParam = (key: string) => {
        setEnabledParams((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleParamValueChange = (key: string, nextValue: string) => {
        setQueryParams((prev) =>
            prev.map((param) =>
                param.key === key ? {...param, value: nextValue} : param
            )
        );
    };

    return (
        <div className="h-full overflow-auto bg-slate-50">
            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col gap-4 p-4">
                <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <div>
                            <h2 className="text-sm font-semibold text-slate-800">Request Configuration</h2>
                            <p className="text-xs text-slate-500">Manage query params, auth, headers, and payload.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Connected</Badge>
                            <Badge variant="outline" className="text-slate-600">
                                <Clock3 className="mr-1 h-3.5 w-3.5"/>
                                Last run 4m ago
                            </Badge>
                        </div>
                    </div>
                    <Tabs defaultValue="params" className="gap-0">
                        <div className="border-b border-slate-200 px-4 pt-3">
                            <TabsList className="h-10 rounded-lg bg-slate-100">
                                <TabsTrigger value="params">Params</TabsTrigger>
                                <TabsTrigger value="auth">Authorization</TabsTrigger>
                                <TabsTrigger value="headers">Headers</TabsTrigger>
                                <TabsTrigger value="body">Body</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Params */}
                        <TabsContent value="params" className="p-4">
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <div
                                    className="grid grid-cols-12 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                                    <span className="col-span-3">Key</span>
                                    <span className="col-span-3">Value</span>
                                    <span className="col-span-4">Description</span>
                                </div>
                                {queryParams.map((item) => (
                                    <div key={item.key}
                                         className="grid grid-cols-12 border-t border-slate-200 px-3 py-2">
                                        <div className="col-span-3">
                                            <Input
                                                value={item.key}
                                                readOnly
                                                className="h-8 bg-white"
                                                disabled={!enabledParams[item.key]}
                                            />
                                        </div>
                                        <div className="col-span-3 pl-3">
                                            <Input
                                                value={item.value}
                                                onChange={(event) => handleParamValueChange(item.key, event.target.value)}
                                                className="h-8 bg-white"
                                                disabled={!enabledParams[item.key]}
                                            />
                                        </div>
                                        <div className="col-span-5 pl-3 flex items-center justify-start">
                                            <p className="text-gray-500 text-[12px]">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="col-span-1 pl-3 flex justify-end">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleToggleParam(item.key)}
                                                className="h-8 justify-center self-end"
                                            >
                                                {enabledParams[item.key] ? (
                                                    <ToggleRight className="h-4 w-4 text-emerald-600"/>
                                                ) : (
                                                    <ToggleLeft className="h-4 w-4 text-slate-400"/>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Authorization */}
                        <TabsContent value="auth" className="p-4">
                            <div className="grid gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-slate-700">Auth Type</p>
                                    <Select defaultValue="bearer">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">No Auth</SelectItem>
                                            <SelectItem value="bearer">Bearer Token</SelectItem>
                                            <SelectItem value="basic">Basic Auth</SelectItem>
                                            <SelectItem value="apikey">API Key</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-slate-700">Token</p>
                                    <Input type="password" value="****************************" readOnly/>
                                </div>
                                <div
                                    className="md:col-span-2 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
                                    <div className="flex items-center gap-2 font-medium">
                                        <ShieldCheck className="h-4 w-4"/>
                                        Authorization is scoped to this request only.
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Headers */}
                        <TabsContent value="headers" className="p-4">
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <div
                                    className="grid grid-cols-8 bg-slate-100 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                                    <span className="col-span-3">Header</span>
                                    <span className="col-span-5">Value</span>
                                </div>
                                {headerParams.map((item) => (
                                    <div key={item.key}
                                         className="grid grid-cols-8 border-t border-slate-200 px-3 py-2">
                                        <div className="col-span-3">
                                            <Input value={item.key} readOnly className="h-8 bg-white"/>
                                        </div>
                                        <div className="col-span-5 pl-3">
                                            <Input value={item.value} readOnly className="h-8 bg-white"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Request Body */}
                        <TabsContent value="body" className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-slate-700">
                                        <FileJson2 className="h-4 w-4 text-blue-600"/>
                                        JSON Payload
                                    </div>
                                    <Badge variant="outline" className="text-slate-600">raw / json</Badge>
                                </div>
                                <Textarea
                                    className="min-h-[220px] bg-slate-950 font-mono text-sm text-slate-100"
                                    defaultValue={`{
  "name": "new user",
  "email": "new.user@example.com",
  "role": "viewer"
}`}
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                <section
                    className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-semibold text-slate-800">Response</h2>
                            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">200 OK</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>412 ms</span>
                            <span>3.1 KB</span>
                            <span>HTTP/1.1</span>
                        </div>
                    </div>

                    <Tabs defaultValue="pretty" className="flex-1 overflow-hidden p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <TabsList className="h-9 rounded-lg bg-slate-100">
                                <TabsTrigger value="pretty">Pretty</TabsTrigger>
                                <TabsTrigger value="raw">Raw</TabsTrigger>
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                            </TabsList>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Download className="mr-1 h-4 w-4"/>
                                    Save
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Link2 className="mr-1 h-4 w-4"/>
                                    Share
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Lock className="mr-1 h-4 w-4"/>
                                    Visualize
                                </Button>
                            </div>
                        </div>

                        <TabsContent value="pretty" className="h-[calc(100%-3.2rem)]">
                            <Textarea
                                className="h-full min-h-[220px] resize-none bg-slate-950 font-mono text-sm text-slate-100"
                                value={sampleResponse}
                                readOnly
                            />
                        </TabsContent>

                        <TabsContent value="raw" className="h-[calc(100%-3.2rem)]">
                            <Textarea
                                className="h-full min-h-[220px] resize-none font-mono text-sm"
                                value={sampleResponse}
                                readOnly
                            />
                        </TabsContent>

                        <TabsContent value="preview" className="h-[calc(100%-3.2rem)]">
                            <div
                                className="h-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                                Preview mode can render HTML or documentation response output here.
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        </div>
    );
};

export default Editor;
