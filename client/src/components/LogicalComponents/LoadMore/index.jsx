import styled from "styled-components";

export const LoadMore = () => {
    const getMoreTierLists = () => {

    }
    return <StyledLoadmore onClick={() => getMoreTierLists()}>Load More</StyledLoadmore>
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
