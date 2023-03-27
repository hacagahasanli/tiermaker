import { useCallback, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { registerUser, loginUser } from 'store/slices'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorBoundary, FormFields, LoadingMessage } from '..'
import { authValidate } from 'utils/index'
import Swal from 'sweetalert2'
import { Form, AuthButton } from "components/UI/styled-component"
import { setIsUserRegistered } from 'store/slices/sign-slice'
import { pageName, btnText } from 'constants/index'
import { sweetFire } from 'utils/swal'
import { useAuthValid } from 'hooks/index'

export const FormValidater = ({ initialValues, type, neededInputs, title }) => {
    const { auth, isRegistered } = useSelector(state => state.sign)
    const { isLoading } = useSelector(state => state.loading)

    const [loginClicked, setLoginClicked] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { isValid } = useAuthValid()

    const from = location?.state?.from?.pathname || "/"

    const formik = useFormik({
        initialValues,
        validate: authValidate,
        onSubmit: values => { submitHandler(values) },
    });

    useEffect(() => {
        if ((isValid || isRegistered) && loginClicked) {
            const text = isRegistered ? "Login" : pageName[from]
            Swal.fire(sweetFire({ text, type: "success" })).then(() => {
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

    const showError = useCallback((name) => {
        return formik?.touched[name] && formik?.errors[name] ?
            error(formik?.errors[name])
            : null
    }, [formik])

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
            {!isLoading ? <>
                <Title>{title}</Title>
                <Form midGap="true" onSubmit={formik.handleSubmit} >
                    <FormFields {...{ inputs, showError, type }} />
                </Form>
                <AuthButton top="true" type="button" onClick={handleReset}>{btnText[type]?.text}</AuthButton>
            </>
                : <LoadingMessage port={"auth"} />}
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

const Error = styled.div`
    color: #7c1f1f;
`
