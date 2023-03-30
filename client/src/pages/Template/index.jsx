import { useFormik } from "formik"
import React from "react"
import styled from "styled-components"
import { ErrorBoundary, Header, LocaleStorage, TButton, TemplateTitle } from "components/index"
import { Form, InputWrapper, Label, Wrapper } from "components/UI/styled-component"
import { useSendInputByType } from "hooks/index"
import { categoriesOptions, imageOrientations } from "constants/index"
import useAxiosPrivate from "hooks/useAxiosPrivate"
import { useDispatch } from "react-redux"
import { createTierList } from "store/slices/images"
import { useNavigate } from "react-router-dom"

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
            // imageCreditsUrl: ""
        },
        // validate: tierListTemplateValidater,
        onSubmit: values => {
            const formData = new FormData()
            console.log(values, "VALUES");
            Object.entries(values).map(([key, value]) => {
                key === "tierlistImages"
                    ? Object.entries(value).forEach(([, file]) => formData.append("tierlistImages", file))
                    : formData.append(key, value)
            })
            dispatch(createTierList({ privateAxios, formData }))
        },
    });

    const inputs = [
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            inputType: "input"
        },
        {
            id: "selectCategory",
            title: "Select a Category:",
            value: formik.values.selectCategory,
            onChange: formik.handleChange,
            inputType: "select",
            options: categoriesOptions
        },
        {
            id: "templateDescription",
            title: "Description of Template:",
            rows: "3",
            placeholder: "A great description helps users find your template in search results",
            value: formik.values.templateDescription,
            onChange: formik.handleChange,
            inputType: "textarea"
        },
        {
            id: "coverPhoto",
            title: "Select Template Cover Photo:",
            type: "file",
            value: formik.values.coverPhoto,
            onChange: (e) => formik.setFieldValue("coverPhoto", e?.target?.files[0]),
            inputType: "input"
        },
        {
            id: "tierlistImages",
            title: "Upload a Set of Images for the Tier List Template:",
            text: "Consistent image size and orientation (square, portrait or landscape) work best. You can use our Text to Image Generator to quickly add text labels on your images. Large file sizes may cause the upload to fail. A minimum of 2 images are needed to make a template.",
            type: "file",
            multiple: true,
            value: formik.values.tierlistImages,
            onChange: (e) => formik.setFieldValue("tierlistImages", e.target.files),
            inputType: "input"
        },
        // {
        //     id: "imageCreditsUrl",
        //     title: "Add a URL for Image Credits:",
        //     type: "text",
        //     placeholder: "URL of site",
        //     value: formik.values.imageCreditsUrl,
        //     onChange: formik.handleChange,
        //     inputType: "input"
        // },
        {
            id: "selectImageOrientation",
            title: "Image Orientation",
            value: formik.values.selectImageOrientation,
            onChange: formik.handleChange,
            inputType: "select",
            options: imageOrientations
        },
    ]

    return (
        <Wrapper>
            <Header />
            <Container>
                <ErrorBoundary>
                    <TemplateTitle />
                    <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                        {inputs?.map(({ id, title, ...rest }) =>
                            <InputWrapper key={id}>
                                <Label htmlFor={id}>{title}</Label>
                                {sendInputByType({ id, title, ...rest })}
                            </InputWrapper>
                        )}
                        <TButton fullWidth="true" type="submit" />
                    </Form>
                </ErrorBoundary>
            </Container>
        </Wrapper>
    )
}


const Container = styled.div`
    max-width: 840px;
    width: 100%;
    margin-bottom: 6rem;
`
export default Template