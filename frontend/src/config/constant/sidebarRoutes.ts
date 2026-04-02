import React from "react";
import {LuLayoutDashboard} from "react-icons/lu";

export interface MenuItem{
    label: string;
    path: string;
    icon: React.ComponentType<{className?: string }>
}

export const SIDEBAR_ROUTES = () =>{
    const allRoutes : MenuItem[] = [
        {
            label: "Editor",
            path: "/editor",
            icon: LuLayoutDashboard
        },
    ]

    return allRoutes
}

