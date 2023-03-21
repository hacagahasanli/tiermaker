import { colourPalattes } from "constants/index"
import { memo, useState } from "react"
import { useDispatch } from "react-redux"
import { setTheme } from "store/slices/images-slice"
import styled, { css } from "styled-components"

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

export const Palatte = memo(({ func, active, isBlack, palattes }) => {
    return <>
        {Object?.entries(palattes ?? {})?.reverse().map(([key, value]) => (
            <Colour color={value} borderColor={isBlack} active={active === value} key={key} onClick={() => func(value)}></Colour>
        ))}
    </>
})

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
        transform:${({ showPalatte }) => showPalatte ? "translateX(232px)" : 'translateX(-200px)'};
        transition:all .8s;
    }
`

const Colour = styled.span`
        ${({ borderColor }) => borderColor ?
        css`
            width: 30px;
            height: 30px;
            border: 2px solid ${({ active }) => active ? "#000000" : "#ffffff"};
        `
        : css`   
            width: ${({ active }) => active ? "25px" : "30px"};
            height: ${({ active }) => active ? "25px" : "30px"};
            border: 2px solid #ffffff;
        ` }
        
    border-radius: 50%;
    background-color: ${({ color }) => color};
    cursor: pointer;
`