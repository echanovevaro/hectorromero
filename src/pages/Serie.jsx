import { useQuery } from "@tanstack/react-query"
import Gallery from "../components/Gallery"
import { useParams } from "react-router-dom"
import { fetchAll } from "../http"

export default function Serie() {
  const { serie } = useParams()

  const { data } = useQuery({
    queryKey: [serie],
    queryFn: () => fetchAll(serie),
  })
  return <Gallery coleccion={data} />
}
