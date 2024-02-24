import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect, useParams } from "react-router-dom"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import ExposicionesForm from "../components/ExposicionesForm"
import { useQuery } from "@tanstack/react-query"

function ExposicionesUpdate() {
  let { id } = useParams()
  const { data } = useQuery({
    queryKey: ["exposiciones", id],
    queryFn: () => fetchOne("exposiciones", id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      {data && <ExposicionesForm exposicion={data} />}
    </>
  )
}
export default ExposicionesUpdate

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo").trim(),
    fecha: formData.get("fecha"),
  }

  if (formData.has("imagen")) {
    const imageRef = formData.get("imagenRef")
    await deleteFile(imageRef)
    const image = formData.get("imagen")
    const { url, ref } = await uploadFile(image)
    doc.imagenURL = url
    doc.imagenRef = ref
  }

  if (formData.has("linea2")) {
    doc.linea2 = formData.get("linea2").trim()
  }
  if (formData.has("linea3")) {
    doc.linea3 = formData.get("linea3").trim()
  }
  if (formData.has("linea4")) {
    doc.linea4 = formData.get("linea4").trim()
  }
  if (formData.has("enlace")) {
    doc.enlace = formData.get("enlace").trim()
  }

  const id = formData.get("id")

  await update("exposiciones", id, doc)

  queryClient.invalidateQueries({ queryKey: ["exposiciones"] })
  return redirect(`/exposiciones`)
}
