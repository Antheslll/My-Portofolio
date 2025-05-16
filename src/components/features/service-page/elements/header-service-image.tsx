import Image from "next/image";

const ServiceHeaderImage = () => {
  return (
    <Image
      src="/assets/my-service-header-avatar.png"
      alt="my-avatar"
      className="h-[50vh] w-[50vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] xl:w-[75vh] xl:h-[75vh] lg:w-[85vh] lg:h-[85vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export default ServiceHeaderImage;

const ServiceHeaderImageMD = () => {
  return (
    <Image
      src="/assets/my-service-header-avatar.png"
      alt="my-avatar"
      className="sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[150vh] md:h-[150vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export { ServiceHeaderImageMD };
