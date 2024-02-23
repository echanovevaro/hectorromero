import { add, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import { queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import PremiosForm from "../components/PremiosForm"

function PremiosNew() {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <PremiosForm />
    </>
  )
}
export default PremiosNew

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo"),
    fecha: formData.get("fecha"),
    createdAt: new Date().toISOString(),
  }

  if (formData.has("imagen")) {
    const image = formData.get("imagen")
    const { url, ref } = await uploadFile(image)
    doc.imagenURL = url
    doc.imagenRef = ref
  }

  await add("premios", doc)

  queryClient.invalidateQueries({ queryKey: ["premios"] })
  return redirect(`/premios`)
}
