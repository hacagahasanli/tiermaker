import { memo } from "react"
import styled from "styled-components"
import { tier_maker } from "assets/index"
import { useLocation, useNavigate } from "react-router-dom"
import { TButton } from "../Button"
import { useDispatch } from "react-redux"
import { pageName } from "constants/index"
import { logoutUser } from "store/slices/sign"
import useAxiosPrivate from "hooks/useAxiosPrivate"

export const Header = memo(() => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const privateAxios = useAxiosPrivate()

    const showLogout = () => {
        const isShow = Object.entries(pageName)
            .filter(([page,]) => page !== '/login' && page)
            .flat(Infinity)
            .includes(pathname)
        return isShow
    }

    const navigateToMakeTemplate = () => navigate('/make-a-template')

    const logOutHandler = () => dispatch(logoutUser({ privateAxios }))

    return <LogoHeader tabIndex={-1}>
        <LogoContainer>
            <img src={tier_maker} alt="tier_maker" />
        </LogoContainer>
        {pathname === "/" && <TButton func={navigateToMakeTemplate} />}
        {showLogout() && <LogOut onClick={() => logOutHandler()}>Log out</LogOut>}
    </LogoHeader>
})

const LogOut = styled.span`
    color:white;
    width: 100px;
    min-height: 100%;
    text-align: center;
    cursor: pointer;
`

const LogoHeader = styled.header`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: .8rem 0;

    img{
        width: 250px;
    }

`

