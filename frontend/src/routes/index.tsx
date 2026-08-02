import {ROUTES} from "@/config/constant/ROUTES";
import MainLayout from "@/layout/view/MainLayout.tsx";
import {createHashRouter, Navigate, Outlet} from "react-router-dom";
import Editor from "@/pages/editor";
import NotFound from "@/pages/NotFound";
import LoginPage from "@/pages/login";
import ProtectedRoute from "@/components/common/ProtectedRoute.tsx";

export const router = createHashRouter([
    {
        path: ROUTES.LOGIN,
        element: <LoginPage/>,
    },
    {
        path: "/",
        element: <ProtectedRoute/>,
        children: [
            {
                element: (
                    <MainLayout>
                        <Outlet/>
                    </MainLayout>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to={ROUTES.EDITOR} replace/>,
                    },
                    {
                        path: ROUTES.EDITOR,
                        element: <Editor/>,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])
