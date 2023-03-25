import axios from "axios"
import { baseURL } from "../../secrets"

export const authAxios = axios.create({
    baseURL
})

export const userRegistration = async (values) => {
    await authAxios.post('/registration', { ...values }, {
        model: "registration"
    })
}


const responseInterceptor = authAxios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return new Error("Something went wrong!");
    },
    (error) => {
        return Promise.reject(error)
    }
)

const requestIntercept = axiosPrivate.interceptors.request.use(
    config => {
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
    }, (error) => Promise.reject(error)
);

axios.interceptors.request.eject(requestIntercept)

axios.interceptors.response.eject(responseInterceptor)