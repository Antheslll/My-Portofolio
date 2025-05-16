"use client";
import CTAButton from "@/components/button/cta-header-button";
import MainImage, { MainImageMD } from "./elements/main-image";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const AboutPageWho = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width < 1024 && orientation === "portrait") {
    return (
      <main
        id="who-section"
        className="w-full h-[100vh] sm:h-[300vh] md:h-[105vh] grid grid-rows-[45vh_60vh] sm:grid-rows-[100vh_200vh] md:grid-rows-[45vh_60vh] "
      >
        <div className="flex flex-col pt-[7vh] md:pt-[3vh] gap-y-[2vh]">
          <div>
            <h2 className="poppins-font font-semibold text-[8vw] sm:text-[6vw] md:text-[8vw] text-center">
              Siapa <span className="text-[#3B82F6] ">Saya?</span>
            </h2>
          </div>
          <div className="text-center pl-[8vw] pr-[8vw] text-[2.5vw] sm:text-[2vw] md:text-[2.3vw]">
            <p>
              Halo, saya Anthony Liem, seorang web developer dan owner dari
              TAVRA yang saat ini kuliah di Bina Nusantara University. Saya
              menguasai HTML, CSS, JavaScript, React, dan TailwindCSS, serta
              berfokus untuk memahami kebutuhan klien agar dapat memberikan
              solusi yang tepat.
            </p>
            <br />
            <p>
              Filosofi saya adalah memberikan kepuasan kepada klien lebih dari
              sekadar mencari uang. Saya juga sering menjadi pembicara di acara
              kampus dan sekolah. Jika Anda tertarik berdiskusi atau bekerja
              sama, jangan ragu untuk menghubungi saya!
            </p>
          </div>
          <div className="flex-centered mt-[15px]">
            <CTAButton
              width="w-[150px] sm:w-[300px]"
              height="h-[30px] sm:h-[60px]"
              textSize="text-[10px] sm:text-[20px]"
              text="Lihat Hasil Kerja Saya →"
              link="/project"
            />
          </div>
        </div>
        <div className="flex justify-center overflow-hidden">
          <MainImage />
        </div>
      </main>
    );
  } else if (width >= 1024) {
    return (
      <main
        id="who-section"
        className="lg:h-[105vh] grid lg:grid-cols-[50%_50%] overflow-hidden"
      >
        <div className="w-full pl-[10%] flex flex-col lg:gap-y-[3vh] pt-[15vh]">
          <div className="w-full">
            <h2 className="poppins-font font-semibold lg:text-[4vw]">
              Siapa <span className="text-[#3B82F6]">Saya?</span>
            </h2>
          </div>
          <div className="w-full lg:text-[1.3vw]">
            <p>
              Halo, saya Anthony Liem, seorang web developer dan owner dari
              TAVRA yang saat ini kuliah di Bina Nusantara University. Saya
              menguasai HTML, CSS, JavaScript, React, dan TailwindCSS, serta
              berfokus untuk memahami kebutuhan klien agar dapat memberikan
              solusi yang tepat.
            </p>
            <br />
            <p>
              Filosofi saya adalah memberikan kepuasan kepada klien lebih dari
              sekadar mencari uang. Saya juga sering menjadi pembicara di acara
              kampus dan sekolah. Jika Anda tertarik berdiskusi atau bekerja
              sama, jangan ragu untuk menghubungi saya!
            </p>
          </div>
          <div className="w-full mt-[5vh]">
            <CTAButton
              width="w-[150px] sm:w-[300px]"
              height="h-[30px] sm:h-[60px]"
              textSize="text-[10px] sm:text-[20px]"
              text="Lihat Hasil Kerja Saya →"
              link="/project"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <MainImage />
        </div>
      </main>
    );
  } else if (orientation === "landscape" && width < 1024) {
    return (
      <main
        id="who-section"
        className="w-full h-[100vh] sm:h-[300vh] md:h-[300vh] grid grid-rows-[45vh_60vh] sm:grid-rows-[100vh_200vh] md:grid-rows-[130vh_170vh] "
      >
        <div className="flex flex-col pt-[7vh] md:pt-[20vh] gap-y-[2vh]">
          <div>
            <h2 className="poppins-font font-semibold text-[8vw] sm:text-[6vw] md:text-[7vw] text-center">
              Siapa <span className="text-[#3B82F6] ">Saya?</span>
            </h2>
          </div>
          <div className="text-center pl-[8vw] pr-[8vw] text-[2.5vw] sm:text-[2vw] md:text-[2vw]">
            <p>
              Halo, saya Anthony Liem, seorang web developer dan owner dari
              TAVRA yang saat ini kuliah di Bina Nusantara University. Saya
              menguasai HTML, CSS, JavaScript, React, dan TailwindCSS, serta
              berfokus untuk memahami kebutuhan klien agar dapat memberikan
              solusi yang tepat.
            </p>
            <br />
            <p>
              Filosofi saya adalah memberikan kepuasan kepada klien lebih dari
              sekadar mencari uang. Saya juga sering menjadi pembicara di acara
              kampus dan sekolah. Jika Anda tertarik berdiskusi atau bekerja
              sama, jangan ragu untuk menghubungi saya!
            </p>
          </div>
          <div className="flex-centered mt-[15px]">
            <CTAButton
              width="w-[150px] sm:w-[300px]"
              height="h-[30px] sm:h-[60px]"
              textSize="text-[10px] sm:text-[20px]"
              text="Lihat Hasil Kerja Saya →"
              link="/project"
            />
          </div>
        </div>
        <div className="flex justify-center overflow-hidden">
          <MainImageMD />
        </div>
      </main>
    );
  }
};

export default AboutPageWho;
