"use client";
import CTAButton from "@/components/button/cta-header-button";
import ProjectHeaderImage, {
  ProjectHeaderImageMD,
} from "./element/header-project-image";
import Link from "next/link";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const ProjectHeader = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width < 1024 && orientation === "portrait") {
    return (
      <>
        <header className="sm:pt-[10vh] md:pt-0 h-[95vh] sm:h-[260vh] md:h-[90vh] grid grid-rows-[40vh_50vh] sm:grid-rows-[130vh_130vh] md:grid-rows-[40vh_50vh]">
          <div className="w-full flex justify-center pt-[5vh]">
            <div className="w-[90%] flex flex-col">
              <h1 className="poppins-font font-semibold text-center text-[6vw]">
                {" "}
                Karya-Karya Digital yang Saya Bangun dengan
                <span className="text-[#3B82F6] "> Hati dan Kode</span>
              </h1>
              <h4 className="inter-font text-center text-[2vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Saya bantu bikin website portofolio yang clean, cepat, dan
                nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                makin pede.
              </h4>
              <div className="flex-centered flex-col mt-[clamp(30px,5vh,40px)] gap-y-[1vh] sm:gap-y-[5vh]">
                <Link href="#project-main">
                  <CTAButton
                    width="w-[100px] sm:w-[200px]"
                    height="h-[30px] sm:h-[60px]"
                    textSize="text-[10px] sm:text-[20px]"
                    text="Kenalan yuk!"
                  />
                </Link>
                <Link
                  href="/about"
                  className="underline text-[#3B82F6] text-[2vw]"
                >
                  atau mau kenalan dulu?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <ProjectHeaderImage />
          </div>
        </header>
      </>
    );
  } else if (width >= 1024) {
    return (
      <>
        <header className="lg:h-[90vh] grid lg:grid-cols-[60%_40%] scroll-smooth">
          <div className="w-full pl-[10%] pt-[10vh]">
            <div className="w-[90%] flex items-center flex-col gap-y-[2vh]">
              <h1 className="poppins-font font-semibold lg:text-[3.5vw]">
                {" "}
                Karya-Karya Digital yang Saya Bangun dengan
                <span className="text-[#3B82F6] "> Hati dan Kode</span>
              </h1>
              <h4 className="inter-font lg:text-[1.5vw]">
                Saya bantu bikin website portofolio yang clean, cepat, dan
                nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                makin pede.
              </h4>
              <div className="w-full mt-[clamp(30px,5vh,40px)] flex flex-col lg:gap-y-[3vh]">
                <Link href="#project-main">
                  <CTAButton
                    width="w-[100px] sm:w-[200px]"
                    height="h-[30px] sm:h-[60px]"
                    textSize="text-[10px] sm:text-[20px]"
                    text="Kenalan yuk!"
                  />
                </Link>
                <Link
                  href="/about"
                  className="underline text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
                >
                  atau mau kenalan dulu?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start overflow-hidden">
            <div className="scale-x-[-1]">
              <ProjectHeaderImage />
            </div>
          </div>
        </header>
      </>
    );
  } else if (orientation === "landscape" && width < 1024) {
    return (
      <>
        <header className="md:h-[250vh] grid md:grid-rows-[130vh_110vh] sm:pt-[10vh] sm:h-[230vh] sm:grid-rows-[100vh_130vh]">
          <div className="w-full flex justify-center pt-[5vh]">
            <div className="w-[90%] flex flex-col">
              <h1 className="poppins-font font-semibold text-center text-[6vw]">
                {" "}
                Karya-Karya Digital yang Saya Bangun dengan
                <span className="text-[#3B82F6] "> Hati dan Kode</span>
              </h1>
              <h4 className="inter-font text-center text-[2vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Saya bantu bikin website portofolio yang clean, cepat, dan
                nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                makin pede.
              </h4>
              <div className="flex-centered flex-col mt-[clamp(30px,5vh,40px)] gap-y-[1vh] sm:gap-y-[5vh]">
                <Link href="#project-main">
                  <CTAButton
                    width="w-[100px] sm:w-[200px]"
                    height="h-[30px] sm:h-[60px]"
                    textSize="text-[10px] sm:text-[20px]"
                    text="Kenalan yuk!"
                  />
                </Link>
                <Link
                  href="/about"
                  className="underline text-[#3B82F6] text-[2vw]"
                >
                  atau mau kenalan dulu?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <ProjectHeaderImageMD />
          </div>
        </header>
      </>
    );
  }
};

export default ProjectHeader;
