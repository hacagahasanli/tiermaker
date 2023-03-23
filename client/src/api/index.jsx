import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_VIA_BASE_URL
})