import Axios from "axios";
import type {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

export const parseEnv = (text: string): Record<string, string> => {
    const env: Record<string, string> = {};
    for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const idx = trimmed.indexOf("=");
        if (idx > 0) {
            const key = trimmed.slice(0, idx).trim();
            const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
            env[key] = val;
        }
    }
    return env;
};

let apiBaseURL = import.meta.env.VITE_API_URL || "/api/v1";

export const axios = Axios.create({
    baseURL: apiBaseURL,
    withCredentials: true,
});

export const syncEnvFromTargetService = async (): Promise<Record<string, string>> => {
    try {
        const envPaths = ["/apitester/.env", "./.env", "/.env"];
        for (const p of envPaths) {
            try {
                const res = await fetch(p);
                const contentType = res.headers.get("content-type") || "";
                if (res.ok && !contentType.includes("text/html")) {
                    const text = await res.text();
                    const env = parseEnv(text);
                    if (env["VITE_API_URL"]) {
                        apiBaseURL = env["VITE_API_URL"];
                        axios.defaults.baseURL = apiBaseURL;
                        return env;
                    }
                }
            } catch (_) {
                // Try next path
            }
        }
    } catch (_) {
        // Fallback to default relative baseURL
    }
    return {};
};

if (typeof window !== "undefined") {
    syncEnvFromTargetService();
}

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

axios.interceptors.request.use(
    async (config) => {
        const newConfig = config as RequestConfigWithMetadata
        if (!newConfig.baseURL || newConfig.baseURL === "/api/v1" || newConfig.baseURL === "/apitester/api/v1") {
            newConfig.baseURL = apiBaseURL;
        }
        newConfig.metadata = {startTime: Date.now()}
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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
        return Promise.reject(requestError);
    }
);

export default axios;
