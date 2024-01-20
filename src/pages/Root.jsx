import { useLocation, useOutlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function Root() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div id="modal" />
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default Root;
