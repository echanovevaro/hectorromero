import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"
import Exposiciones from "../components/Exposiciones"

const ExposicionesPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-32 pt-[6rem] text-xs overflow-hidden w-screen">
        <Exposiciones />
      </div>
      <Footer />
    </>
  )
}

export default ExposicionesPage
