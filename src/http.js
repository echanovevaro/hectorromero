import { QueryClient } from "@tanstack/react-query"
import { getAll, getById } from "../firebase/config"

export const queryClient = new QueryClient()

export const fetchAll = async (serie) => {
  try {
    return await getAll(serie)
  } catch (error) {
    console.log(error)
    throw new Error("Ha ocurrido un error leyendo de bbdd", { status: 500 })
  }
}

export const fetchOne = async (serie, id) => {
  try {
    const data = await getById(serie, id)
    return data
  } catch (error) {
    console.log(error)
    throw new Error("Ha ocurrido un error leyendo de bbdd", { status: 500 })
  }
}
