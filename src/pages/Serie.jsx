import { useQuery } from "@tanstack/react-query";
import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import { fetchAll } from "../http";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import ScrollToTop from "../components/ScrollToTop";

export default function Serie() {
  const { serie } = useParams();

  const { data } = useQuery({
    queryKey: [serie],
    queryFn: () => fetchAll(serie),
  });
  return (
    <>
      <ScrollToTop />
      <div className="overflow-y-scroll overflow-x-hidden">
        <MainNavigation />
        <div className="h-[103vh] landscape:h-[155vh]">
          <Gallery coleccion={data} />
        </div>
        <Footer />
      </div>
    </>
  );
}
