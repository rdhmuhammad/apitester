import {Sidebar, SidebarContent} from "@/components/ui/sidebar.tsx";
import {type ReactNode, useEffect, useState} from "react";
import {ChevronDown, ChevronRight, FileCode2, Folder, FolderOpen} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {type ColtReqMethod, type DirTree, selectDirTree, setActiveRequest} from "@/app/slices/collectionSlices.ts";

// interface RequestNode {
//     type: "request";
//     id: string;
//     name: string;
//     method: RequestMethod;
// }

// interface FolderNode {
//     type: "folder";
//     id: string;
//     name: string;
//     children: Array<FolderNode | RequestNode>;
// }

const methodColorClass: Record<ColtReqMethod, string> = {
    GET: "text-emerald-600",
    POST: "text-amber-600",
    PUT: "text-blue-600",
    PATCH: "text-violet-600",
    DELETE: "text-red-600"
};

// const exampleCollections: FolderNode[] = [
//     {
//         type: "folder",
//         id: "users",
//         name: "Users Service",
//         children: [
//             {
//                 type: "folder",
//                 id: "users-auth",
//                 name: "Authentication",
//                 children: [
//                     {type: "request", id: "login", name: "Login User", method: "POST"},
//                     {type: "request", id: "refresh", name: "Refresh Token", method: "POST"},
//                     {type: "request", id: "logout", name: "Logout", method: "DELETE"}
//                 ]
//             },
//             {
//                 type: "folder",
//                 id: "users-profile",
//                 name: "Profile",
//                 children: [
//                     {type: "request", id: "get-profile", name: "Get My Profile", method: "GET"},
//                     {type: "request", id: "update-profile", name: "Update Profile", method: "PATCH"}
//                 ]
//             }
//         ]
//     },
//     {
//         type: "folder",
//         id: "products",
//         name: "Product Catalog",
//         children: [
//             {type: "request", id: "list-products", name: "List Products", method: "GET"},
//             {type: "request", id: "create-product", name: "Create Product", method: "POST"},
//             {type: "request", id: "replace-product", name: "Replace Product", method: "PUT"}
//         ]
//     },
//     {
//         type: "folder",
//         id: "orders",
//         name: "Orders",
//         children: [
//             {type: "request", id: "order-list", name: "Get Orders", method: "GET"},
//             {type: "request", id: "order-create", name: "Create Order", method: "POST"},
//             {type: "request", id: "order-cancel", name: "Cancel Order", method: "DELETE"}
//         ]
//     }
// ];

const SidebarLayout: React.FC = () => {
    const tree = useAppSelector(selectDirTree)
    const dispatch = useAppDispatch()
    const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});

    const toggleRequest = (reqId: string)=>{
        dispatch(setActiveRequest({id: reqId}))
    }

    const toggleFolder = (folderId: string) => {
        setExpandedFolders((prevState=>({
            ...prevState,
            [folderId]: !prevState[folderId]
        })));
    };

    useEffect(() => {
        let record = {}
        loadExpandFolder(tree, record)
        setExpandedFolders(record)
        console.log(expandedFolders)
    }, [tree]);

    const loadExpandFolder = (tree: Map<string, DirTree>, record: Record<string, boolean>) =>{
        for (const [key, val] of tree){
            if (val?.category === "FOLD"){
                record[key] = false
                if (val?.item) loadExpandFolder(val.item, record)
            }
        }
    }

    const renderNode = (node: DirTree, depth = 0): ReactNode => {
        const indentStyle = {paddingLeft: `${depth * 14}px`};

        if (node.category === "FOLD") {
            const isOpen = Boolean(expandedFolders[node.id]);

            return (
                <div key={node.id} className="space-y-1">
                    <button
                        type="button"
                        onClick={() => toggleFolder(node.id)}
                        style={indentStyle}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                        {isOpen ? <ChevronDown className="h-4 w-4 text-slate-500"/> :
                            <ChevronRight className="h-4 w-4 text-slate-500"/>}
                        {isOpen ? <FolderOpen className="h-4 w-4 text-indigo-500"/> :
                            <Folder className="h-4 w-4 text-indigo-500"/>}
                        <span className="truncate">{node.name}</span>
                    </button>
                    {isOpen && node?.item && (
                        <div className="space-y-1">
                            {Array.from(node?.item?.entries()).map(([_, child]) => {
                                return renderNode(child, depth + 1)
                            })}
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
                onClick={()=>toggleRequest(node.id)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-slate-100"
            >
                <FileCode2 className="h-4 w-4 text-slate-400"/>
                <span className={`w-12 text-xs font-semibold ${methodColorClass[node?.method ?? "GET"]}`}>{node?.method ?? "GET"}</span>
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
                    {Array.from(tree.entries()).map(([_, collection])=>{
                       return renderNode(collection)
                    })}
                </div>
            </SidebarContent>
        </Sidebar>
    );
};

export default SidebarLayout;
