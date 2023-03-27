import { loading_img } from "assets/index"
import styled from "styled-components"

const messagePortal = {
    auth: "Waiting for Credentials....",
}

export const LoadingMessage = ({ port }) => {
    return <Message>
        <h3>{"Waiting for Credentials...."}</h3>
        <img src={loading_img} loading="lazy" alt="loading_img" />
    </Message>
}

console.log("");
const Message = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;
    color: #ffffff;
    letter-spacing: 1.5px;

    img{
        max-width: 150px;
        min-height: 150px;
    }
` 