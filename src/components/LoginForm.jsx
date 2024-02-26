import {
  useSearchParams,
  useActionData,
  useNavigation,
  useSubmit,
  Link,
} from "react-router-dom"
import { loginSchema, passwordSchema } from "../validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function LoginForm() {
  const error = useActionData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get("mode")
  if (mode && mode !== "password") {
    throw new Error("Unsupported mode.")
  }
  const isPasswordReset = searchParams.get("passwordReset") !== null
  const isSubmitting = navigation.state === "submitting"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      mode && mode === "password" ? passwordSchema : loginSchema
    ),
  })

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("email", data.email)
    if (!mode) {
      formData.append("password", data.password)
    }
    submit(formData, { method: "POST" })
  }

  return (
    <section className="bg-gray-50 py-[5rem] min-h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        {isPasswordReset && (
          <div
            className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-2"
            role="alert"
          >
            <p className="font-bold">Email enviado!</p>
            <p className="text-sm">
              Consulta tu correo para reestablecer la contraseña.
            </p>
          </div>
        )}
        {error?.message && (
          <div
            className="bg-red-100 border-t border-b border-red-400 text-red-700 px-4 py-3 mb-2"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
                {errors.email && (
                  <span className="text-red-700">{errors.email?.message}</span>
                )}
              </div>
              {!mode && (
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder={`\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    required
                  />
                  {errors.password && (
                    <span className="text-red-700">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
              )}
              {!mode && (
                <div className="flex items-center justify-end">
                  <Link
                    disabled={isSubmitting}
                    to="/login?mode=password"
                    className="text-sm font-medium text-sky-600 hover:underline"
                  >
                    Olvidaste tu contraseña?
                  </Link>
                </div>
              )}
              <button
                type="submit"
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
