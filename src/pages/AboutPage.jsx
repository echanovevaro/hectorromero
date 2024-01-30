import About from "../components/About";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavigation />
      <div className="pb-8 pt-[6rem] text-xs">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
