import axios from "axios"
import { baseURL } from "../../secrets"
import { useSelector } from "react-redux"
import { useRefreshToken } from "hooks/index"


export const authAxios = axios.create({
    baseURL,
})

axios.defaults.withCredentials = true;

export const privateAxios = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

export const userRegistration = async (values) => {
    await authAxios.post('/auth/registration', { ...values }, {
        model: "registration"
    })
}

export const userLogin = async (values) => {
    const response = await authAxios.post('/auth/login', { ...values }, {
        model: "login"
    })
    return response
}

const resInterceptor = authAxios.interceptors.response.use(
    (response) => response?.data,
    (error) => Promise.reject(error)
)

export const refresh = async () => {

    const response = await authAxios.get('refresh', { withCredentials: true })
    const accessToken = response.data
    return accessToken;
}

