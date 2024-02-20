import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"
import Premios from "../components/Premios"

const PremiosPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-16 pt-[6rem] text-xs overflow-hidden w-screen">
        <Premios />
      </div>
      <Footer />
    </>
  )
}

export default PremiosPage
