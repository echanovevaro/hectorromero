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
                y: window.scrollY - window.innerHeight,
              },
              visible: { y: window.scrollY },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            onPanStart={onDetallePanStart}
            onPanEnd={onDetallePanEnd}
            className="bg-white absolute w-screen z-[600] h-screen inset-0 touch-pinch-zoom"
          >
            <motion.div
              onPanStart={onDetallePanStart}
              onPanEnd={onDetallePanEnd}
              transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
              className="w-full h-full bg-contain bg-no-repeat bg-center bg-white z-[650] landscape:-top-[3.5rem] landscape:bottom-[3.5rem] touch-pinch-zoom"
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
      <div className="bg-white px-[1rem] text-xs z-[15] w-screen overflow-hidden">
        <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
          premios y menciones
        </h1>
        <motion.ul
          variants={ulVariants}
          ref={ref}
          initial={ulVariants.closed}
          animate={isInView ? "open" : "closed"}
          className="flex flex-col gap-[0.5rem] items-center flex-nowrap whitespace-nowrap z-10"
        >
          <motion.li
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
            variants={liVariants}
            initial={liVariants.closed}
          >
            Premio votación popular Pintura Rápida Plaza Dalí (2019)
          </motion.li>
          <motion.li
            variants={liVariants}
            initial={liVariants.closed}
          >
            1er Premio Pintura Rápida Plaza Dalí (2017)
          </motion.li>
          <motion.li
            variants={liVariants}
            initial={liVariants.closed}
          >
            1er Premio Pintura Rápida Plaza Dalí (2015)
          </motion.li>
          <motion.li
            variants={liVariants}
            initial={liVariants.closed}
          >
            Selección pintura rápida Retiro (2011)
          </motion.li>
          <motion.li
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
            variants={liVariants}
            initial={liVariants.closed}
            whileTap={{ scale: 1.1 }}
            onClick={() => {
              setObraUrl("/premio-enrique-lite.jpg")
              setFullPage(true)
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
