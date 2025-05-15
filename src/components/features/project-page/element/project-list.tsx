import Image from "next/image";
import PortofolioButton from "./portofolio-button";

interface ProjectListProps {
  projectSrc: string;
  projectAlt: string;
  projectImgWidth: number;
  projectImgHeight: number;

  projectTitle: string;

  firstButtonIcon: React.ReactNode;
  firstButtonText: string;
  firstButtonLink: string;
  firstButtonBg: string;

  secondButtonIcon: React.ReactNode;
  secondButtonText: string;
  secondButtonLink: string;
  secondButtonBg: string;
}

const ProjectList = ({
  projectSrc,
  projectAlt,
  projectImgWidth,
  projectImgHeight,
  projectTitle,
  firstButtonIcon,
  firstButtonText,
  firstButtonLink,
  firstButtonBg,
  secondButtonIcon,
  secondButtonText,
  secondButtonLink,
  secondButtonBg,
}: ProjectListProps) => {
  return (
    <li className="w-[30%] lg:w-[25%] xl:w-[20%] flex flex-col gap-y-[3vh] lg:gap-y-[5vh]">
      <Image
        className="w-full"
        src={projectSrc}
        alt={projectAlt}
        width={projectImgWidth}
        height={projectImgHeight}
      />
      <h4 className="h-[clamp(60px,6vh,100px)] text-[2vw] lg:text-[1.5vw] xl:text-[1.4vw] text-center poppins-font font-semibold flex-centered whitespace-pre-line">
        {projectTitle}
      </h4>
      <div className="flex flex-col gap-y-[clamp(15px,2vh,30px)] lg:gap-y-[3vh] xl:gap-y-[5vh]">
        <PortofolioButton
          icon={firstButtonIcon}
          text={firstButtonText}
          link={firstButtonLink}
          bgColor={firstButtonBg}
        />

        <PortofolioButton
          icon={secondButtonIcon}
          text={secondButtonText}
          link={secondButtonLink}
          bgColor={secondButtonBg}
        />
      </div>
    </li>
  );
};

export default ProjectList;
