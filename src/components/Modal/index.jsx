import { Palatte } from "components/Palattes"
import { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setModalVisible } from "store/slices/images-slice"
import styled, { keyframes } from "styled-components"

export const SettingModal = () => {
    const [active, setActive] = useState()

    const { modalVisibility } = useSelector(state => state.images)
    const dispatch = useDispatch();



    const handleClose = (e) => {
        if (e.target.id === "container") dispatch(setModalVisible(false))
    }
    return (
        <>
            <ModalContainer id="container" show={modalVisibility} onClick={(e) => handleClose(e)}>
                <Modal onClick={handleClose}>
                    <PalatteContainer>
                        <span>Choose a Label Background Color:</span>
                        <div>
                            <Palatte func={setActive} active={active} isBlack={"#000000"} />
                        </div>
                    </PalatteContainer>
                </Modal>
            </ModalContainer>
        </>
    )
}

const PalatteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1.2rem;

    span:first-child{
        font-size: 1.3rem;
        font-weight: 700;
    }

    div{
        display: flex;
        gap:0.5rem;
    }

`

const Modal = styled.div`
    position: fixed;
    margin: 0 auto;
    min-height: 350px;
    max-height: 700px;
    left: 50%;
    transform: translateX(-50%);
    width: 770px;
    background: #ffffff;
    color: #333333;
    padding: 2rem;
`

const ModalContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    z-index: 1;
    background-color: #000000c8;
    position: absolute;
    transition: all .4s;
    left: 0;
    top: 0;
    opacity: ${({ show }) => show ? "1" : "0"};
    visibility: ${({ show }) => show ? "visible" : "hidden"};
    
`