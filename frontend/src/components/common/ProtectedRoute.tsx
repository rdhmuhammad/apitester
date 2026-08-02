import {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "@/config/constant/ROUTES.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {checkAuthThunk} from "@/app/slices/authSlice.ts";

const ProtectedRoute = () => {
    const dispatch = useAppDispatch();
    const {isAuthenticated, status} = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(checkAuthThunk());
        }
    }, [status, dispatch]);

    if (status === 'idle' || status === 'loading') {
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <div className="flex flex-col items-center gap-4">
                    <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"/>
                    <p className="text-sm text-muted-foreground">Verifying session...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace/>;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
