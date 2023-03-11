import { memo } from "react"
import styled, { css } from "styled-components"

export const MainButton = memo(({ value, func }) => <MButton onClick={func}>{value}</MButton>)

export const Button = memo(({ value, func }) => <SButton onClick={func}>{value}</SButton>)

const sameStyles = css`
    text-align: center;
    border-radius: 5px;
    padding:10px 0;
    cursor: pointer;
    transition: opacity 0.5s;
    &:hover{
        opacity: 0.8;
    }
`

const SButton = styled.button`
    max-width: 250px;
    width: 100%;
    ${sameStyles}
    border: none;
    outline: none;
    background-color: #ffffff;
    font-weight: 500;
`

const MButton = styled.button`
    border: 1px solid #ffffff;
    background:#3A5795;
    color: #ffffff;
    max-width: 340px;
    font-weight: 700;
    font-family: 'Nunito Sans', sans-serif;
    width: 100%;
    ${sameStyles}
    font-size: 1.05rem;
    padding: 0.6rem 0;
`
