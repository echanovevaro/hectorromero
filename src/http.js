import { QueryClient } from "@tanstack/react-query"
import { getAll } from "../firebase/config"

export const queryClient = new QueryClient()

export const fetchBloques = async () => {
  try {
    return await getAll("bloques")
  } catch (error) {
    console.log(error)
    throw new Error("Ha ocurrido un error leyendo de bbdd", { status: 500 })
  }
}
