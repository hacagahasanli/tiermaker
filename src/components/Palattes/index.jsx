import { colourPalattes } from "constants/index"
import styled from "styled-components"

export const Palattes = ({ showPalatte }) => {
    return <Container>
        {Object.entries(colourPalattes).map(([key, value]) => (
            <Colour color={value} key={key}></Colour>
        ))}
    </Container>
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap:.7rem;
    width: 100%;
    min-height: 50px;
`

const Colour = styled.span`
    background-color: ${({ color }) => color};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #ffffff;
`