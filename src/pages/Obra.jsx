import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ObraMenu from "../components/ObraMenu";

function Obra() {
  return (
    <>
      <ScrollToTop />
      <MainNavigation />
      <div className="bg-white w-screen z-10 pt-[6rem] landscape:h-full min-h-[70dvh] text-xs font-light">
        <h1 className="uppercase text-base opacity-[0.7] self-start ms-[1rem] justify-self-start font-normal">
          obra
        </h1>
        <ObraMenu />
      </div>
      <Footer />
    </>
  );
}
export default Obra;
