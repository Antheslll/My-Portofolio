import HamburgerIcon from "@/svg/hamburger-icon";
import Image from "next/image";

const NavbarPotrait = () => {
  return (
    <div className="w-full h-full bg-white grid grid-cols-[20%_60%_20%] ">
      <div className=" flex-centered">
        <Image
          src="/assets/transparant navbar Icon.png"
          alt="image on Navbar"
          className="w-[50%]"
          width={50}
          height={50}
        />
      </div>
      <div className=" flex-centered flex-col pt-[1vh]">
        <h2 className="montserrat-font font-bold text-[3vw]">
          Anthony&apos;s Portfolio
        </h2>
        <span className="inter-font text-[1.5vw] text-[#6B7280]">
          Frontend Developer & UI Enthusiast
        </span>
      </div>
      <div className="flex-centered">
        <div className="w-[20%]">
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default NavbarPotrait;
