import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import { useParams } from "react-router-dom"
import LandingMovilForm from "../components/LandingMovilForm"

function LandingMovilUpdate() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ["landingMovil", id],
    queryFn: () => fetchOne("landingMovil", id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      {data && <LandingMovilForm data={data} />}
    </>
  )
}
export default LandingMovilUpdate

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {}

  if (formData.has("imagen")) {
    const imageRef = formData.get("imagenRef")
    await deleteFile(imageRef)
    const image = formData.get("imagen")
    const { url, ref } = await uploadFile(image)
    doc.imagenURL = url
    doc.imagenRef = ref
  }
  const id = formData.get("id")
  await update("landingMovil", id, doc)

  queryClient.invalidateQueries({ queryKey: ["landingMovil"] })
  return redirect(`/`)
}
