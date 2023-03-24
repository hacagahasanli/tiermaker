import React from 'react'
import { useFormik } from 'formik'
import { axiosInstance } from 'api/index'
import { Form, InputWrapper, Label, Input, Wrapper } from "components/UI/styled-component"
import { Header } from 'components/index'
import styled from 'styled-components'
import { Footer } from 'components/index'

const Login = () => {
    // const [files, setFiles] = useState()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            repeatedPassword: ''
        },
        onSubmit: values => {
            console.log(values, "VALUESS");
        },
    });

    const inputs = [
        {
            id: "username",
            title: "Username",
            type: "text",
            name: "username",
            placeholder: "username",
            value: formik.values.username,
            onChange: formik.handleChange,
        },
        {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "password",
            value: formik.values.password,
            onChange: formik.handleChange,
        },
        {
            id: "repeatedPassword",
            type: "password",
            name: "repeatedPassword",
            placeholder: "repeat password",
            value: formik.values.repeatedPassword,
            onChange: formik.handleChange,
        },
    ]

    return (
        <Wrapper>
            <Header />
            <FormWrapper>
                <Title>Registration</Title>
                <Form midGap="true" onSubmit={formik.handleSubmit}>
                    {inputs?.map(({ id, ...rest }) =>
                        <InputWrapper key={id}>
                            <Input {...rest} autoComplete="off" />
                        </InputWrapper>
                    )}
                    <Button type="submit">Sign up</Button>
                </Form>
            </FormWrapper>
        </Wrapper>
    )
}

const Button = styled.button`
    color: #ff7f7f;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.6rem 0;
    width: 100%;
    background: transparent;
    border: 1px solid gray;
    cursor: pointer;
    transition: all 0.3s;

    :hover{
        background: white;
        color: black;
    }
`

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