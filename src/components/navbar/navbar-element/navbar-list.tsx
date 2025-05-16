"use client";
import Link from "next/link";

interface NavbarListProps {
  nav: string;
  link: string;
}

const NavbarList = ({ nav, link }: NavbarListProps) => {
  return (
    <Link href={link}>
      <li className="poppins-font font-semibold text-[1.1vw] text-black hover:text-[#3B82F6] hover:font-bold hover:text-[1.3vw] transition-all duration-300 ease-in-out">
        {nav}
      </li>
    </Link>
  );
};

export default NavbarList;

const FooterNavList = ({ nav, link }: NavbarListProps) => {
  return (
    <Link href={link}>
      <li className="poppins-font font-semibold text-[1.8vw] lg:text-[1.5vw] text-black hover:text-[#3B82F6] hover:font-bold hover:text-[1.7vw] transition-all duration-300 ease-in-out">
        {nav}
      </li>
    </Link>
  );
};

export { FooterNavList };
