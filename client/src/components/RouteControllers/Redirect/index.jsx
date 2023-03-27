import { useSelector } from "react-redux"
import { Outlet, redirect, useLocation } from "react-router-dom"

export const Redirect = () => {
    const location = useLocation()
    const { auth } = useSelector(state => state.sign)
    const from = location?.state?.from?.pathname || "/"

    if (Object.values(auth).length > 0) redirect(from)
    return <Outlet />
}