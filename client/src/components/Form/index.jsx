import { useFormik } from 'formik'
import { Form, InputWrapper, Input } from "components/UI/styled-component"
import { registerUser, loginUser } from 'store/slices'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from '..'
import { validate } from 'utils/index'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { setHideForm } from 'store/slices/sign-slice'

export const FormValidater = ({ initialValues, type = "login", neededInputs, title }) => {
    const { auth, formVisible, isRegistered } = useSelector(state => state.sign)
    const [loginClicked, setLoginClicked] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"

    const pageName = {
        '/tierboard': "Tierboard",
        '/': "Home",
        '/login': "Login"
    }

    const btnText = {
        login: { text: "Sign Up", path: "register" },
        register: { text: "login", path: 'login' }
    }

    useEffect(() => {
        if ((Object.values(auth).length > 0 || isRegistered) && loginClicked) {
            console.log("BURDAYAM USEEFFECT");
            Swal.fire({
                icon: 'success',
                title: 'You are a professor!',
                text: `redirecting to ${pageName[from]}`,
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 1500,
            }).then(() => navigate(from, { replace: true }))

            setLoginClicked(false)
        }
    }, [auth, isRegistered])

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => { submitHandler(values) },
    });

    const submitHandler = async ({ password, repeatedPassword, username }) => {
        dispatch(setHideForm(false))
        if (type === "login") {
            dispatch(loginUser({ password, username }))
            return setLoginClicked(true)
        }
        if (type === "register") {
            console.log("BURDAYAM IF");
            dispatch(registerUser({ password, repeatedPassword, username }))
            setLoginClicked(true)
        }
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
            {formVisible && <>
                <Title>{title}</Title>
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
            </>}
        </ErrorBoundary>
    )
}

const Title = styled.span`
    display: block;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
`

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
