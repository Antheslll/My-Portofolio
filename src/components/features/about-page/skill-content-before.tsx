import Image from "next/image";

const SkillContentBefore = () => {
  return (
    <div className="flex flex-col gap-y-[10vh] pt-[10vh] md:pt-[15vh] lg:pt-[5vh] xl:pt-[10vh]">
      <div className="w-full h-full flex-centered">
        <div className="w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] md:w-[50vw] md:h-[50vw] lg:w-[30vw] lg:h-[30vw] xl:w-[25vw] xl:h-[25vw] bg-[#F3F4F6] rounded-full z-0"></div>
        <Image
          src="/assets/skill-section-avatar.png"
          alt="my-avatar"
          className="h-[40vh] w-[40vh] sm:w-[78vh] sm:h-[78vh] md:h-[40vh] md:w-[40vh] lg:h-[30vw] lg:w-[30vw] xl:w-[25vw] xl:h-[25vw] object-cover overflow-hidden absolute z-10"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <h3 className="text-center poppins-font font-semibold text-[5vw] lg:text-[3vw] xl:text-[2.5vw]">
          Pilih salah satu untuk lihat
          <br />
          keahlian yang saya kuasai
        </h3>
      </div>
    </div>
  );
};

export default SkillContentBefore;
