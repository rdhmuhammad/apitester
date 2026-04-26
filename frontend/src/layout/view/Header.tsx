import {useEffect, useState} from "react";
import {Images} from "@/config/constant/Images.tsx";
import {cn} from "@/lib/utils.ts";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {ArrowDownToLine, ArrowUpFromLine, Send} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {type ColtReqMethod, fetchCollections, selectBaseUrl, selectRequest} from "@/app/slices/collectionSlices.ts";
import type {HeaderAction} from "@/layout/types/headerContext.ts";
import {useSendRequest} from "@/layout/hooks/useSendRequest.ts";

const HeaderLayout: React.FC<{onSend: HeaderAction}> = (
    {
        onSend
    }) => {
    const dispatch = useAppDispatch()
    const currRequest = useAppSelector(selectRequest)
    const baseUrlOptions = useAppSelector(selectBaseUrl)

    const [gitAction, setGitAction] = useState<"pull" | "push" | null>(null);
    const requestMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
    const methodColorClass: Record<ColtReqMethod[number], string> = {
        GET: "bg-emerald-600",
        POST: "bg-amber-600",
        PUT: "bg-blue-600",
        PATCH: "bg-violet-600",
        DELETE: "bg-red-600"
    };
    const [requestMethod, setRequestMethod] = useState<ColtReqMethod[number]>("GET");

    const [selectedBaseUrl, setSelectedBaseUrl] = useState("");
    const [endpoint, setEndpoint] = useState(currRequest?.request?.url?.raw ?? "");
    const formatEndpoint = (endpoint: string): string => {
        return endpoint.replace(/\{\{[^{}]+\}\}/g, "");
    }

    const handleSendRequest = () => {
        if (onSend) onSend()
        useSendRequest({
            baseUrl: selectedBaseUrl,
            endpoint: formatEndpoint(endpoint),
            method: requestMethod,
            headers: currRequest?.request?.header ?? [],
            requestParams: currRequest?.request?.url.query ?? [],
            contentType: currRequest?.request?.body?.mode ?? "application/json",
            raw: currRequest?.request?.body?.raw,
            formData: currRequest?.request?.body?.formdata
        }).catch(err=> console.log(err))
    };

    const handleConfirmGitAction = (action: string | null) => {
        if (action) {
            switch (action) {
                case "pull":
                    dispatch(fetchCollections())
                    break
                case "push":
                    console.log("push")
                    break
                default:
                    console.log("default")

            }
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full gap-4 h-[60px] bg-white border-b border-gray-200 px-6 shadow-sm
         flex flex-row items-center">
            <div className="basis-1/4 flex flex-row h-full items-center gap-3">
                <img
                    src={Images.APP_LOGO}
                    alt='Stock management'
                    className='w-[30px] h-[37px] object-cover'
                />
                <h1 className="text-xl italic font-semibold text-gray-800">
                    Apitester
                </h1>
                <div className="flex items-center h-full gap-2 ml-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={() => setGitAction("pull")}
                    >
                        <ArrowDownToLine className="h-4 w-4 mr-1"/>
                        Pull
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-9"
                        onClick={() => setGitAction("push")}
                    >
                        <ArrowUpFromLine className="h-4 w-4 mr-1"/>
                        Push
                    </Button>
                </div>
            </div>
            {/*<div className="mx-4 h-full w-px bg-indigo-500" />*/}
            {/* REQUEST URL */}
            <div className="basis-3/4 flex items-center h-full gap-3">
                <Select
                    value={requestMethod}
                    onValueChange={(value) => setRequestMethod(value as ColtReqMethod[number])}
                >
                    <SelectTrigger
                        className={cn("min-w-[110px] font-semibold text-white", methodColorClass[requestMethod])}>
                        <SelectValue placeholder="Method"/>
                    </SelectTrigger>
                    <SelectContent>
                        {requestMethods.map((method) => (
                            <SelectItem key={method} value={method} className={cn("font-semibold", "text-black")}>
                                {method}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex w-full items-center rounded-md border border-input bg-transparent shadow-xs">
                    <Select
                        value={selectedBaseUrl}
                        onValueChange={setSelectedBaseUrl}
                    >
                        <SelectTrigger
                            className="w-[240px] rounded-none border-0 border-r border-input shadow-none focus-visible:ring-0">
                            <SelectValue placeholder="Select Base URL"/>
                        </SelectTrigger>
                        <SelectContent>
                            {baseUrlOptions.map((baseUrl) => (
                                <SelectItem key={baseUrl} value={baseUrl}>
                                    {baseUrl}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        value={formatEndpoint(endpoint)}
                        onChange={(event) => setEndpoint(event.target.value)}
                        className="border-0 rounded-none shadow-none focus-visible:ring-0"
                        placeholder="/v1/users"
                        aria-label="Endpoint path"
                    />
                </div>
                <Button
                    onClick={handleSendRequest}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap"
                >
                    <Send className="h-4 w-4 mr-2"/>
                    Send Request & Save
                </Button>
            </div>
            <AlertDialog open={Boolean(gitAction)} onOpenChange={(open) => !open && setGitAction(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Git Action</AlertDialogTitle>
                        <AlertDialogDescription>
                            {gitAction === "push"
                                ? "This will push your changes to remote repository. Do you want to continue?"
                                : "This will pull latest changes from remote repository. Do you want to continue?"}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleConfirmGitAction(gitAction)}>
                            {gitAction === "push" ? "Confirm Push" : "Confirm Pull"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </header>
    )
}

export default HeaderLayout
