import MainNavigation from "../components/MainNavigation"

function About() {
  return (
    <>
      <MainNavigation />
      <div className="square lg:hidden">
        <div className="content1">
          <img src="/Entorno bloqueador 50x50cm-compressed.jpg" />
        </div>
        <div className="content1Title">
          <span className="border-t border-neutral-300 text-[0.5rem]">
            Entorno bloqueador
          </span>
        </div>
        <div className="content2">
          <img src="/tensión 50x50 cm-compressed.jpg" />
        </div>
        <div className="content2Title">
          <span className="border-t border-neutral-300 text-[0.5rem]">
            Tensión
          </span>
        </div>
        <div className="content3">
          <img src="/Futuro bloque 120x194cm-compressed.jpg" />
        </div>
        <div className="content3Title">
          <span className="border-t border-neutral-300 text-[0.5rem]">
            Futuro bloque
          </span>
        </div>
        <div className="content4">
          <img src="/Blo questions 39x43 cm-compressed.jpg" />
        </div>
        <div className="content4Title">
          <span className="border-t border-neutral-300 text-[0.5rem]">
            Blo questions
          </span>
        </div>
        <div className="content5">
          <img src="/20200608_202759.gif" />
        </div>
        <div className="content6">
          <img src="/20200608_202759.gif" />
        </div>
        <div className="content5-6Title">
          <span className="border-t border-neutral-300 text-[0.5rem]">
            Te bloqueo
          </span>
        </div>
      </div>
    </>
  )
}
export default About
