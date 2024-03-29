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
      <div className="h-screen relative text-xs lg:text-sm xl:text-base">
        <Gallery coleccion={data} />
      </div>
      <Footer />
    </>
  )
}
