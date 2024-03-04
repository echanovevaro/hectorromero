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
  const { data: exposiciones } = useQuery({
    queryKey: ["exposiciones"],
    queryFn: () => fetchAll("exposiciones"),
  })

  const exposicionesFinalizadas = exposiciones
    ?.filter((exposicion) => {
      const fecha = new Date(exposicion.fecha)
      const hoy = new Date()
      return fecha < hoy
    })
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  const exposicionesProximas = exposiciones
    ?.filter((exposicion) => {
      const fecha = new Date(exposicion.fecha)
      const hoy = new Date()
      return fecha >= hoy
    })
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

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
            exposiciones={exposicionesProximas}
          />
        )}
      </div>
      <div className="portrait:hidden w-full">
        <Slider exposiciones={exposicionesProximas} />
      </div>
      <section
        className={`portrait:absolute portrait:top-[100vh] landscape:block portrait:inset-x-0 portrait:z-19`}
      >
        <div className="bg-white pb-8 pt-[2rem]">
          {obraData && <ObraMenu data={obraData} />}
        </div>
        <div className="bg-neutral-800 text-neutral-400 pt-[2rem] pb-4 w-full">
          <About />
        </div>
        <div className="pb-6 pt-[2rem] bg-gray-100 hidden md:block">
          {exposiciones && (
            <Exposiciones
              finalizadas={exposicionesFinalizadas}
              proximas={exposicionesProximas}
            />
          )}
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
