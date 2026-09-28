import {useEffect} from "react";
import {ThemeProvider} from "next-themes";
import {Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {store} from "@/app/store/store.ts";
import {useAppDispatch} from "@/app/store/hooks.ts";
import {checkAuthThunk} from "@/app/slices/authSlice.ts";

const AuthInitializer = ({children}: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuthThunk());
    }, [dispatch]);

    return <>{children}</>;
};

const App = () => (
    <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="apitester-theme">
            <TooltipProvider>
                <AuthInitializer>
                    <Sonner position="top-right" richColors/>
                    <RouterProvider router={router}/>
                </AuthInitializer>
            </TooltipProvider>
        </ThemeProvider>
    </Provider>
);

export default App;
