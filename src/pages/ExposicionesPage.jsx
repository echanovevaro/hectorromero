import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import Exposiciones from "../components/Exposiciones";
import { fetchAll } from "../http";
import { useQuery } from "@tanstack/react-query";

const ExposicionesPage = () => {
  const { data } = useQuery({
    queryKey: ["exposiciones"],
    queryFn: () => fetchAll("exposiciones"),
  });

  const exposicionesFinalizadas = data
    ?.filter((exposicion) => {
      const fecha = new Date(exposicion.fecha);
      const hoy = new Date();
      return fecha < hoy;
    })
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  const exposicionesProximas = data
    ?.filter((exposicion) => {
      const fecha = new Date(exposicion.fecha);
      const hoy = new Date();
      return fecha >= hoy;
    })
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="pb-16 pt-[6rem] text-xs overflow-hidden w-full">
        {data && (
          <Exposiciones
            finalizadas={exposicionesFinalizadas}
            proximas={exposicionesProximas}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ExposicionesPage;
