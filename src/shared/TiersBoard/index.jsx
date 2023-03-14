import styled from "styled-components"
import React, { useContext, useState } from 'react'
import { BoardsContext } from "context"
import { useDispatch } from "react-redux"
import { TierTitle, ErrorBoundary, Settings } from "components/index"

export const TiersBoard = () => {
    const { boards, setBoards } = useContext(BoardsContext)
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

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

    const setBoardsHandler = (board) => {
        setBoards(
            boards?.map((b) => {
                if (b.id === board.id)
                    return board;
                if (b.id === currentBoard.id)
                    return currentBoard
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
        e.target.style.boxShadow = "none"
    };

    const dropCardHandler = (e, board) => {
        if (!e.target.classList.value.includes('item')) {
            board?.items?.push(currentItem);
            removeItemFromBoard()
            setBoardsHandler(board)
        }
        e.target.style.boxShadow = "none"
    };



    return (
        <RowsContainer>
            <ErrorBoundary>
                {boards?.map((board) => {
                    const defultImageBoard = board.id !== 8;
                    const { diff, id, value, items, bgColor } = board;
                    return <ColumnContainer
                        diff={diff}
                        key={id}
                        onDragOver={e => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}
                    >
                        {defultImageBoard && <TierTitle {...{ bgColor, value }} />}
                        <ImageWrapper diff={diff}>
                            {items?.map((item) => (
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
                        {defultImageBoard && <Settings {...{ board }} />}
                    </ColumnContainer>
                })}
            </ErrorBoundary>
        </RowsContainer>
    )
}


const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ diff }) => diff ? "1fr" : "100px 1fr 80px"};
    margin-top: ${({ diff }) => diff ? "1.2rem" : "0"};
    width: 100%;
    min-height: 80px;
    place-items: center;
    font-family: 'Nunito Sans', sans-serif;
`
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
