import { motion } from "framer-motion"
import { useParallax } from "react-scroll-parallax"
import { useAuthContext } from "../context/authContext"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Animacion({ showMenu, background, exposiciones }) {
  const parallax = useParallax({
    speed: -50,
  })
  const { currentUser } = useAuthContext()

  useEffect(() => {
    if (background) {
      const imgLoader = function (obra) {
        var link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = obra.imagenURL

        document.head.appendChild(link)
      }
      imgLoader(background)
    }

    return () => {
      const links = document.querySelector('link[rel="preload"]')
      if (links && links.length > 0) {
        links.forEach((el) => el.remove())
      }
    }
  }, [background])

  return (
    <div
      className="wrapper"
      ref={parallax.ref}
    >
      <div
        className="background"
        style={{ backgroundImage: `url('${background?.imagenURL}')` }}
      />
      <div className="blur" />
      {showMenu && currentUser && (
        <div className="absolute top-[5rem] right-[1rem] text-white">
          <Link
            className="z-10"
            to={`landing/${background.id}/edit`}
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
      {showMenu &&
        exposiciones?.map((exposicion) => (
          <motion.div
            key={exposicion.id}
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
                Próximas exposiciones
              </h1>
              <h2 className="text-xl">{exposicion.titulo}</h2>
              <h3 className="text-base">{exposicion.linea2}</h3>
              <h3 className="text-base">{exposicion.linea3}</h3>
              <h3 className="text-base">{exposicion.linea4}</h3>
            </a>
          </motion.div>
        ))}
      {showMenu && (
        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            let pageHeight = window.innerHeight
            let scroll = pageHeight - window.scrollY - 63
            window.scrollBy({
              top: scroll,
              left: 0,
              behavior: "smooth",
            })
          }}
          className="w-full h-full flex justify-end flex-col items-center pb-[3rem] gap-1 font-normal text-white z-[10] text-lg"
        >
          <span className="z-[500]">scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 z-[500]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.button>
      )}
    </div>
  )
}
export default Animacion
