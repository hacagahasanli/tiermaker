import styled from "styled-components"

export const TemplateTitle = () => {
    return <Title>
        <div>
            <h2>Create a Template</h2>
            <span>TierMaker lets you easily create a tier list template for anything. By using TierMaker, you agree to follow our Guidelines and our Terms of Use. If you are having troubles, refer to our template creation guide and FAQ.</span>
        </div>
        <div>
            {/* <iframe
                width="460"
                height="250"
                src="https://www.youtube.com/embed/e8hXPUh-iCU?autoplay=1&rel=0&modestbranding=1&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe> */}
        </div>
    </Title>
}


const Title = styled.div`
    display: grid;
    grid-template-columns: 1.35fr 2fr;
    place-items: center;
    color:white;
    margin-bottom: 2rem;
    padding: .5rem .5rem .5rem 0;

    span{
        line-height: 2rem;
        font-size: 1.2rem;
        color: #cccccc;
    }

    h2{
        max-width:80%;
        letter-spacing: 2px;
    }
`