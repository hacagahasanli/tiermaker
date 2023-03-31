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
    try {
        const response = await authAxios.post('/auth/registration', { ...values }, {
            model: "registration"
        })
        return { res: response?.data?.message, type: "success" }
    } catch (err) {
        return {
            message: err.response.data?.message, type: "error"
        }

    }
}

export const userLogin = async (values) => {
    try {
        const response = await authAxios.post('/auth/login', { ...values }, {
            model: "login"
        })
        console.log(response, "RESPONSE")
        return { res: response, type: "success" }
    } catch (err) {
        console.log({ message: err.response.data?.message, type: "error" });
        return { message: err.response.data?.message, type: "error" }
    }

}

export const userLogout = async ({ privateAxios }) => {
    try {
        const response = await privateAxios.get('/logout')
        return { res: response, type: "success" }
    } catch (err) {
        return { message: err.response.data?.message, type: "error" }
    }

}

export const addTierListTemplate = async ({ privateAxios, formData }) => {
    try {
        const response = await privateAxios.post('/files/add-tier-list', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        return { res: response.data, type: "success" }
    } catch (err) {
        return { message: err.response.data?.message, type: "error" }
    }

}

const resInterceptor = authAxios.interceptors.response.use(
    (response) => response?.data,
    (error) => Promise.reject(error)
)

export const fetchTierLists = async (privateAxios) => {
    try {
        const tierLists = await privateAxios.get('/files/get-all-tierlists')
        return { res: tierLists, type: "success" }
    } catch (err) {
        return { message: err.response.data?.message, type: "error" }
    }
}

export const refresh = async () => {
    try {
        const response = await authAxios.get('refresh', { withCredentials: true })
        const accessToken = response.data
        return { res: accessToken, type: "success" }
    } catch (err) {
        return { message: err.response.data?.message, type: "error" }
    }
}

