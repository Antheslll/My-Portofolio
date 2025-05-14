import CTAButton from "@/components/button/cta-header-button";
import MainImage from "./elements/main-image";

const AboutPageWho = () => {
  return (
    <main className="w-full h-[105vh] grid grid-rows-[45vh_60vh]">
      <div className="flex flex-col pt-[7vh] gap-y-[2vh]">
        <div>
          <h2 className="poppins-font font-semibold text-[8vw] text-center">
            Siapa <span className="text-[#3B82F6] ">Saya?</span>
          </h2>
        </div>
        <div className="text-center pl-[8vw] pr-[8vw] text-[2.5vw]">
          <p>
            Halo, saya Anthony Liem, seorang web developer dan owner dari TAVRA
            yang saat ini kuliah di Bina Nusantara University. Saya menguasai
            HTML, CSS, JavaScript, React, dan TailwindCSS, serta berfokus untuk
            memahami kebutuhan klien agar dapat memberikan solusi yang tepat.
          </p>
          <br />
          <p>
            Filosofi saya adalah memberikan kepuasan kepada klien lebih dari
            sekadar mencari uang. Saya juga sering menjadi pembicara di acara
            kampus dan sekolah. Jika Anda tertarik berdiskusi atau bekerja sama,
            jangan ragu untuk menghubungi saya!
          </p>
        </div>
        <div className="flex-centered mt-[15px]">
          <CTAButton
            width="w-[150px]"
            height="h-[30px]"
            textSize="text-[10px]"
            text="Lihat Hasil Kerja Saya →"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <MainImage />
      </div>
    </main>
  );
};

export default AboutPageWho;
