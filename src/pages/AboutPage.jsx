import { ScrollRestoration } from "react-router-dom"
import About from "../components/About"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"

const AboutPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pt-[6rem] text-xs lg:text-sm pb-[15rem]">
        <About />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
