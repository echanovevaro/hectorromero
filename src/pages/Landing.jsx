import { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";

function Landing() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(true);
    }, 3500);
  }, []);
  return (
    <div>
      {showMenu && <MainNavigation />}
      <div className="wrapper">
        <div className="background" />
      </div>
      <main className="text-white fixed bottom-0 right-0 left-0 top-0 z-10">
        {/* <div className="flex h-5/6 justify-center items-end">
          <h1 id="logo-landing" className="text-2xl font-light">
            héctor romero
          </h1>
        </div> */}
      </main>
      <div className="blur" />
    </div>
  );
}
export default Landing;
