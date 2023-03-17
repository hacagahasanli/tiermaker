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
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="template_name">Name of Template</label>
                <input
                    id="template_name"
                    name="template_name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <label htmlFor="template_description">Description of Template:</label>
                <input
                    id="template_description"
                    name="template_description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <button type="submit">Submit</button>
            </form>
        </Container>
    </Wrapper>
}

const Container = styled.div``

export default Template