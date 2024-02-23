import { redirect } from "react-router-dom"
import { auth, deleteFile, remove } from "../../firebase/config"
import { queryClient } from "../http"

export async function logOutWithRedirect() {
  try {
    await auth.signOut()
  } catch (error) {
    throw new Error("An error ocurred while loging out", { status: 500 })
  }
  return redirect("/")
}

export async function logOut() {
  try {
    await auth.signOut()
  } catch (error) {
    throw new Error("An error ocurred while loging out", { status: 500 })
  }
  return null
}

export async function deleteAction({ params, request }) {
  const formData = await request.formData()
  const { serie, id } = params
  try {
    await deleteFile(formData.get("ref"))
    console.log("params", serie, id)
    await remove(serie, id)
  } catch (error) {
    console.log(error)
    throw new Error("An error ocurred while deleting obra", { status: 500 })
  }
  queryClient.invalidateQueries({ queryKey: [`${serie}`] })
  return redirect(`/obra/${serie}`)
}

export async function deletePremioAction({ params, request }) {
  const formData = await request.formData()
  const { id } = params
  try {
    if (formData.has("ref")) {
      await deleteFile(formData.get("ref"))
    }
    await remove("premios", id)
  } catch (error) {
    console.log(error)
    throw new Error("An error ocurred while deleting premio", { status: 500 })
  }
  queryClient.invalidateQueries({ queryKey: ["premios"] })
  return redirect(`/premios`)
}
