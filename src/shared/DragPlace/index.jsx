import styled from "styled-components"
import { Image } from ".."
import { Reorder } from "framer-motion"
import { useEffect, useState } from "react"



export const DragPlace = ({ images }) => {
    const { Group, Item } = Reorder
    const [items, setItems] = useState(images)

    useEffect(() => {
        setItems(items)
    }, [images])
    return (
        <DraggableImagesContainer>
            <DragImage>
                <Group axis="y" values={items} onReorder={setItems}>
                    {images?.map(({ uri, id }) => {
                        return <Item key={id} value={uri}>
                            {/* <Image key={id} {...{ uri, id }} /> */}
                            <span style={{ color: "white" }}>{uri}</span>
                            {/* <img src={uri} alt={id} /> */}
                        </Item>
                    })}
                </Group>
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