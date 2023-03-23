import axios from "axios"

export default axios.create({
    baseURL: process.env.VITE_BASE_URL
})