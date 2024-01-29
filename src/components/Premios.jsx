import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Premios = () => {
  const [fullPage, setFullPage] = useState(false);
  const [obraUrl, setObraUrl] = useState();

  function disableScroll() {
    document.getElementsByTagName("body")[0].classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");
  }

  return (
    <>
      <AnimatePresence>
        {fullPage && (
          <>
            <motion.div
              variants={{
                hidden: { y: "-100dvh" },
                visible: { y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8, type: "spring" }}
              className="fixed top-0 inset-x-0 h-screen z-[150] bg-white font-light text-base overflow-hidden"
              onClick={() => {
                setFullPage(false);
                enableScroll();
              }}
            />
            <motion.div
              variants={{
                hidden: { y: "-100dvh" },
                visible: { y: window.scrollY },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8, type: "spring" }}
              id="fullPage"
              className="absolute inset-x-0 inset-y-0 bg-contain bg-no-repeat bg-center bg-white z-[200] landscape:-top-[3.5rem] landscape:bottom-[3.5rem]"
              style={{
                backgroundImage: `url(${obraUrl})`,
              }}
              onClick={() => {
                setFullPage(false);
                enableScroll();
              }}
            />
          </>
        )}
      </AnimatePresence>
      <h1 className="pb-[1rem] uppercase font-light text-base opacity-[0.7]">
        premios y menciones
      </h1>
      <ul className="flex flex-col gap-[0.5rem] items-center">
        <motion.li
          whileTap={{ scale: 1.1 }}
          onClick={() => {
            setObraUrl("/premio-meduina-schneider.jpg");
            setFullPage(true);
            disableScroll();
          }}
        >
          2º premio Menduina Schneider Art Gallery (2021)
        </motion.li>
        <li>Premio votación popular Pintura Rápida Plaza Dalí (2019)</li>
        <li>1er Premio Pintura Rápida Plaza Dalí (2017)</li>
        <li>1er Premio Pintura Rápida Plaza Dalí (2015)</li>
        <li>Selección pintura rápida Retiro (2011)</li>
        <li>1er Premio Pintura Rápida Plaza Dalí (2010)</li>
        <li>Selección pintura rápida Retiro (2009)</li>
        <motion.li
          whileTap={{ scale: 1.1 }}
          onClick={() => {
            setObraUrl("/premio-enrique-lite.jpg");
            setFullPage(true);
            disableScroll();
          }}
        >
          Tercer premio. Certamen nacional de pintura Enrique Lite
        </motion.li>
      </ul>
    </>
  );
};

export default Premios;