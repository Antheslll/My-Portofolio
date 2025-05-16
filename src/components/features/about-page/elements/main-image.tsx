import Image from "next/image";

const MainImage = () => {
  return (
    <div className="w-full h-full flex-centered">
      <div className="w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[60vw] md:h-[60vw] lg:w-[35vw] lg:h-[35vw] bg-[#F3F4F6] rounded-full z-0"></div>
      <Image
        src="/assets/siapa-saya-avatar.png"
        alt="my-avatar"
        className="h-[55vh] w-[55vh] sm:w-[150vh] sm:h-[150vh] md:w-[55vh] md:h-[55vh] lg:w-[90vh] lg:h-[90vh]  object-cover overflow-hidden absolute z-10"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default MainImage;

const MainImageMD = () => {
  return (
    <div className="w-full h-full flex-centered">
      <div className="w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw] bg-[#F3F4F6] rounded-full z-0"></div>
      <Image
        src="/assets/siapa-saya-avatar.png"
        alt="my-avatar"
        className="h-[55vh] w-[55vh] sm:w-[150vh] sm:h-[150vh] md:w-[120vh] md:h-[120vh] lg:w-[90vh] lg:h-[90vh]  object-cover overflow-hidden absolute z-10"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export { MainImageMD };
