import { useLocation } from "react-router-dom"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const { pathname } = useLocation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="max-w-[1344px] min-[1600px]:mx-auto text-xs lg:text-sm xl:text-base mx-[1rem] lg:mx-[8rem]">
      <h1 className="uppercase pb-[1rem] text-base lg:text-xl opacity-[0.7]">
        sobre mí
      </h1>

      <div
        className="square-about mt-[2rem]"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 3s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className="content-about about-1 text-right">
          <p>
            Nací en Málaga, pero pronto me voy con mi familia a Madrid, donde
            resido actualmente.
          </p>
          <p className="hidden md:block">
            De carácter inquieto y creativo, desde siempre tuve claro que mi
            actividad profesional tendría que estar relacionada con el diseño,
            el arte y la creatividad.
          </p>
          <p>
            Estudio interiorismo y después de trabajar como freelance y en
            varias empresas de arquitectura y diseño, en 2004 decido crear el
            estudio{" "}
            <b>
              <a
                href="https://www.volteointeriorismo.com/"
                target="volteo"
                className="cursor-pointer underline"
              >
                VOLTEO
              </a>
            </b>{" "}
            en el que trabajo actualmente.
          </p>
          <p className="mb-0 md:mb-auto">
            Desde siempre me ha gustado pintar, pasando por gran variedad de
            estilos.
          </p>
          <p className="mb-0 hidden md:block">
            Animado por algunos reconocimientos y la buena crítica, es desde
            hace pocos años cuando decido hacer visible mi obra y tengo la
            oportunidad de empezar a exponer.
          </p>
        </div>
        <div className="about-2 relative">
          <img
            className="absolute bottom-0 left-0"
            src="/retrato-hector.jpg"
            alt="Hétor Romero"
          />
        </div>
        <div className="about-3">
          <img
            src="/sobre-mi-1.jpg"
            alt="sobre mí"
          />
        </div>
        <div
          className={`about-4 border-t ${
            pathname === "/" ? "border-neutral-500" : "border-neutral-300"
          } title-about md:text-xs relative`}
        >
          <div className="absolute top-1 right-0 text-right flex flex-col xl:text-sm">
            <span>OBRA Blo questions</span>
            <span>Interaccion</span>
          </div>
        </div>
        <div className="about-5 content-about flex flex-col justify-end">
          <p className="mb-0 md:hidden">
            Animado por algunos reconocimientos y la buena crítica, es desde
            hace pocos años cuando decido hacer visible mi obra y tengo la
            oportunidad de empezar a exponer.
          </p>
          <p className="hidden md:block">
            Familiarizado por el uso de la perspectiva, el dibujo técnico y la
            creación de espacios, me centro en un estilo pictórico mezcla de
            surrealismo, minimalismo arquitectónico, expresionismo, metafísico…
            paisajes desoladores donde el nexo común está en la combinación de
            grandes bloques o volúmenes contundentes, creando espacios
            inquietantes. Perspectivas imposibles, atmosferas oníricas por las
            que deambulan pequeñas sombras, geometrías que se traicionan a si
            mismas.
          </p>
          <p className="hidden md:block">
            Me gusta aportar algo más a las obras. Un toque de misterio e
            ilusión óptica, al crear perspectivas forzadas con personajes en
            diferentes planos para poder observar la escena de dos puntos de
            vista distintos. Casi siempre hay dos figuras humanas para dar la
            proporción a la composición. A veces, se trata de la misma persona,
            representada al mismo tiempo en el mismo lugar, pero en distinto
            punto de vista.
          </p>
          <p className="mb-0 hidden md:block">
            Pero más allá del pretendido juego de ilusionismo que al final
            propone todo arte, propongo una reflexión plástica tridimensional
            sobre perspectiva, luz y color. Una ventana abierta al mundo de los
            sueños.
          </p>
        </div>
        <div
          className={`about-6 border-t ${
            pathname === "/" ? "border-neutral-500" : "border-neutral-300"
          } title-about md:text-xs relative`}
        >
          <div className="absolute top-1 left-0 flex flex-col xl:text-sm">
            <span>OBRA Futuro bloque</span>
            <span>Interaccion</span>
          </div>
        </div>
        <div className="about-7">
          <img
            src="/sobre-mi-2.jpg"
            alt="sobre mí"
          />
        </div>
        <div className="about-8 content-about md:hidden">
          <p>
            Familiarizado por el uso de la perspectiva, el dibujo técnico y la
            creación de espacios, me centro en un estilo pictórico mezcla de
            surrealismo, minimalismo arquitectónico, expresionismo, metafísico…
            paisajes desoladores donde el nexo común está en la combinación de
            grandes bloques o volúmenes contundentes, creando espacios
            inquietantes. Perspectivas imposibles, atmosferas oníricas por las
            que deambulan pequeñas sombras, geometrías que se traicionan a si
            mismas.
          </p>
          {/* <p>
            Me gusta aportar algo más a las obras. Un toque de misterio e
            ilusión óptica, al crear perspectivas forzadas con personajes en
            diferentes planos para poder observar la escena de dos puntos de
            vista distintos. Casi siempre hay dos figuras humanas para dar la
            proporción a la composición. A veces, se trata de la misma persona,
            representada al mismo tiempo en el mismo lugar, pero en distinto
            punto de vista.
          </p> */}
          <p className="mb-0">
            Pero más allá del pretendido juego de ilusionismo que al final
            propone todo arte, propongo una reflexión plástica tridimensional
            sobre perspectiva, luz y color. Una ventana abierta al mundo de los
            sueños.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
