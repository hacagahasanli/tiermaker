import { defaultBoards } from "constants/index"
import { BoardsContext } from "context/index"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCachedBoardId } from "store/slices/images"
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
                <Image src={coverPhoto} alt="tiers_image" onClick={() => tierBoardNavigator(tierlistImages, _id)} />
                <span>{templateName}</span>
            </CardContainer>
        )}
    </CardWrapper>
}

const CardWrapper = styled.article`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    width: 100%;
    gap:2rem;
    margin-bottom: 2rem;
`

const Image = styled.img`
    max-width: 100%;
    min-height: 100%;
    min-height: 200px;
    object-fit: cover;
    border-radius: .2rem;
    object-fit: contain;
    transition: transform .3s ease-in;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #6c6c6c;
    width: 100%;
    min-height: 300px;
    max-height: 420px;
    color: white;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 5px;
    padding: 1.2rem;
    transition: all .8s;

    :hover ${Image}{
        transform: scale(1.1);
    }

    :hover{
        border: 1px solid #ffffff;
    }

    span{
        font-size: 1.2rem;
    }
`

