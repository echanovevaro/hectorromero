import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import MainNavigation from "../components/MainNavigation"

const Privacidad = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="max-w-[1600px] xl:mx-auto px-[1rem] lg:px-[4rem] text-xs lg:text-sm xl:text-base">
        <h1 className="uppercase mt-[6rem] text-base lg:text-xl  opacity-[0.7] self-start justify-self-start">
          POLÍTICA DE PRIVACIDAD
        </h1>
        <div className="p-[3rem] pt-[1rem]">
          <ol className="list-decimal">
            <li className="mb-[1rem]">OBJETO Y ACEPTACIÓN</li>
            <p>
              Cuando precisemos obtener información por su parte, siempre le
              solicitaremos que nos la proporcione voluntariamente de forma
              expresa. Los datos recabados a través de los formularios de
              recogida de datos del sitio web u otras vías serán incorporados a
              los sistemas de tratamiento de Héctor Romero García.
            </p>
            <p>
              Esta entidad tratará los datos de forma confidencial y
              exclusivamente con la finalidad de ofrecer los servicios
              solicitados, con todas las garantías legales y de seguridad que
              impone el Reglamento (UE) 2016/679 del Parlamento Europeo y del
              Consejo, de 27 de abril de 2016, relativo a la protección de las
              personas físicas en lo que respecta al tratamiento de datos
              personales y a la libre circulación de estos datos y la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y Comercio Electrónico.
            </p>
            <p>¿Quién es el responsable de tratamiento de sus datos?</p>
            <ul className="list-disc mb-6 list-inside">
              <li>El responsable es Héctor Romero García</li>
              <li>Su DNI es: 52473089-S</li>
              <li>
                Su domicilio está en: Avd. Ciudad de Barcelona 13 (28007) Madrid
              </li>
              <li>Correo electrónico: art@hectoromero.es </li>
            </ul>
            <p>¿Con que finalidad tratamos sus datos personales?</p>
            <p>
              Tratamos la información que nos facilitan los interesados de
              manera leal, lícita y transparente dando cumplimiento a la
              normativa UE 2016/679 de 27 de abril del Parlamento Europeo y del
              Consejo y Ley 3/2018 de 5 de diciembre de Protección de datos y
              garantía de derechos digitales.
            </p>
            <p className="text-base">Si eres CLIENTE o USUARIO:</p>
            <p>
              Si eres cliente o usuario, trataremos las siguientes categorías de
              datos personales:
            </p>
            <ul className="list-disc mb-6 list-inside">
              <li>Datos identificativos (nombre, apellidos…)</li>
              <li>Datos de contacto (correo electrónico, Whatsapp…)</li>
              <li>
                Otros datos (facilitados por el interesado en formularios
                abiertos o comunicaciones)
              </li>
            </ul>
            <p>Tratamos tus datos con la finalidad de:</p>
            <ul className="list-disc mb-6 list-inside">
              <li>
                Gestionar los servicios, información y/o productos solicitados.
              </li>
              <li>
                Enviar comunicaciones de interés (si el interesado hubiera
                prestado la debida autorización)
              </li>
              <li>
                Cumplir las obligaciones legales aplicables al responsable.
              </li>
            </ul>
            <p>¿Estoy obligado a facilitar los datos personales?</p>
            <p>
              Solo se solicitarán los datos estrictamente necesarios para la
              realización de la finalidad para la cual son recabados, por lo que
              en caso de no ser facilitados no podrá prestarse el servicio
              solicitado.
            </p>
            <p>¿Por cuánto tiempo conservaremos sus datos?</p>
            <p>
              Los datos personales proporcionados y obtenidos durante la
              relación serán conservados durante un plazo máximo de 5 años a
              partir de la última confirmación de interés o mientras nos obligue
              una previsión legal, en cuyo caso serán conservados debidamente
              bloqueados y eliminados cuando no sea necesario.
            </p>
            <p>¿Cuál es la legitimación para el tratamiento de sus datos?</p>
            <p>
              En cumplimiento del artículo 6.1 del Reglamento UE 2016/679 de 27
              de abril le informamos que la legitimación para el tratamiento de
              sus datos es la siguiente:
            </p>
            <ol className="list-decimal list-inside mb-6">
              <li className="mb-2">
                el interesado dio su consentimiento para el tratamiento de sus
                datos personales para uno o varios fines específicos y/o
              </li>
              <li className="mb-2">
                el tratamiento es necesario para el cumplimiento de una
                obligación legal aplicable al responsable del tratamiento y/o
              </li>
              <li className="mb-2">
                el tratamiento es necesario para la satisfacción de intereses
                legítimos perseguidos por el responsable del tratamiento o por
                un tercero, siempre que sobre dichos intereses no prevalezcan
                los intereses o los derechos y libertades fundamentales del
                interesado que requieran la protección de datos personales, en
                particular cuando el interesado sea un niño.
              </li>
            </ol>
            <p>¿A qué destinatarios se comunicarán sus datos?</p>
            <p>
              Los datos tratados podrán ser comunicados a terceros cuando así
              nos obligue una previsión legal.
            </p>
            <p>
              Asimismo cuenta con proveedores de servicios para los cuales es
              necesario realizar comunicación de datos en diferentes áreas
              empresariales (administración, contabilidad, fiscalidad,
              marketing, laboral…). La relación con estas empresas está regulada
              según el artículo 28 del Reglamento UE 2016/679 de 27 de abril del
              Parlamento Europeo y del Consejo (RGPD). Los datos accedidos desde
              dichas empresas solo serán utilizados para el fin empresarial
              necesario no siendo conservados para cualquier fin ulterioro
            </p>
            <p>¿Cuáles son sus derechos cuando nos facilita sus datos?</p>
            <p>
              Cualquier interesado tiene derecho a obtener confirmación sobre si
              estamos tratando los datos personales que le conciernan o no.
            </p>
            <p>
              Las personas interesadas tienen derecho a acceder a sus datos
              personales, así como solicitar la rectificación de datos inexactos
              o, en su caso, solicitar su supresión cuando, entre otros motivos,
              los datos ya no sea necesarios para los fines para los que fueron
              recogidos.
            </p>
            <p>
              En determinadas circunstancias, los interesados podrán solicitar
              la limitación del tratamiento de sus datos, en cuyo caso
              únicamente los conservaremos para el ejercicio o la defensa de
              reclamaciones. Los usuarios también podrán oponerse al tratamiento
              de sus datos. Se dejará de tratar los datos, salvo por motivos
              legítimos imperiosos, o en el ejercicio o defensa de
              reclamaciones.
            </p>
            <p>
              El usuario puede enviar un escrito a Héctor Romero García, al
              domicilio del responsable, o bien por medio de un correo
              electrónico indicado en el encabezado de la presente Política,
              adjuntando fotocopia de su documento de identidad, en cualquier
              momento y de manera gratuita, para:
            </p>
            <ul className="list-disc mb-6 list-inside">
              <li>Revocar los consentimientos otorgados.</li>
              <li>
                Obtener confirmación acerca de si se están tratando datos
                personales que conciernen al Usuario o no.
              </li>
              <li>Acceder a sus datos personales.</li>
              <li>Rectificar los datos inexactos o incompletos.</li>
              <li>
                Solicitar la supresión de sus datos cuando, entre otros motivos,
                los datos ya no sean necesarios para los fines que fueron
                recogidos.
              </li>
              <li>
                Obtener de la limitación del tratamiento de los datos cuando se
                cumpla alguna de las condiciones previstas en la normativa de
                protección de datos.
              </li>
              <li>Solicitar la portabilidad de tus datos.</li>
              <li>
                Interponer una reclamación en la autoridad de control (
                <a
                  href="http://www.aepd.es/"
                  target="_blank"
                  className="text-sky-400 underline"
                  rel="noreferrer"
                >
                  www.aepd.es
                </a>
                .) en caso de considerar vulnerados los derechos que le son
                reconocidos por la normativa aplicable en protección de datos.
              </li>
            </ul>
            <p>
              Se adoptan los niveles de seguridad correspondientes requeridos
              por la citada normativa de Protección de Datos de Carácter
              Personal y demás normativa aplicable. Dichos niveles de seguridad
              son obligados para aquellas entidades que accedan a nuestra
              información en virtud de una relación contractual y/o prestación
              de servicio, en aplicación del artículo 28 del Reglamento UE
              2016/679 (RGPD)
            </p>
            <p>
              No obstante, no asume ninguna responsabilidad por los daños y
              perjuicios derivados de alteraciones que terceros pueden causar en
              los sistemas informáticos, documentos electrónicos o ficheros del
              usuario.
            </p>
            <p>
              Se podrán utilizar cookies durante la prestación de servicios del
              sitio web. Las cookies son ficheros físicos de información
              personal alojados en el propio terminal del usuario. El usuario
              tiene la posibilidad de configurar su programa navegador de manera
              que se impida la creación de archivos cookie o se advierta de la
              misma. Revise nuestra política de cookies a través del enlace que
              encontrará en esta web.
            </p>
            <p>
              Si opta a abandonar nuestro sitio web a través de enlaces a sitios
              web no pertenecientes a nuestra entidad, no seré hará responsable
              de las políticas de privacidad de dichos sitios web ni de las
              cookies que éstos puedan almacenar en el ordenador del usuario.
            </p>
            <p>
              Nuestra política con respecto al correo electrónico se centra en
              remitir únicamente comunicaciones que usted haya solicitado
              recibir.
            </p>
            <p>
              Si prefiere no recibir estos mensajes por correo electrónico le
              ofreceremos a través de los mismos la posibilidad de ejercer su
              derecho de cancelación y renuncia a la recepción de estos
              mensajes, en conformidad con lo dispuesto en el Título III,
              artículo 22 de la Ley 34/2002 de Servicios para la Sociedad de la
              Información y de Comercio Electrónico.
            </p>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Privacidad
