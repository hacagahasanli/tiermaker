import { authAxios } from "api/index";
import { useDispatch } from "react-redux";
import { setAuth } from "store/slices/sign-slice";

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        const accessToken = response.data.accessToken
        dispatch(setAuth(accessToken))

        return accessToken;
    }
    return refresh
}

export { useRefreshToken }