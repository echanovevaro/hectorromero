import { useEffect, useRef, useState } from "react";
import classes from "./Slider.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "../http";
import { motion } from "framer-motion";
import { useAuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

function Slider({ exposiciones }) {
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);
  const { currentUser } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["landing"],
    queryFn: () => fetchAll("landing"),
  });

  useEffect(() => {
    if (data?.length) {
      const nextSlide = () => {
        setCurrent((current) =>
          current === data.length - 1 ? 0 : current + 1
        );
      };

      timeout.current = setTimeout(nextSlide, 5000);
    }
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, data]);

  useEffect(() => {
    if (data?.length) {
      const imgLoader = function (obra) {
        var link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = obra.imagenURL;

        document.head.appendChild(link);
      };
      data?.forEach((obra) => {
        imgLoader(obra);
      });
    }

    return () => {
      const links = document.querySelector('link[rel="preload"]');
      if (links && links.length > 0) {
        links.forEach((el) => el.remove());
      }
    };
  }, [data]);

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-1 w-screen flex items-center justify-center">
      <div className="bg-white w-[calc(100dvw-2rem)] lg:w-[calc(100dvw-16rem)] mt-[4rem] p-2 xl:w-[calc(100dvw-26rem)] min-[1600px]:max-w-[calc(1600px-16rem)] my-4 relative">
        <div className="absolute top-0 left-0 w-1/2 h-full z-10 bg-white bg-opacity-80 shadow-md border border-neutral-300">
          {exposiciones?.length > 0 && (
            <motion.div
              key={exposiciones[exposiciones.length - 1].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center h-full"
            >
              <a
                className="flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-neutral-400 bg-white bg-opacity-50 p-4"
                href={exposiciones[exposiciones.length - 1].enlace}
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="text-xs uppercase text-neutral-300">
                  exposición
                </h1>
                <h2 className="text-sm font-medium">
                  {exposiciones[exposiciones.length - 1].titulo}
                </h2>
                <h3 className="text-[12px] mt-[-0.5rem]">
                  {exposiciones[exposiciones.length - 1].linea2}
                </h3>
                <h3 className="text-xs uppercase font-normal mt-[0.5rem]">
                  {exposiciones[exposiciones.length - 1].linea3}
                </h3>
                <h3 className="text-[12px] mt-[-0.5rem]">
                  {exposiciones[exposiciones.length - 1].linea4}
                </h3>
              </a>
            </motion.div>
          )}
        </div>
        {currentUser && (
          <div className="mb-[1rem] float-right">
            <Link
              to="/landing/puO8PFL8kfjRYs0ld94H/edit"
              className="text-sky-400 font-medium flex gap-2"
            >
              <span>Editar animación móvil</span>
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
          </div>
        )}
        {data.map((slide, index) => (
          <div key={index}>
            {index === current && (
              <>
                <section
                  className={`${classes.banner} h-[calc((100dvw-2rem-1rem)/2)] lg:h-[calc((100dvw-16rem-1rem)/2)] xl:h-[calc((100dvw-26rem-1rem)/2)] min-[1800px]:h-[calc((1600px-16rem-1rem)/2)]`}
                >
                  <motion.img
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2 }}
                    src={slide.imagenURL}
                    alt={slide.titulo}
                    className={`${
                      slide.full === "true"
                        ? "object-cover h-full w-full"
                        : "absolute top-0 right-0 h-full w-auto"
                    }`}
                  />
                  {currentUser && (
                    <div className="absolute top-[1rem] right-[1rem] text-white">
                      <Link className="z-10" to={`${slide.id}/edit `}>
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
                    </div>
                  )}
                </section>
                <section className="grid grid-cols-[1fr_1fr] text-xs lg:text-sm xl:text-base text-neutral-400 pt-2">
                  <div className="col-start-2 col-end-3 flex items-center justify-between ps-2">
                    <div className="flex items-center justify-center gap-8">
                      {data.map((el, idx) => (
                        <span
                          key={idx}
                          className={`${
                            index === idx
                              ? "text-neutral-700"
                              : "text-neutral-300"
                          }`}
                        >
                          {el.titulo}
                        </span>
                      ))}
                    </div>
                    <span className="capitalize text-neutral-700">
                      Serie {slide.serie}
                    </span>
                    {/* <span>
                      {current + 1} | {data.length}
                    </span> */}
                  </div>
                </section>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Slider;
