import { redirect } from "react-router-dom"
import { auth } from "../../firebase/config"

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
