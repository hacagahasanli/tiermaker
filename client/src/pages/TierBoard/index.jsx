import React from 'react'
import styled from 'styled-components';
import { TiersBoard, Buttons } from 'shared/index';
import { LocaleStorage, Header, SettingModal } from 'components/index';

const TierBoard = () => {
    return (
        <LocaleStorage>
            <Wrapper id="tier_board">
                <Header />
                <TiersBoard />
                <Buttons />
                <SettingModal />
            </Wrapper>
        </LocaleStorage>
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