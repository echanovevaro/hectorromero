import { useEffect, useRef, useState } from "react"
import classes from "./Slider.module.css"
import { useQuery } from "@tanstack/react-query"
import { fetchAll } from "../http"
import { motion } from "framer-motion"
import { useAuthContext } from "../context/authContext"
import { Link } from "react-router-dom"

function Slider() {
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
    console.log(data)
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
    <div className="bg-gray-100 h-[110dvh] w-screen absolute top-0 left-0">
      <div className="bg-white m-[1rem] lg:m-[4rem] mt-[5rem] lg:mt-[5rem] p-[1rem]">
        {data.map((slide, index) => (
          <div key={index}>
            {index === current && (
              <>
                <section className={classes.banner}>
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

                  {/* <div className={classes.textBox}>
                      <h1 className="text-lg">
                        Lorem ipsum dolor sit amet consectetur
                      </h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos voluptatem, quidem, doloremque, dolores quae{" "}
                      </p>
                    </div> */}
                </section>
                <section className="grid grid-cols-[4fr_1fr_1fr] text-xs text-neutral-400 pt-2">
                  <div className="col-start-1 col-end-2 flex flex-col">
                    <span>{slide.titulo}</span>
                    <span className={classes.textSmall}>
                      {slide.descripcion}
                    </span>
                  </div>
                  <span className="col-start-2 col-end-3">
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
