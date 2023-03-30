import styled, { createGlobalStyle } from "styled-components"
import Swal from "sweetalert2"

export const GlobalStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }
 html{
    scroll-behavior: smooth;
 }
`

export const Label = styled.label`
    font-size: 1.3rem;
    color: #ffffff;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;

    span{
        color: #c1c1c1;
        font-size: 1.1rem;
        line-height: 1.8rem;
    }

    select{
        font-size: 1.25rem;
        padding: 0.3rem;
        color: white;
        background: #000000;
        border: 1px solid #474747;
    }
`

export const Form = styled.form`
    max-width: 840px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap:${({ midGap }) => midGap ? "1rem" : "3rem"};
`

export const Input = styled.input`
     padding: 1rem;
     background: #000000;
     border: 1px solid #474747;
     color: white;
     font-size: 1rem;

     ::placeholder{
        font-size: 1.4rem;
        color: white;
     }

     :focus,:focus-visible,:focus-within{
        outline: none;
     }
`

export const Wrapper = styled.div`
    position: relative;
    max-width: 1180px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap:2rem;
    overflow: ${({ isHide }) => isHide ? "hidden" : "visible"};
    h2{
        color: #ffffff;
        font-size: 2rem;
        margin-top: 1rem;
    }
`

export const SweetAlert = styled(Swal)`
  & .swal2-popup {
    top: 30px;
  }
`;

export const AuthButton = styled.button`
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.6rem 0;
    width: 100%;
    background: transparent;
    border: 1px solid gray;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: capitalize;
    margin-top: ${({ top }) => top && "1rem"};

    :hover{
        background: white;
        color: black;
    }
`
