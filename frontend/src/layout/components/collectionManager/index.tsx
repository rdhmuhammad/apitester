import React, {useEffect, useState} from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {cn} from "@/lib/utils.ts";
import {Braces, Globe, Shield} from "lucide-react";
import VariableManage from "@/layout/components/collectionManager/VariableManage.tsx";
import ScriptManage from "@/layout/components/collectionManager/ScriptManage.tsx";
import AuthManage from "@/layout/components/collectionManager/AuthManage.tsx";

export interface CollectionManagerDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CollectionManagerDialog: React.FC<CollectionManagerDialogProps> = ({
    open,
    onOpenChange,
}) => {
    const [isScriptExpanded, setIsScriptExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("environment");

    useEffect(() => {
        if (!open) {
            setIsScriptExpanded(false);
            setActiveTab("environment");
        }
    }, [open]);

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent
                className={cn(
                    "flex flex-col h-[80vh] pt-6 pb-4 px-4 transition-all duration-300 ease-in-out",
                    isScriptExpanded || activeTab === "scripts"
                        ? "sm:max-w-5xl max-w-5xl"
                        : "sm:max-w-3xl max-w-3xl"
                )}
            >
                {!isScriptExpanded && (
                    <AlertDialogHeader className="shrink-0 mb-3">
                        <AlertDialogTitle>Collection Settings</AlertDialogTitle>
                        <AlertDialogDescription>
                            Manage your collection variables, pre-request scripts, and authorization.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                )}

                <Tabs
                    orientation="vertical"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex-row gap-0 flex-1 min-h-0"
                >
                    {!isScriptExpanded && (
                        <TabsList className="flex-col h-full w-12 shrink-0 rounded-lg">
                            <TabsTrigger value="environment" title="Variables">
                                <Globe className="h-4 w-4 m-0" />
                            </TabsTrigger>
                            <TabsTrigger value="scripts" title="Scripts">
                                <Braces className="h-4 w-4 m-0" />
                            </TabsTrigger>
                            <TabsTrigger value="auth" title="Auth Manage">
                                <Shield className="h-4 w-4 m-0" />
                            </TabsTrigger>
                        </TabsList>
                    )}

                    <div className={cn("flex-1 min-w-0", !isScriptExpanded && "pl-4")}>
                        <TabsContent value="environment" className="flex flex-col h-full min-h-0">
                            <VariableManage />
                        </TabsContent>
                        <TabsContent value="scripts" className="flex flex-col h-full min-h-0">
                            <ScriptManage
                                isExpanded={isScriptExpanded}
                                onExpand={() => setIsScriptExpanded(true)}
                                onCollapse={() => setIsScriptExpanded(false)}
                            />
                        </TabsContent>
                        <TabsContent value="auth" className="flex flex-col h-full min-h-0">
                            <AuthManage />
                        </TabsContent>
                    </div>
                </Tabs>

                <AlertDialogFooter className="shrink-0 mt-3">
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CollectionManagerDialog;
