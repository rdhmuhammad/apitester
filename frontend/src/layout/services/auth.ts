import axios from "@/config/axios.ts";
import {ENDPOINTS} from "@/config/constant/ENDPOINTS.ts";
import type {Response} from "@/types/response.ts";

export interface LoginRequest {
    username: string
    password: string
    rememberMe: boolean
}

export interface LoginData {
    username: string
    token: string
    expiresAt: number
}

export interface MeData {
    username: string
    authenticated: boolean
}

export const AuthServices = {
    login: async (req: LoginRequest): Promise<LoginData> => {
        const response = await axios.post<Response<LoginData> | LoginData>(ENDPOINTS.AUTH.LOGIN, req)
        const resData = response.data
        if (!resData || typeof resData !== "object") {
            throw new Error("Invalid response received from login service")
        }
        if ("data" in resData && resData.data) {
            return resData.data
        }
        if ("token" in resData) {
            return resData as unknown as LoginData
        }
        throw new Error("Invalid login response format")
    },

    me: async (): Promise<MeData> => {
        const response = await axios.get<Response<MeData> | MeData>(ENDPOINTS.AUTH.ME)
        const resData = response.data
        if (!resData || typeof resData !== "object") {
            throw new Error("Invalid response received from auth service")
        }
        if ("data" in resData && resData.data) {
            return resData.data
        }
        if ("authenticated" in resData) {
            return resData as unknown as MeData
        }
        throw new Error("Invalid auth response format")
    },
}
