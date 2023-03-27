import { memo } from "react"
import styled, { css } from "styled-components"

export const Palatte = memo(({ func, active, isBlack, palattes }) => {
    return <>
        {Object?.entries(palattes ?? {})?.reverse().map(([key, value]) => (
            <Colour color={value} borderColor={isBlack} active={active === value} key={key} onClick={() => func(value)}></Colour>
        ))}
    </>
})

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