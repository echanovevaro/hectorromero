import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import Premios from "../components/Premios";

const PremiosPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="pb-32 pt-[6rem] text-xs px-[1rem]">
        <Premios />
      </div>
      <Footer />
    </>
  );
};

export default PremiosPage;
