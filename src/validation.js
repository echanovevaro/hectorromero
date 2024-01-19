import { z } from "zod"

const MAX_FILE_SIZE = 1024 * 1024 * 5
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const passwordSchema = z.object({
  email: z.string().min(1, "obligatorio").email("email no válido"),
})

export const loginSchema = passwordSchema.extend({
  password: z.string().min(6, "la contraseña debe tener al menos 6 caracteres"),
})

export const obraSchema = z.object({
  titulo: z.string().min(1, "obligatorio"),
  descripcion: z.string().min(1, "obligatorio"),
  imagen: z
    .instanceof(FileList)
    .refine((files) => !!files?.[0], `Imagen obligatoria.`)
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Tamaño máximo 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg o .png son válidos."
    ),
})

export const obraEditSchema = obraSchema.extend({
  imagen: z
    .instanceof(FileList)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg o .png son válidos."
    ),
})
