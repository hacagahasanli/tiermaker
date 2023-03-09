import styled from "styled-components"

export const TierColumn = ({ bgColor }) => {
    return <ColumnContainer>
        <InputWrapper tabIndex={1}>
            <Input type="text" />
        </InputWrapper>
        <ImageWrapper>
            {/* <div style={{ border: "1px solid red", width: "100px", minHeight: "80px" }}></div>
            <div style={{ border: "1px solid red", width: "100px", minHeight: "80px" }}></div> */}
        </ImageWrapper>
    </ColumnContainer>
}

const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    width: 100%;
    min-height: 80px;
    place-items: center;
`
const InputWrapper = styled.div`
    width: 100px;
    min-height:80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    background-color: #FF7F7F;
    border-right: solid 1px #000000;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: 16px;
    z-index: 4;

    &:focus,:focus-within{
        outline: 1.5px solid #b8e0ec;
        border-radius: 2px;
    }
`
const Input = styled.input`
    width: 100%;
    margin:5px;
    color: #000000;
    text-align: center;
    border: 1px solid transparent;
    outline: none;
    background: transparent;
    text-align: center;
    /* &:focus ${InputWrapper}{
        border: 2px solid #ffffff;
    } */
`
const ImageWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    background: #1a1a17;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    flex-grow: 1;
    /* display: grid;
    grid-template-columns: repeat(10, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fill, 80px);
    justify-content: start; */

`