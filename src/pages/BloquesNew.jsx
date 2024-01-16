import { add, uploadFile } from "../../firebase/config"
import { redirect } from "react-router-dom"
import ObraForm from "../components/ObraForm"
import { queryClient } from "../http"

function BloquesNew() {
  return <ObraForm serie="bloques" />
}
export default BloquesNew

// export async function loader({ params }) {
//   const { id } = params
//   await queryClient.fetchQuery({
//     queryKey: ["events", id],
//     queryFn: ({ signal }) => fetchEvent({ signal, id }),
//   })
//   console.log("loader")
//   return null
// }

export async function action({ params, request }) {
  console.log("request", request)
  const formData = await request.formData()
  const image = formData.get("imagen")
  const url = await uploadFile(image)

  const doc = {
    imagenURL: url,
    titulo: formData.get("titulo"),
    descripcion: formData.get("descripcion"),
  }

  await add("bloques", doc)

  queryClient.invalidateQueries({ queryKey: ["bloques"] })
  return redirect("/obra/bloques")
}
