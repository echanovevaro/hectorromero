import { gallery } from "../../serieBloques.json"
import Gallery from "../components/Gallery"

export default function Bloques() {
  return <Gallery collection={gallery} />
}
