import styled from "styled-components"

export const Footer = () => {
    return <StyledFooter>
        <Information>
            <span style={{ lineHeight: "1rem" }}>We recommend reviewing the app’s terms and privacy policy to understand how it will use data from your Twitter account. You can revoke access to any app at any time from the Apps and sessions section of your Twitter account settings.</span>
            <span style={{ fontSize: ".6rem", letterSpacing: "1.2px" }}>By authorizing an app you continue to operate under Twitter’s Terms of Service. In particular, some usage information will be shared back with Twitter. For more, see our Privacy Policy.</span>
        </Information>
    </StyledFooter >
}

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 120px;
    min-height: 120px;
    color: #99a4ad;
    background:#1b1b1b54 ;
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-height: inherit;
    max-width: 600px;
    gap:0.4rem;
    padding: .5rem 0;
    font-size: .8rem;
    font-size: 400;
`