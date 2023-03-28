import { memo } from "react"
import styled, { css } from "styled-components"

export const MainButton = memo(({ value, func }) => <MButton onClick={func}>{value}</MButton>)

export const Button = memo(({ value, func, isGray }) => <SButton {...{ isGray }} onClick={func}>{value}</SButton>)

export const TButton = (({ value = "Make", func, fullWidth, type = "button" }) => <TemplateButton {...{ fullWidth, type }} onClick={func}>{`${value} a Template`}</TemplateButton>)


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
const TemplateButton = styled.button`
    background-color: #3A5795;
    border-radius: ${({ fullWidth }) => fullWidth ? "1px" : "8px"};
    color: white;
    font-size: 17px;
    min-width: 150px;
    max-width: ${({ fullWidth }) => fullWidth ? "100%" : "250px"};
    border: none;
    padding: ${({ fullWidth }) => fullWidth ? ".6rem" : ".4rem"};;
    height: fit-content;
    cursor: pointer;

`
const SButton = styled.button`
    max-width: 250px;
    width: 100%;
    ${sameStyles}
    border: none;
    outline: none;
    background-color:${({ isGray }) => isGray ? "#F1F1F1" : "#ffffff"} ;
    font-weight: 500;
`
const MButton = styled.button`
    border: 1px solid #ffffff;
    background:#314A7E;
    color: #ffffff;
    max-width: 340px;
    font-weight: 700;
    font-family: 'Nunito Sans', sans-serif;
    width: 100%;
    ${sameStyles}
    font-size: 1.05rem;
    padding: 0.6rem 0;
`
