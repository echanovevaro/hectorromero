import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"
import Premios from "../components/Premios"
import { fetchAll } from "../http"
import { useQuery } from "@tanstack/react-query"

const PremiosPage = () => {
  const { data } = useQuery({
    queryKey: ["premios"],
    queryFn: () => fetchAll("premios"),
  })

  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-16 pt-[6rem] text-xs overflow-hidden w-full">
        {data && <Premios data={data} />}
      </div>
      <Footer />
    </>
  )
}

export default PremiosPage
