import {Sidebar, SidebarContent} from "@/components/ui/sidebar.tsx";
import {type ReactNode, useState} from "react";
import {ChevronDown, ChevronRight, FileCode2, Folder, FolderOpen} from "lucide-react";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestNode {
    type: "request";
    id: string;
    name: string;
    method: RequestMethod;
}

interface FolderNode {
    type: "folder";
    id: string;
    name: string;
    children: Array<FolderNode | RequestNode>;
}

const methodColorClass: Record<RequestMethod, string> = {
    GET: "text-emerald-600",
    POST: "text-amber-600",
    PUT: "text-blue-600",
    PATCH: "text-violet-600",
    DELETE: "text-red-600"
};

const exampleCollections: FolderNode[] = [
    {
        type: "folder",
        id: "users",
        name: "Users Service",
        children: [
            {
                type: "folder",
                id: "users-auth",
                name: "Authentication",
                children: [
                    {type: "request", id: "login", name: "Login User", method: "POST"},
                    {type: "request", id: "refresh", name: "Refresh Token", method: "POST"},
                    {type: "request", id: "logout", name: "Logout", method: "DELETE"}
                ]
            },
            {
                type: "folder",
                id: "users-profile",
                name: "Profile",
                children: [
                    {type: "request", id: "get-profile", name: "Get My Profile", method: "GET"},
                    {type: "request", id: "update-profile", name: "Update Profile", method: "PATCH"}
                ]
            }
        ]
    },
    {
        type: "folder",
        id: "products",
        name: "Product Catalog",
        children: [
            {type: "request", id: "list-products", name: "List Products", method: "GET"},
            {type: "request", id: "create-product", name: "Create Product", method: "POST"},
            {type: "request", id: "replace-product", name: "Replace Product", method: "PUT"}
        ]
    },
    {
        type: "folder",
        id: "orders",
        name: "Orders",
        children: [
            {type: "request", id: "order-list", name: "Get Orders", method: "GET"},
            {type: "request", id: "order-create", name: "Create Order", method: "POST"},
            {type: "request", id: "order-cancel", name: "Cancel Order", method: "DELETE"}
        ]
    }
];

const SidebarLayout: React.FC = () => {
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
        users: true,
        "users-auth": true,
        "users-profile": true,
        products: true,
        orders: true
    });

    const toggleFolder = (folderId: string) => {
        setExpandedFolders((prev) => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    const renderNode = (node: FolderNode | RequestNode, depth = 0): ReactNode => {
        const indentStyle = {paddingLeft: `${depth * 14}px`};

        if (node.type === "folder") {
            const isOpen = Boolean(expandedFolders[node.id]);

            return (
                <div key={node.id} className="space-y-1">
                    <button
                        type="button"
                        onClick={() => toggleFolder(node.id)}
                        style={indentStyle}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                        {isOpen ? <ChevronDown className="h-4 w-4 text-slate-500" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}
                        {isOpen ? <FolderOpen className="h-4 w-4 text-indigo-500" /> : <Folder className="h-4 w-4 text-indigo-500" />}
                        <span className="truncate">{node.name}</span>
                    </button>
                    {isOpen && (
                        <div className="space-y-1">
                            {node.children.map((child) => renderNode(child, depth + 1))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <button
                key={node.id}
                type="button"
                style={indentStyle}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-slate-100"
            >
                <FileCode2 className="h-4 w-4 text-slate-400" />
                <span className={`w-12 text-xs font-semibold ${methodColorClass[node.method]}`}>{node.method}</span>
                <span className="truncate text-slate-700">{node.name}</span>
            </button>
        );
    };

    return (
        <Sidebar className="left-0 pt-18 z-40 flex flex-col border-r h-full border-gray-200" collapsible={"none"}>
            <SidebarContent className="flex flex-col px-3 py-2 bg-white">
                <div className="mb-2 px-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Collections</p>
                </div>
                <div className="space-y-1">
                    {exampleCollections.map((collection) => renderNode(collection))}
                </div>
            </SidebarContent>
        </Sidebar>
    );
};

export default SidebarLayout;
