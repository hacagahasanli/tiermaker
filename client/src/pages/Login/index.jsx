import React from 'react'
import { Wrapper } from "components/UI/styled-component"
import { ErrorBoundary, Header } from 'components/index'
import styled from 'styled-components'
import { FormValidater } from 'components/Form'
import { useLocation } from 'react-router-dom'

const Login = () => {

    const location = useLocation()
    const pathname = location?.pathname
    let userForm = null

    const form = {
        "/login": {
            title: "Waitin you!",
            initialValues: { username: "", password: "" },
            type: "login",
            neededInputs: ["username", "password"]
        },
        "/register": {
            title: "Register",
            initialValues: { username: "", password: "", repeatedPassword: "" },
            type: "register",
            neededInputs: ["username", "password", "repeatedPassword"]
        }
    }

    if (pathname === "/login" || pathname === "/register") {
        const { title, initialValues, type, neededInputs } = form[pathname]
        userForm = <>
            <FormValidater {...{ initialValues, type, neededInputs, title }} />
        </>
    }

    return (
        <Wrapper>
            <Header />
            <ErrorBoundary>
                <FormWrapper>
                    {userForm}
                </FormWrapper>
            </ErrorBoundary>
        </Wrapper>
    )
}


const FormWrapper = styled.div`
    margin-top: 2rem;
    min-width: 450px;
    min-height: 100%;

    input::placeholder{
        opacity: 0.9 !important;
    }

`

export default Login