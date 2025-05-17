"use client";
import Link from "next/link";

interface NavbarHamburgerProps {
  nav: string;
  link: string;
  handleCloseOverlay: () => void;
}

const NavbarHamburger = ({
  nav,
  link,
  handleCloseOverlay,
}: NavbarHamburgerProps) => {
  return (
    <li
      onClick={() => handleCloseOverlay()}
      className="poppins-font font-semibold text-[6vw] list-none text-black hover:text-[#3B82F6] hover:font-bold hover:text-[8vw] transition-all duration-200 ease-in-out"
    >
      <Link href={link}>{nav}</Link>
    </li>
  );
};

export default NavbarHamburger;
