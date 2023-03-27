import { defaultBoards } from "constants/index"
import { BoardsContext } from "context/index"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCachedBoardId } from "store/slices/images-slice"
import styled from "styled-components"

export const TierCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setBoards } = useContext(BoardsContext)
    const { tierLists } = useSelector(state => state.images)

    const tierBoardNavigator = (tierlistImages, id) => {
        const cachedId = localStorage.getItem("cachedId")

        if (JSON.parse(cachedId) === id) {
            const boards = localStorage.getItem('boards')
            setBoards(JSON.parse(boards)?.map(item => item))
        } else {
            dispatch(setCachedBoardId(id))
            setBoards(defaultBoards?.map((item) => {
                if (item.id === 8) return { ...item, items: [...tierlistImages] }
                return { ...item, items: [] }
            }))
        }
        navigate('/tierboard')
    }


    return <CardWrapper>
        {tierLists?.map(({ _id, coverPhoto, templateName, tierlistImages }) =>
            <CardContainer key={_id}>
                <img src={coverPhoto} alt="tiers_image" onClick={() => tierBoardNavigator(tierlistImages, _id)} />
                <span>{templateName}</span>
            </CardContainer>
        )}
    </CardWrapper>
}

const CardWrapper = styled.article`
    display: grid;
    grid-template-columns:repeat(3,1fr);
    place-items: center;
    width: 100%;
    gap:2rem;
    margin-bottom: 2rem;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #6c6c6c;
    min-width: 350px;
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