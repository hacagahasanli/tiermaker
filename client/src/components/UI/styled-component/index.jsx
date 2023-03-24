import styled from "styled-components"

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

    h2{
        color: #ffffff;
        font-size: 2rem;
        margin-top: 1rem;
    }
`