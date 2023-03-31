import { memo } from "react"
import styled from "styled-components"


export const TierTitle = memo(({ bgColor, value, defultImageBoard }) => {
    return <>
        {defultImageBoard && <TitleWrapper onDragOver={(e) => e.preventDefault()} bgColor={bgColor}>
            <Title contentEditable={true} suppressContentEditableWarning>
                <span>{value}</span>
            </Title>
        </TitleWrapper>}
    </>
})

const TitleWrapper = styled.div`
    width: 100px;
    min-height:80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    background-color: ${({ bgColor }) => bgColor};
    border-right: solid 1px #000000;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: 16px;
    z-index: 2;

    &:focus,:focus-within{
        outline: 1.5px solid #b8e0ec;
        border-radius: 2px;
    }
`
const Title = styled.div`
    width: 100%;
    margin:5px;
    color: #000000;
    text-align: center;
    border: 1px solid transparent;
    outline: none;
    background: transparent;
    text-align: center;
`