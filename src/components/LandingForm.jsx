import { useActionData, useNavigation, useSubmit } from "react-router-dom"
import { obraLandingSchema } from "../validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { SERIES } from "../validation"

function LandingForm({ data }) {
  const [imagePreview, setImagePreview] = useState(null)
  const error = useActionData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const isSubmitting = navigation.state === "submitting"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(obraLandingSchema),
    defaultValues: {
      titulo: data?.titulo || "",
      descripcion: data?.descripcion || "",
      imagen: undefined,
    },
  })

  const onSubmit = (form) => {
    const formData = new FormData()
    formData.append("titulo", form.titulo)
    formData.append("descripcion", form.descripcion)
    formData.append("serie", form.serie)
    if (data) {
      formData.append("id", data.id)
      formData.append("imagenRef", data.imagenRef)
    }
    if (form.imagen[0]) {
      formData.append("imagen", form.imagen[0])
    }
    submit(formData, { method: "POST", encType: "multipart/form-data" })
  }

  return (
    <section className="bg-gray-50 py-[5rem]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
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
                  placeholder="Título de la obra"
                  required
                />
                {errors.titulo && (
                  <span className="text-red-700">{errors.titulo?.message}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Descripción
                </label>
                <textarea
                  {...register("descripcion")}
                  placeholder="Descripción de la obra"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  required
                />
                {errors.descripcion && (
                  <span className="text-red-700">
                    {errors.descripcion?.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="serie"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Serie
                </label>
                <select
                  defaultValue={data?.serie || ""}
                  {...register("serie")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  required
                >
                  {SERIES.map((serie) => (
                    <option
                      key={serie}
                      value={serie}
                    >
                      {serie}
                    </option>
                  ))}
                </select>
                {errors.serie && (
                  <span className="text-red-700">{errors.serie?.message}</span>
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
                  required={!data}
                  onChange={(e) =>
                    e.target.files?.[0]
                      ? setImagePreview(URL.createObjectURL(e.target.files[0]))
                      : null
                  }
                />
                {(imagePreview || data) && (
                  <img
                    src={imagePreview || data.imagenURL}
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
export default LandingForm
