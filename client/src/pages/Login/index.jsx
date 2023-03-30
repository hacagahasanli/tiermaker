import React from 'react'
import { Wrapper } from "components/UI/styled-component"
import { AnimatedPage, ErrorBoundary, Header } from 'components/index'
import styled from 'styled-components'
import { FormValidater } from 'components/Form'
import { useLocation } from 'react-router-dom'
import { formFields } from 'constants/index'

const Login = () => {
    const location = useLocation()
    const pathname = location?.pathname
    let userForm = null

    if (pathname === "/login" || pathname === "/register") {
        const { title, initialValues, type, neededInputs } = formFields[pathname]
        userForm = <AnimatedPage>
            <FormValidater {...{ initialValues, type, neededInputs, title }} />
        </AnimatedPage>

    }

    return (
        <AnimatedPage>
            <Wrapper>
                <Header />
                <ErrorBoundary>
                    <FormWrapper>
                        {userForm}
                    </FormWrapper>
                </ErrorBoundary>
            </Wrapper>
        </AnimatedPage>

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