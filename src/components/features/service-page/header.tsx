import DoubleArrowIcon from "@/svg/double-arrow-icon";
import Link from "next/link";
import ServiceHeaderImage from "./elements/header-service-image";

const ServicePageHeader = () => {
  return (
    <div>
      <header className="sm:pt-[10vh] md:pt-0 h-[95vh] sm:h-[260vh] md:h-[90vh] grid grid-rows-[40vh_50vh] sm:grid-rows-[130vh_130vh] md:grid-rows-[40vh_50vh]">
        <div className="w-full flex justify-center pt-[5vh]">
          <div className="w-[90%] flex flex-col gap-y-[2vh]">
            <h1 className="poppins-font font-semibold text-center text-[6vw]">
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
            <div className="flex-centered flex-col gap-y-[1vh] sm:gap-y-[5vh]">
              <Link
                href="#project-main"
                className="underline text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
              >
                Scroll ke bawah untuk melihat layanan
              </Link>
              <div className="scale-[60%]">
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
};

export default ServicePageHeader;
