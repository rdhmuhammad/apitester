import { ROUTES } from "@/config/constant/ROUTES";
import MainLayout from "@/layout/view/MainLayout.tsx";
import {createHashRouter, Navigate, Outlet} from "react-router-dom";
import Editor from "@/pages/editor";
import NotFound from "@/pages/NotFound";

export const router = createHashRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <Outlet/>
            </MainLayout>
        ),
        children: [
            {
                index: true, // ✅ this means it matches the path "/"
                element: <Navigate to={ROUTES.EDITOR} replace />
            },
            {
                path: ROUTES.EDITOR,
                element: <Editor/>
            },
        ]
    },
    // Public Routes - No view wrapper needed
    // {
    //   path: ROUTES.LOGIN,
    //   element: (
    //     <PublicRoute>
    //       <LoginPage />
    //     </PublicRoute>
    //   )
    // },
    // Error Routes
    {
        path: "*",
        element: <NotFound />,
    }
])