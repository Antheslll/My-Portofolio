"use client";
import CTAButton from "@/components/button/cta-header-button";
import HeaderImage, { HeaderImageMD } from "./header-image";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const AboutPageHeader = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width < 1024 && orientation === "portrait") {
    return (
      <>
        <header className="sm:pt-[10vh] md:pt-0 h-[90vh] sm:h-[310vh] md:h-[90vh] grid grid-rows-[40vh_50vh] sm:grid-rows-[clamp(450px,40vh,500px)_clamp(600px,50vh,800px)] md:grid-rows-[40vh_50vh]">
          <div className="w-full flex items-center flex-col pt-[2vh]">
            <div className="w-[90%] flex flex-col gap-y-[1vh]">
              <h2 className="poppins-font font-semibold text-center text-[3.5vw] ">
                Halo! Saya Anthony 👋
              </h2>
              <h1 className="poppins-font font-semibold text-center text-[6vw]">
                {" "}
                <span className="text-[#3B82F6] ">Web Developer </span>
                yang Bantu Freelancer Tampil Lebih Profesional
              </h1>
              <h4 className="inter-font text-center text-[2vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Saya bantu bikin website portofolio yang clean, cepat, dan
                nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                makin pede.
              </h4>
              <div className="flex-centered mt-[clamp(30px,5vh,40px)]">
                <CTAButton
                  width="w-[100px] sm:w-[200px]"
                  height="h-[30px] sm:h-[60px]"
                  textSize="text-[10px] sm:text-[20px]"
                  text="Kenalan yuk!"
                  link="#who-section"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <HeaderImage />
          </div>
        </header>
      </>
    );
  } else if (width >= 1024) {
    return (
      <>
        <header className="lg:h-[90vh] grid lg:grid-cols-[60%_40%]">
          <div className="w-full pl-[10%] pt-[15vh]">
            <div className="w-[90%] flex items-center flex-col gap-y-[2vh]">
              <div className="w-full">
                <h2 className="poppins-font font-semibold lg:text-[2vw] ">
                  Halo! Saya Anthony 👋
                </h2>
              </div>
              <div className="w-full">
                <h1 className="poppins-font font-semibold lg:text-[3.5vw]">
                  {" "}
                  <span className="text-[#3B82F6] ">Web Developer </span>
                  yang Bantu Freelancer Tampil Lebih Profesional
                </h1>
              </div>
              <div className="w-full">
                <h4 className="inter-font lg:text-[1.5vw]">
                  Saya bantu bikin website portofolio yang clean, cepat, dan
                  nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                  makin pede.
                </h4>
              </div>
              <div className="w-full mt-[clamp(30px,5vh,40px)]">
                <CTAButton
                  width="lg:w-[170px]"
                  height="lg:h-[50px]"
                  textSize="lg:text-[15px]"
                  text="Kenalan yuk!"
                  link="#who-section"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <HeaderImage />
          </div>
        </header>
      </>
    );
  } else if (width < 1024 && orientation === "landscape") {
    return (
      <>
        <header className="w-full sm:pt-[10vh] sm:h-[250vh] sm:grid-rows-[100vh_130vh] md:h-[300vh] grid md:grid-rows-[130vh_170vh]">
          <div className="w-full flex items-center flex-col pt-[2vh]">
            <div className="w-[90%] flex flex-col gap-y-[1vh]">
              <h2 className="poppins-font font-semibold text-center text-[3.5vw] ">
                Halo! Saya Anthony 👋
              </h2>
              <h1 className="poppins-font font-semibold text-center text-[6vw]">
                {" "}
                <span className="text-[#3B82F6] ">Web Developer </span>
                yang Bantu Freelancer Tampil Lebih Profesional
              </h1>
              <h4 className="inter-font text-center text-[2vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
                Saya bantu bikin website portofolio yang clean, cepat, dan
                nunjukkin keunikan skill kamu—biar klien makin yakin dan kamu
                makin pede.
              </h4>
              <div className="flex-centered mt-[clamp(30px,5vh,40px)]">
                <CTAButton
                  width="w-[100px] sm:w-[200px]"
                  height="h-[30px] sm:h-[60px]"
                  textSize="text-[10px] sm:text-[20px]"
                  text="Kenalan yuk!"
                  link="#who-section"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end overflow-hidden">
            <HeaderImageMD />
          </div>
        </header>
      </>
    );
  }
};

export default AboutPageHeader;
