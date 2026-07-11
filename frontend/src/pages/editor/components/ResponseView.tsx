import {Badge} from "@/components/ui/badge.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Download, Link2, Lock} from "lucide-react";
import {Textarea} from "@/components/ui/textarea.tsx";
import {useAppSelector} from "@/app/store/hooks.ts";
import {selectResponse, selectSelectedRequest} from "@/app/slices/collectionSlices.ts";
import {useMemo, useState, useCallback} from "react";
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/theme-monokai.js'

const ResponseView: React.FC = () => {
    const currResponse = useAppSelector(selectResponse)
    const selectedRequest = useAppSelector(selectSelectedRequest)
    const examples = selectedRequest?.exampleResponse ?? []

    const [sourceTab, setSourceTab] = useState('actual')

    const activeExample = sourceTab === 'actual'
        ? null
        : examples[Number(sourceTab)]

    const responseCode = activeExample?.code ?? currResponse?.statusCode
    const responseStatus = activeExample?.status ?? currResponse?.statusText ?? 'OK'
    const badgeColor = responseCode === 200 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'

    const responseBody = useMemo(() => {
        if (activeExample) {
            return activeExample.body
        }
        return JSON.stringify(currResponse?.data)
    }, [activeExample, currResponse])

    const prettyResponse = useMemo(() => {
        if (!responseBody) return ""
        try {
            return JSON.stringify(JSON.parse(responseBody), null, 2)
        } catch {
            return responseBody
        }
    }, [responseBody])

    const onSourceChange = useCallback((value: string) => {
        setSourceTab(value)
    }, [])

    return (
        <section
            className="flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-slate-800">Response</h2>
                    {
                        responseCode &&<Badge className={badgeColor}>{`${responseCode} ${responseStatus}`}</Badge>
                    }        
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    {sourceTab === 'actual' && (
                        <>
                            <span>{currResponse?.responseTime ?? 0} ms</span>
                            <span>{currResponse?.responseSize ?? 0} kb</span>
                            <span>{currResponse?.protocol}</span>
                        </>
                    )}
                </div>
            </div>

            <div className="border-b border-slate-200 px-4 pt-2">
                <Tabs value={sourceTab} onValueChange={onSourceChange}>
                    <TabsList className="h-8 rounded-lg bg-slate-100">
                        <TabsTrigger value="actual" className="h-7 px-3 text-xs">
                            Actual Response
                        </TabsTrigger>
                        {examples.map((ex, i) => (
                            <TabsTrigger
                                key={i}
                                value={String(i)}
                                className="h-7 px-3 text-xs"
                            >
                                Example: {ex.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <Tabs defaultValue="pretty" className="flex-1 overflow-hidden p-4">
                <div className="mb-3 flex items-center justify-between">
                    <TabsList className="h-9 rounded-lg bg-slate-100">
                        <TabsTrigger value="pretty">Pretty</TabsTrigger>
                        <TabsTrigger value="raw">Raw</TabsTrigger>
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
                    <div>
                        <AceEditor
                            readOnly
                            placeholder=""
                            mode="json"
                            theme="monokai"
                            width="full"
                            name="response"
                            fontSize={14}
                            lineHeight={19}
                            showPrintMargin={false}
                            showGutter={false}
                            highlightActiveLine={true}
                            value={prettyResponse}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                enableMobileMenu: false,
                                showLineNumbers: false,
                                tabSize: 2,
                            }}/>
                    </div>
                </TabsContent>

                <TabsContent value="raw" className="h-[calc(100%-3.2rem)]">
                    <Textarea
                        className="h-full min-h-[220px] resize-none font-mono text-sm"
                        value={responseBody}
                        disabled
                    />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default ResponseView