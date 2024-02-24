import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useAuthContext } from "../context/authContext"
import { Link } from "react-router-dom"

const Exposiciones = ({ finalizadas, proximas }) => {
  const ref = useRef(null)
  const refProx = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isInViewProx = useInView(refProx, { once: true, amount: 0.2 })
  const { currentUser } = useAuthContext()

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
    <div className="px-[1rem] lg:px-[4rem] text-xs max-w-screen-xl mx-auto lg:text-sm">
      <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
        exposiciones
      </h1>
      <section className="mb-[1.5rem]">
        <h2 className="pb-[0.5rem] text-base">Próximamente</h2>
        {currentUser && (
          <div className="mb-4">
            <Link
              to="/exposiciones/proximas/new"
              className="text-sky-400 font-medium"
            >
              Añadir próxima exposición
            </Link>
          </div>
        )}
        <motion.ul
          variants={ulVariants}
          ref={refProx}
          initial={ulVariants.closed}
          animate={isInViewProx ? "open" : "closed"}
          className="flex flex-col gap-[1rem] items-start flex-nowrap"
        >
          {proximas?.map((exposicion) => (
            <motion.li
              key={exposicion.id}
              className={`flex gap-4 justify-center items-start ${
                exposicion.enlace ? "cursor-pointer" : ""
              }`}
              variants={liVariants}
              initial={liVariants.closed}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                window.open(exposicion.enlace, "_blank")
              }}
            >
              <img
                src={exposicion.imagenURL}
                alt={exposicion.titulo}
                className="w-20 h-20 object-cover hidden md:block"
              />
              <ul>
                <li>{exposicion.titulo}</li>
                <li>{exposicion.linea2}</li>
                <li>{exposicion.linea3}</li>
                <li>{exposicion.linea4}</li>
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <section>
        <h2 className="pb-[0.5rem] text-base">Finalizadas</h2>
        {currentUser && (
          <div className="mb-4">
            <Link
              to="/exposiciones/finalizadas/new"
              className="text-sky-400 font-medium"
            >
              Añadir exposición finalizada
            </Link>
          </div>
        )}
        <motion.ul
          variants={ulVariants}
          ref={ref}
          initial={ulVariants.closed}
          animate={isInView ? "open" : "closed"}
          className="flex flex-col gap-[1rem] items-start flex-nowrap"
        >
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/menduina.jpg"
              alt="Menduina & Schneider"
              className="w-20 h-20 lg:h-30 lg:w-30 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Menduina & Schneider Art Gallery</span>
              <span>Los Ángeles, California</span>
              <span>2022</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start cursor-pointer"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Mads Milano</span>
              <span>Milán</span>
              <span>Marzo 2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start cursor-pointer"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Madrid</span>
              <span>Enero 2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/Van-gogh.jpg"
              alt="Feria de arte en Monaco"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Feria de arte en Monaco</span>
              <span>Exposición colectiva</span>
              <span>2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Exposición colectiva</span>
              <span>Madrid</span>
              <span>2021</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/HR-arb1.jpg"
              alt="Pere Casaldáliga de la Claret"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
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
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/xxxviii_muestra_mont_marzo.jpg"
              alt="Montesquiu"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
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
            className="flex gap-4 justify-center items-start cursor-pointer"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Juca Claret</span>
              <span>Madrid</span>
              <span>Marzo 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start cursor-pointer"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Abartium</span>
              <span>Barcelona</span>
              <span>Febrero 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start cursor-pointer"
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
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Montsequi</span>
              <span>Madrid</span>
              <span>Enero 2020</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/biblioretiro.jpg"
              alt="Biblioteca (Parque de El Retiro)"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Biblioteca (Parque de El Retiro)</span>
              <span>Madrid</span>
              <span>Exposición colectiva</span>
              <span>2019</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/perspectivadual.jpg"
              alt="Perspectiva Dual"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Biblioteca (Parque de El Retiro) Perspectiva Dual</span>
              <span>Madrid</span>
              <span>Exposición colectiva</span>
              <span>2019</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/invasion.jpg"
              alt="Invasión"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
            />
            <ul className="flex flex-col">
              <span>Galería de arte Theredoom</span>
              <span>“Invasión” (intervención artística real/virtual)</span>
              <span>2018</span>
            </ul>
          </motion.li>
          <motion.li
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/Foto0085.jpg"
              alt="Exposición colectiva seleccionados pintura rápida parque de El Retiro"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
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
            className="flex gap-4 justify-center items-start"
            variants={liVariants}
            initial={liVariants.closed}
          >
            <img
              src="/exposiciones/h2.jpg"
              alt="Exposición colectiva seleccionados pintura rápida parque de El Retiro"
              className="w-20 h-20 object-cover grayscale hover:grayscale-0 hidden md:block"
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
      </section>
    </div>
  )
}

export default Exposiciones