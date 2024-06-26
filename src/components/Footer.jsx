import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="text-xs lg:text-sm  text-neutral-400 w-full opacity-80">
      <div className="square-footer max-w-[1344px] min-[1600px]:mx-auto lg:mx-[8rem] mx-[1rem] py-[2rem]">
        <div className="brand">
          <Link
            to="/"
            className="flex items-center justify-center lg:items-start lg:justify-start lg:max-w-fit"
          >
            <img
              src="/faviconweb.png"
              alt="hector romero"
            />
          </Link>
        </div>
        <ul className="legal">
          <li>
            <ul>
              <li className="text-base ">LEGAL</li>
              <motion.li whileTap={{ scale: 1.1 }}>
                <Link to="/legal">aviso legal</Link>
              </motion.li>
            </ul>
          </li>
        </ul>
        <ul className="contacto">
          <li className="text-base  hidden md:block">CONTACTO</li>
          <li>(+34)645 97 90 39</li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="mailto:art@hectoromero.es">art@hectoromero.es</a>
          </motion.li>
          <li>
            <ul className="flex flex-start flex-col">
              <li>
                <ul className="flex justify-start items-enter">
                  <motion.li whileTap={{ scale: 1.1 }}>
                    <a
                      href="https://instagram.com/hectoromero645/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#737373"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </motion.li>
                  <motion.li whileTap={{ scale: 1.1 }}>
                    <a
                      href="https://facebook.com/hector.romero.9659/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#737373"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <g transform="scale(5.12,5.12)">
                            <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,-0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,-0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,1.46188 -1.15039,2.40039v4h4.7793l-0.59961,3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,-3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </motion.li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="mapa">
          <li className="text-base ">MAPA</li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/obra">obra</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/exposiciones">exposiciones</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/premios">premios</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/sobre-mi">sobre mí</Link>
          </motion.li>
        </ul>
        <ul className="series">
          <li className="text-base ">OBRA</li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/obra/bloques">bloques</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/obra/wood">wood</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/obra/iluminados">iluminados</Link>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <Link to="/obra/wire">wire</Link>
          </motion.li>
        </ul>
        <ul className="copy flex">
          <li className="text-base  hidden md:block">CRÉDITOS</li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a
              href="https://portfolio-alvaro-echanove.netlify.app/"
              target="_black"
            >
              web álvaro riaño
            </a>
          </motion.li>
          <li>©Héctor Romero 2024.</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
