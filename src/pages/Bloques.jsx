import { useQuery } from "@tanstack/react-query"
import Gallery from "../components/Gallery"
import { fetchBloques } from "../http"

export default function Bloques() {
  const { data } = useQuery({
    queryKey: ["bloques"],
    queryFn: fetchBloques,
  })
  console.log("data", data)
  return <Gallery coleccion={data} />
}
