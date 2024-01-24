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
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const imgLoader = function (href) {
      var link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;

      const head = document.head;
      document.head.appendChild(link);
    };
    [
      "/26b-landscape.jpg",
      "/26b.jpg",
      "/20200608_202759.gif",
      "/Blo questions 39x43 cm-compressed.jpg",
      "Entorno bloqueador 50x50cm-compressed.jpg",
      "/Futuro bloque 120x194cm-compressed.jpg",
      "/Te bloqueo(57x28 cm)-compressed.jpg",
      "/tensión 50x50 cm-compressed.jpg",
    ].forEach((url) => imgLoader(url));
    const timeout = setTimeout(() => {
      setShowMenu(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
      const links = document.querySelector('link[rel="preload"]');
      if (links && links.length > 0) {
        links.forEach((el) => el.remove());
      }
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
            onClick={() =>
              document.getElementById("scroll").scrollIntoView({
                block: "start",
                behavior: "smooth",
              })
            }
            className="w-screen h-full flex justify-center items-end pb-[2rem] gap-1 text-white z-[500] text-xl"
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
      <section id="scroll" className="mt-[100dvh] flex justify-start z-[-1]">
        <div className="bg-white w-screen z-10 pt-[4rem] h-screen landscape:h-full">
          {/* <h1
            ref={ref}
            className="uppercase mt-10 px-[3rem] "
            style={{
              transform: isInView ? "none" : "translateX(-60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            New section
          </h1> */}
          <div ref={ref} className="square lg:hidden">
            <div
              className="content1"
              style={{
                transform: isInView ? "none" : "translateX(-60px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/Entorno bloqueador 50x50cm-compressed.jpg" />
            </div>
            <div
              className="content1Title"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              <span className="border-t border-neutral-300">
                Entorno bloqueador
              </span>
            </div>
            <div
              className="content2"
              style={{
                transform: isInView ? "none" : "translateY(-60px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/tensión 50x50 cm-compressed.jpg" />
            </div>
            <div
              className="content2Title"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              <span className="border-t border-neutral-300">Tensión</span>
            </div>
            <div
              className="content3"
              style={{
                transform: isInView ? "none" : "translateY(60px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/Futuro bloque 120x194cm-compressed.jpg" />
            </div>
            <div
              className="content3Title"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              <span className="border-t border-neutral-300">Futuro bloque</span>
            </div>
            <div
              className="content4"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/Blo questions 39x43 cm-compressed.jpg" />
            </div>
            <div
              className="content4Title"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              <span className="border-t border-neutral-300">Blo questions</span>
            </div>
            <div
              className="content5"
              style={{
                transform: isInView ? "none" : "translateX(-60px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/20200608_202759.gif" />
            </div>
            <div
              className="content6"
              style={{
                transform: isInView ? "none" : "translateX(60px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            >
              <img src="/20200608_202759.gif" />
            </div>
            <div
              className="content5-6Title"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              <span className="border-t border-neutral-300">Te bloqueo</span>
            </div>
          </div>
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
