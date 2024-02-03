import { useLocation, useOutlet } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const AnimatedOutlet = () => {
  const o = useOutlet()
  const [outlet] = useState(o)

  return <>{outlet}</>
}

function Root() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="text-neutral-500 bg-white font-light width-full min-h-screen"
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
  )
}

export default Root
