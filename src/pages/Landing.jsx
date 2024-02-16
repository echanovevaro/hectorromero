import { useEffect, useState } from "react"
import MainNavigation from "../components/MainNavigation"
import ObraMenu from "../components/ObraMenu"
import Footer from "../components/Footer"
import About from "../components/About"
import Premios from "../components/Premios"
import { ScrollRestoration } from "react-router-dom"
import Animacion from "../components/Animacion"
import Slider from "../components/Slider"

function Landing() {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMenu(true)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      <ScrollRestoration />
      {showMenu && <MainNavigation />}
      <div className="landscape:hidden w-full h-screen absolute inset-0">
        <Animacion showMenu={showMenu} />
      </div>
      <div className="portrait:hidden w-full h-[105dvh] absolute top-0 left-0">
        <Slider />
      </div>
      <section
        className={`absolute top-[100dvh] landscape:top-[105dvh] inset-x-0 z-19`}
      >
        <div className="bg-white pb-8 pt-[2rem] text-xs">
          <ObraMenu />
        </div>
        <article className="flex justify-start">
          <div className="bg-neutral-800 text-neutral-400 pt-[2rem] pb-8 text-xs w-screen">
            <About />
          </div>
        </article>
        <article className="flex justify-start">
          <div className="pb-12 pt-[2rem] bg-white">
            <Premios />
          </div>
        </article>
        <article className="flex justify-start">
          <div className="bg-[#efefef] text-xs w-screen">
            <Footer />
          </div>
        </article>
      </section>
    </>
  )
}
export default Landing
