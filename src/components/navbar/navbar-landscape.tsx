"use client";
import useCurrentUrl from "@/hook/useCurrentUrl";
import MailIcon from "@/svg/mail-icon";
import Image from "next/image";
import NavbarList from "./navbar-element/navbar-list";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const NavbarLandscape = () => {
  const { pathname } = useCurrentUrl();
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  const listofNavbar = [
    { nav: "Home", link: "/" },
    { nav: "My Service", link: "/service" },
    { nav: "About Me", link: "/about" },
    { nav: "My Project", link: "/project" },
    { nav: "Contact", link: "/contact" },
  ];

  const filteredNavbar = listofNavbar.filter((nav) => nav.link !== pathname);

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <div className="w-full h-[15vh] grid grid-cols-[25%_50%_25%]">
        <div className="flex-centered">
          <div className="w-[80%] flex flex-row items-center gap-[1vw]">
            <div className="sm:scale-[70%] lg:scale-[80%] flex-centered ">
              <Image
                src="/assets/transparant navbar Icon.png"
                alt="image on Navbar"
                className="w-[clamp(40px,100%,70px)]"
                width={50}
                height={50}
              />
            </div>
            <div className="h-full flex flex-col justify-center">
              <h2 className="montserrat-font font-bold sm:text-[clamp(7px,1vw,8px)] lg:text-[clamp(9px,1.1vw,13px)]">
                Anthony&apos;s Portfolio
              </h2>
              <span className="inter-font sm:text-[clamp(6px,0.8vw,7px)] lg:text-[clamp(7px,0.6vw,10px)] text-[#6B7280]">
                Frontend Developer & <br />
                UI Enthusiast
              </span>
            </div>
          </div>
        </div>
        <div className="flex-centered">
          <ul className="w-full flex-centered flex-row sm:gap-[5vw] ">
            {filteredNavbar.map((nav) => (
              <NavbarList
                key={nav.nav}
                nav={nav.nav || ""}
                link={nav.link || ""}
              />
            ))}
          </ul>
        </div>
        <div className="flex-centered">
          <address>
            <a
              href="mailto:liemanthony27@gmail.com "
              className="flex flex-row h-[10%]"
            >
              <div className="flex-centered">
                <div className="sm:scale-[60%]">
                  <MailIcon />
                </div>
              </div>
              <div className="flex-centered">
                <span className="sm:text-[clamp(7px,1.3vw,15px)] xl:text-[1vw]">
                  liemanthony27@gmail.com
                </span>
              </div>
            </a>
          </address>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[10vh] grid grid-cols-[25%_50%_25%]">
        <div className="flex-centered">
          <div className="w-[80%] flex flex-row items-center gap-[1vw]">
            <div className="sm:scale-[70%] lg:scale-[80%] flex-centered ">
              <Image
                src="/assets/transparant navbar Icon.png"
                alt="image on Navbar"
                className="w-[clamp(40px,100%,70px)]"
                width={50}
                height={50}
              />
            </div>
            <div className="h-full flex flex-col justify-center">
              <h2 className="montserrat-font font-bold sm:text-[clamp(7px,1vw,8px)] lg:text-[clamp(9px,1.1vw,13px)]">
                Anthony&apos;s Portfolio
              </h2>
              <span className="inter-font sm:text-[clamp(6px,0.8vw,7px)] lg:text-[clamp(7px,0.6vw,10px)] text-[#6B7280]">
                Frontend Developer & <br />
                UI Enthusiast
              </span>
            </div>
          </div>
        </div>
        <div className="flex-centered">
          <ul className="w-full flex-centered flex-row sm:gap-[5vw] ">
            {filteredNavbar.map((nav) => (
              <NavbarList
                key={nav.nav}
                nav={nav.nav || ""}
                link={nav.link || ""}
              />
            ))}
          </ul>
        </div>
        <div className="flex-centered">
          <address>
            <a
              href="mailto:liemanthony27@gmail.com "
              className="flex flex-row h-[10%]"
            >
              <div className="flex-centered">
                <div className="sm:scale-[60%]">
                  <MailIcon />
                </div>
              </div>
              <div className="flex-centered">
                <span className="sm:text-[clamp(7px,1.3vw,15px)] xl:text-[1vw]">
                  liemanthony27@gmail.com
                </span>
              </div>
            </a>
          </address>
        </div>
      </div>
    );
  }
};

export default NavbarLandscape;
