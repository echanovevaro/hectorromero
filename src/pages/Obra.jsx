import MainNavigation from "../components/MainNavigation"
import Footer from "../components/Footer"
import ObraMenu from "../components/ObraMenu"
import { ScrollRestoration } from "react-router-dom"

function Obra() {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="bg-white w-screen z-10 pt-[6rem] pb-8 landscape:h-full min-h-[70dvh] text-xs">
        <ObraMenu />
      </div>
      <Footer />
    </>
  )
}
export default Obra
