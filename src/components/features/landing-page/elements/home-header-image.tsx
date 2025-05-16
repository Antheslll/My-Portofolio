import Image from "next/image";

const HomeHeaderImage = () => {
  return (
    <Image
      src="/assets/landing-page-header-avatar.png"
      alt="my-avatar"
      className="h-[60vh] w-[60vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] xl:w-[90vh] xl:h-[90vh] lg:w-[70vh] lg:h-[70vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export default HomeHeaderImage;

const HomeHeaderImageMD = () => {
  return (
    <Image
      src="/assets/landing-page-header-avatar.png"
      alt="my-avatar"
      className="sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[150vh] md:h-[150vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export { HomeHeaderImageMD };
