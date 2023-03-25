import { useFormik } from 'formik'
import { Form, InputWrapper, Input } from "components/UI/styled-component"
import { registerUser, loginUser } from 'store/slices'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ErrorBoundary } from '..'
import { validate } from 'utils/index'
import { useEffect } from 'react'

export const FormValidater = ({ initialValues, type, neededInputs }) => {
    const { auth } = useSelector(state => state.sign)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const btnText = {
        login: { text: "Sign Up", path: "register" },
        register: { text: "login", path: 'login' }
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => { submitHandler(values) },
    });

    const submitHandler = ({ password, repeatedPassword, username }) => {
        if (type === "login") {
            dispatch(loginUser({ password, username }))
        }
        type === "register" && dispatch(registerUser({ password, repeatedPassword, username }))
    }

    const error = (message) => <Error>{message}</Error>

    const showError = (name) => {
        return formik?.touched[name] && formik?.errors[name] ?
            error(formik?.errors[name])
            : null
    }

    const handleReset = () => {
        formik.resetForm()
        navigate(`/${btnText[type]?.path}`)
    }

    const allInputs = [
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
            placeholder: "confirm password",
            value: formik.values.repeatedPassword,
            onChange: formik.handleChange,
        },
    ]

    const inputs = allInputs.filter(({ id }) => neededInputs.includes(id))

    return (
        <ErrorBoundary>
            <Form midGap="true" onSubmit={formik.handleSubmit} >
                {inputs?.map(({ id, name, ...rest }) =>
                    <InputWrapper key={id}>
                        <Input {...rest} {...{ name }} autoComplete="off" />
                        {showError(name)}
                    </InputWrapper>
                )}
                <Button type="submit">{type}</Button>
            </Form>
            <Button top="true" type="button" onClick={handleReset}>{btnText[type]?.text}</Button>
        </ErrorBoundary>
    )
}

const Button = styled.button`
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

const Error = styled.div`
    color: #7c1f1f;
`
