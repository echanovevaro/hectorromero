import { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import {
  Form as RouterForm,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function MainNavigation() {
  const { currentUser } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const divVariants = {
    open: { y: 0 },
    closed: {
      y: "-100dvh",
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

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
  };

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
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("burguer").classList.add("open");
    } else {
      document.getElementById("burguer").classList.remove("open");
    }
  }, [isOpen]);

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
              className="h-full fixed inset-0 z-20 bg-white font-extralight text-base"
            >
              <motion.ul variants={ulVariants} className="opacity-[0.7]">
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
                        navigate("/obra");
                      } else {
                        toggleOpen();
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
                  className="ms-10 mb-[0.5rem] mt-[-0.5rem] uppercase"
                >
                  {pathname !== "/obra/bloques" ? (
                    <Link to="/obra/bloques">serie bloques</Link>
                  ) : (
                    <span onClick={toggleOpen}>serie bloques</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 mb-[0.5rem] uppercase"
                >
                  {pathname !== "/obra/wood" ? (
                    <Link to="/obra/wood">serie wood</Link>
                  ) : (
                    <span onClick={toggleOpen}>serie wood</span>
                  )}
                </motion.li>

                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                  className="ms-10 uppercase"
                >
                  {pathname !== "/obra/wire" ? (
                    <Link to="/obra/wire">serie wire</Link>
                  ) : (
                    <span onClick={toggleOpen}>serie wire</span>
                  )}
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  <span>EXPOSICIONES</span>
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  <span>SOBRE MÍ</span>
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileTap={{ scale: 1.1 }}
                >
                  <span>CONTACTO</span>
                </motion.li>
                {currentUser && (
                  <motion.li
                    initial={liVariants.closed}
                    variants={liVariants}
                    whileTap={{ scale: 1.1 }}
                  >
                    <RouterForm method="post" action="/logout">
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
        className="fixed top-0 left-0 right-0 z-[200]"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`px-4 py-6 flex justify-between items-center bg-white shadow-md z-10 lg:hidden uppercase`}
        >
          <h1>
            <Link to="/">héctor romero</Link>
            {currentUser && (
              <span className="text-neutral-300 ml-1"> ADMIN MODE</span>
            )}
          </h1>
          <button
            id="burguer"
            onClick={() => {
              toggleOpen();
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </motion.div>
    </>
  );
}
