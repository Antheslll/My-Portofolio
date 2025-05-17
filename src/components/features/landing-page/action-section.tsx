"use client";

import useScreenOrientation from "@/hook/useScreenOrientation";
import useScreenSize from "@/hook/useScreenSize";
import Image from "next/image";
import Link from "next/link";

const ActionSection = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <main className=" md:h-[300vh] grid md:grid-rows-[50vh_80vh] ">
        <div className="w-full flex justify-center">
          {" "}
          <div className="w-[90%] flex flex-col gap-y-[2vh] ">
            <h1 className="poppins-font font-semibold text-center md:text-[5vw]">
              Masih
              <span className="text-[#3B82F6]">Ragu?</span>
            </h1>
            <h2 className="inter-font text-center text-[3vw]">
              Santai, tanya-tanya dulu aja,
              <span className="text-red-600"> GRATIS.</span> Tapi ingat,
              pesaingmu mungkin udah mulai duluan, jadi jangan terlalu lama
              mikirnya!
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] flex flex-col md:gap-y-[5vh]">
            <div className="grid grid-cols-[40%_60%]">
              <div className="flex flex-col gap-y-[5vh] md:pt-[10vh]">
                <p className="text-[2.8vw]">
                  <span className="text-[3.5vw] font-bold">
                    Kontak <span className="text-red-600">SEGERA!</span>
                  </span>
                  <br />
                  untuk bahas langkah selanjutnya, dan buka peluang yang belum
                  terlihat.
                </p>
                <Link
                  href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
                  target="_blank"
                >
                  <button
                    className={`cursor-pointer w-[85%] md:h-[15vh] rounded-sm bg-[#59DB8A] text-white grid grid-cols-[1fr_4fr]`}
                  >
                    <div className="flex-centered">
                      <WAIconWhite />
                    </div>
                    <span className="w-full h-full flex items-center text-white poppins-font text-[2vw] lg:text-[2vw]">
                      Hubungi Sekarang!
                    </span>
                  </button>
                </Link>
              </div>
              <div className="w-full h-full">
                <Image
                  src="/assets/masih-ragu-avatar.png"
                  alt="my-avatar"
                  className=" xl:w-[75vh] xl:h-[75vh] lg:w-[60vh] lg:h-[60vh] object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="mt-[3vh] flex flex-col gap-y-[1.5vh] sm:gap-y-[5vh]">
              <p className="text-[2.7vw] text-center">
                Tampilkan profesionalismemu dengan cara yang tepat, biar klien
                langsung yakin kamu yang mereka cari!
              </p>
              <Link href="/service" className="flex-centered">
                <button className="cursor-pointer w-[80%] md:h-[17vh] text-[3.5vw] bg-[#3B82F6] text-white rounded-md">
                  Lihat Layanan Sekarang!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  } else if (width >= 640 && width < 768 && orientation === "portrait") {
    return (
      <main className="w-full h-[100vh] sm:h-[100vh] grid sm:grid-rows-[10vh_90vh]">
        <div className="w-full flex justify-center">
          {" "}
          <div className="w-[90%] flex flex-col gap-y-[2vh] ">
            <h1 className="poppins-font font-semibold text-center text-[6vw] md:text-[5vw]">
              Masih
              <span className="text-[#3B82F6]">Ragu?</span>
            </h1>
            <h2 className="inter-font text-center text-[3vw] lg:text-[2.3vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Santai, tanya-tanya dulu aja,
              <span className="text-red-600"> GRATIS.</span> Tapi ingat,
              pesaingmu mungkin udah mulai duluan, jadi jangan terlalu lama
              mikirnya!
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-center pt-[5vh] md:pt-0 lg:pt-[5vh] xl:pt-[20vh]">
          <div className="w-[80%] flex flex-col md:gap-y-[5vh] lg:gap-y-[5vh] xl:gap-y-[10vh]">
            <div className="grid grid-cols-[40%_60%]">
              <div className="flex flex-col gap-y-[1vh] pt-[4vh] sm:pt-[10vh] md:pt-[5vh] sm:gap-y-[4vh] lg:pt-[6vh] lg:gap-y-[8vh]">
                <p className="text-[2.8vw]">
                  <span className="text-[3.5vw] font-bold">
                    Kontak <span className="text-red-600">SEGERA!</span>
                  </span>
                  <br />
                  untuk bahas langkah selanjutnya, dan buka peluang yang belum
                  terlihat.
                </p>
                <Link
                  href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
                  target="_blank"
                >
                  <button
                    className={` cursor-pointer w-[85%] sm:h-[5vh] rounded-sm bg-[#59DB8A] text-white grid grid-cols-[1fr_4fr]`}
                  >
                    <div className=" w-full h-full flex justify-center items-center">
                      <WAIconWhite />
                    </div>
                    <span className="w-full h-full flex items-center text-white poppins-font text-[2vw] lg:text-[2vw]">
                      Hubungi Sekarang!
                    </span>
                  </button>
                </Link>
              </div>
              <div className="w-full h-full flex-centered">
                <Image
                  src="/assets/masih-ragu-avatar.png"
                  alt="my-avatar"
                  className=" xl:w-[75vh] xl:h-[75vh] lg:w-[60vh] lg:h-[60vh] object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="mt-[3vh] flex flex-col gap-y-[1.5vh] sm:gap-y-[5vh]">
              <p className="text-[2.7vw] text-center">
                Tampilkan profesionalismemu dengan cara yang tepat, biar klien
                langsung yakin kamu yang mereka cari!
              </p>
              <Link href="/service" className="flex-centered">
                <button className="cursor-pointer w-[80%]  sm:h-[7vh]  text-[3.5vw] bg-[#3B82F6] text-white rounded-md">
                  Lihat Layanan Sekarang!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full h-[100vh] sm:h-[250vh] md:h-[100vh] lg:h-[200vh] xl:h-[200vh] grid grid-rows-[15vh_80vh] sm:grid-rows-[60vh_150vh] md:grid-rows-[20vh_80vh] lg:grid-rows-[25vh_80vh]">
        <div className="w-full flex justify-center">
          {" "}
          <div className="w-[90%] flex flex-col gap-y-[2vh] ">
            <h1 className="poppins-font font-semibold text-center text-[6vw] md:text-[5vw]">
              Masih
              <span className="text-[#3B82F6]">Ragu?</span>
            </h1>
            <h2 className="inter-font text-center text-[3vw] lg:text-[2.3vw] pl-[clamp(20px,8.4vw,40px)] pr-[clamp(20px,8.4vw,40px)] ">
              Santai, tanya-tanya dulu aja,
              <span className="text-red-600"> GRATIS.</span> Tapi ingat,
              pesaingmu mungkin udah mulai duluan, jadi jangan terlalu lama
              mikirnya!
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-center pt-[5vh] md:pt-0 lg:pt-[5vh] xl:pt-[20vh]">
          <div className="w-[80%] flex flex-col md:gap-y-[5vh] lg:gap-y-[5vh] xl:gap-y-[10vh]">
            <div className="grid grid-cols-[40%_60%]">
              <div className="flex flex-col gap-y-[1vh] pt-[4vh] sm:pt-[10vh] md:pt-[5vh] sm:gap-y-[4vh] lg:pt-[6vh] lg:gap-y-[8vh]">
                <p className="text-[2.8vw]">
                  <span className="text-[3.5vw] font-bold">
                    Kontak <span className="text-red-600">SEGERA!</span>
                  </span>
                  <br />
                  untuk bahas langkah selanjutnya, dan buka peluang yang belum
                  terlihat.
                </p>
                <Link
                  href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
                  target="_blank"
                >
                  <button
                    className={` cursor-pointer w-[85%] h-[4vh] sm:h-[13vh] md:h-[5vh] lg:h-[70px] rounded-sm bg-[#59DB8A] text-white grid grid-cols-[1fr_4fr]`}
                  >
                    <div className=" w-full h-full flex justify-center items-center">
                      <WAIconWhite />
                    </div>
                    <span className="w-full h-full flex items-center text-white poppins-font text-[2vw] lg:text-[2vw]">
                      Hubungi Sekarang!
                    </span>
                  </button>
                </Link>
              </div>
              <div className="w-full h-full flex-centered">
                <Image
                  src="/assets/masih-ragu-avatar.png"
                  alt="my-avatar"
                  className=" xl:w-[75vh] xl:h-[75vh] lg:w-[60vh] lg:h-[60vh] object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="mt-[3vh] flex flex-col gap-y-[1.5vh] sm:gap-y-[5vh]">
              <p className="text-[2.7vw] text-center">
                Tampilkan profesionalismemu dengan cara yang tepat, biar klien
                langsung yakin kamu yang mereka cari!
              </p>
              <Link href="/service" className="flex-centered">
                <button className="cursor-pointer w-[80%] h-[5vh] sm:h-[20vh] md:h-[7vh] text-[3.5vw] lg:h-[100px] lg:text-[4vw]  bg-[#3B82F6] text-white rounded-md">
                  Lihat Layanan Sekarang!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default ActionSection;

const WAIconWhite = () => {
  return (
    <svg
      className="w-[55%]"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00214 0.00101233C4.93012 0.000698946 3.87758 0.287599 2.95399 0.831878C2.03041 1.37616 1.2695 2.15793 0.750392 3.09591C0.231288 4.0339 -0.0270502 5.09382 0.00224071 6.16547C0.0315317 7.23712 0.347383 8.28135 0.916948 9.18957L1.05969 9.41635L0.453277 11.6295L2.72405 11.0342L2.94272 11.1638C3.86677 11.7121 4.9216 12.001 5.99607 12H5.99911C7.59037 12.0003 9.11657 11.3684 10.242 10.2434C11.3673 9.11833 11.9997 7.59231 12 6.00101C12.0003 4.40971 11.3684 2.88348 10.2434 1.75807C9.11839 0.632667 7.5924 0.000268529 6.00113 0L6.00214 0.00101233ZM9.52928 8.57606C9.39677 8.79537 9.22021 8.98481 9.01075 9.13241C8.8013 9.28001 8.5635 9.38255 8.3124 9.43356C7.93341 9.49867 7.54446 9.4744 7.17651 9.36269C6.82736 9.25445 6.48434 9.12737 6.14894 8.98203C4.90343 8.35696 3.84182 7.41883 3.06826 6.25968C2.64612 5.72317 2.38995 5.07499 2.33125 4.39484C2.32657 4.11414 2.38031 3.83553 2.48907 3.57672C2.59782 3.3179 2.7592 3.08453 2.96297 2.89142C3.02343 2.82291 3.0973 2.76752 3.18001 2.72869C3.26272 2.68986 3.35252 2.6684 3.44385 2.66565C3.56331 2.66565 3.68379 2.66565 3.78908 2.67173C3.90044 2.67679 4.04825 2.62921 4.19403 2.98152C4.34589 3.34194 4.70629 4.22981 4.75084 4.31992C4.77926 4.36722 4.79552 4.42082 4.79817 4.47594C4.80082 4.53106 4.78978 4.58598 4.76602 4.63579C4.72081 4.7442 4.66011 4.84548 4.58582 4.93647C4.49471 5.04176 4.3965 5.17135 4.31551 5.25234C4.2244 5.34244 4.13126 5.43963 4.23554 5.61984C4.50679 6.08329 4.84484 6.50425 5.23881 6.86915C5.66713 7.24894 6.15795 7.55173 6.68955 7.76411C6.86975 7.85523 6.97504 7.83903 7.08033 7.71855C7.18562 7.59807 7.53084 7.1921 7.65131 7.01189C7.77179 6.83169 7.89125 6.86206 8.05627 6.92179C8.22128 6.98152 9.10914 7.41787 9.28935 7.50898C9.46955 7.6001 9.59002 7.64363 9.63457 7.71855C9.68323 8.00855 9.64666 8.30644 9.52928 8.57606Z"
        fill="white"
      />
    </svg>
  );
};
