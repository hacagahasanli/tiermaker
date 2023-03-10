import React, { useState } from 'react'
import styled from 'styled-components';
import { buttonValues, colorSets } from 'constants/index';
import { Header, MainButton, Button } from 'components/index';

const Home = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            bgColor: colorSets.S,
            value: 'S',
            items: []
        },
        {
            id: 2,
            bgColor: colorSets.A,
            value: "A",
            items: []
        },
        {
            id: 3,
            bgColor: colorSets.B,
            value: "B",
            items: []
        },
        {
            id: 4,
            bgColor: colorSets.C,
            value: "C",
            items: []
        },
        {
            id: 5,
            bgColor: colorSets.D,
            value: "D",
            items: []
        },
        {
            id: 6,
            bgColor: colorSets.F,
            value: "F",
            items: []
        },
        {
            id: 7,
            bgColor: colorSets.G,
            value: "G",
            items: []
        },
        {
            id: 8,
            items: [
                {
                    id: 1,
                    uri: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 2,
                    uri: "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 3,
                    uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 4,
                    uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 5,
                    uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 6,
                    uri: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 7,
                    uri: "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 8,
                    uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                    id: 9,
                    uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
            ]
        }
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const dragOverHandler = (e, item, board) => {
        e.preventDefault();
        if (e.target.classList.value.includes('item')) {

        }
    };
    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = "none";
    };
    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    };
    const dragEndHandler = (e) => {
        e.target.style.boxShadow = "none";
    };
    const dropHandler = (e, board, item) => {
        e.preventDefault();
        console.log("CARD")

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex, 0, currentItem);
        setBoards(
            boards.map((b) => {
                if (b.id === board.id) {
                    return board;
                }
                if (b.id === currentBoard.id) {
                    return currentBoard;
                }
                return b;
            })
        );
        e.target.style.boxShadow = "none";
    };

    const dropCardHandler = (e, board) => {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        setBoards(
            boards.map((b) => {
                if (b.id === board.id) {
                    return board;
                }
                if (b.id === currentBoard.id) {
                    return currentBoard;
                }
                return b;
            })
        );
        e.target.style.boxShadow = "none";
    };

    return (
        <Container>
            <Header />
            <RowsContainer>
                {boards.map((board) => (
                    <ColumnContainer
                        key={board.id}
                        onDragOver={e => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}
                    >
                        <InputWrapper tabIndex={1} bgColor={board.bgColor}>
                            <Title contentEditable={true}>
                                <span>{board.value}</span>
                            </Title>
                        </InputWrapper>
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
                                    // onDrop={(e) => dropHandler(e, board, item)}
                                    draggable={true}
                                />
                            ))}
                        </ImageWrapper>
                    </ColumnContainer>
                ))}
            </RowsContainer>
            <DraggableImagesContainer>
                <DragImage>

                </DragImage>
            </DraggableImagesContainer>
            <ButtonsContainer>
                <MainButton value={buttonValues.SOD} />
                <div>
                    <Button value={buttonValues.NORMAL_VIEW} />
                    <Button value={buttonValues.RESET} />
                    <Button value={buttonValues.C_B_COLOR} />
                </div>
            </ButtonsContainer>
        </Container>
    )
}

const DragImage = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding: 0 2rem 2rem 2rem;
`

const DraggableImagesContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
`
const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
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
    background: #1a1a17;
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
const ButtonsContainer = styled.div`
    width: 980px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3rem 0;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap:.3rem;
        margin-top: 2rem;
    }
`
const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
const RowsContainer = styled.div`
    max-width: 1120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

export default Home;