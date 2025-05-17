"use client";
import Link from "next/link";
import HomeHeaderImage, {
  HomeHeaderImageMD,
} from "./elements/home-header-image";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const HomePageHeader = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();
  if (width < 1024 && orientation === "portrait") {
    return (
      <header className="sm:pt-[10vh] md:pt-0 h-[95vh] sm:h-[270vh] md:h-[90vh] grid grid-rows-[35vh_60vh] sm:grid-rows-[130vh_130vh] md:grid-rows-[40vh_50vh]">
        <div className="w-full flex justify-center pt-[5vh]">
          <div className="w-[90%] flex flex-col gap-y-[2vh] ">
            <h1 className="poppins-font font-semibold text-center text-[5vw] md:text-[5vw]">
              Kamu mungkin punya skill <br />
              <span className="text-[#3B82F6]">terbaik di bidangmu.</span> Tapi
              <span className="text-[#3B82F6]">
                {" "}
                dunia nggak selalu langsung sadar.
              </span>
            </h1>
            <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Faktanya,{" "}
              <span className="text-red-600">
                hanya 3 dari 10 freelancer yang bertahan di 2 tahun pertama.
              </span>{" "}
              Bukan karena mereka lebih jago, tapi karena mereka tahu cara
              menunjukkan kehebatan mereka.
            </h4>
            <div className="flex-centered">
              <h6 className="text-[#3B82F6] text-[3.2vw]">
                &quot;Lalu, gimana caranya biar dunia sadar kamu jago?&quot;
              </h6>
            </div>
            <div className="flex-centered">
              <Link
                href="#home-main"
                className="text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
              >
                🡳 Scroll ke bawah buat tahu caranya
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-centered overflow-hidden">
          <HomeHeaderImage />
        </div>
      </header>
    );
  } else if (width >= 1024) {
    return (
      <>
        <header className="lg:h-[90vh] xl:h-[120vh] grid lg:grid-cols-[60%_40%] lg:bg-blue-500 xl:bg-red-500 sm:bg-amber-300 md:bg-black">
          <div className="w-full pl-[10%] pt-[15vh]">
            <div className="w-[90%] flex items-center flex-col gap-y-[2vh]">
              <div className="w-full">
                <h1 className="poppins-font font-semibold lg:text-[3.5vw]">
                  Kamu mungkin punya skill <br />
                  <span className="text-[#3B82F6]">
                    terbaik di bidangmu.
                  </span>{" "}
                  Tapi
                  <span className="text-[#3B82F6]">
                    {" "}
                    dunia nggak selalu langsung sadar.
                  </span>
                </h1>
              </div>
              <div className="w-full">
                <h4 className="inter-font lg:text-[1.4vw] ">
                  Faktanya,{" "}
                  <span className="text-red-600">
                    hanya 3 dari 10 freelancer yang bertahan di 2 tahun pertama.
                  </span>{" "}
                  Bukan karena mereka lebih jago, tapi karena mereka tahu cara
                  menunjukkan kehebatan mereka.
                </h4>
              </div>
              <div className="w-full">
                <h6 className="text-[#3B82F6] text-[2vw]">
                  &quot;Lalu, gimana caranya biar dunia sadar kamu jago?&quot;
                </h6>
              </div>
              <div className="w-full">
                <Link
                  href="#home-main"
                  className="text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
                >
                  🡳 Scroll ke bawah buat tahu caranya
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center lg:justify-start overflow-hidden">
            <HomeHeaderImage />
          </div>
        </header>
      </>
    );
  } else if (orientation === "landscape" && width < 1024) {
    return (
      <header className="md:h-[300vh] grid md:grid-rows-[130vh_170vh] sm:pt-[10vh] sm:h-[270vh] sm:grid-rows-[100vh_130vh]">
        <div className="w-full flex items-center justify-center pt-[5vh]">
          <div className="w-[90%] flex flex-col gap-y-[2vh] ">
            <h1 className="poppins-font font-semibold text-center text-[5vw]">
              Kamu mungkin punya skill <br />
              <span className="text-[#3B82F6]">terbaik di bidangmu.</span> Tapi
              <span className="text-[#3B82F6]">
                {" "}
                dunia nggak selalu langsung sadar.
              </span>
            </h1>
            <h4 className="inter-font text-center text-[2.5vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Faktanya,{" "}
              <span className="text-red-600">
                hanya 3 dari 10 freelancer yang bertahan di 2 tahun pertama.
              </span>{" "}
              Bukan karena mereka lebih jago, tapi karena mereka tahu cara
              menunjukkan kehebatan mereka.
            </h4>
            <div className="flex-centered">
              <h6 className="text-[#3B82F6] text-[3.2vw]">
                &quot;Lalu, gimana caranya biar dunia sadar kamu jago?&quot;
              </h6>
            </div>
            <div className="flex-centered">
              <Link
                href="#home-main"
                className="text-[#3B82F6] text-[2vw] lg:text-[1.3vw]"
              >
                🡳 Scroll ke bawah buat tahu caranya
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-centered overflow-hidden">
          <HomeHeaderImageMD />
        </div>
      </header>
    );
  }
};

export default HomePageHeader;
