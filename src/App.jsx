import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import Root from "./pages/Root"
import Landing from "./pages/Landing"
import Login, { action as loginAction } from "./pages/Login"
import { AuthProvider } from "./context/authContext"
import {
  logOutWithRedirect,
  deleteAction,
  deletePremioAction,
  deleteExposicionAction,
} from "./utils/actions"
import SerieNew, { action as newAction } from "./pages/SerieNew"
import { queryClient } from "./http"
import SerieUpdate, { action as updateAction } from "./pages/SerieUpdate"
import Serie from "./pages/Serie"
import { ParallaxProvider } from "react-scroll-parallax"
import Obra from "./pages/Obra"
import Legal from "./pages/Legal"
import Privacidad from "./pages/Privacidad"
import Proteccion from "./pages/Proteccion"
import AboutPage from "./pages/AboutPage"
import PremiosPage from "./pages/PremiosPage"
import LandingUpdate, {
  action as updateLandingAction,
} from "./pages/LandingUpdate"
import ObraUpdate, { action as updateObraAction } from "./pages/ObraUpdate"
import ExposicionesPage from "./pages/ExposicionesPage"
import LandingMovilUpdate, {
  action as updateLandingMovilAction,
} from "./pages/LandingMovilUpdate"
import PremiosNew, { action as premiosNewAction } from "./pages/PremiosNew"
import PremiosUpdate, {
  action as premiosUpdateAction,
} from "./pages/PremiosUpdate"
import ExposicionesNew, {
  action as exposicionesNewAction,
} from "./pages/ExposicionesNew"
import ExposicionesUpdate, {
  action as exposicionesUpdateAction,
} from "./pages/ExposicionesUpdate"

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
          path: "obras",
          element: (
            <Navigate
              to="/"
              replace={true}
            />
          ),
        },
        {
          path: "obra/:serie",
          element: <Serie />,
        },

        {
          path: "obra/:serie/:id",
          element: <Serie />,
        },
        {
          path: "landing/:id/edit",
          element: <LandingMovilUpdate />,
          action: updateLandingMovilAction,
        },
        {
          path: ":id/edit",
          element: <LandingUpdate />,
          action: updateLandingAction,
        },
        {
          path: "obra/:id/edit",
          element: <ObraUpdate />,
          action: updateObraAction,
        },
        {
          path: "obra/:serie/new",
          element: <SerieNew />,
          action: newAction,
        },
        {
          path: "obra/:serie/:id/edit",
          element: <SerieUpdate />,
          action: updateAction,
        },
        {
          path: "obra/:serie/:id/delete",
          action: deleteAction,
        },
        {
          path: "obra",
          element: <Obra />,
        },
        {
          path: "sobre-mi",
          element: <AboutPage />,
        },
        {
          path: "premios",
          element: <PremiosPage />,
        },
        {
          path: "premios/new",
          element: <PremiosNew />,
          action: premiosNewAction,
        },
        {
          path: "premios/:id/edit",
          element: <PremiosUpdate />,
          action: premiosUpdateAction,
        },
        {
          path: "premios/:id/delete",
          action: deletePremioAction,
        },
        {
          path: "exposiciones",
          element: <ExposicionesPage />,
        },
        {
          path: "exposiciones/new",
          element: <ExposicionesNew />,
          action: exposicionesNewAction,
        },
        {
          path: "exposiciones/:id/edit",
          element: <ExposicionesUpdate />,
          action: exposicionesUpdateAction,
        },
        {
          path: "exposiciones/:id/delete",
          action: deleteExposicionAction,
        },
        {
          path: "legal",
          element: <Legal />,
        },
        {
          path: "privacidad",
          element: <Privacidad />,
        },
        {
          path: "proteccion",
          element: <Proteccion />,
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
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
