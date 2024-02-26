import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Form as RouterForm,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom"
import { useAuthContext } from "../context/authContext"

export default function MainNavigation() {
  const { currentUser } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const panRef = useRef(0)

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  function onPanStart(_, info) {
    panRef.current = info.point.y
  }

  function onPanEnd(_, info) {
    if (info.point.y < panRef.current) {
      setIsOpen(false)
    }
  }

  const divVariants = {
    open: { y: 0 },
    closed: {
      y: "-100dvh",
      transition: { duration: 0.5, delay: 0.7 },
    },
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

  useEffect(() => {
    if (isOpen) {
      document.getElementById("burguer").classList.add("open")
    } else {
      document.getElementById("burguer").classList.remove("open")
    }
  }, [isOpen])

  return (
    <>
      <nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={divVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.5 }}
              onPanStart={onPanStart}
              onPanEnd={onPanEnd}
              className="z-[19] fixed top-0 inset-x-0 h-screen bg-white text-base touch-pinch-zoom"
            >
              <motion.ul
                variants={ulVariants}
                className="opacity-[0.7]"
              >
                <motion.li
                  variants={liVariants}
                  initial={liVariants.closed}
                  whileTap={{ scale: 1.1 }}
                >
                  {pathname !== "/" ? (
                    <Link to="/">INICIO</Link>
                  ) : (
                    <span onClick={toggleOpen}>INICIO</span>
                  )}
                </motion.li>
                <motion.li
                  variants={liVariants}
                  initial={liVariants.closed}
                  whileTap={{ scale: 1.1 }}
                >
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      if (pathname !== "/obra") {
                        navigate("/obra")
                      } else {
                        toggleOpen()
                      }
                    }}
                  >
                    <span>OBRA</span>
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mt-[-0.3rem]"
                >
                  {pathname !== "/obra/bloques" ? (
                    <Link to="/obra/bloques">bloques</Link>
                  ) : (
                    <span onClick={toggleOpen}>bloques</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mt-[-0.3rem]"
                >
                  {pathname !== "/obra/wood" ? (
                    <Link to="/obra/wood">wood</Link>
                  ) : (
                    <span onClick={toggleOpen}>wood</span>
                  )}
                </motion.li>

                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mt-[-0.3rem]"
                >
                  {pathname !== "/obra/wire" ? (
                    <Link to="/obra/wire">wire</Link>
                  ) : (
                    <span onClick={toggleOpen}>wire</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mt-[-0.3rem]"
                >
                  {pathname !== "/obra/iluminados" ? (
                    <Link to="/obra/iluminados">iluminados</Link>
                  ) : (
                    <span onClick={toggleOpen}>iluminados</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mt-[-0.3rem]"
                >
                  {pathname !== "/obra/animaciones" ? (
                    <Link to="/obra/animaciones">animaciones</Link>
                  ) : (
                    <span onClick={toggleOpen}>animaciones</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  {pathname !== "/exposiciones" ? (
                    <Link to="/exposiciones">EXPOSICIONES</Link>
                  ) : (
                    <span onClick={toggleOpen}>EXPOSICIONES</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  {pathname !== "/premios" ? (
                    <Link to="/premios">PREMIOS</Link>
                  ) : (
                    <span onClick={toggleOpen}>PREMIOS</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  {pathname !== "/sobre-mi" ? (
                    <Link to="/sobre-mi">SOBRE MÍ</Link>
                  ) : (
                    <span onClick={toggleOpen}>SOBRE MÍ</span>
                  )}
                </motion.li>
                {/* <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  <span>CONTACTO</span>
                </motion.li> */}
                {currentUser && (
                  <motion.li
                    initial={liVariants.closed}
                    variants={liVariants}
                    whileTap={{ scale: 1.1 }}
                  >
                    <RouterForm
                      method="post"
                      action="/logout"
                    >
                      <button type="submit">DESCONECTAR</button>
                    </RouterForm>
                  </motion.li>
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <motion.div
        className="fixed top-0 left-0 w-screen z-20 shadow-md bg-white"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`px-[1rem] lg:px-[4rem] max-w-[1600px] min-[1600px]:mx-auto flex justify-between items-center bg-white uppercase`}
        >
          <motion.h1 className="py-5">
            <Link to="/">
              <img
                src="/logo.png"
                className="h-2.5 opacity-[0.5]"
              />
            </Link>
            {currentUser && (
              <span className="text-neutral-300 ml-1"> ADMIN MODE</span>
            )}
          </motion.h1>
          <ul className="hidden lg:flex text-sm lg.text-base h-full">
            <li className="py-5">
              {pathname !== "/" ? (
                <Link to="/">INICIO</Link>
              ) : (
                <motion.span whileTap={{ scale: 1.1 }}>INICIO</motion.span>
              )}
            </li>
            <li className="menu-obra">
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="flex items-center gap-2 py-5"
                onClick={() => {
                  if (pathname !== "/obra") {
                    navigate("/obra")
                  }
                }}
              >
                <span>OBRA</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </motion.button>
              <ul className="obra-dropdown hidden absolute z-[-1] bg-white divide-y divide-gray-100 border border-gray-100 lowercase">
                <motion.li
                  whileTap={{ scale: 1.1 }}
                  className="px-4 py-2 block"
                >
                  {pathname !== "/obra/bloques" ? (
                    <Link to="/obra/bloques">bloques</Link>
                  ) : (
                    <span>bloques</span>
                  )}
                </motion.li>
                <motion.li
                  whileTap={{ scale: 1.1 }}
                  className="px-4 py-2 block"
                >
                  {pathname !== "/obra/wood" ? (
                    <Link to="/obra/wood">wood</Link>
                  ) : (
                    <span>wood</span>
                  )}
                </motion.li>

                <motion.li
                  whileTap={{ scale: 1.1 }}
                  className="px-4 py-2 block"
                >
                  {pathname !== "/obra/wire" ? (
                    <Link to="/obra/wire">wire</Link>
                  ) : (
                    <span>wire</span>
                  )}
                </motion.li>
                <motion.li
                  whileTap={{ scale: 1.1 }}
                  className="px-4 py-2 block"
                >
                  {pathname !== "/obra/iluminados" ? (
                    <Link to="/obra/iluminados">iluminados</Link>
                  ) : (
                    <span>iluminados</span>
                  )}
                </motion.li>
                <motion.li
                  whileTap={{ scale: 1.1 }}
                  className="px-4 py-2 block"
                >
                  {pathname !== "/obra/animaciones" ? (
                    <Link to="/obra/animaciones">animaciones</Link>
                  ) : (
                    <span>animaciones</span>
                  )}
                </motion.li>
              </ul>
            </li>

            <motion.li
              className="py-5"
              whileTap={{ scale: 1.1 }}
            >
              {pathname !== "/exposiciones" ? (
                <Link to="/exposiciones">EXPOSICIONES</Link>
              ) : (
                <span>EXPOSICIONES</span>
              )}
            </motion.li>
            <motion.li
              className="py-5"
              whileTap={{ scale: 1.1 }}
            >
              {pathname !== "/premios" ? (
                <Link to="/premios">PREMIOS</Link>
              ) : (
                <span>PREMIOS</span>
              )}
            </motion.li>
            <motion.li
              className="py-5"
              whileTap={{ scale: 1.1 }}
            >
              {pathname !== "/sobre-mi" ? (
                <Link to="/sobre-mi">SOBRE MÍ</Link>
              ) : (
                <span>SOBRE MÍ</span>
              )}
            </motion.li>
            {/* <motion.li whileTap={{ scale: 1.1 }}>
              <span>CONTACTO</span>
            </motion.li> */}
            {currentUser && (
              <motion.li
                whileTap={{ scale: 1.1 }}
                className="py-5"
              >
                <RouterForm
                  method="post"
                  action="/logout"
                >
                  <button type="submit">DESCONECTAR</button>
                </RouterForm>
              </motion.li>
            )}
          </ul>
          <button
            id="burguer"
            onClick={() => {
              toggleOpen()
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </motion.div>
    </>
  )
}
