import styled from "styled-components"
import { tier_maker } from "assets/index"

export const Header = () => (
    <LogoHeader>
        <LogoContainer>
            <img src={tier_maker} alt="tier_maker" />
        </LogoContainer>
    </LogoHeader>
)


const LogoHeader = styled.header`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
`

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    img{
        width: 250px;
    }

`

