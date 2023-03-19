import { Header, TemplateTitle } from "components/index"
import { useFormik } from "formik"
import { Wrapper } from "pages/Home"
import React from "react"
import styled from "styled-components"

const Template = () => {
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
            console.log(values, "VALUES");
        },
    });

    const sendInputByType = ({ id, type, placeholder, value, onChange, inputType, options, multiple, rows, text }) => {
        if (id === "coverPhoto" || id === "tierlistImages") {
            return <>
                {text && <span>{text}</span>}
                <Input {...{ id, type, onChange, multiple }} name={id} />
            </>
        }
        switch (inputType) {
            case "input":
                return <Input {...{ id, type, value, placeholder, onChange, multiple }} name={id} />
            case "select":
                return <select {...{ id, onChange, value }} name={id}>
                    {options.map(({ value, id }) => <option key={id} {...{ value }}>{value}</option>)}
                </select>
            case "textarea":
                return <Textarea {...{ rows, id, placeholder, onChange, value }} name={id} />
            default: <span>Something went wrong!</span>
        }
    }

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
    return <Wrapper>
        <Header />
        <Container>
            <TemplateTitle />
            <Form onSubmit={formik.handleSubmit}>
                {inputs?.map(({ id, title, ...rest }) =>
                    <InputWrapper key={id}>
                        <Label htmlFor={id}>{title}</Label>
                        {sendInputByType({ id, title, ...rest })}
                    </InputWrapper>
                )}
                <button type="submit">SUBMIT</button>
            </Form>
        </Container>
    </Wrapper>
}

const Textarea = styled.textarea`
    background: #000000;
    border: 1px solid #474747;
    color: white;
    font-size: 1.2rem;
    padding: .4rem;
    font-family: Arial, Helvetica, sans-serif;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;

    span{
        color: #c1c1c1;
        font-size: 1.1rem;
        line-height: 1.8rem;
    }

    select{
        font-size: 1.25rem;
        padding: 0.3rem;
        color: white;
        background: #000000;
        border: 1px solid #474747;
    }
`
const Input = styled.input`
     padding: 1rem ;
     background: #000000;
     border: 1px solid #474747;
     color: white;
     font-size: 1rem;

     ::placeholder{
        font-size: 1.4rem;
        color: white;
     }

     :focus,:focus-visible,:focus-within{
        outline: none;
     }
`
const Label = styled.label`
    font-size: 1.3rem;
    color: #ffffff;
`
const Form = styled.form`
    max-width: 840px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap:3rem;
`
const Container = styled.div`
    max-width: 840px;
    width: 100%;
    margin-bottom: 6rem;
`

export default Template