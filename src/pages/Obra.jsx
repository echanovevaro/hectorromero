import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import ObraMenu from "../components/ObraMenu";
import { ScrollRestoration } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "../http";

function Obra() {
  const { data } = useQuery({
    queryKey: ["obras"],
    queryFn: () => fetchAll("obras"),
  });

  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <div className="bg-white w-full pb-8 mt-[4rem]">
        {data && <ObraMenu data={data} />}
      </div>
      <Footer />
    </>
  );
}
export default Obra;
