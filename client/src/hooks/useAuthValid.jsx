import { useSelector } from "react-redux"

export const useAuthValid = () => {
    const { auth } = useSelector(state => state.sign)
    const isValid = Object.values(auth).length > 0

    return { isValid }
}
