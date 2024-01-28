import { useEffect, useRef, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import ObraMenu from "../components/ObraMenu";
import Footer from "../components/Footer";
import About from "../components/About";

function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const parallax = useParallax({
    speed: -200,
  });

  useEffect(() => {
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
      <div ref={parallax.ref} className="wrapper">
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
              let scroll = pageHeight - window.scrollY - 65;
              window.scrollBy({
                top: scroll,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="w-screen h-full flex justify-end flex-col items-center pb-[2rem] gap-1 text-white z-[500] text-lg"
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
      <section className="mt-[100dvh]">
        <div className="bg-neutral-800 text-neutral-300 text-xs font-light pb-8 pt-[2rem]">
          <About />
        </div>
      </section>
      <section id="scroll" className="flex justify-start z-[-1]">
        <div className="bg-white w-screen z-10 landscape:h-full">
          <h1 className="px-[1rem] mt-[2rem] uppercase font-light text-base opacity-[0.7]">
            obra
          </h1>
          <ObraMenu />
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Landing;
