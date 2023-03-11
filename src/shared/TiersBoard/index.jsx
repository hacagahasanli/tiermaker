import styled from "styled-components"
import React, { memo, useState } from 'react'
import { useBoards } from "hooks/index"


export const TiersBoard = memo(() => {
    const { boards, setBoards } = useBoards()
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const dragOverHandler = (e, item, board) => {
        e.preventDefault();
        if (e.target.classList.value.includes('item')) {
            // e.target.style.marginLeft = "130px"
        }
    };
    const dragLeaveHandler = (e) => {
        // e.target.style.marginLeft = "0px"
    };
    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    };
    const dragEndHandler = (e) => {
    };

    const setBoardsHandler = (board) => {
        setBoards(
            boards?.map((b) => {
                if (b.id === board.id) {
                    return board;
                }
                if (b.id === currentBoard.id) {
                    return currentBoard;
                }
                return b;
            })
        );
    }

    const removeItemFromBoard = () => {
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
    }

    const dropHandler = (e, board, item) => {
        e.preventDefault();
        removeItemFromBoard()
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex, 0, currentItem);
        setBoardsHandler(board)
    };

    const dropCardHandler = (e, board) => {
        if (!e.target.classList.value.includes('item')) {
            board.items.push(currentItem);
            removeItemFromBoard()
            setBoardsHandler(board)
        }
        // e.target.style.marginRight = "130px"
    };


    return (
        <RowsContainer>
            {boards?.map((board) => (
                <ColumnContainer
                    diff={board.diff}
                    key={board.id}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                >
                    {board.id !== 8 && <InputWrapper tabIndex={1} bgColor={board.bgColor}>
                        <Title contentEditable={true} suppressContentEditableWarning>
                            <span>{board.value}</span>
                        </Title>
                    </InputWrapper>
                    }
                    <ImageWrapper>
                        {board.items?.map((item) => (
                            <StyledImage
                                id={item.id}
                                className='item'
                                src={item.uri}
                                alt={item.id}
                                key={item.id}
                                onDragOver={(e) => dragOverHandler(e, item, board)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragStart={(e) => dragStartHandler(e, board, item)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDrop={(e) => dropHandler(e, board, item)}
                                draggable={true}
                            />
                        ))}
                    </ImageWrapper>
                </ColumnContainer>
            ))}
        </RowsContainer>
    )
})
const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ diff }) => diff ? "1fr" : "100px 1fr"};
    background: ${({ diff, theme }) => diff ? "#000000" : theme.colour};
    margin-top: ${({ diff }) => diff ? "1.2rem" : "0"};
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
    background-color: ${({ bgColor }) => bgColor};
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
const ImageWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    flex-grow: 1;
    /* display: grid;
    grid-template-columns: repeat(10, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fill, 80px);
    justify-content: start; */

`
const StyledImage = styled.img`
    width: 124px;// add your desired width here
    height: 80px;
    object-fit: cover;
    margin: 0;
    padding: 0;
`
const RowsContainer = styled.div`
    max-width: 1150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 0.12rem;
`
