import React, { useEffect } from 'react'
import { Header, ErrorBoundary, TierCard } from 'components/index';
import { Wrapper } from 'components/UI/styled-component';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from 'hooks/useAxiosPrivate'
import { getTierLists } from 'store/slices/images-slice';

const Home = () => {
    const privateAxios = useAxiosPrivate()
    const dispatch = useDispatch()

    const { auth, tierListsCount } = useSelector(state => ({
        tierListsCount: state.images.tierListsCount,
        auth: state.sign.auth
    }))

    const isValidAuth = Object.values(auth).length !== 0

    useEffect(() => {
        dispatch(getTierLists(privateAxios))
    }, [auth])

    return (
        <Wrapper>
            <ErrorBoundary>
                {isValidAuth && <>
                    <Header />
                    <TierCard />
                    <h1 style={{ color: "white" }}>{tierListsCount}</h1>
                </>}
            </ErrorBoundary>
        </Wrapper>
    )
}



export default Home;