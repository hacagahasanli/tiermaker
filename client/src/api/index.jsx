import axios from "axios"
import { baseURL } from "../../secrets"

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
    const response = await authAxios.post('/auth/registration', { ...values }, {
        model: "registration"
    })
    return response?.data?.message
}

export const userLogin = async (values) => {
    const response = await authAxios.post('/auth/login', { ...values }, {
        model: "login"
    })
    return response
}

export const addTierListTemplate = async ({ privateAxios, formData }) => {
    const response = await privateAxios.post('/files/add-tier-list', formData, {
        model: "add-tier-list"
    })
    return response
}

const resInterceptor = authAxios.interceptors.response.use(
    (response) => response?.data,
    (error) => Promise.reject(error)
)

export const fetchTierLists = async (axiosPrivate) => {
    try {
        const tierLists = await axiosPrivate.get('/files/get-all-tierlists')
        return tierLists
    } catch (err) {
        return "Error"
    }
}

export const refresh = async () => {
    try {
        const response = await authAxios.get('refresh', { withCredentials: true })
        const accessToken = response.data
        return accessToken;
    } catch (err) {
        return err.response.status;
    }
}

