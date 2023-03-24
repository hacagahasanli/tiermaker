import React from 'react'
import styled from 'styled-components';
import { Header } from 'components/index';
import { TiersBoard, Buttons } from 'shared/index';
import { useSelector } from 'react-redux';
import { SettingModal } from 'components/Modal';
import { LocaleStorage } from 'components/index';
import { withScrollToTop } from 'components/ScrollToTop';

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
export const TierBoardWithScrollToTop = withScrollToTop(TierBoard);