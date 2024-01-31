import { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import ObraMenu from "../components/ObraMenu";
import Footer from "../components/Footer";
import About from "../components/About";
import Premios from "../components/Premios";

function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const parallax = useParallax({
    speed: -1000,
  });

  useEffect(() => {
    scrollTo(0, -200);
    const timeout = setTimeout(() => {
      setShowMenu(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {showMenu && <MainNavigation />}
      <div className="wrapper" ref={parallax.ref}>
        <div className="background" />
        <div className="blur" />
        {showMenu && (
          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              let pageHeight = window.innerHeight;
              let scroll = pageHeight - window.scrollY - 63;
              window.scrollBy({
                top: scroll,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="w-screen h-full flex justify-end flex-col items-center pb-[2rem] gap-1 font-normal text-white z-[10] text-lg"
          >
            <span className="z-[500]">scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 z-[500]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.button>
        )}
      </div>
      <section id="scroll" className="flex justify-start z-[-1]">
        <div className="bg-white w-screen z-10 landscape:h-full text-xs">
          <h1 className="px-[1rem] mt-[2rem] uppercase text-base opacity-[0.7]">
            obra
          </h1>
          <ObraMenu />
        </div>
      </section>
      <section className="flex justify-start z-[-1]">
        <div className="bg-neutral-800 text-neutral-400 pt-[2rem] pb-8 text-xs w-screen z-[500]">
          <About />
        </div>
      </section>
      <section className="flex justify-start z-[-1]">
        <div className="bg-white px-[1rem] text-xs pb-12 pt-[2rem] z-[500] w-screen">
          <Premios />
        </div>
      </section>
      <section className="flex justify-start z-[-1]">
        <div className="bg-white text-xs z-10 w-screen">
          <Footer />
        </div>
      </section>
    </>
  );
}
export default Landing;
