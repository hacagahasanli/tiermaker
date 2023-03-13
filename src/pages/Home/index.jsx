import React, { useContext } from 'react'
import styled from 'styled-components';
import { tiersCategories, cardTiers } from 'constants/index';
import { BoardsContext } from 'context/index';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { setBoards, boards } = useContext(BoardsContext)
    const navigate = useNavigate()

    const tierBoardNavigator = (id) => {
        const items = [...tiersCategories[id].items];
        setBoards(boards?.map((item) => {
            if (item.id === 8) return { ...item, items: [...items] }
            return item
        }))
        navigate('/tierboard')
    }

    return (
        <Wrapper>
            <h2>Select the board</h2>
            <CardWrapper>
                {
                    cardTiers?.map(({ id, thumbnail, name }) => {
                        return <CardContainer key={id} onClick={() => tierBoardNavigator(id)}>
                            <img src={thumbnail} alt="tiers_image" />
                            <span>{name}</span>
                        </CardContainer>
                    })
                }
            </CardWrapper>
        </Wrapper>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #6c6c6c;
    max-width: 300px;
    color: white;
    text-align: center;
    cursor: pointer;
    transition:opacity 0.6s;
    border-radius: 5px;

    :hover{
        opacity: 0.7;
    }

    img{
        max-width: 100%;
        padding: 1rem 0;
        border-radius: 1rem;
    }
    
    span{
        padding: 1rem;
        font-size: 1rem;
    }
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 100%;
    gap:2rem;
`

const Wrapper = styled.div`
    position: relative;
    max-width: 1180px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap:4rem;

    h2{
        color: #ffffff;
        font-size: 2rem;
        margin-top: 1rem;
    }
`
export default Home;