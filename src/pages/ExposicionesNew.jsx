import { add, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import { queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import ExposicionesForm from "../components/ExposicionesForm"

function ExposicionesNew() {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <ExposicionesForm />
    </>
  )
}
export default ExposicionesNew

export async function action({ params, request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo"),
    fecha: formData.get("fecha"),
    createdAt: new Date().toISOString(),
  }

  const image = formData.get("imagen")
  const { url, ref } = await uploadFile(image)
  doc.imagenURL = url
  doc.imagenRef = ref

  if (formData.has("linea2")) {
    doc.linea2 = formData.get("linea2")
  }
  if (formData.has("linea3")) {
    doc.linea3 = formData.get("linea3")
  }
  if (formData.has("linea4")) {
    doc.linea4 = formData.get("linea4")
  }

  const tabla =
    "exposiciones" + params.tipo[0].toUpperCase() + params.tipo.slice(1)

  await add(tabla, doc)

  queryClient.invalidateQueries({ queryKey: [tabla] })
  return redirect(`/exposiciones`)
}
