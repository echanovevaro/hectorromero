import { useRef } from "react"
import { useInView } from "framer-motion"
import MainNavigation from "../components/MainNavigation"

function Obra() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      <MainNavigation />
      <div className="bg-white w-screen z-10 pt-[4rem] h-screen landscape:h-full">
        <div
          ref={ref}
          className="square lg:hidden text-xs font-light"
        >
          <div
            className="content1"
            style={{
              transform: isInView ? "none" : "translateX(-60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/Entorno bloqueador 50x50cm-compressed.jpg" />
          </div>
          <div
            className="content1Title"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <span className="border-t border-neutral-400">
              Entorno bloqueador
            </span>
          </div>
          <div
            className="content2"
            style={{
              transform: isInView ? "none" : "translateY(-60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/tensión 50x50 cm-compressed.jpg" />
          </div>
          <div
            className="content2Title"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <span className="border-t border-neutral-400">Tensión</span>
          </div>
          <div
            className="content3"
            style={{
              transform: isInView ? "none" : "translateY(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/Futuro bloque 120x194cm-compressed.jpg" />
          </div>
          <div
            className="content3Title"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <span className="border-t border-neutral-400">Futuro bloque</span>
          </div>
          <div
            className="content4"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/Blo questions 39x43 cm-compressed.jpg" />
          </div>
          <div
            className="content4Title"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <span className="border-b border-neutral-400">Blo questions</span>
          </div>
          <div
            className="content5"
            style={{
              transform: isInView ? "none" : "translateX(-60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/20200608_202759.gif" />
          </div>
          <div
            className="content6"
            style={{
              transform: isInView ? "none" : "translateX(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <img src="/20200608_202759.gif" />
          </div>
          <div
            className="content5-6Title"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <span className="border-t border-neutral-400">Te bloqueo</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Obra
