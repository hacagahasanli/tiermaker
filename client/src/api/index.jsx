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
    await authAxios.post('/registration', { ...values }, {
        model: "registration"
    })
}


const responseInterceptor = axiosPrivate.interceptors.response.use(
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

const requestIntercept = axiosPrivate.interceptors.request.use(
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

axiosPrivate.interceptors.request.eject(requestIntercept)

axiosPrivate.interceptors.response.eject(responseInterceptor)