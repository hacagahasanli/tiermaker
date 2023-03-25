import axios from "axios"
import { baseURL } from "../../secrets"
import { useSelector } from "react-redux"
import { useRefreshToken } from "hooks/index"

export const authAxios = axios.create({ baseURL })

export const axiosPrivate = axios.create({
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

const responseInterceptorPrivate = axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevRequest = error?.config
        const refresh = useRefreshToken()
        console.log(error, "ERROR INSIDE RESPONSE INTERCEPTOR");
        console.log(prevRequest, "PREVREQUEST INSIDE RESPONSE INTERCEPTOR");
        if (error?.response?.status === 403 && !prevRequest.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refresh()
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
            return axiosPrivate(prevRequest) // calling function again 
        }
        return Promise.reject(error)
    }
)

const requestInterceptorPrivate = axiosPrivate.interceptors.request.use(
    config => {
        const { auth } = useSelector(state => state.sign)
        console.log(auth, "AUTH");
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        console.log(config, "CONFIG AFTER IF REQUEST INTERCEPTOR");
        return config;
    }, (error) => Promise.reject(error)
);

// axiosPrivate.interceptors.request.eject(requestInterceptorPrivate)

// axiosPrivate.interceptors.response.eject(responseInterceptorPrivate)

// authAxios.interceptors.response.eject(resInterceptor)