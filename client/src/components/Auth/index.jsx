import { BoardsContext } from "context/index"
import { useContext } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const Auth = () => {
    const location = useLocation()
    const { boards } = useContext(BoardsContext)
    const { auth } = useSelector(state => state.sign)

    if (boards?.length > 0 && Object.values(auth).length > 0) return <Outlet />

    return <Navigate to="/login" state={{ from: location }} replace />
}