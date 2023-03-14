import styled from "styled-components"
import React, { useContext, useState } from 'react'
import { BoardsContext } from "context"
import { arrow_svg, settings_svg } from "assets/index"
import { useDispatch } from "react-redux"
import { setModalVisible, setColumnDetail } from "store/slices/images-slice"
import { ErrorBoundary } from "components/ErrorBoundary"

export const TiersBoard = () => {
    const { boards, setBoards } = useContext(BoardsContext)
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const dispatch = useDispatch()

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

    const arrowHandler = (limit = 0, swapPlace, board) => {
        let boardIndex = boards.indexOf(board);
        if (boardIndex !== limit) {
            [boards[boardIndex], boards[boardIndex + swapPlace]] = [boards[boardIndex + swapPlace], boards[boardIndex]]
            setBoards(boards.map((item) => item))
        }
    }

    const pullDownHandler = (board) => arrowHandler(boards?.length - 2, 1, board)

    const pushUpHandler = (board) => arrowHandler(0, -1, board);

    const modalHandler = (board) => {
        dispatch(setColumnDetail(board))
        dispatch(setModalVisible(true))
    }

    return (
        <RowsContainer>
            <ErrorBoundary>
                {boards?.map((board) => {
                    const defultImageBoard = board.id !== 8;
                    return <ColumnContainer
                        diff={board?.diff}
                        key={board?.id}
                        onDragOver={e => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}
                    >
                        {defultImageBoard && <InputWrapper tabIndex={1} bgColor={board.bgColor}>
                            <Title contentEditable={true} suppressContentEditableWarning>
                                <span>{board.value}</span>
                            </Title>
                        </InputWrapper>
                        }
                        <ImageWrapper diff={board.diff}>
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
                        {defultImageBoard && <SettingsWrapper>
                            <Setting>
                                <img src={settings_svg} alt="settings_svg" onClick={() => modalHandler(board)} />
                            </Setting>
                            <Arrows>
                                <img src={arrow_svg} alt="arrow_svg_up" onClick={() => pushUpHandler(board)} />
                                <img src={arrow_svg} alt="arrow_svg_down" onClick={() => pullDownHandler(board)} />
                            </Arrows>
                        </SettingsWrapper>}
                    </ColumnContainer>
                })}
            </ErrorBoundary>
        </RowsContainer>
    )
}

const SettingsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    min-height: 100%;
    width: 100%;
    cursor: pointer;
`
const Setting = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  img{
        width: 30px;
        height: 30px;
        transition: all .4s;
        :hover{
            opacity: 0.5;
        }
    }
`
const Arrows = styled.div`
    display: flex;
    max-height: 80%;
    flex-direction: column;
    justify-content: space-between;

    img:nth-child(2){
        transform: rotate(180deg);
    }

    img{
        width: 30px;
        height: 30px;
        transition: all .4s;
        :hover{
            opacity: 0.5;
        }
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
    z-index: 2;

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
