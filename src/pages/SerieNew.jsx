import { add, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import ObraForm from "../components/ObraForm"
import { queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"

function SerieNew() {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <ObraForm />
    </>
  )
}
export default SerieNew

export async function action({ params, request }) {
  const formData = await request.formData()
  const image = formData.get("imagen")
  const { url, ref } = await uploadFile(image)

  const doc = {
    imagenURL: url,
    imagenRef: ref,
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
    createdAt: new Date().toISOString(),
  }

  await add(params.serie, doc)

  queryClient.invalidateQueries({ queryKey: [params.serie] })
  return redirect(`/obra/${params.serie}`)
}
