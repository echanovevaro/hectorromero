import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import Root from "./pages/Root";
import Landing from "./pages/Landing";
import Login, { action as loginAction } from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import { logOutWithRedirect, deleteAction } from "./utils/actions";
import SerieNew, { action as newAction } from "./pages/SerieNew";
import { queryClient } from "./http";
import SerieUpdate, { action as updateAction } from "./pages/SerieUpdate";
import Serie from "./pages/Serie";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./pages/About";

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
          path: "obra/:serie",
          element: <Serie />,
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
          path: "about",
          element: <About />,
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
  ]);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ParallaxProvider> */}
        <RouterProvider router={router} />
        {/* </ParallaxProvider> */}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
