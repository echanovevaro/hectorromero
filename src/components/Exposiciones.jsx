import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useAuthContext } from "../context/authContext"
import { Link, useSubmit } from "react-router-dom"
import Modal from "./Modal"

const Exposiciones = ({ finalizadas, proximas }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [exposicionToDelete, setExposicionToDelete] = useState()
  const ref = useRef(null)
  const refProx = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isInViewProx = useInView(refProx, { once: true })
  const { currentUser } = useAuthContext()
  const submit = useSubmit()

  function handleDelete() {
    const formData = new FormData()
    formData.append("ref", exposicionToDelete.imagenRef)
    setIsDeleting(false)
    setExposicionToDelete(null)
    submit(formData, {
      method: "delete",
      action: `/exposiciones/${exposicionToDelete.id}/delete`,
    })
  }

  const ulVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={() => setIsDeleting(false)}>
          <h5 className="mt-2 mb-0 text-neutral-600">
            Seguro que quieres eliminar este premio?
          </h5>
          <div className="flex items-center justify-end gap-2 my-4">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              onClick={() => setIsDeleting(false)}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={() => handleDelete()}
            >
              Eliminar
            </button>
          </div>
        </Modal>
      )}
      <div className="px-[1rem] lg:px-[4rem] text-xs max-w-screen-xl mx-auto lg:text-sm">
        <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
          exposiciones
        </h1>
        {currentUser && (
          <div className="mb-4">
            <Link
              to="/exposiciones/new"
              className="text-sky-400 font-medium"
            >
              Añadir exposición
            </Link>
          </div>
        )}
        <section className="mb-[1.5rem]">
          {proximas.length > 0 && (
            <h2 className="pb-[0.5rem] text-base">Próximamente</h2>
          )}
          <motion.ul
            variants={ulVariants}
            ref={refProx}
            initial={ulVariants.closed}
            animate={isInViewProx ? "open" : "closed"}
            className="flex flex-col gap-[1rem] items-start flex-nowrap"
          >
            {proximas?.map((exposicion) => (
              <motion.li
                key={exposicion.id}
                className={`flex gap-4 justify-center items-start ${
                  exposicion.enlace ? "cursor-pointer" : ""
                }`}
                variants={liVariants}
                initial={liVariants.closed}
              >
                <img
                  src={exposicion.imagenURL}
                  alt={exposicion.titulo}
                  className="w-32 h-32 object-cover hidden md:block border"
                />
                <ul>
                  <li>
                    {!exposicion.enlace ? (
                      exposicion.titulo
                    ) : (
                      <a
                        className="underline cursor-pointer"
                        href={exposicion.enlace}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exposicion.titulo}
                      </a>
                    )}
                  </li>
                  <li>{exposicion.linea2}</li>
                  <li>{exposicion.linea3}</li>
                  <li>{exposicion.linea4}</li>
                </ul>
                {currentUser && (
                  <div className="flex gap-1 mt-1">
                    <Link
                      to={`/exposiciones/${exposicion.id}/edit`}
                      className="text-sky-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                    <button
                      className="text-sky-400"
                      onClick={() => {
                        setIsDeleting(true)
                        setExposicionToDelete(exposicion)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </section>
        <section>
          {finalizadas.length > 0 && (
            <h2 className="pb-[0.5rem] text-base">Finalizadas</h2>
          )}
          <motion.ul
            variants={ulVariants}
            ref={ref}
            initial={ulVariants.closed}
            animate={isInView ? "open" : "closed"}
            className="flex flex-col gap-[1rem] items-start flex-nowrap"
          >
            {finalizadas?.map((exposicion) => (
              <motion.li
                key={exposicion.id}
                className={`flex gap-4 justify-center items-start ${
                  exposicion.enlace ? "cursor-pointer" : ""
                }`}
                variants={liVariants}
                initial={liVariants.closed}
              >
                <img
                  src={exposicion.imagenURL}
                  alt={exposicion.titulo}
                  className="w-32 h-32 object-cover hidden md:block border grayscale hover:grayscale-0 relative"
                />

                <ul>
                  <li>
                    {!exposicion.enlace ? (
                      exposicion.titulo
                    ) : (
                      <a
                        className="underline cursor-pointer"
                        href={exposicion.enlace}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exposicion.titulo}
                      </a>
                    )}
                  </li>
                  <li>{exposicion.linea2}</li>
                  <li>{exposicion.linea3}</li>
                  <li>{exposicion.linea4}</li>
                </ul>
                {currentUser && (
                  <div className="flex gap-1 mt-1">
                    <Link
                      to={`/exposiciones/${exposicion.id}/edit`}
                      className="text-sky-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                    <button
                      className="text-sky-400"
                      onClick={() => {
                        setIsDeleting(true)
                        setExposicionToDelete(exposicion)
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </>
  )
}

export default Exposiciones
