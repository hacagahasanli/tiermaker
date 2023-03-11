import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { Header } from 'components/index';
import { TiersBoard, Buttons } from 'shared/index';
import { useSelector } from 'react-redux';
import { BoardProvider } from 'context';


const Home = () => {
    const { theme } = useSelector(state => state.images)

    return (
        <ThemeProvider theme={theme}>
            <BoardProvider>
                <Container>
                    <Header />
                    <TiersBoard />
                    <Buttons />
                </Container>
            </BoardProvider>
        </ThemeProvider>
    )
}


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export default Home;