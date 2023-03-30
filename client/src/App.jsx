import { GlobalStyle } from "components/UI/styled-component"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import styled, { keyframes, ThemeProvider } from "styled-components"
import { BoardProvider } from "./context"
import { Suspense } from "react"
import router from "./routes"

import 'sweetalert2/dist/sweetalert2.min.css';


const App = () => {
  const { theme } = useSelector(state => state.images)


  return (
    <PageContainer>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <BoardProvider>
          <Suspense fallback={<p>Waitin...</p>}>
            <RouterProvider {...{ router }} />
          </Suspense>
        </BoardProvider>
      </ThemeProvider>
    </PageContainer>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 500ms ease-in-out forwards;

  /* Other styles for the page container */
`;

export default App
