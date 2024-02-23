import { useEffect, useState } from "react"
import MainNavigation from "../components/MainNavigation"
import ObraMenu from "../components/ObraMenu"
import Footer from "../components/Footer"
import About from "../components/About"
import Premios from "../components/Premios"
import { ScrollRestoration } from "react-router-dom"
import Animacion from "../components/Animacion"
import Slider from "../components/Slider"
import { useQuery } from "@tanstack/react-query"
import { fetchAll } from "../http"
import Exposiciones from "../components/Exposiciones"

function Landing() {
  const [showMenu, setShowMenu] = useState(false)

  const { data: obraData } = useQuery({
    queryKey: ["obras"],
    queryFn: () => fetchAll("obras"),
  })

  const { data: premiosData } = useQuery({
    queryKey: ["premios"],
    queryFn: () => fetchAll("premios"),
  })

  const { data: obrasLandingMovil } = useQuery({
    queryKey: ["landingMovil"],
    queryFn: () => fetchAll("landingMovil"),
  })

  console.log(obrasLandingMovil)
  console.log(obraData)

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
        {obrasLandingMovil && (
          <Animacion
            showMenu={showMenu}
            background={obrasLandingMovil[0]}
          />
        )}
      </div>
      <div className="portrait:hidden w-full min-h-[90dvh]">
        <Slider />
      </div>
      <section
        className={`portrait:absolute portrait:top-[100dvh] landscape:block portrait:inset-x-0 portrait:z-19 pb-[15rem]`}
      >
        <div className="bg-white pb-8 pt-[2rem] text-xs">
          {obraData && <ObraMenu data={obraData} />}
        </div>
        <div className="bg-neutral-800 text-neutral-400 pt-[2rem] pb-4 text-xs w-full">
          <About />
        </div>
        <div className="pb-6 pt-[2rem] bg-gray-100">
          <Exposiciones />
        </div>
        <div className="pb-12 pt-[2rem] bg-white">
          {premiosData && <Premios data={premiosData} />}
        </div>
        <div className="text-xs w-full">
          <Footer />
        </div>
      </section>
    </>
  )
}
export default Landing
