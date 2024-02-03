import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const ObraMenu = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const navigate = useNavigate()

  return (
    <>
      <h1 className="uppercase pb-[1rem] text-base opacity-[0.7] self-start ms-[1rem] lg:ms-[4rem] justify-self-start">
        obra
      </h1>
      <div
        ref={ref}
        className="square text-xs"
      >
        <div
          className="content1"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <img src="/obra-1.jpg" />
        </div>
        <motion.div
          className="content1Title"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/bloques">
            <motion.span
              className="border-t border-neutral-400"
              whileTap={{ scale: 1.1, border: "none" }}
            >
              Bloques
            </motion.span>
          </Link>
        </motion.div>
        <div
          className="content2"
          style={{
            transform: isInView ? "none" : "translateY(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wire")}
        >
          <img src="/obra-2.jpg" />
        </div>
        <div
          className="content2Title"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/wire">
            <motion.span
              className="border-t border-neutral-400"
              whileTap={{ scale: 1.1, border: "none" }}
            >
              Wire
            </motion.span>
          </Link>
        </div>
        <div
          className="content3"
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/iluminados")}
        >
          <img src="/obra-3.jpg" />
        </div>
        <div
          className="content3Title"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/iluminados">
            <motion.span
              className="border-t border-neutral-400"
              whileTap={{ scale: 1.1, border: "none" }}
            >
              Iluminados
            </motion.span>
          </Link>
        </div>
        <div
          className="content4"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/animaciones")}
        >
          <img src="/obra-4.gif" />
        </div>
        <div
          className="content4Title"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="/obra/animaciones">
            <motion.span
              className="border-b border-neutral-400"
              whileTap={{ scale: 1.1, border: "none" }}
            >
              Animaciones
            </motion.span>
          </Link>
        </div>

        <div
          className="content5"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        ></div>
        <div
          className="content6"
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        ></div>
        <div
          className="content5-6Title"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/wood">
            <motion.span
              className="xs:border-t border-neutral-400 lg:border-b"
              whileTap={{ scale: 1.1, border: "none" }}
            >
              Wood
            </motion.span>
          </Link>
        </div>
        <div className="contentText">
          <p>
            Aquí podréis ver mi obra actual centrada en la serie “Bloques” y la
            serie "Wood", que son estéticamente distintas pero tienen un nexo
            común: la luz y sus sombras.
          </p>
          <p>
            Otras series más experimentales como “Wire” o “Iluminados”, de
            técnicas y estilos completamente diferentes.
          </p>
        </div>
      </div>
    </>
  )
}

export default ObraMenu
