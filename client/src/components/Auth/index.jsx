import { BoardsContext } from "context/index"
import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const Auth = () => {
    const location = useLocation()
    const { boards } = useContext(BoardsContext)

    if (boards?.length > 0) return <Outlet />

    return <Navigate to="/" state={{ from: location }} replace />
}