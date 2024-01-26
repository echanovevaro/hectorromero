import { useQuery } from "@tanstack/react-query";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import { fetchAll } from "../http";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

export default function Serie() {
  const { serie } = useParams();

  const { data } = useQuery({
    queryKey: [serie],
    queryFn: () => fetchAll(serie),
  });
  return (
    <div className="overflow-y-scroll">
      <MainNavigation />
      <div className="h-screen">
        <Gallery coleccion={data} />
      </div>
      <Footer />
    </div>
  );
}
