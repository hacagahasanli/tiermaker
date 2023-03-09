import React, { useState } from 'react'
import { Header, MainButton, Button } from 'components/index';
import { DragPlace, TierColumn } from 'shared/index';
import styled from 'styled-components';
import { buttonValues, imagesS } from 'constants/index';
import { useDrop } from 'react-dnd';

const Home = () => {
    const [images, setImages] = useState([])

    const [{ isOverT }, drop] = useDrop(() => ({
        accept: "image",
        drop: ({ id }) => addImageToSet(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }), [])

    const [{ }, dropQ] = useDrop(() => ({
        accept: "image",
        drop: ({ id }) => addImageToSet(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }), [])

    const [{ }, dropT] = useDrop(() => ({
        accept: "image",
        drop: ({ id }) => addImageToSet(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }), [])


    const [{ }, dropS] = useDrop(() => ({
        accept: "image",
        drop: ({ id }) => addImageToSet(id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }), [])

    const addImageToSet = (id) => {
        const addedImage = imagesS?.find((image) => image?.id === id)
        setImages((prev) => [...prev, addedImage])
    }

    return (
        <Container>
            <Header />
            <RowsContainer>
                <TierColumn {...{ images }} ref={drop} />
                <TierColumn ref={dropQ} />
                <TierColumn ref={dropT} />
                <TierColumn ref={dropS} />
                <TierColumn />
                <TierColumn />
            </RowsContainer>
            <DragPlace />
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
    gap:0.2rem;
    margin-top: 1rem;
`

export default Home;