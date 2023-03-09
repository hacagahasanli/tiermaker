import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import store from "./store"

const App = () => {
  return (
    <Provider {...{ store }}>
      <RouterProvider {...{ router }} />
    </Provider>
  )
}

export default App
