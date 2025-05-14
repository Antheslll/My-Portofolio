"use client";
import useScreenOrientation from "@/hook/useScreenOrientation";
import NavbarLandscape from "./navbar-landscape";
import NavbarPotrait from "./navbar-potrait";

export default function Navbar() {
  const { orientation } = useScreenOrientation();

  if (orientation === "portrait") {
    return (
      <nav className="h-[10vh] ">
        <NavbarPotrait />
      </nav>
    );
  } else if (orientation === "landscape") {
    return (
      <nav className="sm:h-[10vh]">
        <NavbarLandscape />
      </nav>
    );
  }
}
