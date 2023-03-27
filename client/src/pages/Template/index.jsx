import { useFormik } from "formik"
import React from "react"
import styled from "styled-components"
import { ErrorBoundary, Header, TButton, TemplateTitle } from "components/index"
import { Form, InputWrapper, Label, Wrapper } from "components/UI/styled-component"
import { useSendInputByType } from "hooks/index"

const Template = () => {
    const { sendInputByType } = useSendInputByType()

    const formik = useFormik({
        initialValues: {
            templateName: '',
            selectCategory: "",
            selectImageOrientation: "",
            templateDescription: '',
            coverPhoto: "",
            tierlistImages: "",
            imageCreditsUrl: ""
        },
        onSubmit: values => {

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
            options: [
                {
                    id: "Select a Category",
                    value: "Select a Category"
                },
                {
                    id: "Actors && Actresses",
                    value: "Actors && Actresses"
                },
                {
                    id: "Albums",
                    value: "Albums"
                },
                {
                    id: "AMC Shows",
                    value: "AMC Shows"
                },
                {
                    id: "Among Us",
                    value: "Among Us"
                },
            ]
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
        {
            id: "imageCreditsUrl",
            title: "Add a URL for Image Credits:",
            type: "text",
            placeholder: "URL of site",
            value: formik.values.imageCreditsUrl,
            onChange: formik.handleChange,
            inputType: "input"
        },
        {
            id: "selectImageOrientation",
            title: "Image Orientation",
            value: formik.values.selectImageOrientation,
            onChange: formik.handleChange,
            inputType: "select",
            options: [
                {
                    id: "Square",
                    value: "Square"
                },
                {
                    id: "Landscape",
                    value: "Landscape"
                },
                {
                    id: "Portrait",
                    value: "Portrait"
                },
                {
                    id: "Circle",
                    value: "Circle"
                },
            ]
        },
    ]
    return <ErrorBoundary>
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
                        <TButton />
                    </Form>
                </ErrorBoundary>
            </Container>
        </Wrapper>
    </ErrorBoundary>
}


const Container = styled.div`
    max-width: 840px;
    width: 100%;
    margin-bottom: 6rem;
`
export default Template