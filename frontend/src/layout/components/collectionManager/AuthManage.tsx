import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {selectAuth, setCollectionAuth} from "@/app/slices/collectionSlices.ts";
import {useCollectionPushPull} from "@/layout/hooks/useCollectionPushPull.ts";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Eye, EyeOff, Lock, Save, ShieldCheck} from "lucide-react";

export type CollectionAuthType = "bearer" | "none";

const AuthManage: React.FC = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const {push, isPushing} = useCollectionPushPull();

    const [authType, setAuthType] = useState<CollectionAuthType>("none");
    const [token, setToken] = useState("");
    const [showToken, setShowToken] = useState(false);

    useEffect(() => {
        if (!auth) {
            setAuthType("none");
            setToken("");
            return;
        }

        const typeLower = (auth.type || "").toLowerCase();
        if (typeLower === "bearer") {
            setAuthType("bearer");
            const bearerToken =
                auth.bearer?.find((item) => item.key?.toLowerCase() === "token")?.value ??
                auth.bearer?.[0]?.value ??
                "";
            setToken(bearerToken);
        } else {
            setAuthType("none");
            setToken("");
        }
    }, [auth]);

    const handleSave = async () => {
        if (authType === "none") {
            dispatch(
                setCollectionAuth({
                    type: "none",
                    bearer: [],
                })
            );
        } else {
            dispatch(
                setCollectionAuth({
                    type: "bearer",
                    bearer: [
                        {
                            key: "token",
                            value: token,
                            type: "string",
                        },
                    ],
                })
            );
        }
        await push();
    };

    return (
        <div className="flex flex-col h-full min-h-0 space-y-4">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h3 className="text-sm font-semibold text-foreground">Auth Manager</h3>
                    <p className="text-xs text-muted-foreground">
                        Configure collection-level authorization. Requests set to inherit auth will use these settings.
                    </p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    disabled={isPushing}
                    onClick={handleSave}
                >
                    <Save className="h-4 w-4 mr-1.5" />
                    {isPushing ? "Saving..." : "Save"}
                </Button>
            </div>

            <div className="flex-1 overflow-auto rounded-lg border border-border p-4 space-y-4 bg-card">
                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Auth Type</label>
                    <Select
                        value={authType}
                        onValueChange={(value) => setAuthType(value as CollectionAuthType)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select auth type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">No Auth</SelectItem>
                            <SelectItem value="bearer">Bearer Token</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {authType === "bearer" && (
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Token</label>
                        <div className="relative">
                            <Input
                                type={showToken ? "text" : "password"}
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                placeholder="Enter bearer token or {{variable}}..."
                                className="pr-10"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                                onClick={() => setShowToken(!showToken)}
                            >
                                {showToken ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                            Authorization header will be automatically formatted as{" "}
                            <code className="font-mono text-xs text-foreground">Bearer &lt;token&gt;</code>.
                        </p>
                    </div>
                )}

                <div className="rounded-md border border-border bg-muted/40 p-3 text-xs flex items-start gap-2.5 text-muted-foreground">
                    {authType === "bearer" ? (
                        <>
                            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="font-medium text-foreground">Bearer Token Active</span>
                                <p className="mt-0.5">
                                    Requests inside this collection configured with "Inherit From Parent" will automatically send this Bearer token.
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <Lock className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            <div>
                                <span className="font-medium text-foreground">No Authorization</span>
                                <p className="mt-0.5">
                                    No default authorization headers will be injected into child requests.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthManage;
