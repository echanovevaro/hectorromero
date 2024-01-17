import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function Gallery({ coleccion }) {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);
  const firstImgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const { currentUser } = useAuthContext();

  const slideLeft = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(coleccion.length - 1);
    setLoaded(false);
  };

  const slideRight = () => {
    counter < coleccion.length - 1 ? setCounter(counter + 1) : setCounter(0);
    setLoaded(false);
  };

  function onPanStart(_, info) {
    ref.current = info.point.x;
  }
  function onPanEnd(_, info) {
    if (info.point.x < ref.current) {
      slideRight();
    } else if (info.point.x > ref.current) {
      slideLeft();
    }
  }

  useEffect(() => {
    if (firstImgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="absolute landscape:relative landscape:mt-[75px] inset-0 flex items-center justify-center flex-col gap-4 lg:hidden overflow-hidden">
      {currentUser && loaded && (
        <Link
          className={`${loaded ? "text-sky-400 z-50" : "hidden"}`}
          to={`${pathname}/new`}
        >
          Añadir
        </Link>
      )}

      <div
        className={`flex items-center justify-center gap-2 ${
          loaded ? "" : "mb-[2.7rem]"
        }`}
      >
        <div>
          <button onClick={slideLeft}>
            <svg
              className={`w-4 h-4 mx-2 text-gray-400 ${
                loaded ? "block" : "hidden"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
        </div>
        <div className="w-[75vw] relative">
          {coleccion?.map((obra, index) => (
            <div
              key={obra.id}
              className="flex flex-col items-center justify-end gap-1"
            >
              {counter == index && (
                <>
                  {!loaded && (
                    <div
                      class="absolute h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-300 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  )}
                  <motion.img
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    ref={firstImgRef}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    src={obra.imagenURL}
                    alt={obra.titulo}
                    className="inline-block object-cover overflow-hidden max-h-[65vh]"
                    onPanStart={onPanStart}
                    onPanEnd={onPanEnd}
                    onLoad={() => setLoaded(true)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div>
          <button onClick={slideRight}>
            <svg
              className={`w-4 h-4 mx-2 text-gray-400 ${
                loaded ? "block" : "hidden"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {coleccion?.map((obra, index) => {
          if (loaded && counter == index)
            return (
              <motion.div
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                className="text-center"
              >
                <div className="flex items-center flex-col landscape:flex-row justify-center landscape:gap-2">
                  <h1 className="text-neutral-600 text-sm landscape:text-xs">
                    {obra.titulo}
                  </h1>
                  <p className="text-neutral-400 text-sm landscape:text-xs">
                    {obra.descripcion}
                  </p>
                </div>
              </motion.div>
            );
        })}
      </div>
      <ul className="flex items-center justify-center gap-3 mb-6">
        {coleccion?.map((_, index) => (
          <button
            key={index}
            className={`${loaded ? "block" : "hidden"}`}
            onClick={() => setCounter(index)}
          >
            <li
              className={`h-1 w-1 rounded-full  ${
                counter == index ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          </button>
        ))}
      </ul>
    </div>
  );
}
