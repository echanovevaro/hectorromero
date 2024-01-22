import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Form as RouterForm, Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function MainNavigation() {
  const { currentUser } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  const divVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0, transition: { delay: 0.5 } },
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
      {" "}
      <nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={divVariants}
              initial={false}
              animate="open"
              exit="closed"
              className="w-full min-h-full absolute top-0 left-0 z-20 bg-white font-light"
            >
              <motion.ul variants={ulVariants}>
                <motion.li
                  variants={liVariants}
                  initial={liVariants.closed}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="flex items-center gap-2">
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="ms-10 mb-[10px] mt-[-10px] uppercase"
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="ms-10 mb-[10px] uppercase"
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>EXPOSICIONES</span>
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>SOBRE MÍ</span>
                </motion.li>
                <motion.li
                  initial={liVariants.closed}
                  variants={liVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>CONTACTO</span>
                </motion.li>
                {currentUser && (
                  <motion.li
                    initial={liVariants.closed}
                    variants={liVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
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
          className={`px-8 py-6 flex justify-between items-center bg-white shadow-md z-10 lg:hidden uppercase`}
        >
          {/* <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.5 } }}
                className={`background-menu`}
              />
            )}
          </AnimatePresence> */}
          <h1>
            <span>
              héctor romero
              {currentUser && (
                <span className="text-neutral-300 ml-1"> ADMIN MODE</span>
              )}
            </span>
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
