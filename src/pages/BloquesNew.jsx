import ObraForm from "../components/ObraForm"

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
  const fomData = await request.formData()
  console.log("fomData", fomData)
  // const updatedEventData = Object.fromEntries(fomData.entries())
  // await updateEvent({ id: params.id, event: updatedEventData })
  // await queryClient.invalidateQueries(["events"])

  // return redirect("../")
  return null
}
