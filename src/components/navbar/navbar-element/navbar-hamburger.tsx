import Link from "next/link";

interface NavbarHamburgerProps {
  nav: string;
  link: string;
}

const NavbarHamburger = ({ nav, link }: NavbarHamburgerProps) => {
  return (
    <Link href={link}>
      <li className="poppins-font font-semibold text-[6vw] list-none">{nav}</li>
    </Link>
  );
};

export default NavbarHamburger;
