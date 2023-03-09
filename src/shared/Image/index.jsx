import { useDrag } from "react-dnd"
import styled from "styled-components"

export const Image = ({ uri, id }) => {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "image",
        item: { id, uri },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} style={{ width: "124px", height: "80px", display: "inline-block", opacity: 1 }}>
            <StyledImage src={uri} alt={id} isDragging={isDragging} />
        </div>
    )
}

const StyledImage = styled.img`
    width: 100%;// add your desired width here
    height: 80px;
    object-fit: cover;
    margin: 0;
    padding: 0;

















    /* opacity: ${({ isDragging }) => isDragging ? 1 : 1};
    border: ${({ isDragging }) => isDragging ? "3px solid #c1c1c1" : "3px solid transparent"};
    display:  ${({ isDragging }) => isDragging ? "none" : "block"}; */
`


// function CustomDragPreview() {
//     const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
//         isDragging: monitor.isDragging(),
//         item: monitor.getItem(),
//         currentOffset: monitor.getSourceClientOffset()
//     }));

//     if (!isDragging) {
//         return null;
//     }

//     return (
//         <div style={{
//             zIndex: "-10",
//             position: "absolute",
//             width: "300px",
//             height: "300px",
//             left: currentOffset?.x,
//             top: currentOffset?.y - 100,
//             opacity: "0.7"
//         }}>
//             <img src={item.uri} alt={item.id} width={"200px"} height={"200px"} />
//         </div>
//     );
// }