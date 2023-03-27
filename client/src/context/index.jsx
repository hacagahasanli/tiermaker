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
    // const defaultValue = [
    //     {
    //         id: 1,
    //         bgColor: colorSets.S,
    //         value: 'S',
    //         items: []
    //     },
    //     {
    //         id: 2,
    //         bgColor: colorSets.A,
    //         value: "A",
    //         items: []
    //     },
    //     {
    //         id: 3,
    //         bgColor: colorSets.B,
    //         value: "B",
    //         items: []
    //     },
    //     {
    //         id: 4,
    //         bgColor: colorSets.C,
    //         value: "C",
    //         items: []
    //     },
    //     {
    //         id: 5,
    //         bgColor: colorSets.D,
    //         value: "D",
    //         items: []
    //     },
    //     {
    //         id: 6,
    //         bgColor: colorSets.F,
    //         value: "F",
    //         items: []
    //     },
    //     {
    //         id: 7,
    //         bgColor: colorSets.G,
    //         value: "G",
    //         items: []
    //     },
    //     {
    //         id: 8,
    //         diff: true,
    //         items: [
    //             {
    //                 id: 1,
    //                 uri: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600"
    //             },
    //             {
    //                 id: 2,
    //                 uri: "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             },
    //             {
    //                 id: 3,
    //                 uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             },
    //             {
    //                 id: 4,
    //                 uri: "https://images.pexels.com/photos/15641525/pexels-photo-15641525.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //             {
    //                 id: 5,
    //                 uri: "https://images.pexels.com/photos/13010778/pexels-photo-13010778.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //             {
    //                 id: 6,
    //                 uri: "https://images.pexels.com/photos/15694781/pexels-photo-15694781.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //             {
    //                 id: 7,
    //                 uri: "https://images.pexels.com/photos/9374423/pexels-photo-9374423.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //             {
    //                 id: 8,
    //                 uri: "https://images.pexels.com/photos/9821392/pexels-photo-9821392.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //             {
    //                 id: 9,
    //                 uri: "https://images.pexels.com/photos/6341527/pexels-photo-6341527.jpeg?auto=compress&cs=tinysrgb&w=1600"
    //             },
    //         ]
    //     }
    // ]