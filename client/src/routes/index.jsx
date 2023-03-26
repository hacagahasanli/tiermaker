import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Home = lazy(() => import("pages/Home"))
// const TierBoard = lazy(() => import("pages/TierBoard"))
// const Template = lazy(() => import("pages/Template"))
import TierBoard from "pages/TierBoard";
import Template from "pages/Template";
import { Auth } from "components/Auth";
// const Auth = lazy(() => import("components/Auth"));
const Login = lazy(() => import("pages/Login"))

const router = createBrowserRouter([
    {
        element: <Auth />,
        children: [{
            path: "/tierboard",
            element: <TierBoard />
        }]
    },
    {
        element: <Auth />,
        children: [{
            path: "/",
            element: <Home />
        }]

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
        element: <Auth />,
        children: [{
            path: "/make-a-template",
            element: <Template />
        }]
    },
    {
        path: '*',
        element: <h4 style={{ color: "white" }}>Page Not found</h4>
    }
])

export default router;