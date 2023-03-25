import { useFormik } from 'formik'
import { Form, InputWrapper, Input } from "components/UI/styled-component"
import { registerUser } from 'store/slices'
import { validate } from 'utils/index'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ErrorBoundary } from '..'

export const FormValidater = ({ initialValues, type, neededInputs, }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const btnText = {
        login: { text: "Sign Up", path: "register" },
        register: { text: "login", path: 'login' }
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            const { username, password } = values
            dispatch(registerUser({ username, password }))
        },
    });

    const showError = (name) => {
        return formik.touched[name] && formik.errors[name] ?
            <Error>{formik.errors[name]}</Error>
            : null
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
                {<Button type="button" onClick={() => navigate(`/${btnText[type]?.path}`)}>{btnText[type]?.text}</Button>}
            </Form>
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

    :hover{
        background: white;
        color: black;
    }
`

const Error = styled.div`
    color: #7c1f1f;
`
