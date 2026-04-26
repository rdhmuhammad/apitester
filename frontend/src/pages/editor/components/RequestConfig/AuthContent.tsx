import React from "react";
import {ShieldCheck} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";

export type AuthType = "none" | "inherit" | "bearer";

interface AuthValueProps {
    authType: AuthType;
}

export const AuthDropdownOps: React.FC<AuthValueProps> = ({authType})=>{
    switch (authType) {
        case "none":
            return (
                <div>
                    <p className="text-sm font-medium text-slate-700">Authorization Value</p>
                    <Input className="bg-gray-100" disabled={true} type="text" readOnly/>
                </div>
            );
        case "bearer":
            return (
                <div>
                    <p className="text-sm font-medium text-slate-700">Bearer Token</p>
                    <Input type="password" value="****************************" readOnly/>
                </div>
            );
        case "inherit":
        default:
            return (
                <div>
                    <p className="text-sm font-medium text-slate-700">Inherited Authorization</p>
                    <Input className="bg-gray-100" type="text" value="****************************" readOnly/>
                </div>
            );
    }
}

export const AuthLabel: React.FC<AuthValueProps> = ({authType}) => {
    switch (authType) {
        case "none":
            return (
                <div
                    className="flex items-center gap-2 font-medium border-orange-200 bg-orange-50 p-3 text-orange-700">
                    <ShieldCheck className="h-4 w-4"/>
                    No auth will be sent for this request.
                </div>
            );
        case "bearer":
            return (
                <div
                    className="flex items-center gap-2 font-medium border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
                    <ShieldCheck className="h-4 w-4"/>
                    Authorization is scoped to this request only.
                </div>
            );
        case "inherit":
        default:
            return (
                <div
                    className="flex items-center gap-2 font-medium border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
                    <ShieldCheck className="h-4 w-4"/>
                    Using token from parent collection
                </div>
            );

    }
}