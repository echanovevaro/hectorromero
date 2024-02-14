import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import LandingForm from "../components/LandingForm"
import { useParams } from "react-router-dom"

function LandingUpdate() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ["landing", id],
    queryFn: () => fetchOne("landing", id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      {data && <LandingForm data={data} />}
    </>
  )
}
export default LandingUpdate

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
    serie: formData.get("serie"),
  }

  if (formData.has("imagen")) {
    const imageRef = formData.get("imagenRef")
    await deleteFile(imageRef)
    const image = formData.get("imagen")
    const { url, ref } = await uploadFile(image)
    doc.imagenURL = url
    doc.imagenRef = ref
  }
  const id = formData.get("id")
  await update("landing", id, doc)

  queryClient.invalidateQueries({ queryKey: ["landing"] })
  return redirect(`/`)
}
