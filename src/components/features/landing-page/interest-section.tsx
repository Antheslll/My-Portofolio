"use client";
import CTAButton from "@/components/button/cta-header-button";
import useScreenOrientation from "@/hook/useScreenOrientation";
import useScreenSize from "@/hook/useScreenSize";
import Image from "next/image";

const InterestSection = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <main
        id="home-main"
        className="w-full md:h-[250vh] grid md:grid-rows-[80vh_70vh]"
      >
        <div className="w-full flex justify-center pt-[5vh]">
          {" "}
          <div className="w-[90%] flex flex-col gap-y-[2vh]">
            <h2 className="poppins-font font-semibold text-center md:text-[5vw] ">
              Disinilah Peran{" "}
              <span className="text-[#3B82F6] ">
                Portofolio Menjadi SENJATA
              </span>
              , Bukan Sekadar <span className="text-red-600">PAJANGAN</span>
            </h2>
            <i>
              <h3 className="inter-font text-center text-[3.2vw] lg:text-[2vw] ">
                Portofolio yang tepat bukan cuma bikin kamu terlihat keren, tapi
                bikin klien langsung paham{" "}
                <span className="text-red-600">
                  kenapa mereka harus pilih kamu.
                </span>
              </h3>
            </i>
          </div>
        </div>
        <div className="w-full flex justify-center pt-[2vh]">
          <div className="w-[92.5%] flex flex-col">
            <p className="text-left text-[2.5vw]">
              Karena itulah saya bantu bikin website portofolio yang nggak cuma
              cantik, tapi juga kerja keras buat kamu—bahkan saat kamu tidur.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex flex-col md:gap-y-[7vh] md:pt-[7vh]">
                <ul className="md:text-[2.5vw] flex flex-col md:gap-y-[4vh]">
                  <li>✅ Desain profesional yang memantapkan kesan pertama</li>
                  <li>
                    ✅ Dipandu step-by-step, cocok buat yang belum pernah bikin
                  </li>
                  <li>✅ Fokus pada hasil: mengubah pengunjung jadi klien</li>
                </ul>
                <div className="flex flex-col gap-y-[1vh]">
                  <p className="text-[2.5vw] text-[#3B82F6]">
                    Siap Bikin Portofoliomu Jadi Mesin Pencetak Klien?
                  </p>
                  <CTAButton
                    width="w-[95%]"
                    height="md:h-[15vh] "
                    textSize="text-[2.5vw] lg:text-[2.5vw] "
                    text="Buat Portofoliomu sekarang →"
                    link="/service"
                  />
                </div>
              </div>
              <div className="w-full h-full flex items-end pt-[5vh]">
                <Image
                  src="/assets/seats-avatar.png"
                  alt="my-avatar"
                  className="md:w-[100vh] md:h-[100vh] object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="mt-[3vh]">
              <p className="text-[2.3vw] text-[#3B82F6]">
                🡳 Atau scroll ke bawah kalau kamu masih ragu—tapi jangan
                kelamaan ya, pesaingmu nggak nunggu.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main
        id="home-main"
        className="w-full h-[110vh] sm:h-[300vh] md:h-[100vh] lg:h-[180vh] xl:h-[240vh] grid grid-rows-[30vh_70vh] sm:grid-rows-[100vh_200vh] md:grid-rows-[30vh_70vh] lg:grid-rows-[40vh_120vh] xl:grid-rows-[65vh_160vh]"
      >
        <div className="w-full flex justify-center pt-[5vh]">
          {" "}
          <div className="w-[90%] lg:w-[80%] xl:w-[70%] flex flex-col gap-y-[2vh]">
            <h2 className="poppins-font font-semibold text-center text-[6vw] md:text-[5vw] lg:text-[3.5vw]">
              Disinilah Peran{" "}
              <span className="text-[#3B82F6] ">
                Portofolio Menjadi SENJATA
              </span>
              , Bukan Sekadar <span className="text-red-600">PAJANGAN</span>
            </h2>
            <i>
              <h3 className="inter-font text-center text-[3.2vw] lg:text-[2vw] ">
                Portofolio yang tepat bukan cuma bikin kamu terlihat keren, tapi
                bikin klien langsung paham{" "}
                <span className="text-red-600">
                  kenapa mereka harus pilih kamu.
                </span>
              </h3>
            </i>
          </div>
        </div>
        <div className="w-full flex justify-center pt-[2vh]">
          <div className="w-[92.5%] flex flex-col">
            <p className="text-left text-[2.5vw] lg:text-[2.2vw] ">
              Karena itulah saya bantu bikin website portofolio yang nggak cuma
              cantik, tapi juga kerja keras buat kamu—bahkan saat kamu tidur.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-y-[5vh] sm:gap-y-[35vh] md:gap-y-[7vh] lg:gap-y-[18vh] pt-[5vh]">
                <ul className="text-[3.5vw] sm:text-[2.7vw] md:text-[3vw] lg:text-[2.3vw] flex flex-col gap-y-[1vh] sm:gap-y-[5vh] md:gap-y-[2vh] lg:gap-y-[2vh]">
                  <li>✅ Desain profesional yang memantapkan kesan pertama</li>
                  <li>
                    ✅ Dipandu step-by-step, cocok buat yang belum pernah bikin
                  </li>
                  <li>✅ Fokus pada hasil: mengubah pengunjung jadi klien</li>
                </ul>
                <div className="flex flex-col gap-y-[1vh]">
                  <p className="text-[2.5vw] text-[#3B82F6]">
                    Siap Bikin Portofoliomu Jadi Mesin Pencetak Klien?
                  </p>
                  <CTAButton
                    width="w-[95%]"
                    height="h-[5vh] sm:h-[15vh] md:h-[7vh] lg:h-[80px]"
                    textSize="text-[2.5vw] lg:text-[2.5vw] "
                    text="Buat Portofoliomu sekarang →"
                    link="/service"
                  />
                </div>
              </div>
              <div className="w-full h-full flex items-end pt-[5vh]">
                <Image
                  src="/assets/seats-avatar.png"
                  alt="my-avatar"
                  className="h-[clamp(0px,40vh,300px)] w-[clamp(0px,40vh,300px)] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] xl:w-[100vh] xl:h-[100vh] lg:w-[85vh] lg:h-[85vh] object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="mt-[3vh]">
              <p className="text-[2.3vw] text-[#3B82F6]">
                🡳 Atau scroll ke bawah kalau kamu masih ragu—tapi jangan
                kelamaan ya, pesaingmu nggak nunggu.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default InterestSection;
