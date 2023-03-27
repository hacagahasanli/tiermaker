import { AuthButton, Input, InputWrapper } from "components/UI/styled-component"

export const FormFields = ({ inputs, showError, type }) => {
    return <>
        {inputs?.map(({ id, name, ...rest }) =>
            <InputWrapper key={id}>
                <Input {...rest} {...{ name }} autoComplete="off" />
                {showError(name)}
            </InputWrapper>
        )}
        <AuthButton type="submit">{type}</AuthButton>
    </>
}