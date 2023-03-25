import { privateAxios, refresh } from "api/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useAxiosPrivate = () => {
    const { auth } = useSelector(state => state.sign)

    useEffect(() => {
        const responseInterceptorPrivate = privateAxios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config
                console.log("ERROR INSIDE RESPONSE INTERCEPTOR");
                console.log("PREVREQUEST INSIDE RESPONSE INTERCEPTOR");
                const newAccessToken = await refresh()
                console.log(newAccessToken);
                if (error?.response?.status === 403 && !prevRequest.sent) {
                    prevRequest.sent = true;
                    console.log(newAccessToken, "NEW ACCESSTOKEN");
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return privateAxios(prevRequest) // calling function again 
                }
                return Promise.reject(error)
            }
        )

        const requestInterceptorPrivate = privateAxios.interceptors.request.use(
            config => {
                console.log(auth, "AUTH");
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                console.log("CONFIG AFTER IF REQUEST INTERCEPTOR");
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