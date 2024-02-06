import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const ObraMenu = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true, amount: 0.5 })
  const navigate = useNavigate()

  return (
    <>
      <h1 className="uppercase pb-[3rem] text-base opacity-[0.7] self-start ms-[1rem] lg:ms-[4rem] justify-self-start">
        obra
      </h1>
      <div
        ref={ref}
        className="square text-xs"
      >
        <div
          className="contentText-desktop"
          style={{
            transform: isInView ? "none" : "translateY(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
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
        <div
          className="contentTitle-bloques text-base"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/bloques">
            <motion.span
              className="border-neutral-400 border-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Bloques
            </motion.span>
          </Link>
        </div>
        <div
          className="contentTitle-animaciones text-base"
          style={{
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/animaciones">
            <motion.span
              className="border-neutral-400 border-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Animaciones
            </motion.span>
          </Link>
        </div>
        <div
          className="content1 overflow-hidden"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/bloques-1.jpg"
          />
        </div>
        <div
          className="content2 overflow-hidden"
          style={{
            transform: isInView ? "none" : "translateY(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/bloques-2.jpg"
          />
        </div>
        <div
          className="content3 overflow-hidden"
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/bloques-3.jpg"
          />
        </div>
        <div
          className="content4 overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/bloques-4.jpg"
          />
        </div>

        <div
          className="content5-desktop"
          ref={ref2}
          style={{
            transform: isInView2 ? "none" : "translateX(-60px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/animaciones")}
        >
          <img src="/desktop/bloques-5-6.gif" />
        </div>
        <div
          className="content6-desktop"
          style={{
            transform: isInView2 ? "none" : "translateX(60px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/animaciones")}
        >
          <img src="/desktop/bloques-5-6.gif" />
        </div>
        <div
          className="contentTitle-wood text-base"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/wood">
            <motion.span
              className="border-neutral-400 border-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Wood
            </motion.span>
          </Link>
        </div>
        <div
          className="content7 overflow-hidden"
          style={{
            transform: isInView2 ? "none" : "translateX(-60px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wood-4.jpg"
          />
        </div>
        <div
          className="content8 overflow-hidden"
          style={{
            transform: isInView2 ? "none" : "translateY(-60px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wood-1.jpg"
          />
        </div>
        <div
          className="content9 overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wood-2.jpg"
          />
        </div>
        <div
          className="content10 overflow-hidden"
          style={{
            transform: isInView2 ? "none" : "translateY(60px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wood-3.jpg"
          />
        </div>
        <div
          className="contentTitle-wire text-base"
          style={{
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/wire">
            <motion.span
              className="border-neutral-400 border-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Wire
            </motion.span>
          </Link>
        </div>
        <div
          className="contentTitle-iluminados text-base"
          style={{
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <Link to="obra/iluminados">
            <motion.span
              className="border-neutral-400 border-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Iluminados
            </motion.span>
          </Link>
        </div>
        <div
          className="content11"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <img src="/obra-5-6.jpg" />
        </div>
        <div
          className="content12"
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <img src="/obra-5-6.jpg" />
        </div>

        <div
          className="content13 overflow-hidden"
          ref={ref3}
          style={{
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wire")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wire-1.jpg"
          />
        </div>
        <div
          className="content14 overflow-hidden"
          style={{
            transform: isInView3 ? "none" : "translateY(-60px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wire")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/wire-2.jpg"
          />
        </div>
        <div
          className="content15 overflow-hidden"
          style={{
            transform: isInView3 ? "none" : "translateY(60px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/iluminados")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/iluminado-2.jpg"
          />
        </div>
        <div
          className="content16 overflow-hidden"
          style={{
            transform: isInView3 ? "none" : "translateX(60px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/iluminados")}
        >
          <motion.img
            whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
            src="/desktop/iluminado-1.jpg"
          />
        </div>
        <div
          className="contentText-desktop-bottom"
          style={{
            transform: isInView3 ? "none" : "translateY(-60px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          <p>
            Familiarizado por el uso de la perspectiva, el dibujo técnico y la
            creación de espacios, me centro en un estilo pictórico mezcla de
            surrealismo, minimalismo arquitectónico, expresionismo, metafísico.
          </p>
          <p>
            Paisajes desoladores donde el nexo común está en la combinación de
            grandes bloques o volúmenes contundentes, creando espacios
            inquietantes
          </p>
        </div>
      </div>
    </>
  )
}

export default ObraMenu
