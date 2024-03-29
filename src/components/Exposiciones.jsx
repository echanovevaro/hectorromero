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
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const isInViewProx = useInView(refProx, { once: true, amount: 0.1 })
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
      <div className="mx-[1rem] lg:mx-[8rem] text-xs max-w-[1344px] min-[1600px]:mx-auto lg:text-sm">
        <h1 className="uppercase text-base lg:text-xl opacity-[0.7] mb-[2rem]">
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
        <section className="block md:flex flex-col items-center justify-center mb-[1.5rem]">
          {proximas?.length > 0 && (
            <h2 className="pb-[1rem] text-base lg:text-xl xl:text-xl">
              Próximamente
            </h2>
          )}
          <motion.ul
            variants={ulVariants}
            ref={refProx}
            initial={ulVariants.closed}
            animate={isInViewProx ? "open" : "closed"}
            className="exposiciones flex flex-col gap-4 items-start md:items-center justify-center"
          >
            {proximas?.map((exposicion, index) => (
              <motion.li
                key={exposicion.id}
                variants={liVariants}
                initial={liVariants.closed}
                className="block md:grid md:grid-cols-[1fr_5rem_5rem_1fr] lg:grid-cols-[1fr_7rem_7rem_1fr] xl:grid-cols-[1fr_8rem_8rem_1fr] gap-8"
              >
                <span
                  className={`text-6xl text-neutral-200 md:flex items-start tracking-wider mt-[-0.5rem] hidden ${
                    index % 2 === 0
                      ? "col-start-1 col-end-2 row-start-1 row-end-2 justify-end me-[-1rem]"
                      : "col-start-4 col-end-5 row-start-1 row-end-2 justify-start ms-[-1rem]"
                  }`}
                >
                  {("0" + index).substr(-2)}
                </span>
                {exposicion.enlace ? (
                  <a
                    href={exposicion.enlace}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={exposicion.imagenURL}
                      alt={exposicion.titulo}
                      className={`xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20 object-cover hidden md:inline-flex border grayscale ${
                        index % 2 === 0
                          ? "col-start-2 col-end-3 row-start-1 row-end-2"
                          : "col-start-3 col-end-4 row-start-1 row-end-2"
                      }`}
                    />
                  </a>
                ) : (
                  <img
                    src={exposicion.imagenURL}
                    alt={exposicion.titulo}
                    className={`xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20 object-cover hidden md:inline-flex border grayscale ${
                      index % 2 === 0
                        ? "col-start-2 col-end-3 row-start-1 row-end-2"
                        : "col-start-3 col-end-4 row-start-1 row-end-2"
                    }`}
                  />
                )}

                <ul
                  className={`block md:flex flex-col justify-end ${
                    index % 2 === 0
                      ? "col-start-3 col-end-5 items-start row-start-1 row-end-2 md:ms-[-1rem]"
                      : "col-start-1 col-end-3 items-end row-start-1 row-end-2 md:me-[-1rem] md:text-right"
                  }`}
                >
                  <li>
                    {!exposicion.enlace ? (
                      exposicion.titulo
                    ) : (
                      <a
                        href={exposicion.enlace}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exposicion.titulo} &nbsp;
                        <div className="w-8 relative inline-block align-middle">
                          <div className="arrow arrow-first" />
                          <div className="arrow arrow-second" />
                        </div>
                      </a>
                    )}
                  </li>
                  <li>{exposicion.linea2}</li>
                  <li>{exposicion.linea3}</li>
                  <li>{exposicion.linea4}</li>
                  {currentUser && (
                    <li className="flex gap-1 mt-1">
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
                    </li>
                  )}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </section>
        <section className="block md:flex flex-col items-center justify-center">
          {finalizadas?.length > 0 && (
            <h2 className="pb-[1rem] text-base lg:text-xl xl:text-xl">
              Finalizadas
            </h2>
          )}
          <motion.ul
            variants={ulVariants}
            ref={ref}
            initial={ulVariants.closed}
            animate={isInView ? "open" : "closed"}
            className="exposiciones flex flex-col gap-4 items-start md:items-center justify-center"
          >
            {finalizadas?.map((exposicion, index) => (
              <motion.li
                key={exposicion.id}
                variants={liVariants}
                initial={liVariants.closed}
                className="block md:grid md:grid-cols-[1fr_5rem_5rem_1fr] lg:grid-cols-[1fr_7rem_7rem_1fr] xl:grid-cols-[1fr_8rem_8rem_1fr] gap-8"
              >
                <span
                  className={`text-6xl text-neutral-200 md:flex items-start tracking-wider mt-[-0.5rem] hidden ${
                    index % 2 === 0
                      ? "col-start-1 col-end-2 row-start-1 row-end-2 justify-end me-[-1rem]"
                      : "col-start-4 col-end-5 row-start-1 row-end-2 justify-start ms-[-1rem]"
                  }`}
                >
                  {("0" + index).substr(-2)}
                </span>
                <div className="overflow-hidden">
                  {exposicion.enlace ? (
                    <a
                      href={exposicion.enlace}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={exposicion.imagenURL}
                        alt={exposicion.titulo}
                        className={`xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20 object-cover hidden md:inline-flex border grayscale ${
                          index % 2 === 0
                            ? "col-start-2 col-end-3 row-start-1 row-end-2"
                            : "col-start-3 col-end-4 row-start-1 row-end-2"
                        }`}
                      />
                    </a>
                  ) : (
                    <img
                      src={exposicion.imagenURL}
                      alt={exposicion.titulo}
                      className={`xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20 object-cover hidden md:inline-flex border grayscale ${
                        index % 2 === 0
                          ? "col-start-2 col-end-3 row-start-1 row-end-2"
                          : "col-start-3 col-end-4 row-start-1 row-end-2"
                      }`}
                    />
                  )}
                </div>
                <ul
                  className={`block md:flex flex-col justify-end ${
                    index % 2 === 0
                      ? "col-start-3 col-end-5 items-start row-start-1 row-end-2 md:ms-[-1rem]"
                      : "col-start-1 col-end-3 items-end row-start-1 row-end-2 md:me-[-1rem] md:text-right"
                  }`}
                >
                  <li>
                    {!exposicion.enlace ? (
                      exposicion.titulo
                    ) : (
                      <a
                        href={exposicion.enlace}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exposicion.titulo} &nbsp;
                        <div className="w-8 relative inline-block align-middle">
                          <div className="arrow arrow-first" />
                          <div className="arrow arrow-second" />
                        </div>
                      </a>
                    )}
                  </li>
                  <li>{exposicion.linea2}</li>
                  <li>{exposicion.linea3}</li>
                  <li>{exposicion.linea4}</li>
                  {currentUser && (
                    <li className="flex gap-1 mt-1">
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
                    </li>
                  )}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </>
  )
}

export default Exposiciones
