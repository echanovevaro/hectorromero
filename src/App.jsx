import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import Bloques from "./pages/Bloques"
import Landing from "./pages/Landing"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <Errors />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/obra/bloques",
          element: <Bloques />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
