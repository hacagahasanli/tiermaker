import { Auth } from "components/Auth";
import { HomeWithScrollToTop, TierBoardWithScrollToTop, Template } from "pages/index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Auth />,
        children: [{
            path: "/tierboard",
            element: <TierBoardWithScrollToTop />
        }]
    },
    {
        path: "/",
        element: <HomeWithScrollToTop />
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