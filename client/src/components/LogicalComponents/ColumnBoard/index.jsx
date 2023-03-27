import { BoardsContext } from "context/index";
import { useBoxShadow } from "hooks/index";
import { memo, useContext } from "react";
import styled from "styled-components";

export const ColumnBoard = memo(({ diff, items, board }) => {
    const { setCurrentBoard, setCurrentItem, currentItem, removeItemFromBoard, setBoardsHandler } = useContext(BoardsContext)
    const { dragOverHandler } = useBoxShadow()

    const dragLeaveHandler = (target) => target.style.boxShadow = "none"

    const dragStartHandler = ({ board, item }) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    };

    const dragEndHandler = (e) => { };

    const dropHandler = (e, board, item) => {
        e.preventDefault();
        removeItemFromBoard()
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex, 0, currentItem);
        setBoardsHandler(board)
        e.target.style.boxShadow = "none"
    };

    return <ImageWrapper {...{ diff }}>
        {items?.map((item) => {
            const { id, uri } = item
            return <StyledImage
                loading="lazy"
                img={uri}
                id={id}
                src={uri}
                alt={id}
                key={id}
                className='item'
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e.target)}
                onDragStart={() => dragStartHandler({ board, item })}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
            />
        })}
    </ImageWrapper>
})

const ImageWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    gap:0.1rem;
    flex-wrap: wrap;
    flex-shrink: 1;
    flex-grow: 1;
    background: ${({ diff, theme }) => diff ? "#000000" : theme.colour};
`
const StyledImage = styled.img`
    height: 80px;
    max-width: 80px;
    margin: 0;
    padding: 0;
    background: #eeeeee;
    background-image: url(${({ uri }) => uri});
    background-size: cover;
`