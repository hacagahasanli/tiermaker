import { Input } from "components/UI/styled-component"
import styled from "styled-components"

export const useSendInputByType = () => {
    const sendInputByType = ({ id, type, placeholder, value, onChange, inputType, options, multiple, rows, text, name }) => {
        try {
            if (id === "coverPhoto" || id === "tierlistImages") {
                return <>
                    {text && <span>{text}</span>}
                    <Input {...{ id, type, onChange, multiple, name }} accept=".jpeg, .jpg, .png" name={id} />
                </>
            }
            switch (inputType) {
                case "input":
                    return <Input {...{ id, type, value, placeholder, onChange, multiple, name }} name={id} />
                case "select":
                    return <select {...{ id, onChange, value, name }} name={id}>
                        {options.map(({ value, id }) => <option key={id} {...{ value }}>{value}</option>)}
                    </select>
                case "textarea":
                    return <Textarea {...{ rows, id, placeholder, onChange, value, name }} name={id} />
                default: <span>Something went wrong!</span>
            }
        } catch (err) {
            console.log("IT IS CONSOLE YOU KNOW WHERE TO LOOK");
        }
    }

    return { sendInputByType }
}


const Textarea = styled.textarea`
    background: #000000;
    border: 1px solid #474747;
    color: white;
    font-size: 1.2rem;
    padding: .4rem;
    font-family: Arial, Helvetica, sans-serif;
`
