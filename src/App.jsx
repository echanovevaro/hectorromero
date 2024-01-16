import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import Bloques from "./pages/Bloques"
import Landing from "./pages/Landing"
import Login, { action as loginAction } from "./pages/Login"
import { AuthProvider } from "./context/authContext"
import { logOutWithRedirect } from "./utils/auth"
import BloquesNew, { action as newBloqueAction } from "./pages/BloquesNew"

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
          path: "obra/bloques",
          element: <Bloques />,
        },
        {
          path: "obra/bloques/new",
          element: <BloquesNew />,
          action: newBloqueAction,
        },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "logout",
          action: logOutWithRedirect,
        },
      ],
    },
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
