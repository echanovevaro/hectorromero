import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import ObraForm from "../components/ObraForm"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"

function SerieUpdate() {
  let { id, serie } = useParams()
  const { data } = useQuery({
    queryKey: [serie, id],
    queryFn: () => fetchOne(serie, id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation /> {data && <ObraForm obra={data} />}
    </>
  )
}
export default SerieUpdate

export async function action({ params, request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
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
  await update(params.serie, id, doc)

  queryClient.invalidateQueries({ queryKey: [params.serie] })
  return redirect(`/obra/${params.serie}`)
}
