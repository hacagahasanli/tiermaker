import React, { useEffect } from 'react'
import { Header, ErrorBoundary, TierCard, LoadMore } from 'components/index';
import { Wrapper } from 'components/UI/styled-component';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from 'hooks/useAxiosPrivate'
import { getTierLists } from 'store/slices/images';

const Home = () => {
    const privateAxios = useAxiosPrivate()
    const dispatch = useDispatch()

    const { isLoading, tierLists } = useSelector(state => ({
        isLoading: state.loading.isLoading,
        tierLists: state.images.tierLists,
    }))

    useEffect(() => {
        tierLists?.length === 0 && dispatch(getTierLists(privateAxios))
    }, [])

    const currentItem = isLoading
        ? <h2 style={{ color: "white" }}>Tierlists cominn...</h2>
        : <>
            <TierCard />
            <LoadMore />
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