import { memo } from "react"
import styled from "styled-components"
import { tier_maker } from "assets/index"
import { useLocation } from "react-router-dom"
import { TButton } from "../Button"

export const Header = memo(() => {
    const { pathname } = useLocation()
    return <LogoHeader>
        <LogoContainer>
            <img src={tier_maker} alt="tier_maker" />
        </LogoContainer>
        {pathname === "/" && <TButton />}
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

    img{
        width: 250px;
    }

`

