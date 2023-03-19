import { Header, TemplateTitle } from "components/index"
import { useFormik } from "formik"
import { Wrapper } from "pages/Home"
import styled from "styled-components"

const Template = () => {
    const formik = useFormik({
        initialValues: {
            templateName: '',
            selectOption: "",
            templateDescription: '',
            coverPhoto: "",
            tierlistImages: "",
            imageCreditsUrl: ""
        },
        onSubmit: values => {
            console.log(values, "VALUES");
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
            input: true
        },
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            input: true
        },
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            input: true
        },
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            input: true
        },
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            input: true
        },
        {
            id: "templateName",
            title: "Name of Template",
            type: "text",
            placeholder: "Describe the image set, ex. 'Game of Thrones characters'",
            value: formik.values.templateName,
            onChange: formik.handleChange,
            input: true
        },
    ]
    return <Wrapper>
        <Header />
        <Container>
            <TemplateTitle />
            <Form onSubmit={formik.handleSubmit}>
                <InputWrapper>
                    <Label htmlFor="templateName">Name of Template</Label>
                    <Input
                        id="templateName"
                        name="templateName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.templateName}
                        placeholder="Describe the image set, ex. 'Game of Thrones characters'"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="selectOption">Select a Category:</Label>
                    <select
                        id="selectOption"
                        name="selectOption"
                        onChange={formik.handleChange}
                        value={formik.values.selectOption}
                    >
                        <option value="">Select a Category</option>
                        <option value="Actors && Actresses">Actors && Actresses</option>
                        <option value="Albums">Albums</option>
                        <option value="AMC Shows">AMC Shows</option>
                        <option value="Among Us">Among Us</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="templateDescription">Description of Template:</Label>
                    <Textarea
                        rows="3"
                        id="templateDescription"
                        name="templateDescription"
                        placeholder="A great description helps users find your template in search results"
                        onChange={formik.handleChange}
                        value={formik.values.templateDescription}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="coverPhoto">Select Template Cover Photo:</Label>
                    <Input
                        id="coverPhoto"
                        name="coverPhoto"
                        type="file"
                        onChange={(event) => {
                            formik.setFieldValue("coverPhoto", event.target.files[0]);
                        }}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="tierlistImages">Upload a Set of Images for the Tier List Template:</Label>
                    <span>Consistent image size and orientation (square, portrait or landscape) work best. You can use our Text to Image Generator to quickly add text labels on your images. Large file sizes may cause the upload to fail. A minimum of 2 images are needed to make a template.</span>
                    <Input
                        id="tierlistImages"
                        name="tierlistImages"
                        type="file"
                        multiple={true}
                        onChange={(event) => {
                            formik.setFieldValue("tierlistImages", event.target.files);
                        }}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="imageCreditsUrl">Add a URL for Image Credits:</Label>
                    <Input
                        id="imageCreditsUrl"
                        name="imageCreditsUrl"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.imageCreditsUrl}
                        placeholder="URL of site"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="selectOption">Image Orientation</Label>
                    <select
                        id="selectOption"
                        name="selectOption"
                        onChange={formik.handleChange}
                        value={formik.values.selectOption}
                    >
                        <option value="square">Square</option>
                        <option value="landscape">Landscape</option>
                        <option value="portrait">Portrait</option>
                        <option value="circle">Circle</option>
                    </select>
                </InputWrapper>
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