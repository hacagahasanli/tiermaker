import styled from "styled-components"
import React, { useContext, useMemo } from 'react'
import { BoardsContext } from "context"
import { TierTitle, ErrorBoundary, Settings, ColumnBoard } from "components/index"
import { useBoxShadow } from "hooks/index"
import { useSelector } from "react-redux"
import { v4 } from "uuid"

export const TiersBoard = () => {
    const { boards, currentItem, removeItemFromBoard, setBoardsHandler } = useContext(BoardsContext)
    const { dragOverHandler } = useBoxShadow()
    const { cachedBoardId, tierLists } = useSelector(state => state.images)

    const dropCardHandler = (e, board) => {
        if (!e.target.classList.value.includes('item')) {
            board?.items?.push(currentItem);
            removeItemFromBoard()
            setBoardsHandler(board)
        }
        e.target.style.boxShadow = "none"
    };

    const templateNames = () => {
        const name = tierLists.find((item) => item._id === cachedBoardId)?.templateName ?? "unknown"
        return [name, name];
    }

    const preventDropZone = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <RowsContainer>
            <TempalateName>
                {templateNames().map((tempName) => <span key={v4()}>{tempName}</span>)}
            </TempalateName>
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
                        <TitleWrapper onDragOver={preventDropZone} onDrop={preventDropZone}>
                            <TierTitle  {...{ bgColor, value, defultImageBoard }} />
                        </TitleWrapper>
                        <ColumnBoard {...{ diff, items, board }} />
                        {defultImageBoard && <Settings {...{ board }} />}
                    </ColumnContainer>
                })}
            </ErrorBoundary>
        </RowsContainer>
    )
}

const TitleWrapper = styled.div`

`
const TempalateName = styled.div`
   width: 100%;
   text-align: left;
   display: flex;
   flex-direction: column;
   gap:1rem;
   margin-bottom: 2rem;
   color:white;
   text-transform: capitalize;

   span:first-child{
        font-size: 2rem;
   }

`

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
    position: relative;
    margin-top: 2.5rem;
    gap: 0.12rem;
`
