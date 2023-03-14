import styled from "styled-components"
import React, { useContext } from 'react'
import { BoardsContext } from "context"
import { TierTitle, ErrorBoundary, Settings, ColumnBoard } from "components/index"

export const TiersBoard = () => {
    const { boards, currentItem, removeItemFromBoard, setBoardsHandler } = useContext(BoardsContext)

    const dragOverHandler = (e, item, board) => {
        e.preventDefault();
        if (e.target.classList.value.includes('item')) {
            e.target.style.boxShadow = "0px 1px 21px 7px rgba(0,0,0,0.75)"
        }
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
                        <ColumnBoard {...{ diff, items, board }} />
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
