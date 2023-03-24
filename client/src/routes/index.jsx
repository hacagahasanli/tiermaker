import { Auth } from "components/Auth";
import { HomeWithScrollToTop, TierBoardWithScrollToTop, Template } from "pages/index";
import { createBrowserRouter } from "react-router-dom";
import Login from "pages/Login";
import { Footer } from "components/index";

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
        path: '/',
        element: <>
            <Login />
        </>
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