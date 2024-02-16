import { useQuery } from "@tanstack/react-query"
import Gallery from "../components/Gallery"
import { ScrollRestoration, useParams } from "react-router-dom"
import { fetchAll } from "../http"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"

export default function Serie() {
  const { serie } = useParams()

  const { data } = useQuery({
    queryKey: [serie],
    queryFn: () => fetchAll(serie),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="h-screen landscape:h-[120vh] relative">
        <Gallery coleccion={data} />
      </div>
    </>
  )
}
