import { useActionData, useNavigation, useSubmit } from "react-router-dom"
import { obraNewSchema } from "../validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import { uploadFile } from "../../firebase/config"
import { useState } from "react"

function ObraForm({ serie, obra }) {
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
    resolver: zodResolver(obraNewSchema),
    defaultValues: {
      titulo: obra?.titulo || "",
      descripcion: obra?.descripcion || "",
      imagenURL: obra?.imagenURL || "",
      imagen: undefined,
    },
  })

  const onSubmit = (data) => {
    console.log("data", data)
    const formData = new FormData()
    console.log("formData", formData)
    if (obra) {
      formData.append("id", obra.id)
      if (!data.imagen) {
        formData.append("imagenURL", obra.imagenURL)
      }
    }
    formData.append("titulo", data.titulo)
    formData.append("descripcion", data.descripcion)
    formData.append("serie", serie)
    formData.append("imagen", data.imagen[0])
    // formData.append("ext", data.imagen[0].name.split(".").pop())
    console.log("imagen", data.imagen[0])
    submit(formData, { method: "POST", encType: "multipart/form-data" })
  }

  return (
    <section className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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

              {obra && (
                <>
                  <img
                    src={obra.imagenURL}
                    className="p-2.5 w-full"
                  />
                  <input
                    type="hidden"
                    {...register("imagenURL")}
                  />
                </>
              )}
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
                  required={!obra}
                  onChange={(e) =>
                    e.target.files?.[0]
                      ? setImagePreview(URL.createObjectURL(e.target.files[0]))
                      : null
                  }
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
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
export default ObraForm
