import { colourPalattes } from "constants/index"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setTheme } from "store/slices/images-slice"
import styled from "styled-components"

export const Palattes = ({ showPalatte }) => {
    const [active, setActive] = useState()
    const dispatch = useDispatch()

    const setPalatteToBoard = (colour) => {
        setActive(colour);
        dispatch(setTheme(colour))
    }

    return <Container>
        {Object.entries(colourPalattes).map(([key, value]) => (
            <Colour color={value} active={active === value} key={key} onClick={() => setPalatteToBoard(value)}></Colour>
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
    width: ${({ active }) => active ? "25px" : "30px"};
    height: ${({ active }) => active ? "25px" : "30px"};
    border-radius: 50%;
    border: 2px solid #ffffff;
    cursor: pointer;
`