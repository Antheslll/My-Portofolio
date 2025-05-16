import Link from "next/link";

interface NavbarHamburgerProps {
  nav: string;
  link: string;
}

const NavbarHamburger = ({ nav, link }: NavbarHamburgerProps) => {
  return (
    <Link href={link}>
      <li className="poppins-font font-semibold text-[6vw] list-none text-black hover:text-[#3B82F6] hover:font-bold hover:text-[1.3vw] transition-all duration-200 ease-in-out">
        {nav}
      </li>
    </Link>
  );
};

export default NavbarHamburger;
