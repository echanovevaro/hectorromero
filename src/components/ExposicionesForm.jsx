import { useActionData, useNavigation, useSubmit } from "react-router-dom"
import { exposicionSchema, exposicionUpdateSchema } from "../validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

function ExposicionesForm({ exposicion }) {
  const [imagePreview, setImagePreview] = useState(null)
  const error = useActionData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const isSubmitting = navigation.state === "submitting"
  let fechaStr = ""
  if (exposicion) {
    const fechaDate = new Date(exposicion?.fecha)
    fechaStr =
      fechaDate.getFullYear() +
      "-" +
      ("0" + (fechaDate.getMonth() + 1)).substr(-2) +
      "-" +
      ("0" + fechaDate.getDate()).substr(-2)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      exposicion ? exposicionUpdateSchema : exposicionSchema
    ),
    defaultValues: {
      titulo: exposicion?.titulo || "",
      linea2: exposicion?.linea2 || "",
      linea3: exposicion?.linea3 || "",
      linea4: exposicion?.linea4 || "",
      fecha: fechaStr,
      imagen: undefined,
    },
  })

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("titulo", data.titulo)
    formData.append("fecha", data.fecha)
    if (exposicion) {
      formData.append("id", exposicion.id)
      formData.append("imagenRef", exposicion.imagenRef)
    }
    if (data.linea2) {
      formData.append("linea2", data.linea2)
    }
    if (data.linea3) {
      formData.append("linea3", data.linea3)
    }
    if (data.linea4) {
      formData.append("linea4", data.linea4)
    }
    if (data.imagen[0]) {
      formData.append("imagen", data.imagen[0])
    }
    submit(formData, { method: "POST", encType: "multipart/form-data" })
  }

  return (
    <section className="bg-gray-50 py-[8rem]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        {error?.message && (
          <div
            className="bg-red-100 border-t border-b border-red-400 text-red-700 px-4 py-3 mb-2"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}
        <div className="w-full bg-white rounded-lg shadow mt-10 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="titulo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Título
                </label>
                <input
                  type="text"
                  {...register("titulo")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  placeholder="Título"
                  required
                />
                {errors.titulo && (
                  <span className="text-red-700">{errors.titulo?.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="linea2"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Línea 2
                </label>
                <input
                  type="text"
                  {...register("linea2")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  placeholder="Línea 2"
                />
                {errors.linea2 && (
                  <span className="text-red-700">{errors.linea2?.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="linea3"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Línea 3
                </label>
                <input
                  type="text"
                  {...register("linea3")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  placeholder="Línea 3"
                />
                {errors.linea3 && (
                  <span className="text-red-700">{errors.linea3?.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="linea4"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Línea 4
                </label>
                <input
                  type="text"
                  {...register("linea4")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  placeholder="Línea 4"
                />
                {errors.linea4 && (
                  <span className="text-red-700">{errors.linea4?.message}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="fecha"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha (no visible, para ordenación cronológica)
                </label>
                <input
                  type="date"
                  {...register("fecha")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  required
                />
                {errors.fecha && (
                  <span className="text-red-700">{errors.fecha?.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="enlace"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enlace
                </label>
                <input
                  type="url"
                  {...register("enlace")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                />
                {errors.enlace && (
                  <span className="text-red-700">{errors.enlace?.message}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="imagen"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Imagen
                </label>
                <input
                  type="file"
                  {...register("imagen")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  onChange={(e) =>
                    e.target.files?.[0]
                      ? setImagePreview(URL.createObjectURL(e.target.files[0]))
                      : null
                  }
                />
                {(imagePreview || exposicion?.imagenURL) && (
                  <img
                    src={imagePreview || exposicion.imagenURL}
                    alt="preview"
                    className="mt-2"
                  />
                )}
                {errors.imagen && (
                  <span className="text-red-700">{errors.imagen?.message}</span>
                )}
              </div>

              <button
                type="submit"
                onClick={() => console.log("submit")}
                disabled={isSubmitting}
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ExposicionesForm
