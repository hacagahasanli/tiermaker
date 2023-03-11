import { Palatte } from "components/Palattes"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setModalVisible } from "store/slices/images-slice"
import styled from "styled-components"

export const SettingModal = () => {
    const { modalVisibility } = useSelector(state => state.images)
    const dispatch = useDispatch();

    const handleClose = () => dispatch(setModalVisible(false))

    return (
        <ModalContainer show={modalVisibility} onClick={handleClose}>
            <Modal onClick={handleClose}>
                <div>
                    <span>Choose a Label Background Color:</span>
                    {/* <Palatte func={}/> */}
                </div>
            </Modal>
        </ModalContainer>
    )
}

const Modal = styled.div`
    position: fixed;
    margin: 0 auto;
    min-height: 350px;
    max-height: 700px;
    width: 770px;
    background: #ffffff;
    color: #333333;
`

const ModalContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    z-index: 10;
    background-color: #000000c8;
    position: absolute;
    left: 0;
    top: 0;
    display: ${({ show }) => show ? "block" : "none"};
`