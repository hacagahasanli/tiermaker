import React from 'react'
import styled from 'styled-components';
import { Header } from 'components/index';
import { TiersBoard, Buttons } from 'shared/index';
import { useSelector } from 'react-redux';
import { SettingModal } from 'components/Modal';

const TierBoard = () => {
    const { modalVisibility } = useSelector(state => state.images)

    return (
        <Wrapper {...{ modalVisibility }}>
            <Header />
            <TiersBoard />
            <Buttons />
            <SettingModal />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export default TierBoard;