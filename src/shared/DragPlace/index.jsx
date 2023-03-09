import styled from "styled-components"
import { Image } from ".."

export const DragPlace = ({ images }) => {
    return (
        <DraggableImagesContainer>
            <DragImage>
                {images?.map(({ uri, id }) => <Image key={id} {...{ uri, id }} />)}
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