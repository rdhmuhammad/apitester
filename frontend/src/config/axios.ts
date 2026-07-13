import Axios from "axios";
import { LOCALSTORAGE_KEY } from "./constant/localstorage";
import { getData } from "@/hooks/useLocalStorage";
import Swal from "sweetalert2";
import type {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

const getBaseURL = () => {
    return import.meta.env.VITE_API_URL || "/api/v1"
}

export const axios = Axios.create({
    baseURL: getBaseURL(),
});


export interface ApiError {
    code: number;
    message: string;
    errors?: Record<string, string>;
    result: null;
}

type RequestMetadata = {
    startTime: number
    endTime?: number
}

type RequestConfigWithMetadata = InternalAxiosRequestConfig & {
    metadata?: RequestMetadata
}

type AxiosResponseWithDuration<T = unknown> = AxiosResponse<T> & {
    duration?: number
    config: RequestConfigWithMetadata
}

type AxiosErrorWithDuration<T = unknown> = AxiosError<T> & {
    duration?: number
    config?: RequestConfigWithMetadata
}

// Add a request interceptor to add auth token and signature
axios.interceptors.request.use(
    async (config) => {
        const token = getData(LOCALSTORAGE_KEY.TOKEN)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const newConfig = config as RequestConfigWithMetadata
        newConfig.metadata = {startTime: Date.now()}
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors
axios.interceptors.response.use(
    (response) => {
        const newRes = response as AxiosResponseWithDuration
        if (newRes.config.metadata) {
            newRes.config.metadata.endTime = Date.now()
            newRes.duration = newRes.config.metadata.endTime - newRes.config.metadata.startTime
        }
        return newRes
    },
    async (error) => {
        const requestError = error as AxiosErrorWithDuration
        const status = error.response?.status;
        const data = error.response?.data;

        console.log("Interceptor status:", status);
        console.log("Error data:", data);
        console.log("error => ", error)
        const startTime = requestError.config?.metadata?.startTime
        requestError.duration = typeof startTime === "number" ? Date.now() - startTime : 0
        if (status === 401) {
            const isLoginPage = window.location.pathname.includes("/login") || window.location.hash.includes("/login");
            console.log("Is on login page?", isLoginPage);

            if (!isLoginPage) {
                localStorage.removeItem(LOCALSTORAGE_KEY.TOKEN);
                localStorage.removeItem(LOCALSTORAGE_KEY.USER);

                let msg = "Sesi telah kedaluwarsa.";
                if (data?.message) {
                    msg = typeof data.message === "string" ? data.message : (data.message.msg_ind || JSON.stringify(data.message));
                }

                console.log("Showing Swal with message:", msg);


                await Swal.fire({
                    title: msg.split(",")[0],
                    text: "Sesi telah kedaluwarsa.",
                    icon: "warning",
                    confirmButtonText: "Go to Login",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    confirmButtonColor: "#FFD700",
                });

                window.location.href = "/login";
            }
        } else {
            console.error("API Error:", data?.message || error.message || "An error occurred");
        }

        return Promise.reject(requestError);
    }
);

export default axios;
