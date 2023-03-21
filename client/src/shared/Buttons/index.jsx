import { Button, MainButton, Palattes } from "components/index";
import { buttonValues } from "constants/index";
import { BoardsContext } from "context";
import html2canvas from "html2canvas";
import { memo, useContext, useState } from "react";
import styled from "styled-components"

export const Buttons = memo(() => {
    const { resetBoards } = useContext(BoardsContext)
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showPalatte, setShowPalatte] = useState(false)

    const SCREEN_TEXT = isFullScreen ? buttonValues.NORMAL_VIEW : buttonValues.FULL_SCREEN;
    const BACKROUND_COLOR_TEXT = showPalatte ? buttonValues.C_B_COLOR_PICKER : buttonValues.C_B_COLOR;

    const saveScreenshot = () => {
        html2canvas(document.body).then(canvas => {
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'tier_maker.png';
                link.click();
                URL.revokeObjectURL(url);
            });
        });
    }

    const handleFullScreenClick = () => {
        !isFullScreen ? document.documentElement.requestFullscreen()
            : document.exitFullscreen();
        setIsFullScreen(!isFullScreen);
    };

    const buttons = [
        {
            id: 'screen_text',
            func: handleFullScreenClick,
            value: SCREEN_TEXT
        },
        {
            id: 'reset',
            func: () => resetBoards(),
            value: buttonValues.RESET
        },
        {
            id: 'bg_color_text',
            func: () => setShowPalatte(!showPalatte),
            value: BACKROUND_COLOR_TEXT
        },
    ]

    return (
        <>
            <ButtonsContainer>
                <MainButton value={buttonValues.SOD} func={saveScreenshot} />
                <div>
                    {buttons?.map(({ value, func, id }) => <Button key={id} {...{ value, func }} />)}
                </div>
            </ButtonsContainer>
            <Palattes {...{ showPalatte }} />
        </>
    )

})

const ButtonsContainer = styled.div`
    max-width: 980px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top:3rem;
    margin-bottom:1.5rem;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap:.3rem;
        margin-top: 2rem;
    }
`