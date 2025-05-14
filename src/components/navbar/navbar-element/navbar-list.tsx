"use client";
import Link from "next/link";

interface NavbarListProps {
  nav: string;
  link: string;
}

const NavbarList = ({ nav, link }: NavbarListProps) => {
  return (
    <Link href={link}>
      <li className="poppins-font font-semibold text-[1.1vw]">{nav}</li>
    </Link>
  );
};

export default NavbarList;
