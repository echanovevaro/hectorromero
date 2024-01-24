import { useEffect, useRef, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import { useParallax } from "react-scroll-parallax";
import { useInView, motion } from "framer-motion";

function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const parallax = useParallax({
    speed: -200,
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(true);
    }, 2500);
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
            onClick={() =>
              document
                .getElementById("scroll")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="w-screen h-full flex flex-col justify-end items-center pb-28 gap-1 text-white z-[500] text-xl"
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
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </motion.button>
        )}
      </div>
      <section id="scroll" className="mt-[100dvh] flex justify-start z-[-1]">
        <div className="bg-white w-screen z-10 p-[3rem] pt-[4rem]">
          <h1
            ref={ref}
            className="uppercase mt-10"
            style={{
              transform: isInView ? "none" : "translateX(-60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            New section
          </h1>
        </div>
      </section>
      {/* <main className="text-white fixed bottom-0 right-0 left-0 top-0 z-[-1]">
        <div className="flex h-5/6 justify-center items-end">
          <h1 id="logo-landing" className="text-2xl font-light">
            héctor romero
          </h1>
        </div> 
      </main> */}
    </>
  );
}
export default Landing;
