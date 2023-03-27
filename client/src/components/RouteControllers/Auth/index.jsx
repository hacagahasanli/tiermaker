import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuthValid } from "hooks/index"

export const Auth = () => {
    const location = useLocation()
    const { isValid } = useAuthValid()

    if (isValid) return <Outlet />

    return <Navigate to="/login" state={{ from: location }} replace />
}