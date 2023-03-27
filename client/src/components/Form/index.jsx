import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { registerUser, loginUser } from 'store/slices'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from '..'
import { validate } from 'utils/index'
import Swal from 'sweetalert2'
import { Form, InputWrapper, Input } from "components/UI/styled-component"
import { setIsUserRegistered } from 'store/slices/sign-slice'
import { pageName, btnText } from 'constants/index'


export const FormValidater = ({ initialValues, type, neededInputs, title }) => {
    const { auth, isRegistered } = useSelector(state => state.sign)
    const [loginClicked, setLoginClicked] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    console.log("CHECK");

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => { submitHandler(values) },
    });

    useEffect(() => {
        if ((Object.values(auth).length > 0 || isRegistered) && loginClicked) {
            const text = isRegistered ? "Login" : pageName[from]
            Swal.fire({
                icon: 'success',
                title: 'You are a professor!',
                text: `redirecting to ${text}`,
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 1500,
            }).then(() => {
                if (isRegistered) {
                    navigate('/login')
                    return dispatch(setIsUserRegistered(false))
                }
                navigate(from, { replace: true })
            })
            setLoginClicked(false)
        }
    }, [auth, isRegistered])

    const submitHandler = async ({ repeatedPassword, ...rest }) => {
        if (type === "login") {
            dispatch(loginUser({ ...rest }))
            return setLoginClicked(true)
        }
        dispatch(registerUser({ repeatedPassword, ...rest }))
        setLoginClicked(true)
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
