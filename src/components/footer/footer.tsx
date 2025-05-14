import { InstagramIcon, LinkedInIcon, WhatsappIcon } from "@/svg/contact-icon";
import { FooterNavList } from "../navbar/navbar-element/navbar-list";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const listofNavbar = [
    { nav: "Home", link: "/" },
    { nav: "My Service", link: "/service" },
    { nav: "About Me", link: "/about" },
    { nav: "My Project", link: "/project" },
    { nav: "Contact", link: "/contact" },
  ];
  return (
    <div className="w-full h-[40vh] bg-[#F3F4F6] flex flex-col gap-y-[3vh]">
      <div className=" flex-centered flex-col pt-[1vh] ">
        <h2 className="montserrat-font font-bold text-[3vw]">
          Anthony&apos;s Portfolio
        </h2>
        <span className="inter-font text-[1.5vw] text-[#6B7280]">
          Frontend Developer & UI Enthusiast
        </span>
      </div>
      <ul className="w-full flex-centered flex-row gap-[5vw] ">
        {listofNavbar.map((nav) => (
          <FooterNavList
            key={nav.nav}
            nav={nav.nav || ""}
            link={nav.link || ""}
          />
        ))}
      </ul>
      <ul className="flex-centered flex-row gap-[5vw]">
        <li className="scale-[50%]">
          <WhatsappIcon />
        </li>
        <li className="scale-[50%]">
          <InstagramIcon />
        </li>
        <li className="scale-[50%]">
          <LinkedInIcon />
        </li>
      </ul>
      <div className="flex-centered">
        <Link
          href="https://www.instagram.com/tavralabs?igsh=MXBtbzkwa2dqMDA2cg=="
          className="text-[2.2vw] text-[#3B82F6] underline inter-font"
        >
          Lihat apa yang kami bangung di Tavra
        </Link>
      </div>
      <div className="flex-centered gap-[5vw]">
        <Image
          src="/assets/TAVRA LOGO.png"
          alt="logo perusahaan tavra"
          className="w-[10%] rounded-full"
          width={1024}
          height={1024}
        />
        <Image
          src="/assets/TAVRA LOGO B.png"
          alt="logo perusahaan tavra"
          className="w-[10%] rounded-full"
          width={1024}
          height={1024}
        />
      </div>
      <div className="flex-centered">
        <span className="underline inter-font text-[1.5vw]">
          © 2025 Anthony. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
