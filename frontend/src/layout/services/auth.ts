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
        const response = await axios.post<Response<LoginData>>(ENDPOINTS.AUTH.LOGIN, req)
        return response.data.data
    },

    me: async (): Promise<MeData> => {
        const response = await axios.get<Response<MeData>>(ENDPOINTS.AUTH.ME)
        return response.data.data
    },
}
