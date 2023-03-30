import { loading_img } from "assets/index"
import styled from "styled-components"

const messagePortal = {
    auth: "Your authentication credentials....",
    tierLists: "Tierlists templates...."
}

export const LoadingMessage = ({ port }) => (
    <Message>
        <h3>{messagePortal[port] ?? "Waitin..."}</h3>
        <img src={loading_img} alt="loading_img" />
    </Message>
)

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