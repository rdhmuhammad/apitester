import { ROUTES } from "@/config/constant/ROUTES";
import MainLayout from "@/layout/MainLayout.tsx";
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import Editor from "@/pages/editor";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
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
    // Public Routes - No layout wrapper needed
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