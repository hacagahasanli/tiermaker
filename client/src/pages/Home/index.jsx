import React, { useContext } from 'react'
import styled from 'styled-components';
import { tiersCategories, cardTiers, defaultBoards } from 'constants/index';
import { BoardsContext } from 'context/index';
import { useNavigate } from 'react-router-dom';
import { withScrollToTop } from 'components/ScrollToTop';
import { Header, ErrorBoundary } from 'components/index';
import { Wrapper } from 'components/UI/styled-component';

const Home = () => {
    const { setBoards } = useContext(BoardsContext)
    const navigate = useNavigate()

    const tierBoardNavigator = (id) => {
        const items = [...tiersCategories[id].items];
        setBoards(defaultBoards?.map((item) => {
            if (item.id === 8) return { ...item, items: [...items] }
            return item
        }))
        navigate('/tierboard')
    }

    return (
        <Wrapper>
            <Header />
            <ErrorBoundary>
                <CardWrapper>
                    {cardTiers?.map(({ id, thumbnail, name }) => {
                        return <CardContainer key={id} onClick={() => tierBoardNavigator(id)}>
                            <img src={thumbnail} alt="tiers_image" />
                            <span>{name}</span>
                        </CardContainer>
                    })}
                </CardWrapper>
            </ErrorBoundary>
        </Wrapper>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #6c6c6c;
    max-width: 450px;
    min-height: 400px;
    max-height: 420px;
    color: white;
    text-align: center;
    cursor: pointer;
    transition:opacity 0.6s;
    border-radius: 5px;
    padding: 2rem 0;

    :hover{
        opacity: 0.7;
    }

    img{
        max-width: 90%;
        border-radius: 1rem;
        object-fit: contain;
    }
    
    span{
        font-size: 1.2rem;
    }
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    place-items: center;
    width: 100%;
    gap:2rem;
    margin-bottom: 2rem;
`
export const HomeWithScrollToTop = withScrollToTop(Home);