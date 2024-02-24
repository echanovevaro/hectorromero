import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"
import Exposiciones from "../components/Exposiciones"
import { fetchAll } from "../http"
import { useQuery } from "@tanstack/react-query"

const ExposicionesPage = () => {
  const { data: exposicionesFinalizadas } = useQuery({
    queryKey: ["exposicionesFinalizadas"],
    queryFn: () => fetchAll("exposicionesFinalizadas"),
  })
  const { data: exposicionesProximas } = useQuery({
    queryKey: ["exposicionesProximas"],
    queryFn: () => fetchAll("exposicionesProximas"),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-16 pt-[6rem] text-xs overflow-hidden w-full">
        {exposicionesFinalizadas && exposicionesProximas && (
          <Exposiciones
            finalizadas={exposicionesFinalizadas}
            proximas={exposicionesProximas}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default ExposicionesPage
