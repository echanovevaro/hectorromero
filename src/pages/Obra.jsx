import { useInView } from "framer-motion";
import MainNavigation from "../components/MainNavigation";
import { useRef } from "react";
import ObraMenu from "../components/ObraMenu";

function Obra() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <MainNavigation />
      <div className="bg-white w-screen z-10 pt-[4rem] h-screen landscape:h-full">
        <ObraMenu />
      </div>
    </>
  );
}
export default Obra;
