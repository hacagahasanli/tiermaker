import React from 'react'
import { useFormik } from 'formik'
import { axiosInstance } from 'api/index'
import { Form, InputWrapper, Label, Input, Wrapper } from "components/UI/styled-component"
import { Header } from 'components/index'
import styled from 'styled-components'

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
                <Form onSubmit={formik.handleSubmit}>
                    {inputs?.map(({ id, title, ...rest }) =>
                        <InputWrapper key={id}>
                            <Input {...rest} autoComplete="off" />
                        </InputWrapper>
                    )}
                    <Button type="submit">Register</Button>
                </Form>
            </FormWrapper>
        </Wrapper>
    )
}

const Button = styled.button`
    color: #7fff7f;
    font-size: 1.4rem;
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