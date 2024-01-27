import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import ScrollToTop from "../components/ScrollToTop";

const Proteccion = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavigation />
      <h1 className="uppercase mt-[6rem] text-base opacity-[0.7] self-start ms-[1rem] justify-self-start font-thin">
        PROTECCIÓN DE DATOS
      </h1>
      <div className="pt-[1rem] p-[3rem] ">
        <h1 className="mb-[1rem] text-base">
          INFORMACIÓN ADICIONAL DE PROTECCIÓN DE DATOS
        </h1>
        <p>¿Quién es el Responsable de tratamiento de sus datos?</p>
        <ul className="list-disc mb-6 list-inside">
          <li>Identidad: Héctor Romero García</li>
          <li>Dir. Postal: Avda. Ciudad de Barcelona 13 (28007) Madrid</li>
          <li>Correo elect.: art@hectoromero.es </li>
        </ul>
        <p>¿Con que finalidad tratamos sus datos personales?</p>
        <p>
          Tratamos la información que nos facilitan las personas interesadas en
          el fin de prestarle los servicios o información que nos soliciten así
          como facilitar a los interesados información de acuerdo con sus
          intereses y mejorar su experiencia de usuario, así como elaborar un
          “perfil comercial” en base a la información facilitada sin tomar
          decisiones automatizadas en base a dicho perfil.
        </p>
        <p>¿Por cuánto tiempo conservaremos sus datos?</p>
        <p>
          Los datos personales proporcionados y obtenidos durante la prestación
          de los servicios solicitados mientras dure la relación comercial, se
          conservarán durante un plazo de 5 años a partir de la última
          confirmación de interés.
        </p>
        <p>¿Cuál es la legitimación para el tratamiento de sus datos?</p>
        <p>
          La base legal para el tratamiento de sus datos es la ejecución de la
          solicitud de información o contratación de los servicios de Héctor
          Romero García. La oferta prospectiva de productos y servicios está
          basada en el consentimiento que se le solicita, sin que en ningún caso
          la retirada de este consentimiento condicione la ejecución del
          contrato de prestación de servicios.
        </p>
        <p>¿Cuáles son sus derechos cuando me facilita sus datos?</p>
        <p>
          Cualquier interesado tiene derecho a obtener confirmación sobre si
          Héctor Romero García está tratando los datos personales que le
          conciernan o no.
        </p>
        <p>
          Las personas interesadas tienen derecho a acceder a sus datos
          personales, así como solicitar la rectificación de datos inexactos o,
          en su caso, solicitar su supresión cuando, entre otros motivos, los
          datos ya no sean necesarios para los fines para los que fueron
          recogidos.
        </p>
        <p>
          En determinadas circunstancias, los interesados podrán solicitar la
          limitación del tratamiento de sus datos, en cuyo caso únicamente los
          conservaremos para el ejercicio o la defensa de reclamaciones. Los
          usuarios también podrán oponerse al tratamiento de sus datos. Héctor
          Romero García dejará de tratar los datos, salvo por motivos legítimos
          imperiosos, o en el ejercicio o defensa de reclamaciones.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Proteccion;
