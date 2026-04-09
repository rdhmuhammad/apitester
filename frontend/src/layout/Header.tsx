import {useState} from "react";
import {Images} from "@/config/constant/Images";
import {cn} from "@/lib/utils";

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
import {useCollectionRead} from "@/layout/hooks/useCollection.tsx";
import type {GetCollectionResponse} from "@/pages/editor/types/api.ts";
import CustomToast from "@/components/common/toast";

const HeaderLayout: React.FC = () => {
    const [gitAction, setGitAction] = useState<"pull" | "push" | null>(null);
    const requestMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
    const methodColorClass: Record<(typeof requestMethods)[number], string> = {
        GET: "bg-emerald-600",
        POST: "bg-amber-600",
        PUT: "bg-blue-600",
        PATCH: "bg-violet-600",
        DELETE: "bg-red-600"
    };
    const baseUrlOptions = [
        "https://api.dev.local",
        "https://api.staging.local",
        "https://api.production.local"
    ];

    const [selectedBaseUrl, setSelectedBaseUrl] = useState(baseUrlOptions[0]);
    const [endpoint, setEndpoint] = useState("");
    const [requestMethod, setRequestMethod] = useState<(typeof requestMethods)[number]>("GET");

    const handleSendRequest = () => {
        const normalizedEndpoint = endpoint.trim().startsWith("/") ? endpoint.trim() : `/${endpoint.trim()}`;
        const fullUrl = endpoint.trim() ? `${selectedBaseUrl}${normalizedEndpoint}` : `${selectedBaseUrl}/v1/users`;

        console.log(`Send ${requestMethod} request to:`, fullUrl);
    };

    const [collection, setCollection] = useState<GetCollectionResponse | null>(null)

    const {refetch: refetch} = useCollectionRead()
    const handleConfirmGitAction = (action: string | null) => {
        if (action) {
            switch (action) {
                case "pull":
                    refetch()
                        .then((res => {
                            if (res.data) {
                                setCollection(res.data)
                            }
                        }))
                        .catch((err) => {
                            CustomToast.error(err)
                        })
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
            <div className="basis-3/4 flex items-center h-full gap-3">
                <Select
                    value={requestMethod}
                    onValueChange={(value) => setRequestMethod(value as (typeof requestMethods)[number])}
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
                        value={endpoint}
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
                    Send Request
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
