import { BoardsContext } from "context/index";
import { useContext } from "react";
import styled from "styled-components";

export const ColumnBoard = ({ diff, items, board }) => {
    const { setCurrentBoard, setCurrentItem, currentItem, removeItemFromBoard, setBoardsHandler } = useContext(BoardsContext)

    const dragOverHandler = (e, item, board) => {
        e.preventDefault();
        if (e.target.classList.value.includes('item')) {
            e.target.style.boxShadow = "0px 1px 21px 7px rgba(0,0,0,0.75)"
        }
    };

    const dragLeaveHandler = (e) => e.target.style.boxShadow = "none"

    const dragStartHandler = (e, board, item) => {
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
                id={id}
                className='item'
                src={uri}
                alt={id}
                key={id}
                onDragOver={(e) => dragOverHandler(e, item, board)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable={true}
            />
        })}
    </ImageWrapper>
}

const ImageWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    gap:0.1rem;
    flex-wrap: wrap;
    flex-shrink: 1;
    flex-grow: 1;
    background: ${({ diff, theme }) => diff ? "#000000" : theme.colour};
    /* display: grid;
    grid-template-columns: repeat(10, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fill, 80px);
    justify-content: start; */

`
const StyledImage = styled.img`
    height: 80px;
    object-fit: contain;
    margin: 0;
    padding: 0;
    background: #eeeeee;
`