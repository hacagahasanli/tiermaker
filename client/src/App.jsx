import { GlobalStyle } from "components/UI/styled-component"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Footer } from "./components"
import { BoardProvider } from "./context"
import router from "./routes"


const App = () => {
  const { theme } = useSelector(state => state.images)

  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <BoardProvider>
        <RouterProvider {...{ router }} />
      </BoardProvider>
      <Footer />
    </ThemeProvider>
  )
}

export default App
