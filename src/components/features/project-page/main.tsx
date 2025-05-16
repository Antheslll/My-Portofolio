import { GithubIcon, UXIcon } from "@/svg/portofolio-button-icon";
import ProjectList from "./element/project-list";
import Image from "next/image";
import Link from "next/link";

const ProjectMain = () => {
  return (
    <main
      id="project-main"
      className="sm:pt-[10vh] md:pt-0 h-[100vh] sm:h-[250vh] md:h-[110vh] lg:h-[150vh] xl:h-[200vh] grid grid-rows-[30vh_50vh_10vh] sm:grid-rows-[80vh_130vh_20vh] md:grid-rows-[40vh_50vh_10vh] lg:grid-rows-[35vh_90vh_20vh] xl:grid-rows-[50vh_90vh_30vh]"
    >
      <div className="w-full flex-centered pt-[5vh]">
        <div className="lg:w-[60%] w-[80%] flex flex-col gap-y-[2vh] lg:gap-y-[4vh]">
          <h2 className="poppins-font font-semibold text-center text-[4vw] lg:text-[3vw]">
            {" "}
            Proyek-Proyek Digital Saya
            <span className="text-[#3B82F6] ">
              {" "}
              Menanti Anda untuk Dijelajahi
            </span>
          </h2>
          <h4 className="inter-font text-center text-[2vw] lg:text-[1.5vw]  ">
            Setiap proyek adalah cerminan dari dedikasi saya sebagai Frontend
            Developer – dari ide, desain, hingga implementasi. Lihat bagaimana
            saya mewujudkan ide menjadi produk digital yang bisa digunakan.
          </h4>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="w-full h-full flex justify-center gap-x-[10vw]">
          <ProjectList
            projectSrc="/assets/Eldoria Logo.png"
            projectAlt="Eldoria-logo"
            projectImgWidth={2048}
            projectImgHeight={2048}
            projectTitle={`Eldoria - Website Fantasy \n World Portofolio`}
            firstButtonIcon={<GithubIcon />}
            firstButtonText="Kunjungi di Github"
            firstButtonLink="https://github.com/Antheslll/Eldoria"
            firstButtonBg="bg-black"
            secondButtonIcon={
              <Image
                className="w-[70%]"
                src="/assets/Eldoria Logo.png"
                alt="Eldoria-logo"
                width={2048}
                height={2048}
              />
            }
            secondButtonText="Kunjungi Website"
            secondButtonLink="https://eldoria-eta.vercel.app/"
            secondButtonBg="eldoria-button-bg"
          />
          <ProjectList
            projectSrc="/assets/Dapur Tani Logo b.png"
            projectAlt="Dapur Tani Logo"
            projectImgWidth={2048}
            projectImgHeight={2048}
            projectTitle={`Dapur Tani - Platform e-\ncommerce hasil pertanian\nlokal`}
            firstButtonIcon={<GithubIcon />}
            firstButtonText="Kunjungi di Github"
            firstButtonLink="https://github.com/Antheslll/Website-Dapur-Tani"
            firstButtonBg="bg-black"
            secondButtonIcon={<UXIcon />}
            secondButtonText="Lihat UX Research"
            secondButtonLink="https://drive.google.com/drive/folders/1NIHyfi7WCrUGTNL5wT1Ye5eDdiw661fv?usp=sharing"
            secondButtonBg="bg-[#87BD42]"
          />
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/service">
          <span className="text-[2vw] underline text-[#3B82F6]">
            Yuk Lihat Apa yang Bisa Saya Bantu →
          </span>
        </Link>
      </div>
    </main>
  );
};

export default ProjectMain;
