import Image from "next/image";
import useScreenOrientation from "@/hook/useScreenOrientation";
import useScreenSize from "@/hook/useScreenSize";
import { useEffect, useState } from "react";

const SkillContentCopywriting = () => {
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <main
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex-centered lg:pb-0`}
      >
        <div className="w-[80%] h-auto flex flex-col gap-y-[5vh] xl:gap-y-[10vh] ">
          <p className="text-[#6B7280] inter-font text-center text-[3vw] sm:text-[2vw] md:text-[2.3vw] lg:text-[2vw]">
            Bisa jadi Kamu ke sini bukan karena penasaran, tapi karena
            <br />
            copywriting saya berhasil membimbing Anda ke sini.
          </p>
          <div className="w-full h-full flex-centered">
            <div className="w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-[#F3F4F6] rounded-full z-0"></div>
            <Image
              src="/assets/skill-copywriting.png"
              alt="my-avatar"
              className="h-[40vh] w-[40vh] sm:h-[80vh] sm:w-[80vh] md:h-[110vh] md:w-[110vh] lg:h-[40vw] lg:w-[40vw] object-cover overflow-hidden absolute z-10"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex-centered pb-[20vh] lg:pb-0`}
      >
        <div className="w-[80%] h-auto flex flex-col gap-y-[5vh] xl:gap-y-[10vh] ">
          <p className="text-[#6B7280] inter-font text-center text-[3vw] sm:text-[2vw] md:text-[3vw] lg:text-[2vw]">
            Bisa jadi Kamu ke sini bukan karena penasaran, tapi karena
            <br />
            copywriting saya berhasil membimbing Anda ke sini.
          </p>
          <div className="w-full h-full flex-centered">
            <div className="w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] md:w-[50vw] md:h-[50vw] lg:w-[30vw] lg:h-[30vw] bg-[#F3F4F6] rounded-full z-0"></div>
            <Image
              src="/assets/skill-copywriting.png"
              alt="my-avatar"
              className="h-[40vh] w-[40vh] sm:h-[80vh] sm:w-[80vh] md:h-[40vh] md:w-[40vh] lg:h-[40vw] lg:w-[40vw] object-cover overflow-hidden absolute z-10"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </main>
    );
  }
};

export default SkillContentCopywriting;
