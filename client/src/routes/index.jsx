import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Auth = lazy(() => import("components/Auth"));
const HomeWithScrollToTop = lazy(() => import("pages/index"))
const TierBoardWithScrollToTop = lazy(() => import("pages/index"))
const Template = lazy(() => import("pages/index"))
const Login = lazy(() => import("pages/Login"))

const router = createBrowserRouter([
    {
        element: <Auth />,
        children: [{
            path: "/tierboard",
            element: <TierBoardWithScrollToTop />
        }]
    },
    {
        path: "/home",
        element: <HomeWithScrollToTop />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Login />
    },
    {
        path: "/make-a-template",
        element: <Template />
    },
    {
        path: '*',
        element: <h4 style={{ color: "white" }}>Page Not found</h4>
    }
])

export default router;