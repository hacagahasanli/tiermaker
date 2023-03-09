import React from 'react'
import { Header, MainButton, Button } from 'components/index';
import { DragPlace, TierColumn } from 'shared/index';
import styled from 'styled-components';
import { buttonValues } from 'constants/index';

const Home = () => {
    return (
        <Container>
            <Header />
            <RowsContainer>
                <TierColumn />
                <TierColumn />
                <TierColumn />
                <TierColumn />
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
    margin-top: 3rem;

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