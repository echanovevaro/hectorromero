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
            {/* <p>
              Nací en Málaga, pero pronto me voy con mi familia a Madrid, donde
              resido actualmente.
            </p> */}
            <p>
              De carácter inquieto y creativo, siempre tuve claro que mi
              actividad profesional tendría que estar relacionada con el diseño,
              el arte y la creatividad.
            </p>
            <p>
              Estudio interiorismo, trabajo en varias empresas de arquitectura y
              diseño y en 2004 decido crear en Madrid el estudio{" "}
              <strong>VOLTEO</strong> en el que trabajo actualmente.
            </p>
            <p className="mb-0">
              Reconocimientos y la buena crítica, me animan a hacer visible mi
              obra y tengo la oportunidad de empezar a exponer.
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
              pathname === "/" ? "border-neutral-500" : "border-neutral-300"
            } title-about relative`}
          >
            <div className="absolute top-1 right-0 text-right flex flex-col">
              <span>OBRA Blo questions</span>
              <span>Interaccion</span>
            </div>
          </div>
          <div className="about-5 content-about flex justify-end">
            <p className="mb-0">
              Una mezcla de surrealismo, minimalismo arquitectónico,
              expresionismo…, paisajes desoladores de grandes bloques, espacios
              inquietantes. Perspectivas imposibles, oníricas, geometrías que se
              traicionan a si mismas.
            </p>
          </div>
        </div>
        <div className="square-about">
          <div
            className={`about-6 border-t ${
              pathname === "/" ? "border-neutral-500" : "border-neutral-300"
            } title-about relative`}
          >
            <div className="absolute top-1 left-0 flex flex-col">
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
              Me gusta aportar un toque de misterio e ilusión óptica, al crear
              perspectivas forzadas con personajes en diferentes planos para
              poder observar la escena de dos puntos de vista distintos y dar la
              proporción a la composición.
            </p>
            <p>
              Intento aportar reflexión plástica tridimensional sobre
              perspectiva, luz y color. Una ventana abierta al mundo de los
              sueños.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
