import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Premios = () => {
  const [fullPage, setFullPage] = useState(false)
  const [obraUrl, setObraUrl] = useState()
  const detalleRef = useRef(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  function onDetallePanStart(_, info) {
    detalleRef.current = info.point.y
  }

  function onDetallePanEnd(_, info) {
    if (info.point.y < detalleRef.current) {
      setFullPage(false)
    }
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
            className={`bg-white fixed z-[100] inset-x-0 bottom-0 w-screen h-screen touch-pinch-zoom overflow-hidden`}
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
      <div className="bg-white px-[1rem] lg:px-[4rem] text-xs w-screen ">
        <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
          premios y menciones
        </h1>
        <motion.ul
          variants={ulVariants}
          ref={ref}
          initial={ulVariants.closed}
          animate={isInView ? "open" : "closed"}
          className="flex flex-col gap-[0.5rem] items-center lg:items-start flex-nowrap whitespace-nowrap"
        >
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
            whileTap={{ scale: 1.1 }}
            onClick={() => {
              setObraUrl("/premio-meduina-schneider.jpg")
              setFullPage(true)
            }}
          >
            2º premio Menduina Schneider Art Gallery (2021)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
          >
            Premio votación popular Pintura Rápida Plaza Dalí (2019)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
          >
            1er Premio Pintura Rápida Plaza Dalí (2017)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
          >
            1er Premio Pintura Rápida Plaza Dalí (2015)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
          >
            Selección pintura rápida Retiro (2011)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
          >
            1er Premio Pintura Rápida Plaza Dalí (2010)
          </motion.li>
          <motion.li
            variants={liVariants}
            initial={liVariants.closed}
          >
            Selección pintura rápida Retiro (2009)
          </motion.li>
          <motion.li
            className="cursor-pointer"
            variants={liVariants}
            initial={liVariants.closed}
            whileTap={{ scale: 1.1 }}
            onClick={() => {
              setObraUrl("/premio-enrique-lite.jpg")
              setFullPage(true)
              disableScroll()
            }}
          >
            Tercer premio. Certamen nacional de pintura Enrique Lite
          </motion.li>
        </motion.ul>
      </div>
    </>
  )
}

export default Premios
