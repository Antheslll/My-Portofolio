"use client";
import DoubleArrowIcon from "@/svg/double-arrow-icon";
import Link from "next/link";
import ServiceHeaderImage, {
  ServiceHeaderImageMD,
} from "./elements/header-service-image";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const ServicePageHeader = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width < 1024 && orientation === "portrait") {
    return (
      <div>
        <header className="sm:pt-[10vh] md:pt-0 h-[95vh] sm:h-[270vh] md:h-[90vh] grid grid-rows-[40vh_50vh] sm:grid-rows-[130vh_130vh] md:grid-rows-[40vh_50vh]">
          <div className="w-full flex justify-center pt-[5vh]">
            <div className="w-[90%] flex flex-col gap-y-[2vh] ">
              <h1 className="poppins-font font-semibold text-center text-[6vw] md:text-[5vw]">
                {" "}
                Bawa Karier Freelance Anda
                <span className="text-[#3B82F6] ">
                  {" "}
                  ke Level Selanjutnya
                </span>{" "}
                dengan Solusi Digital yang{" "}
                <span className="text-[#3B82F6] "> Kustom dan Profesional</span>
              </h1>
              <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Desain dan solusi digital yang disesuaikan untuk meningkatkan
                profesionalisme dan daya tarik Anda di dunia freelance.
              </h4>
              <div className="flex-centered flex-col gap-y-[1vh] sm:gap-y-[5vh] md:gap-y-[1vh]">
                <Link
                  href="#project-main"
                  className="underline text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
                >
                  Scroll ke bawah untuk melihat layanan
                </Link>
                <div className="scale-[60%] md:scale-[80%]">
                  <DoubleArrowIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <ServiceHeaderImage />
          </div>
        </header>
      </div>
    );
  } else if (width >= 1024) {
    return (
      <header className="lg:h-[90vh] grid lg:grid-cols-[60%_40%]">
        <div className="w-full pl-[10%] pt-[15vh]">
          <div className="w-[90%] flex items-center flex-col gap-y-[2vh]">
            <div className="w-full">
              <h1 className="poppins-font font-semibold lg:text-[3.5vw]">
                {" "}
                Bawa Karier Freelance Anda
                <span className="text-[#3B82F6] ">
                  {" "}
                  ke Level Selanjutnya
                </span>{" "}
                dengan Solusi Digital yang{" "}
                <span className="text-[#3B82F6] "> Kustom dan Profesional</span>
              </h1>
            </div>
            <div className="w-full">
              <h4 className="inter-font lg:text-[1.5vw]">
                Desain dan solusi digital yang disesuaikan untuk meningkatkan
                profesionalisme dan daya tarik Anda di dunia freelance.
              </h4>
            </div>
            <div className="w-full mt-[clamp(30px,5vh,40px)]">
              <Link
                href="#project-main"
                className="underline text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
              >
                Scroll ke bawah untuk melihat layanan
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end lg:justify-start overflow-hidden">
          <ServiceHeaderImage />
        </div>
      </header>
    );
  } else if (orientation === "landscape" && width < 1024) {
    return (
      <div>
        <header className=" md:h-[290vh] grid md:grid-rows-[130vh_150vh] sm:pt-[10vh] sm:h-[240vh] sm:grid-rows-[100vh_130vh]">
          <div className="w-full flex justify-center pt-[5vh]">
            <div className="w-[90%] flex flex-col md:gap-y-[10vh] ">
              <h1 className="poppins-font font-semibold text-center text-[6vw] md:text-[5vw]">
                {" "}
                Bawa Karier Freelance Anda
                <span className="text-[#3B82F6] ">
                  {" "}
                  ke Level Selanjutnya
                </span>{" "}
                dengan Solusi Digital yang{" "}
                <span className="text-[#3B82F6] "> Kustom dan Profesional</span>
              </h1>
              <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Desain dan solusi digital yang disesuaikan untuk meningkatkan
                profesionalisme dan daya tarik Anda di dunia freelance.
              </h4>
              <div className="flex-centered flex-col gap-y-[1vh] sm:gap-y-[5vh] md:gap-y-[1vh]">
                <Link
                  href="#project-main"
                  className="underline text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
                >
                  Scroll ke bawah untuk melihat layanan
                </Link>
                <div className="scale-[60%] md:scale-[80%]">
                  <DoubleArrowIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <ServiceHeaderImageMD />
          </div>
        </header>
      </div>
    );
  }
};

export default ServicePageHeader;
