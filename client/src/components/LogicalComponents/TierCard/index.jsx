import { defaultBoards } from "constants/index"
import { BoardsContext } from "context/index"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCachedBoardId } from "store/slices/images"
import styled, { css } from "styled-components"
import { v4 } from "uuid"

export const TierCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { setBoards } = useContext(BoardsContext)
    const { tierLists } = useSelector(state => state.images)

    const tierBoardNavigator = (tierlistImages, id) => {
        const cachedId = localStorage.getItem("cachedId")
        console.log(tierlistImages, "TIER LIST IMAGES");

        if (JSON.parse(cachedId) === id) {
            const boards = localStorage.getItem('boards')
            setBoards(JSON.parse(boards)?.map(item => item))
        } else {
            setBoards(defaultBoards?.map((item) => {
                if (item.id === 8) return { ...item, items: [...tierlistImages] }
                return { ...item, items: [] }
            }))
        }
        dispatch(setCachedBoardId(id))
        navigate('/tierboard')
    }


    return <CardWrapper>
        <CardContainer onClick={() => navigate('/make-a-template')}>
            <Opacity />
            <CardText template>
                <span>{"Create New Template"}</span>
            </CardText>
        </CardContainer>
        {tierLists?.map(({ _id, coverPhoto, templateName, tierlistImages }) =>
            <CardContainer key={`${_id}${v4()}`} onClick={() => tierBoardNavigator(tierlistImages, _id)} >
                <Opacity />
                <Image img={coverPhoto} lazy="loading" />
                <CardText>
                    <span>{templateName}</span>
                </CardText>
            </CardContainer>
        )}
    </CardWrapper>
}

const CardWrapper = styled.article`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 230px));
    place-items: center;
    width: 100%;
    gap:0.4rem;
    margin-bottom: 2rem;
`
const Image = styled.img`
    background-image: url(${({ img }) => img});
    background-position: top;
    background-repeat: no-repeat;
    background-size:cover;
    overflow: hidden;
    width: 101%;
    min-height:100%;
    border-radius: .2rem;
`
const Opacity = styled.div`
    width: 100%;
    min-height: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 10;
    opacity: 0;
    transition: all .25s ease-in-out;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 200px;
    text-align: center;
    margin-bottom:${({ cardDivider }) => cardDivider && "7rem"} ;
    cursor: pointer;
    overflow: hidden;
    border-radius: 4px;
    transition: all .5s ease-in-out;
    border: 1px solid #fffffe32;    

    :hover ${Opacity}{
        opacity: .25;
    }

`
const CardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 30px;
    position: absolute;
    ${({ template }) => template
    ? css` top:2.5rem;`
    : css` bottom:0;`
    }
    left: 0;
    color: white;
    background-color: #000000;
    font-size: 1.05rem;
    padding:5px 0;
    line-height:25px;
`

