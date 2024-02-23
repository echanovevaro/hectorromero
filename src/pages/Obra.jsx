import MainNavigation from "../components/MainNavigation"
import Footer from "../components/Footer"
import ObraMenu from "../components/ObraMenu"
import { ScrollRestoration } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchAll } from "../http"

function Obra() {
  const { data } = useQuery({
    queryKey: ["obras"],
    queryFn: () => fetchAll("obras"),
  })

  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="bg-white w-full z-10 pt-[6rem] pb-[15rem] landscape:h-full min-h-[70dvh] text-xs">
        {data && <ObraMenu data={data} />}
      </div>
      <Footer />
    </>
  )
}
export default Obra
