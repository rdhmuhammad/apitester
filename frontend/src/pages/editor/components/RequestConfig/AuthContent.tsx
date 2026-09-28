import React, { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { cn } from "@/lib/utils.ts";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import { selectAuth, selectAuthType, setAuthType } from "@/app/slices/collectionSlices.ts";
import { removeHeader, selectHeader, updateHeader } from "@/app/slices/requestSlices.ts";

export type AuthType = "none" | "inherit" | "bearer";

interface AuthValueProps {
    authType: AuthType;
    bearerValue?: string;
    onBearerChange?: (value: string) => void;
}

export const AuthDropdownOps: React.FC<AuthValueProps> = ({ authType, bearerValue, onBearerChange }) => {
    switch (authType) {
        case "none":
            return (
                <div>
                    <p className="text-sm font-medium text-foreground">Authorization Value</p>
                    <Input className="bg-muted" disabled={true} type="text" readOnly />
                </div>
            );
        case "bearer":
            return (
                <div>
                    <p className="text-sm font-medium text-foreground">Bearer Token</p>
                    <Input
                        type="password"
                        value={bearerValue ?? ""}
                        onChange={(e) => onBearerChange?.(e.target.value)}
                        placeholder="Enter bearer token..."
                    />
                </div>
            );
        case "inherit":
        default:
            return (
                <div>
                    <p className="text-sm font-medium text-foreground">Inherited Authorization</p>
                    <Input className="bg-muted" type="text" value="****************************" readOnly />
                </div>
            );
    }
};

export const AuthLabel: React.FC<AuthValueProps> = ({ authType }) => {
    switch (authType) {
        case "none":
            return (
                <div className="flex items-center gap-2 font-medium rounded-md border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/40 p-3 text-orange-700 dark:text-orange-300">
                    <ShieldCheck className="h-4 w-4" />
                    No auth will be sent for this request.
                </div>
            );
        case "bearer":
            return (
                <div className="flex items-center gap-2 font-medium rounded-md border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-700 dark:text-emerald-300">
                    <ShieldCheck className="h-4 w-4" />
                    Authorization is scoped to this request only.
                </div>
            );
        case "inherit":
        default:
            return (
                <div className="flex items-center gap-2 font-medium rounded-md border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-700 dark:text-emerald-300">
                    <ShieldCheck className="h-4 w-4" />
                    Using token from parent collection
                </div>
            );
    }
};

export interface AuthContentProps {
    className?: string;
}

export const AuthContent: React.FC<AuthContentProps> = ({
    className = "grid gap-4 rounded-lg border border-border p-4 md:grid-cols-2",
}) => {
    const dispatch = useAppDispatch();
    const authType = useAppSelector(selectAuthType);
    const headers = useAppSelector(selectHeader);
    const rootAuth = useAppSelector(selectAuth);

    const prevAuthType = useRef(authType);

    useEffect(() => {
        if (prevAuthType.current === authType) return;
        prevAuthType.current = authType;

        if (authType === "inherit") {
            const authId = headers.find((h) => h.key === "Authorization")?.id ?? crypto.randomUUID();
            dispatch(
                updateHeader({
                    header: {
                        id: authId,
                        key: "Authorization",
                        value: (rootAuth.bearer && rootAuth.bearer[0]?.value) ?? "",
                    },
                })
            );
        } else if (authType === "bearer") {
            const authId = headers.find((h) => h.key === "Authorization")?.id;
            if (authId) dispatch(removeHeader({ id: authId }));
            dispatch(updateHeader({ header: { key: "Authorization", value: "", id: crypto.randomUUID() } }));
        } else if (authType === "none") {
            const authId = headers.find((h) => h.key === "Authorization")?.id;
            if (authId) dispatch(removeHeader({ id: authId }));
        }
    }, [authType, dispatch, headers, rootAuth]);

    const bearerToken = headers.find((h) => h.key === "Authorization")?.value ?? "";

    const handleBearerChange = (value: string) => {
        const existing = headers.find((h) => h.key === "Authorization");
        dispatch(
            updateHeader({
                header: {
                    id: existing?.id ?? crypto.randomUUID(),
                    key: "Authorization",
                    value,
                },
            })
        );
    };

    const handleAuthTypeChange = (val: AuthType) => {
        dispatch(setAuthType({ authType: val }));
    };

    return (
        <div className={cn(className)}>
            <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Auth Type</p>
                <Select value={authType} onValueChange={(val) => handleAuthTypeChange(val as AuthType)}>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">No Auth</SelectItem>
                        <SelectItem value="inherit">Inherit From Parent</SelectItem>
                        <SelectItem value="bearer">Bearer Token</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <AuthDropdownOps
                    authType={authType}
                    bearerValue={bearerToken}
                    onBearerChange={handleBearerChange}
                />
            </div>
            <div className="md:col-span-2 rounded-md border text-sm">
                <AuthLabel authType={authType} />
            </div>
        </div>
    );
};

export default AuthContent;