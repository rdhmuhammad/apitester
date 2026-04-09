import Axios from "axios";
import { getTimestamp, makeSignature } from "./signature";

import { LOCALSTORAGE_KEY } from "./constant/localstorage";
import { getData } from "@/hooks/useLocalStorage";
import Swal from "sweetalert2";

export const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});


export interface ApiError {
    code: number;
    message: string;
    errors?: Record<string, string>;
    result: null;
}

// Add a request interceptor to add auth token and signature
axios.interceptors.request.use(
    async (config) => {
        const token = getData(LOCALSTORAGE_KEY.TOKEN)
        const timestamp = getTimestamp();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        const signature = makeSignature(
            0,
            timestamp,
            config.data || {},
            config.data instanceof FormData
        );

        // Add signature and timestamp to headers
        config.headers["sig"] = signature;
        config.headers["email"] = "0";
        config.headers["timestamp"] = timestamp.toString();

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;
        const data = error.response?.data;

        console.log("Interceptor status:", status);
        console.log("Error data:", data);

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

        return Promise.reject(error);
    }
);

export default axios;
