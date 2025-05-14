import CTAButton from "@/components/button/cta-header-button";
import HeaderImage from "./header-image";

const AboutPageHeader = () => {
  return (
    <>
      <header className=" sm:pt-[10vh] h-[90vh] grid grid-rows-[40vh_50vh]">
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
                width="w-[100px]"
                height="h-[30px]"
                textSize="text-[10px]"
                text="Kenalan yuk!"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <HeaderImage />
        </div>
      </header>
    </>
  );
};

export default AboutPageHeader;
