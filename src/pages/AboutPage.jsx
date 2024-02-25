import { ScrollRestoration } from "react-router-dom"
import About from "../components/About"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"

const AboutPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-8 pt-[6rem]">
        <About />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
