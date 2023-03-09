import React from 'react'
import { Header } from 'components/index';
import { TierColumn } from 'shared/index';
import styled from 'styled-components';

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
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1180px;
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