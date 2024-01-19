import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function Root() {
  return (
    <>
      <MainNavigation />
      <div id="modal" />
      <Outlet />
    </>
  )
}

export default Root
