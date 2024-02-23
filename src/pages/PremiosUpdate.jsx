import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import PremiosForm from "../components/PremiosForm"

function PremiosUpdate() {
  let { id } = useParams()
  const { data } = useQuery({
    queryKey: ["premios", id],
    queryFn: () => fetchOne("premios", id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation /> {data && <PremiosForm premio={data} />}
    </>
  )
}
export default PremiosUpdate

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {
    titulo: formData.get("titulo"),
    fecha: formData.get("fecha"),
  }

  if (formData.has("imagen")) {
    if (formData.has("imagenRef")) {
      const imageRef = formData.get("imagenRef")
      await deleteFile(imageRef)
    }
    const image = formData.get("imagen")
    const { url, ref } = await uploadFile(image)
    doc.imagenURL = url
    doc.imagenRef = ref
  }
  const id = formData.get("id")
  await update("premios", id, doc)

  queryClient.invalidateQueries({ queryKey: ["premios"] })
  return redirect(`/premios`)
}
