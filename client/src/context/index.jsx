import React, { createContext, useEffect, useState } from 'react'
import { defaultBoards } from 'constants/index';

export const BoardsContext = createContext()

export const BoardProvider = ({ children }) => {
    const storageBoards = localStorage.getItem('boards');

    const [boards, setBoards] = useState(JSON.parse(storageBoards) ?? []);
    const [show, setShow] = useState(false)
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const resetBoards = () => setBoards(defaultBoards);

    const removeItemFromBoard = () => {
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
    }

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

    useEffect(() => {
        const urlChangeHandler = () => {
            localStorage.setItem('boards', JSON.stringify(boards))
        }
        window.addEventListener('popstate', urlChangeHandler);
        return () => {
            window.removeEventListener('popstate', urlChangeHandler);
        };
    }, [window.location.href, boards])

    return <BoardsContext.Provider
        value={{
            boards,
            setBoards,
            resetBoards,
            setShow,
            show,
            currentBoard,
            setCurrentBoard,
            currentItem,
            setCurrentItem,
            removeItemFromBoard,
            setBoardsHandler,
        }}>
        {children}
    </BoardsContext.Provider>
}