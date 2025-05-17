import Image from "next/image";

const ProjectHeaderImage = () => {
  return (
    <Image
      src="/assets/my-project-header.png"
      alt="my-avatar"
      className="h-[50vh] w-[50vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] lg:w-[70vh] lg:h-[70vh] xl:w-[75vh] xl:h-[75vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export default ProjectHeaderImage;

const ProjectHeaderImageSM = () => {
  return (
    <Image
      src="/assets/my-project-header.png"
      alt="my-avatar"
      className="sm:w-[47vh] sm:h-[47vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export { ProjectHeaderImageSM };

const ProjectHeaderImageMD = () => {
  return (
    <Image
      src="/assets/my-project-header.png"
      alt="my-avatar"
      className="h-[50vh] w-[50vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[120vh] md:h-[120vh] lg:w-[60vh] lg:h-[60vh] xl:w-[75vh] xl:h-[75vh] object-cover "
      width={1000}
      height={1000}
    />
  );
};

export { ProjectHeaderImageMD };
