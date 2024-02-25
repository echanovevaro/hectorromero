import { useEffect, useRef, useState } from "react"
import classes from "./Slider.module.css"
import { useQuery } from "@tanstack/react-query"
import { fetchAll } from "../http"
import { motion } from "framer-motion"
import { useAuthContext } from "../context/authContext"
import { Link } from "react-router-dom"

function Slider({ exposiciones }) {
  const [current, setCurrent] = useState(0)
  const timeout = useRef(null)
  const { currentUser } = useAuthContext()

  const { data } = useQuery({
    queryKey: ["landing"],
    queryFn: () => fetchAll("landing"),
  })

  useEffect(() => {
    if (data?.length) {
      const nextSlide = () => {
        setCurrent((current) => (current === data.length - 1 ? 0 : current + 1))
      }

      timeout.current = setTimeout(nextSlide, 5000)
    }
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, data])

  useEffect(() => {
    if (data?.length) {
      const imgLoader = function (obra) {
        var link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = obra.imagenURL

        document.head.appendChild(link)
      }
      data?.forEach((obra) => {
        imgLoader(obra)
      })
    }

    return () => {
      const links = document.querySelector('link[rel="preload"]')
      if (links && links.length > 0) {
        links.forEach((el) => el.remove())
      }
    }
  }, [data])

  if (!Array.isArray(data) || data.length <= 0) {
    return null
  }

  return (
    <div className="bg-gray-100 h-full p-2">
      <div className="bg-white my-[1rem] lg:mx-[4rem] mt-[5rem] p-[1rem] xl:max-w-[1472px] xl:mx-auto">
        {currentUser && (
          <div className="mb-[1rem]">
            <Link
              to="/landing/puO8PFL8kfjRYs0ld94H/edit"
              className="text-sky-400 font-medium flex gap-2"
            >
              <span>Editar animación móvil</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Link>
          </div>
        )}
        {data.map((slide, index) => (
          <div key={index}>
            {index === current && (
              <>
                <section className={`${classes.banner} h-[60dvh] xl:h-[70dvh]`}>
                  <motion.img
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2 }}
                    src={slide.imagenURL}
                    alt={slide.titulo}
                  />
                  {currentUser && (
                    <div className="absolute top-[1rem] right-[1rem] text-white">
                      <Link
                        className="z-10"
                        to={`${slide.id}/edit `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                  {exposiciones?.length > 0 && (
                    <motion.div
                      key={exposiciones[exposiciones.length - 1].id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white absolute top-[20%] left-[2rem] font-normal"
                    >
                      <a
                        href="https://www.jucaclaret.com/es/hector-romero"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h1 className="text-xl text-neutral-400">
                          Próxima exposición
                        </h1>
                        <h2 className="text-xl">
                          {exposiciones[exposiciones.length - 1].titulo}
                        </h2>
                        <h3 className="text-base">
                          {exposiciones[exposiciones.length - 1].linea2}
                        </h3>
                        <h3 className="text-base">
                          {exposiciones[exposiciones.length - 1].linea3}
                        </h3>
                        <h3 className="text-base">
                          {exposiciones[exposiciones.length - 1].linea4}
                        </h3>
                      </a>
                    </motion.div>
                  )}
                </section>
                <section className="grid grid-cols-[4fr_1fr_1fr] text-xs lg:text-sm xl:text-base text-neutral-400 pt-2">
                  <div className="col-start-1 col-end-2 flex flex-col">
                    <span>{slide.titulo}</span>
                    <span className={`${classes.textSmall} lg:text-xs`}>
                      {slide.descripcion}
                    </span>
                  </div>
                  <span className="col-start-2 col-end-3 capitalize">
                    Serie {slide.serie}
                  </span>
                  <span className="col-start-3 col-end-4">
                    {current + 1} | {data.length}
                  </span>
                </section>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Slider
