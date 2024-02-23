import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"
import Exposiciones from "../components/Exposiciones"

const ExposicionesPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-[15rem] pt-[6rem] text-xs overflow-hidden w-full">
        <Exposiciones />
      </div>
      <Footer />
    </>
  )
}

export default ExposicionesPage
