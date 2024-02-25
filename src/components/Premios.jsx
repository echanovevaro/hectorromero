import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useAuthContext } from "../context/authContext"
import { Link, useSubmit } from "react-router-dom"
import Modal from "./Modal"

const Premios = ({ data }) => {
  const orederedData = data.sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  )
  const [isDeleting, setIsDeleting] = useState(false)
  const [premioToDelete, setPremioToDelete] = useState()
  const [fullPage, setFullPage] = useState(false)
  const [obraUrl, setObraUrl] = useState()
  const detalleRef = useRef(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const { currentUser } = useAuthContext()
  const submit = useSubmit()

  function onDetallePanStart(_, info) {
    detalleRef.current = info.point.y
  }

  function onDetallePanEnd(_, info) {
    if (info.point.y < detalleRef.current) {
      setFullPage(false)
    }
  }

  function handleDelete() {
    const formData = new FormData()
    if (premioToDelete.imagenRef) {
      formData.append("ref", premioToDelete.imagenRef)
    }
    setIsDeleting(false)
    setPremioToDelete(null)
    submit(formData, {
      method: "delete",
      action: `/premios/${premioToDelete.id}/delete`,
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
      <AnimatePresence>
        {fullPage && (
          <motion.div
            variants={{
              hidden: {
                y: " -100dvh",
              },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            onPanStart={onDetallePanStart}
            onPanEnd={onDetallePanEnd}
            className={`bg-white fixed z-[100] inset-x-0 bottom-0 w-full h-screen touch-pinch-zoom overflow-hidden`}
          >
            <motion.div
              onPanStart={onDetallePanStart}
              onPanEnd={onDetallePanEnd}
              transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
              className={`w-full h-full bg-contain bg-no-repeat bg-center bg-white landscape:-top-[3.5rem] landscape:bottom-[3.5rem] touch-pinch-zoom`}
              style={{
                backgroundImage: `url(${obraUrl})`,
              }}
              onClick={() => {
                setFullPage(false)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-white px-[1rem] lg:px-[4rem] text-xs w-full lg:text-sm xl:text-base max-w-[1600px] xl:mx-auto">
        <h1 className="pb-[1rem] uppercase text-base lg:text-xl  opacity-[0.7]">
          premios y menciones
        </h1>
        {currentUser && (
          <div className="mb-4">
            <Link
              to="/premios/new"
              className="text-sky-400 font-medium"
            >
              Añadir premio
            </Link>
          </div>
        )}
        <motion.ul
          variants={ulVariants}
          ref={ref}
          initial={ulVariants.closed}
          animate={isInView ? "open" : "closed"}
          className="flex flex-col gap-[0.5rem] items-center lg:items-start flex-nowrap whitespace-nowrap"
        >
          {orederedData.map((premio) => (
            <motion.li
              key={premio.id}
              className={`${
                premio.imagenURL ? "cursor-pointer" : ""
              } flex items-center gap-2`}
              variants={liVariants}
              initial={liVariants.closed}
            >
              <span
                className={`${premio.imagenURL ? "underline" : ""}`}
                onClick={() => {
                  if (premio.imagenURL) {
                    setObraUrl(premio.imagenURL)
                    setFullPage(true)
                  }
                }}
              >
                {premio.titulo}
              </span>
              {currentUser && (
                <Link
                  to={`/premios/${premio.id}/edit `}
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
              )}
              {currentUser && (
                <button
                  className="text-sky-400"
                  onClick={() => {
                    setIsDeleting(true)
                    setPremioToDelete(premio)
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
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}

export default Premios
