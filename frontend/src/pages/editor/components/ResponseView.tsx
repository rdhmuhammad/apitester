import {Badge} from "@/components/ui/badge.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Download, Link2, Lock} from "lucide-react";
import {Textarea} from "@/components/ui/textarea.tsx";
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
const ResponseView: React.FC = () => {
    return (
        <section className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
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
    )
}

export default ResponseView