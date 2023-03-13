import { BoardsContext } from "context/index";
import { Home, TierBoard } from "pages/index";
import { useContext } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const Auth = () => {
    const { boards } = useContext(BoardsContext)
    if (boards.length > 0) return <Outlet />
}

const router = createBrowserRouter([
    {
        element: <Auth />,
        children: [{
            path: "/tierboard",
            element: <TierBoard />
        }]
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: '*',
        element: <h4 style={{ color: "white" }}>Page Not found</h4>
    }
])

export default router;