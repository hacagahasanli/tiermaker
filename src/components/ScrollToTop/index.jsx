import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const withScrollToTop = (Component) => (props) => {
    console.log(props, "PROPS")

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0,)
    }, [pathname])

    return <Component {...props} />
}