import Image from "next/image";

const ServiceHeaderImage = () => {
  return (
    <Image
      src="/assets/my-service-header-avatar.png"
      alt="my-avatar"
      className="h-[50vh] w-[50vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] lg:w-[60vh] lg:h-[60vh] xl:w-[75vh] xl:h-[75vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export default ServiceHeaderImage;
