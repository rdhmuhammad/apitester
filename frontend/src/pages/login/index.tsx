import {type FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Eye, EyeOff} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {cn} from "@/lib/utils";
import apiTesterBanner from "@/assets/images/api-tester-banner.png";
import bgVideo from "@/assets/video/bg.webm";
import thumbnail from "@/assets/video/bg-picture.png";
import {ROUTES} from "@/config/constant/ROUTES.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks.ts";
import {loginThunk} from "@/app/slices/authSlice.ts";
import {toast} from "sonner";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {status, error, isAuthenticated} = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTES.EDITOR, {replace: true});
        }
    }, [isAuthenticated, navigate]);

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const isLoading = status === 'loading';

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            toast.error("Please fill in all fields");
            return;
        }

        const result = await dispatch(loginThunk({username: username.trim(), password, rememberMe}));

        if (loginThunk.fulfilled.match(result)) {
            navigate(ROUTES.EDITOR, {replace: true});
        } else {
            toast.error(error || "Invalid credentials");
        }
    };

    return (
        <div className="h-screen flex flex-wrap items-center bg-amber-20">
            <div className="h-full hidden xl:flex w-[60%] items-center justify-center relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={bgVideo} type="video/webm"/>
                </video>
                <div className="relative z-10 text-left px-12">
                    <h1 className="text-5xl font-extrabold text-white leading-tight">
                        API Collection Manager
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 leading-relaxed mx-auto">
                        Design, test, and manage API collections with an intuitive interface. Built for developers who value speed and simplicity.
                    </p>
                </div>
            </div>
            <div className="w-full h-full xl:w-[40%] relative">
                <div className="flex flex-col justify-center items-start w-full absolute top-1/2 -translate-y-1/2">
                    <Card className="w-full mb-6 flex items-center justify-center border-none rounded-none shadow-[0_4px_6px_-3px_rgba(0,0,0,0.1)]">
                        <img
                            src={apiTesterBanner}
                            alt="API Tester"
                            className="w-full max-h-60 object-contain"
                        />
                    </Card>
                    <h1 className="px-6 xl:px-10 text-2xl font-semibold pb-[26px] text-black">
                        Welcome back
                    </h1>
                    <form className="w-full px-6 xl:px-10" onSubmit={handleSubmit}>
                        <div className="py-2.5">
                            <Label htmlFor="username" className={cn("text-sm font-medium text-black-900")}>
                                Username
                            </Label>
                            <Input
                                id="username"
                                placeholder="Enter your username"
                                type="text"
                                className="my-2"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                                autoComplete="username"
                            />
                        </div>
                        <div className="py-2.5">
                            <Label htmlFor="password" className={cn("text-sm font-medium text-black-900")}>
                                Password
                            </Label>
                            <div className="relative w-full my-2">
                                <Input
                                    id="password"
                                    placeholder="Enter your password"
                                    type={showPassword ? "text" : "password"}
                                    className="pr-10"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isLoading}
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? (
                                        <Eye className="w-4 h-4"/>
                                    ) : (
                                        <EyeOff className="w-4 h-4"/>
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2.5">
                            <Checkbox
                                id="rememberMe"
                                checked={rememberMe}
                                onCheckedChange={(checked) => setRememberMe(!!checked)}
                                disabled={isLoading}
                            />
                            <Label htmlFor="rememberMe" className="text-sm font-normal cursor-pointer text-black-900">
                                Remember me
                            </Label>
                        </div>

                        <Button
                            className={cn("w-full h-[41px] cursor-pointer mt-3.5 bg-indigo-600 hover:bg-indigo-500")}
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                </div>
                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Apitester. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
