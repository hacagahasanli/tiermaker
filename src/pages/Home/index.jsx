import React, { useState } from 'react'
import styled from 'styled-components';
import { Header } from 'components/index';
import { TiersBoard, Buttons } from 'shared/index';


const Home = () => {
    const [boards, setBoards] = useState([]);

    return (
        <Container>
            <Header />
            <TiersBoard {...{ setBoards, boards }} />
            <Buttons {...{ setBoards }} />
        </Container>
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