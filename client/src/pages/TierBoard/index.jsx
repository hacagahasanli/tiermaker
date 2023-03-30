import React from 'react'
import styled from 'styled-components';
import { TiersBoard, Buttons } from 'shared/index';
import { LocaleStorage, Header, SettingModal, AnimatedPage } from 'components/index';

const TierBoard = () => {
    return (
        <AnimatedPage>
            <LocaleStorage>
                <Wrapper id="tier_board">
                    <Header />
                    <TiersBoard />
                    <Buttons />
                    <SettingModal />
                </Wrapper>
            </LocaleStorage>
        </AnimatedPage>
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