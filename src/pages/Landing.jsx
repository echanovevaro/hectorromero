import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/obra/bloques");
    }, 3500);
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="background" />
      </div>
      <main className="text-white fixed bottom-0 right-0 left-0 top-0 z-10">
        <div className="flex h-5/6 justify-center items-end">
          <h1 id="logo-landing" className="text-2xl font-light">
            héctor romero
          </h1>
        </div>
      </main>
      <div className="blur" />
    </div>
  );
}
export default Landing;
