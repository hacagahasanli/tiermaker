import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { Header } from 'components/index';
import { TiersBoard, Buttons } from 'shared/index';
import { useSelector } from 'react-redux';

const Home = () => {
    const [boards, setBoards] = useState([]);
    const { theme } = useSelector(state => state.images)

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
                <TiersBoard {...{ setBoards, boards }} />
                <Buttons {...{ setBoards }} />
            </Container>
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