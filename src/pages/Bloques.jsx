import { Link } from "react-router-dom"
import { gallery } from "../../serieBloques.json"
import Gallery from "../components/Gallery"
import { useAuthContext } from "../context/authContext"

export default function Bloques() {
  const { currentUser } = useAuthContext()
  return (
    <>
      {currentUser && (
        <Link
          className="absolute top-20 right-8 text-sky-400 z-50"
          to="/obra/bloques/new"
        >
          Añadir
        </Link>
      )}
      <Gallery collection={gallery} />
    </>
  )
}
