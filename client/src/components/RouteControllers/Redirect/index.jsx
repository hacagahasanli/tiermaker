import Home from "pages/Home"
import { useSelector } from "react-redux"
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom"

export const Redirect = () => {
    const location = useLocation()
    const { auth } = useSelector(state => state.sign)
    const from = location?.state?.from?.pathname || "/"

    return <Outlet />
}