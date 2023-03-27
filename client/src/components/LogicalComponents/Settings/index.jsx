import { arrow_svg, settings_svg } from "assets/index"
import { BoardsContext } from "context/index"
import { memo, useContext } from "react"
import { useDispatch } from "react-redux"
import { setColumnDetail, setModalVisible } from "store/slices/images-slice"
import styled from "styled-components"

export const Settings = memo(({ board }) => {
    const { boards, setBoards } = useContext(BoardsContext)
    const dispatch = useDispatch()

    const arrowHandler = (limit = 0, swapPlace, Cboard) => {
        let boardIndex = boards.indexOf(Cboard);
        if (boardIndex !== limit) {
            [boards[boardIndex], boards[boardIndex + swapPlace]] = [boards[boardIndex + swapPlace], boards[boardIndex]]
            setBoards(boards.map((item) => item))
        }
    }

    const pullDownHandler = (board) => arrowHandler(boards?.length - 2, 1, board)

    const pushUpHandler = (board) => {
        arrowHandler(0, -1, board);
    }

    const modalHandler = (board) => {
        dispatch(setColumnDetail(board))
        dispatch(setModalVisible(true))
    }

    return <SettingsWrapper>
        <Setting>
            <img src={settings_svg} alt="settings_svg" onClick={() => modalHandler(board)} />
        </Setting>
        <Arrows>
            <img src={arrow_svg} alt="arrow_svg_up" onClick={() => pushUpHandler(board)} />
            <img src={arrow_svg} alt="arrow_svg_down" onClick={() => pullDownHandler(board)} />
        </Arrows>
    </SettingsWrapper>
})

const SettingsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    min-height: 100%;
    width: 100%;
    cursor: pointer;
`
const Setting = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  img{
        width: 30px;
        height: 30px;
        transition: all .4s;
        :hover{
            opacity: 0.5;
        }
    }
`
const Arrows = styled.div`
    display: flex;
    max-height: 80%;
    flex-direction: column;
    justify-content: space-between;

    img:nth-child(2){
        transform: rotate(180deg);
    }

    img{
        width: 30px;
        height: 30px;
        transition: all .4s;
        :hover{
            opacity: 0.5;
        }
    }
`