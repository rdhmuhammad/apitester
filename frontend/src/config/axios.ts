import Axios from "@/config/axios.ts";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});


export interface ApiError {
  code: number;
  message: string;
  errors?: Record<string, string>;
  result: null;
}


// Add a response interceptor to handle errors
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const data = error.response?.data;

    console.log("Interceptor status:", status);
    console.log("Error data:", data);
    return Promise.reject(error);
  }
);

export default axios;
