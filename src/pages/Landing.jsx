import { useEffect, useState } from "react"
import MainNavigation from "../components/MainNavigation"
import { useParallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import ObraMenu from "../components/ObraMenu"
import Footer from "../components/Footer"
import About from "../components/About"
import Premios from "../components/Premios"
import { ScrollRestoration } from "react-router-dom"
import ObraMenuMobile from "../components/ObraMenuMobile"

function Landing() {
  const [showMenu, setShowMenu] = useState(false)
  const parallax = useParallax({
    speed: -50,
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMenu(true)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      <ScrollRestoration />
      {showMenu && <MainNavigation />}
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
      <section className={`absolute top:[100dvh] inset-x-0 z-19`}>
        <div className="bg-white pb-8 pt-[3rem] text-xs">
          <div className="hidden lg:block">
            <ObraMenu />
          </div>
          <div className="lg:hidden">
            <ObraMenuMobile />
          </div>
        </div>
        <article className="flex justify-start lg:hidden">
          <div className="bg-neutral-800 text-neutral-400 pt-[2rem] pb-8 text-xs w-screen">
            <About />
          </div>
        </article>
        <article className="flex justify-start lg:hidden">
          <div className="pb-12 pt-[2rem] bg-white">
            <Premios />
          </div>
        </article>
        <article className="flex justify-start">
          <div className="bg-white text-xs w-screen">
            <Footer />
          </div>
        </article>
      </section>
    </>
  )
}
export default Landing
