import { Button, MainButton } from "components/index";
import { buttonValues, defaultBoards } from "constants/index";
import { memo, useState } from "react";
import styled from "styled-components"

export const Buttons = memo(({ setBoards }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

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
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    };

    const resetBoardsHandler = () => setBoards(defaultBoards)

    return (
        <ButtonsContainer>
            <MainButton value={buttonValues.SOD} func={saveScreenshot} />
            <div>
                <Button func={handleFullScreenClick} value={isFullScreen ? buttonValues.NORMAL_VIEW : buttonValues.FULL_SCREEN} />
                <Button func={resetBoardsHandler} value={buttonValues.RESET} />
                <Button value={buttonValues.C_B_COLOR} />
            </div>
        </ButtonsContainer>
    )

})

const ButtonsContainer = styled.div`
    width: 980px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3rem 0;

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