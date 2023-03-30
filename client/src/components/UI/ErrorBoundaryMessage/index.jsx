import styled from "styled-components"

export const ErrorBoundaryMessage = () => (
    <ErrorMessage>
        <h3>Something went wrong.</h3>
        <span>Please reload the page and try to do it again!</span>
    </ErrorMessage>
)

const ErrorMessage = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;
    color: #ffffff;
    letter-spacing: 1.5px;
    color: '#ffffff' 
`