import { useFormik } from "formik"
import React from "react"
import styled from "styled-components"
import { AnimatedPage, ErrorBoundary, Header, TButton, TemplateTitle } from "components/index"
import { Form, InputWrapper, Label, Wrapper } from "components/UI/styled-component"
import { useSendInputByType } from "hooks/index"
import { categoriesOptions, imageOrientations } from "constants/index"
import useAxiosPrivate from "hooks/useAxiosPrivate"
import { useDispatch } from "react-redux"
import { createTierList } from "store/slices/images"
import { useNavigate } from "react-router-dom"
import { tierListTemplateValidater } from "utils/validates"

const Template = () => {
    const { sendInputByType } = useSendInputByType()

    const dispatch = useDispatch()
    const privateAxios = useAxiosPrivate()
    const navigate = useNavigate()

    if (localStorage.getItem('createdTemplate')) {
        navigate(-1)
        localStorage.removeItem('createdTemplate')
    }

    const formik = useFormik({
        initialValues: {
            templateName: '',
            selectCategory: "",
            selectImageOrientation: "",
            templateDescription: '',
            coverPhoto: "",
            tierlistImages: "",
        },
        validate: tierListTemplateValidater,
        onSubmit: values => {
            const formData = new FormData()
            Object.entries(values).map(([key, value]) => {
                key === "tierlistImages"
                    ? Object.entries(value).forEach(([, file]) => formData.append("tierlistImages", file))
                    : formData.append(key, value)
            })
            dispatch(createTierList({ privateAxios, formData }))
        },
    });


    const error = (message) => <Error>{message}</Error>

    const showError = (name) => {
        return formik?.errors[name] ?
            error(formik?.errors[name])
            : null
    }

    const inputs = [
        {
            id: "templateName",
            name: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            inputType: "input"
        },
        {
            id: "selectCategory",
            name: "selectCategory",
            title: "Select a Category:",
            value: formik.values.selectCategory,
            onChange: formik.handleChange,
            inputType: "select",
            options: categoriesOptions
        },
        {
            id: "templateDescription",
            name: "templateDescription",
            title: "Description of Template:",
            rows: "3",
            placeholder: "A great description helps users find your template in search results",
            value: formik.values.templateDescription,
            onChange: formik.handleChange,
            inputType: "textarea"
        },
        {
            id: "coverPhoto",
            name: "coverPhoto",
            title: "Select Template Cover Photo:",
            type: "file",
            value: formik.values.coverPhoto,
            onChange: (e) => formik.setFieldValue("coverPhoto", e?.target?.files[0]),
            inputType: "input"
        },
        {
            id: "tierlistImages",
            name: "tierlistImages",
            title: "Upload a Set of Images for the Tier List Template:",
            text: "Consistent image size and orientation (square, portrait or landscape) work best. You can use our Text to Image Generator to quickly add text labels on your images. Large file sizes may cause the upload to fail. A minimum of 2 images are needed to make a template.",
            type: "file",
            multiple: true,
            value: formik.values.tierlistImages,
            onChange: (e) => formik.setFieldValue("tierlistImages", e.target.files),
            inputType: "input"
        },
        {
            id: "selectImageOrientation",
            name: "selectImageOrientation",
            title: "Image Orientation",
            value: formik.values.selectImageOrientation,
            onChange: formik.handleChange,
            inputType: "select",
            options: imageOrientations
        },
    ]

    return (
        <AnimatedPage>
            <Wrapper>
                <Header />
                <Container>
                    <ErrorBoundary>
                        <TemplateTitle />
                        <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                            {inputs?.map(({ id, title, name, ...rest }) =>
                                <InputWrapper key={id}>
                                    <Label htmlFor={id}>{title}</Label>
                                    {sendInputByType({ id, title, name, ...rest })}
                                    {showError(name)}
                                </InputWrapper>
                            )}
                            <TButton fullWidth type="submit" />
                        </Form>
                    </ErrorBoundary>
                </Container>
            </Wrapper>
        </AnimatedPage>
    )
}

const Container = styled.div`
    max-width: 840px;
    width: 100%;
    margin-bottom: 6rem;
`

const Error = styled.div`
    color: #7c1f1f;
`

export default Template