import { deleteFile, update, uploadFile } from "../../firebase/config"
import { ScrollRestoration, redirect } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchOne, queryClient } from "../http"
import MainNavigation from "../components/MainNavigation"
import { useParams } from "react-router-dom"
import ObraForm from "../components/ObraForm"

function ObraUpdate() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ["obras", id],
    queryFn: () => fetchOne("obras", id),
  })
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      {data && <ObraForm data={data} />}
    </>
  )
}
export default ObraUpdate

export async function action({ request }) {
  const formData = await request.formData()

  const doc = {
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
  await update("obras", id, doc)

  queryClient.invalidateQueries({ queryKey: ["obras"] })
  return redirect(`/`)
}
