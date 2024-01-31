import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Premios = () => {
  const [fullPage, setFullPage] = useState(false);
  const [obraUrl, setObraUrl] = useState();
  const detalleRef = useRef(0);
  const { pathname } = useLocation();

  function onDetallePanStart(_, info) {
    detalleRef.current = info.point.y;
  }

  function onDetallePanEnd(_, info) {
    if (info.point.y < detalleRef.current) {
      setFullPage(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {fullPage && (
          <motion.div
            variants={{
              hidden: {
                y: "-100dvh",
                transition: { duration: pathname === "/" ? 2 : 0.8 },
              },
              visible: { y: window.scrollY },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            onPanStart={onDetallePanStart}
            onPanEnd={onDetallePanEnd}
            className="bg-white absolute w-screen z-[600] h-screen inset-0 touch-pinch-zoom"
          >
            <motion.div
              onPanStart={onDetallePanStart}
              onPanEnd={onDetallePanEnd}
              transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
              className="w-full h-full bg-contain bg-no-repeat bg-center bg-white z-[650] landscape:-top-[3.5rem] landscape:bottom-[3.5rem] touch-pinch-zoom"
              style={{
                backgroundImage: `url(${obraUrl})`,
              }}
              onClick={() => {
                setFullPage(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="pb-[1rem] uppercase text-base opacity-[0.7]">
        premios y menciones
      </h1>
      <ul className="flex flex-col gap-[0.5rem] items-center flex-nowrap whitespace-nowrap">
        <motion.li
          whileTap={{ scale: 1.1 }}
          onClick={() => {
            setObraUrl("/premio-meduina-schneider.jpg");
            setFullPage(true);
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
          }}
        >
          Tercer premio. Certamen nacional de pintura Enrique Lite
        </motion.li>
      </ul>
    </>
  );
};

export default Premios;
