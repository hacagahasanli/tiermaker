import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { tiersCategories, cardTiers, defaultBoards } from 'constants/index';
import { BoardsContext } from 'context/index';
import { useNavigate } from 'react-router-dom';
import { Header, ErrorBoundary } from 'components/index';
import { Wrapper } from 'components/UI/styled-component';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from 'hooks/useAxiosPrivate'
import { getTierLists } from 'store/slices/images-slice';

const Home = () => {
    const privateAxios = useAxiosPrivate()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { setBoards } = useContext(BoardsContext)
    const { auth, tierLists, tierListsCount } = useSelector(state => ({
        tierLists: state.images.tierLists,
        tierListsCount: state.images.tierListsCount,
        auth: state.sign.auth
    }))

    const tierBoardNavigator = (tierlistImages) => {
        setBoards(defaultBoards?.map((item) => {
            if (item.id === 8) return { ...item, items: [...tierlistImages] }
            return item
        }))
        navigate('/tierboard')
    }

    useEffect(() => {
        dispatch(getTierLists(privateAxios))
    }, [auth])

    return (
        <Wrapper>
            <ErrorBoundary>
                {Object.values(auth).length !== 0 &&
                    <><Header />
                    <CardWrapper>
                        {tierLists?.map(({ _id, coverPhoto, templateName, tierlistImages }) => {
                            return <CardContainer key={_id}>
                                <img src={coverPhoto} alt="tiers_image" onClick={() => tierBoardNavigator(tierlistImages)} />
                                <span>{templateName}</span>
                            </CardContainer>
                        })}
                    </CardWrapper>
                    <h1 style={{ color: "white" }}>{tierListsCount}</h1>
                    </>}
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
        border-radius: .2rem;
        object-fit: contain;
    }
    
    span{
        font-size: 1.2rem;
    }
`
const CardWrapper = styled.article`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    place-items: center;
    width: 100%;
    gap:2rem;
    margin-bottom: 2rem;
`
export default Home;