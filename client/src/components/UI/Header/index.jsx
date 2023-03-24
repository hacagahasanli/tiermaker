import { memo } from "react"
import styled from "styled-components"
import { tier_maker } from "assets/index"
import { useLocation, useNavigate } from "react-router-dom"
import { TButton } from "../Button"

export const Header = memo(() => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const navigateToMakeTemplate = () =>
        navigate('/make-a-template')

    return <LogoHeader>
        <LogoContainer>
            <img src={tier_maker} alt="tier_maker" />
        </LogoContainer>
        {pathname === "/home" && <TButton func={navigateToMakeTemplate} />}
    </LogoHeader>
})


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

