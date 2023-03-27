import React, { useEffect } from 'react'
import { Header, ErrorBoundary, TierCard } from 'components/index';
import { Wrapper } from 'components/UI/styled-component';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from 'hooks/useAxiosPrivate'
import { getTierLists } from 'store/slices/images-slice';

const Home = () => {
    const privateAxios = useAxiosPrivate()
    const dispatch = useDispatch()

    const { auth, tierListsCount, isLoading } = useSelector(state => ({
        tierListsCount: state.images.tierListsCount,
        auth: state.sign.auth,
        isLoading: state.loading.isLoading
    }))

    useEffect(() => {
        dispatch(getTierLists(privateAxios))
    }, [auth])

    const currentItem = isLoading
        ? <h2 style={{ color: "white " }}>Tierlists cominn...</h2>
        : <>
            <TierCard />
            <h1 style={{ color: "white" }}>{tierListsCount}</h1>
        </>

    return (
        <Wrapper>
            <ErrorBoundary>
                <Header />
                {currentItem}
            </ErrorBoundary>
        </Wrapper>
    )
}



export default Home;