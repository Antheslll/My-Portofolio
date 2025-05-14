import Image from "next/image";

const MainImage = () => {
  return (
    <div className="w-full h-full flex-centered">
      <div className="w-[60vw] h-[60vw] bg-[#F3F4F6] rounded-full z-0"></div>
      <Image
        src="/assets/siapa-saya-avatar.png"
        alt="my-avatar"
        className="h-[55vh] w-[55vh] object-cover overflow-hidden absolute z-10"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default MainImage;
