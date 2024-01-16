import { z } from "zod"

const ACCEPTED_SERIES = ["bloques", "iluminados", "wire"]
const MAX_FILE_SIZE = 1024 * 1024 * 5
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const passwordSchema = z.object({
  email: z.string().min(1, "obligatorio").email("email no válido"),
})

export const loginSchema = passwordSchema.extend({
  password: z.string().min(6, "la contraseña debe tener al menos 6 caracteres"),
})

export const obraNewSchema = z.object({
  titulo: z.string().min(1, "obligatorio"),
  descripcion: z.string().min(1, "obligatorio"),
  imagen: z
    .instanceof(FileList)
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE
    }, `Tamaño máximo 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg o .png son válidos."
    )
    .transform((files) => files.length > 0 && files[0]),
  // imagenURL: z.string().url("URL no válida"),
  // serie: z
  //   .string()
  //   .refine((serie) => ACCEPTED_SERIES.includes(serie), "serie no válida"),
})
// .refine((schema) => {
//   return !(
//     (schema.imagen === undefined && schema.imagenURL === undefined) ||
//     (schema.imagen !== undefined && schema.imagenURL !== undefined)
//   )
// }, "Debes subir una imagen o ingresar una URL pero no ambas")
