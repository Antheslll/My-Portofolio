import Image from "next/image";

const SkillContentBefore = () => {
  return (
    <div className="flex flex-col gap-y-[10vh] pt-[10vh]">
      <div className="w-full h-full flex-centered">
        <div className="w-[60vw] h-[60vw] bg-[#F3F4F6] rounded-full z-0"></div>
        <Image
          src="/assets/skill-section-avatar.png"
          alt="my-avatar"
          className="h-[40vh] w-[40vh] object-cover overflow-hidden absolute z-10"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <h3 className="text-center poppins-font font-semibold text-[5vw]">
          Pilih salah satu untuk lihat
          <br />
          keahlian yang saya kuasai
        </h3>
      </div>
    </div>
  );
};

export default SkillContentBefore;
