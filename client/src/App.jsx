import { GlobalStyle } from "components/UI/styled-component"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { BoardProvider } from "./context"
import router from "./routes"
import { Suspense } from "react"


const App = () => {
  const { theme } = useSelector(state => state.images)

  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <BoardProvider>
        <Suspense fallback={<p>Waitin...</p>}>
          <RouterProvider {...{ router }} />
        </Suspense>
      </BoardProvider>
    </ThemeProvider>
  )
}

export default App
