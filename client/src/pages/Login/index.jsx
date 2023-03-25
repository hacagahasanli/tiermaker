import React from 'react'
import { Wrapper } from "components/UI/styled-component"
import { Header } from 'components/index'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { FormValidater } from 'components/Form'
import { useLocation } from 'react-router-dom'


const Login = () => {
    // const [files, setFiles] = useState()
    const location = useLocation()
    const pathname = location.pathname
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
            <Title>{title}</Title>
            <FormValidater {...{ initialValues, type, neededInputs }} />
        </>
    }

    return (
        <Wrapper>
            <Header />
            <FormWrapper>
                {userForm}
            </FormWrapper>
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

const Title = styled.span`
    display: block;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
`


export default Login

    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController()
    //     const getFiles = async () => {
    //         try {
    //             const response = await axiosInstance.get('/get-all-tierlists', {
    //                 signal: controller.signal
    //             })
    //             console.log(response.data);
    //             isMounted && setFiles(response.data)
    //         } catch (err) {
    //             // console.log(err)
    //         }
    //     }
    //     getFiles()

    //     return () => {
    //         isMounted = false;
    //         controller.abort()
    //     }

    // }, [])