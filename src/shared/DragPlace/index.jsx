import styled from "styled-components"
import { imagesS } from "constants/index"
import { Image } from ".."

export const DragPlace = () => {
    return (
        <DraggableImagesContainer>
            <DragImage>
                {imagesS?.map(({ uri, id }) => <Image key={id} {...{ uri, id }} />)}
            </DragImage>
        </DraggableImagesContainer>
    )
}

const DragImage = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding: 0 2rem 2rem 2rem;
`

const DraggableImagesContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
`