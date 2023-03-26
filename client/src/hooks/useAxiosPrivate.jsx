import { privateAxios, refresh } from "api/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuth } from "store/slices/sign-slice";

const useAxiosPrivate = () => {
    const { auth } = useSelector(state => state.sign)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const l0cation = useLocation();
    const from = l0cation?.pathname

    useEffect(() => {
        const responseInterceptorPrivate = privateAxios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error?.config
                const newAccessToken = await refresh()
                if (newAccessToken === 401) {
                    dispatch(setAuth({ accessToken: "" }))
                    navigate('/login', { replace: true, state: from })
                }
                else if (error?.response?.status === 403 && !originalRequest.sent) {
                    originalRequest.sent = true;
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return privateAxios(originalRequest) // calling function again 
                }
                return Promise.reject(error)
            }
        )

        const requestInterceptorPrivate = privateAxios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        return () => {
            privateAxios.interceptors.request.eject(requestInterceptorPrivate)
            privateAxios.interceptors.response.eject(responseInterceptorPrivate)
        }
    }, [refresh, auth])

    return privateAxios
}

export default useAxiosPrivate