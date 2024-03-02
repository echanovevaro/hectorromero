import { z } from "zod"

const MAX_FILE_SIZE = 1024 * 1024 * 5
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
]

export const SERIES = ["bloques", "wood", "wire", "iluminados", "animaciones"]

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
      "Sólo .jpg, .jpeg .gif o .png son válidos."
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
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})

export const obraLandingSchema = z.object({
  titulo: z.string().min(1, "obligatorio"),
  imagen: z
    .instanceof(FileList)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
  serie: z
    .string()
    .min(1, "debes seleccionar una serie")
    .refine((serie) => SERIES.includes(serie)),
  full: z.boolean(),
})

export const obraMenuSchema = z.object({
  serie: z
    .string()
    .min(1, "debes seleccionar una serie")
    .refine((serie) => SERIES.includes(serie)),
  imagen: z
    .instanceof(FileList)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})

export const obraLandingMovilSchema = z.object({
  imagen: z
    .instanceof(FileList)
    .refine((files) => !!files?.[0], `Imagen obligatoria.`)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})

export const premioSchema = z.object({
  titulo: z.string().min(1, "Obligatorio").max(56, "Máximo 56 caracteres"),
  fecha: z.coerce.date({ required_error: "Fecha obligatoria" }),
  imagen: z
    .instanceof(FileList)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})
export const exposicionSchema = z.object({
  titulo: z.string().min(1, "Obligatorio").max(160, "Máximo 160 caracteres"),
  linea2: z.string().max(160, "Máximo 160 caracteres"),
  linea3: z.string().max(160, "Máximo 160 caracteres"),
  linea4: z.string().max(160, "Máximo 160 caracteres"),
  fecha: z.coerce.date({ required_error: "Fecha obligatoria" }),
  enlace: z.string().trim().url({ message: "URL no válida" }).or(z.literal("")),
  imagen: z
    .instanceof(FileList)
    .refine((files) => !!files?.[0], `Imagen obligatoria.`)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})

export const exposicionUpdateSchema = exposicionSchema.extend({
  imagen: z
    .instanceof(FileList)
    .refine(
      (files) => !files?.[0] || files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamaño máximo 5MB.`
    )
    .refine(
      (files) =>
        !files?.[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Sólo .jpg, .jpeg .gif o .png son válidos."
    ),
})
