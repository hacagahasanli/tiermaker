import { colourPalattes } from "constants/index"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setTheme } from "store/slices/images-slice"
import styled from "styled-components"
import { Palatte } from "../Palatte"

export const Palattes = ({ showPalatte }) => {
    const [active, setActive] = useState()
    const dispatch = useDispatch()

    const setPalatteToBoard = (colour) => {
        setActive(colour);
        dispatch(setTheme(colour))
    }

    return <Container {...{ showPalatte }}>
        <div>
            <Palatte func={setPalatteToBoard} {...{ active }} palattes={colourPalattes} />
        </div>
    </Container>
}

const Container = styled.div`
    justify-content: center;
    align-items:center;
    width: 100%;
    position: relative;
    height: ${({ showPalatte }) => showPalatte ? "50px" : "0px"};
    /* height: ${({ showPalatte }) => showPalatte ? "50px" : "0px"}; */
    transition: all .5s;
    overflow: hidden;
    margin-bottom: 10rem;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:.7rem;
        min-height: 100%;
        position: absolute;
        transform:${({ showPalatte }) => showPalatte ? "translateX(260px)" : 'translateX(-200px)'};
        transition:all .8s;
    }
`
