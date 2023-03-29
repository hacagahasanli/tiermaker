import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export const LoadMore = () => {
    const dispatch = useDispatch()
    const { tierListsCount, tierLists } = useSelector(state => state.images)
    const text = tierListsCount === tierLists.length ? "No more tierlists" : "Load More"

    const getMoreTierLists = () => {

    }
    return <StyledLoadmore onClick={() => getMoreTierLists()}>{text}</StyledLoadmore>
}

const StyledLoadmore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    margin-bottom: 8rem;
    position: relative;
    color: black;
    font-weight: 600;
    padding: .9rem 2rem;
    font-size: 1.3rem;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    transition: all .3s;

    :hover{
        opacity: 0.8;
    }
`
