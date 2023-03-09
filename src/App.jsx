import { DndProvider } from "react-dnd"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import store from "./store"
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <Provider {...{ store }}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider {...{ router }} />
      </DndProvider>
    </Provider>
  )
}

export default App
