import axios from "axios"
import { baseURL } from "../../secrets"

export const axiosInstance = axios.create({
    baseURL
})

export const userRegistration = async (values) => {
    await axiosInstance.post('/registration', { ...values }, {
        model: "registration"
    })
}


axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return new Error("Something went wrong!");
    },
    (error) => {
        return Promise.reject(error)
    }
)