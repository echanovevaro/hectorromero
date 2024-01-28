import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1 className="uppercase pb-[1rem] text-base opacity-[0.7] self-start ms-[1rem] justify-self-start">
        sobre mí
      </h1>
      <div className="flex flex-col gap-[0.8rem]">
        <div className="square-about">
          <div className="content-about about-1 text-right">
            <p>
              Nací en Málaga, pero pronto me voy con mi familia a Madrid, donde
              resido actualmente.
            </p>
            <p>
              De carácter inquieto y creativo, desde siempre tuve claro que mi
              actividad profesional tendría que estar relacionada con el diseño,
              el arte y la creatividad. Desde siempre me ha gustado pintar,
              pasando por gran variedad de estilos.
            </p>
            <p>
              Estudio interiorismo y después de trabajar como freelance y en
              varias empresas de arquitectura y diseño, en 2004 decido crear el
              estudio VOLTEO en el que trabajo actualmente.
            </p>
            <p className="mb-0">
              Animado por algunos reconocimientos y la buena crítica, es desde
              hace pocos años cuando decido hacer visible mi obra y tengo la
              oportunidad de empezar a exponer.
            </p>
          </div>
          <div className="about-2 relative">
            <img
              className="absolute bottom-0 left-0 landscape:hidden"
              src="/retrato-hector.jpg"
              alt="Hétor Romero"
            />
          </div>
        </div>
        <div className="square-about">
          <div className="about-3">
            <img src="/sobre-mi-1.jpg" alt="sobre mí" />
          </div>
          <div
            className={`about-4 border-t ${
              pathname === "/" ? "" : "border-neutral-400"
            } title-about relative`}
          >
            <div className="absolute top-0 right-0 text-right flex flex-col">
              <span>OBRA Blo questions</span>
              <span>Interaccion</span>
            </div>
          </div>
          <div className="about-5 content-about flex justify-end">
            <p className="mb-0">
              Familiarizado por el uso de la perspectiva, el dibujo técnico y la
              creación de espacios, me centro en un estilo pictórico mezcla de
              surrealismo, minimalismo arquitectónico, expresionismo,
              metafísico… paisajes desoladores donde el nexo común está en la
              combinación de grandes bloques o volúmenes contundentes, creando
              espacios inquietantes. Perspectivas imposibles, atmosferas
              oníricas por las que deambulan pequeñas sombras, geometrías que se
              traicionan a si mismas.
            </p>
          </div>
        </div>
        <div className="square-about">
          <div
            className={`about-6 border-t ${
              pathname === "/" ? "" : "border-neutral-400"
            } title-about relative`}
          >
            <div className="absolute top-0 left-0 flex flex-col">
              <span>OBRA Futuro bloque</span>
              <span>Interaccion</span>
            </div>
          </div>
          <div className="about-7">
            <img src="/sobre-mi-2.jpg" alt="sobre mí" />
          </div>
        </div>
        <div className="square-about">
          <div className="about-8 content-about">
            <p>
              Me gusta aportar algo más a las obras. Un toque de misterio e
              ilusión óptica, al crear perspectivas forzadas con personajes en
              diferentes planos para poder observar la escena de dos puntos de
              vista distintos. Casi siempre hay dos figuras humanas para dar la
              proporción a la composición. A veces, se trata de la misma
              persona, representada al mismo tiempo en el mismo lugar, pero en
              distinto punto de vista.
            </p>
            <p>
              Pero más allá del pretendido juego de ilusionismo que al final
              propone todo arte, propongo una reflexión plástica tridimensional
              sobre perspectiva, luz y color. Una ventana abierta al mundo de
              los sueños.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
