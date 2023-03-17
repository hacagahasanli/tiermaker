import { Header } from "components/index"
import { useFormik } from "formik"
import { Wrapper } from "pages/Home"
import styled from "styled-components"

const Template = () => {
    const formik = useFormik({
        initialValues: {
            templateName: '',
            templateDescription: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return <Wrapper>
        <Header />
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <InputWrapper>
                    <Label htmlFor="template_name">Name of Template</Label>
                    <Input
                        id="template_name"
                        name="template_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        placeholder="Describe the image set, ex. 'Game of Thrones characters'"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="template_description">Description of Template:</Label>
                    <Input
                        id="template_description"
                        name="template_description"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </InputWrapper>
                <button type="submit">Submit</button>
            </Form>
        </Container>
    </Wrapper>
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
`

const Input = styled.input`
     width: 100%;
     padding: 1rem;
     background: #000000;
     border: 1px solid #474747;

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
    max-width: 780px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap:2rem;
`

const Container = styled.div`
    width: 100%;
`

export default Template