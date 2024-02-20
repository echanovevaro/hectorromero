import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Exposiciones = () => {
  const [fullPage, setFullPage] = useState(false)
  const [obraUrl, setObraUrl] = useState()
  const detalleRef = useRef(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
            transition={{ duration: 1.2, type: "spring", bounce: 0.1 }}
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
      <div className="px-[1rem] lg:px-[4rem] text-xs w-screen lg:text-sm">
        <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
          exposiciones
        </h1>
        <motion.ul
          variants={ulVariants}
          ref={ref}
          initial={ulVariants.closed}
          animate={isInView ? "open" : "closed"}
          className="flex flex-col gap-[1rem] lg:gap-[0.5rem] items-start flex-nowrap"
        >
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/menduina.jpg"
              alt="Menduina & Schneider"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Menduina & Schneider Art Gallery</span>
              <span>Los Ángeles, California</span>
              <span>2022</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start cursor-pointer flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open(
                "https://www.madsgallery.art/item/4eef4467-6045-4335-a2d9-a58fa51aef2c/artist/he%CC%81ctor-romero",
                "_blank"
              )
            }}
          >
            <img
              src="/exposiciones/Hector-Romero-1024x1024.jpg"
              alt="Mads Milano"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Mads Milano</span>
              <span>Milán</span>
              <span>Marzo 2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start cursor-pointer flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open(
                "https://www.montsequi.com/exp_09_2020.html",
                "_blank"
              )
            }}
          >
            <img
              src="/exposiciones/escaparate.jpg"
              alt="Montsequi"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Madrid</span>
              <span>Enero 2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/Van-gogh.jpg"
              alt="Feria de arte en Monaco"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Feria de arte en Monaco</span>
              <span>Exposición colectiva</span>
              <span>2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open(
                "https://www.montsequi.com/exp_09_2020.html",
                "_blank"
              )
            }}
          >
            <img
              src="/exposiciones/montsequi2021.jpg"
              alt="Montsequi"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Exposición colectiva</span>
              <span>Madrid</span>
              <span>2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/HR-arb1.jpg"
              alt="Pere Casaldáliga de la Claret"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>
                XXXIX Muestra internacional y multidisciplinar de arte
                contemporáneo
              </span>
              <span>Sala Pere Casaldáliga de la Claret</span>
              <span>Barcelona</span>
              <span>Abril 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/xxxviii_muestra_mont_marzo.jpg"
              alt="Montesquiu"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>
                XXXVIII Muestra internacional y multidisciplinar de arte
                contemporáneo
              </span>
              <span>Barcelona</span>
              <span>Marzo 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start cursor-pointer flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open(
                "https://www.jucaclaret.com/es/hector-romero",
                "_blank"
              )
            }}
          >
            <img
              src="/exposiciones/20200306_192922.jpg"
              alt="Juca Claret"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Juca Claret</span>
              <span>Madrid</span>
              <span>Marzo 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start cursor-pointer flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open("https://www.abartium.com/galeria-de-arte/", "_blank")
            }}
          >
            <img
              src="/exposiciones/abartium.jpg"
              alt="Abartium"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Abartium</span>
              <span>Barcelona</span>
              <span>Febrero 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start cursor-pointer flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.open(
                "https://www.montsequi.com/exp_01_2020.html",
                "_blank"
              )
            }}
          >
            <img
              src="/exposiciones/2020-1c.jpg"
              alt="Montsequi"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Madrid</span>
              <span>Enero 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/biblioretiro.jpg"
              alt="Biblioteca (Parque de El Retiro)"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Biblioteca (Parque de El Retiro)</span>
              <span>Madrid</span>
              <span>Exposición colectiva</span>
              <span>2019</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/perspectivadual.jpg"
              alt="Perspectiva Dual"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Biblioteca (Parque de El Retiro) Perspectiva Dual</span>
              <span>Madrid</span>
              <span>Exposición colectiva</span>
              <span>2019</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/invasion.jpg"
              alt="Invasión"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Theredoom</span>
              <span>“Invasión” (intervención artística real/virtual)</span>
              <span>2018</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/Foto0085.jpg"
              alt="Exposición colectiva seleccionados pintura rápida parque de El Retiro"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>
                Exposición colectiva seleccionados pintura rápida parque de El
                Retiro
              </span>
              <span>
                Sala Exposiciones Junta Distrito, Daoiz y Velarde y Casa de
                Vacas (Parque de El Retiro)
              </span>
              <span>Madrid</span>
              <span>2011</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-2 justify-center items-start flex-col md:flex-row"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/h2.jpg"
              alt="Exposición colectiva seleccionados pintura rápida parque de El Retiro"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0"
            />
            <ul className="flex flex-col">
              <span>
                Exposición colectiva seleccionados pintura rápida parque de El
                Retiro
              </span>
              <span>Casa de Vacas (Parque de El Retiro)</span>
              <span>Madrid</span>
              <span>2009</span>
            </ul>
          </motion.li>
        </motion.ul>
      </div>
    </>
  )
}

export default Exposiciones
