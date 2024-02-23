import { useActionData, useNavigation, useSubmit } from "react-router-dom"
import { obraLandingMovilSchema } from "../validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

function LandingMovilForm({ data }) {
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
    resolver: zodResolver(obraLandingMovilSchema),
    defaultValues: {
      imagen: undefined,
    },
  })

  const onSubmit = (form) => {
    const formData = new FormData()
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
    <section className="min-h-screen bg-gray-50 pt-[1rem] max-w-screen-xl mx-auto">
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
export default LandingMovilForm
