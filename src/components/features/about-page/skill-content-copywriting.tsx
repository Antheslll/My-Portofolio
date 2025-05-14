import Image from "next/image";

const SkillContentCopywriting = () => {
  return (
    <main className="w-full h-full flex-centered pb-[20vh]">
      <div className="w-[80%] h-auto flex flex-col gap-y-[5vh] ">
        <p className="text-[#6B7280] inter-font text-center text-[3vw]">
          Bisa jadi Kamu ke sini bukan karena penasaran, tapi karena
          <br />
          copywriting saya berhasil membimbing Anda ke sini.
        </p>
        <div className="w-full h-full flex-centered">
          <div className="w-[60vw] h-[60vw] bg-[#F3F4F6] rounded-full z-0"></div>
          <Image
            src="/assets/skill-copywriting.png"
            alt="my-avatar"
            className="h-[40vh] w-[40vh] object-cover overflow-hidden absolute z-10"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </main>
  );
};

export default SkillContentCopywriting;
