import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useSubmit } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import Modal from "./Modal";

export default function Gallery({ coleccion }) {
  const submit = useSubmit();
  const [isDeleting, setIsDeleting] = useState(false);
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);
  const firstImgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const { currentUser } = useAuthContext();
  const [fullPage, setFullPage] = useState(false);

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

  function handleDelete(obra) {
    const formData = new FormData();
    formData.append("ref", obra.imagenRef);
    setCounter(0);
    setIsDeleting(false);
    submit(formData, {
      method: "delete",
      action: `${pathname}/${obra.id}/delete`,
    });
  }

  useEffect(() => {
    if (firstImgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className={`absolute landscape:top-[3.5rem] inset-y-0 inset-x-0 landscape:-bottom-[3.5rem] flex items-center justify-center flex-col gap-4 lg:hidden `}
    >
      {currentUser && (
        <div className="flex items-center mt-[3.5rem] text-sky-400">
          <Link
            className={`${loaded ? "z-50" : "hidden"}`}
            to={`${pathname}/new`}
          >
            Añadir
          </Link>
        </div>
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
        <div className="w-[75vw]">
          {coleccion?.map((obra, index) => (
            <div
              key={obra.id}
              className="flex flex-col items-center justify-end gap-1"
            >
              {counter == index && (
                <>
                  {isDeleting && (
                    <Modal onClose={() => setIsDeleting(false)}>
                      <h5 className="mt-2 mb-0 text-neutral-600">
                        Seguro que quieres eliminar esta obra?
                      </h5>
                      <div className="flex items-center justify-end gap-2 my-4">
                        <button
                          type="button"
                          className="text-xs text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          onClick={() => setIsDeleting(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          onClick={() => handleDelete(obra)}
                        >
                          Delete
                        </button>
                      </div>
                    </Modal>
                  )}
                  {!loaded && !currentUser && (
                    <div
                      className="absolute -z-1 inset-x-auto top-[40vh] h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-300 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  )}
                  <div className="relative">
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
                      className="inline-block object-cover overflow-hidden max-h-[65vh] touch-pinch-zoom"
                      onPanStart={onPanStart}
                      onPanEnd={onPanEnd}
                      onLoad={() => setLoaded(true)}
                      onClick={() => {
                        setFullPage(true);
                      }}
                    />
                    {currentUser && loaded && (
                      <div className="absolute bottom-[1rem] right-[1rem] flex items-center gap-2 text-white">
                        <Link
                          className={`${loaded ? "z-50" : "hidden"}`}
                          to={`${pathname}/${obra.id}/edit `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </Link>
                        <button
                          className={`${loaded ? "z-50" : "hidden"}`}
                          onClick={() => setIsDeleting(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <AnimatePresence>
                    {fullPage && (
                      <>
                        <div className="bg-white absolute h-full w-full z-[150] top-0 left-0" />
                        <motion.div
                          variants={{
                            hidden: { y: "-100dvh" },
                            visible: { y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 0.8, type: "spring" }}
                          id="fullPage"
                          className="absolute inset-x-0 inset-y-0 bg-contain bg-no-repeat bg-center bg-white z-[200] landscape:-top-[3.5rem] landscape:bottom-[3.5rem]"
                          style={{ backgroundImage: `url(${obra.imagenURL})` }}
                          onClick={() => {
                            setFullPage(false);
                          }}
                        />
                      </>
                    )}
                  </AnimatePresence>
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
                key={obra.id}
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                className="text-center"
              >
                <div className="flex items-center flex-col justify-center">
                  <h1 className="text-neutral-600 text-sm">{obra.titulo}</h1>
                  <p className="text-neutral-400 text-sm">{obra.descripcion}</p>
                </div>
              </motion.div>
            );
        })}
      </div>
      <ul className="flex items-center justify-center gap-2 mb-6 flex-wrap w-[75vw]">
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
