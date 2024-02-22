import { motion } from "framer-motion"
import { useParallax } from "react-scroll-parallax"
import classes from "./Slider.module.css"
function Animacion({ showMenu }) {
  const parallax = useParallax({
    speed: -50,
  })
  return (
    <div
      className="wrapper"
      ref={parallax.ref}
    >
      <div className="background" />
      <div className="blur" />
      {showMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white absolute top-[20%] left-[2rem] font-normal"
        >
          <a
            href="https://www.jucaclaret.com/es/hector-romero"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-xl text-neutral-400">Próximas exposiciones</h1>
            <h2 className="text-xl">JUSTMAD 2024</h2>
            <h3 className="text-base">Contemporary Art Fair</h3>
            <h3 className="text-base">7 - 10 marzo Palacio Neptuno (Madrid)</h3>
            <h3 className="text-base">Stand E7 Luca Claret</h3>
          </a>
        </motion.div>
      )}
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
          className="w-screen h-full flex justify-end flex-col items-center pb-[3rem] gap-1 font-normal text-white z-[10] text-lg"
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
