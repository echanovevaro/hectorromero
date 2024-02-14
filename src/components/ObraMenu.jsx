import { useInView } from "framer-motion"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const ObraMenu = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const navigate = useNavigate()

  return (
    <>
      <h1 className="uppercase text-base opacity-[0.7] self-start ms-[1rem] lg:ms-[4rem] justify-self-start">
        obra
      </h1>
      <div
        ref={ref}
        className="square-responsive"
      >
        <div
          className="div12"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
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
          className="div1 overflow-hidden relative"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/bloques")}
        >
          <img src="/desktop/bloques-4.jpg" />
        </div>
        <div
          className="div5 relative cursor-pointer"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <div className="h-full border-t border-neutral-400 "></div>
          <Link
            to="obra/bloques"
            className="absolute top-0 right-0 text-sm"
          >
            <span>Bloques</span>
          </Link>
        </div>
        <div
          className="div6 relative cursor-pointer"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <div className="h-full border-b border-neutral-400"></div>
          <Link
            to="obra/wire"
            className="absolute bottom-0 right-0 text-sm"
          >
            <span>Wire</span>
          </Link>
        </div>
        <div
          className="div4 overflow-hidden relative cursor-pointer"
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
          className="div3 overflow-hidden relative cursor-pointer"
          style={{
            transform: isInView ? "none" : "translateY(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/iluminados")}
        >
          <img src="/desktop/iluminado-3.jpg" />
        </div>
        <div
          className="div11 relative cursor-pointer"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <div className="h-full border-t border-neutral-400"></div>
          <Link
            to="obra/animaciones"
            className="absolute top-0 right-0 text-sm"
          >
            <span>Animación</span>
          </Link>
        </div>
        <div
          className="div7 relative cursor-pointer"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <div className="h-full border-t border-neutral-400"></div>
          <Link
            to="obra/iluminados"
            className="absolute top-0 left-0 text-sm"
          >
            <span>Iluminados</span>
          </Link>
        </div>
        <div
          className="div9 overflow-hidden relative cursor-pointer"
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/animaciones")}
        >
          <img
            className="object-left"
            src="/animation.gif"
          />
        </div>
        <div
          className="div10 overflow-hidden relative cursor-pointer"
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/animaciones")}
        >
          <img
            className="object-right"
            src="/animation.gif"
          />
        </div>
        <div
          className="div2 overflow-hidden relative cursor-pointer"
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          onClick={() => navigate("/obra/wood")}
        >
          <img src="/wood.jpg" />
        </div>
        <div
          className="div8 relative cursor-pointer"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
        >
          <div className="h-full border-b border-neutral-400"></div>
          <Link
            to="obra/wood"
            className="absolute bottom-0 left-0 text-sm"
          >
            <span>Wood</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ObraMenu
