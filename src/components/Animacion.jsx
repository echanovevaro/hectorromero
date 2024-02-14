import { motion } from "framer-motion"
import { useParallax } from "react-scroll-parallax"
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
          className="w-screen h-full flex justify-end flex-col items-center pb-[2rem] gap-1 font-normal text-white z-[10] text-lg"
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
