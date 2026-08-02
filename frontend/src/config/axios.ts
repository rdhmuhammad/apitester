import Axios from "axios";
import type {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

const getBaseURL = () => {
    return import.meta.env.VITE_API_URL || "/api/v1"
}

export const axios = Axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
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

axios.interceptors.request.use(
    async (config) => {
        const newConfig = config as RequestConfigWithMetadata
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
