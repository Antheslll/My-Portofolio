"use client";
import useScreenOrientation from "@/hook/useScreenOrientation";
import NavbarPotrait from "./navbar-portrait";
import NavbarLandscape from "./navbar-landscape";
import NavbarHamburger from "./navbar-element/navbar-hamburger";
import useCurrentUrl from "@/hook/useCurrentUrl";
import { useState } from "react";

export default function Navbar() {
  const { orientation } = useScreenOrientation();
  const { pathname } = useCurrentUrl();

  const [navOverlay, setNavOverlay] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const listofNavbar = [
    { nav: "Home", link: "/" },
    { nav: "My Service", link: "/service" },
    { nav: "About Me", link: "/about" },
    { nav: "My Project", link: "/project" },
    { nav: "Contact", link: "/contact" },
  ];

  const filteredNavbar = listofNavbar.filter((nav) => nav.link !== pathname);

  const handleOpenOverlay = () => {
    setNavOverlay(true);
    setTimeout(() => {
      setNavMenu(true);
    }, 500);
  };

  const handleCloseOverlay = () => {
    setNavMenu(false);
    setNavOverlay(false);
  };

  if (orientation === "portrait") {
    return (
      <>
        <div
          className={`w-[100vw] ${
            navOverlay ? "h-[100vh]" : "h-[0vh]"
          }  bg-white fixed z-40 transition-all duration-300 ease-in-out`}
        >
          <div
            className={`${
              navOverlay ? "flex" : "hidden"
            } w-full absolute flex justify-end pt-[2vh] pr-[5vw]`}
          >
            <span
              className="poppins-font text-[6vw] cursor-pointer"
              onClick={handleCloseOverlay}
            >
              ❌
            </span>
          </div>
          <ul
            className={`w-full h-[50vh] 
              ${navOverlay ? "flex" : "hidden"}
              ${
                navMenu ? "opacity-100" : "opacity-0"
              } items-center flex-col pt-[5vh] gap-y-[2vh] transition-all duration-300 ease-in-out`}
          >
            {filteredNavbar.map((nav) => (
              <NavbarHamburger
                key={nav.nav}
                nav={nav.nav || ""}
                link={nav.link || ""}
                handleCloseOverlay={handleCloseOverlay}
              />
            ))}
          </ul>
        </div>
        <nav className="h-[10vh]">
          <NavbarPotrait handleOpenOverlay={handleOpenOverlay} />
        </nav>
      </>
    );
  } else if (orientation === "landscape") {
    return (
      <nav className="sm:h-auto">
        <NavbarLandscape />
      </nav>
    );
  }
}
