import { FigmaIcon, UXDesignIcon } from "@/svg/skill-icon";
import SkillCard, { SkillCardMD } from "./elements/frontend-skill";
import useScreenOrientation from "@/hook/useScreenOrientation";
import useScreenSize from "@/hook/useScreenSize";
import { useEffect, useState } from "react";

const SkillContentDesign = () => {
  const { orientation } = useScreenOrientation();
  const { width } = useScreenSize();
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  if (orientation === "portrait") {
    return (
      <div
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full pt-[10vh] md:pt-[5vh]`}
      >
        <ul className="w-full h-full flex items-center flex-col flex-wrap gap-y-[3vh] md:gap-y-[10vh]">
          <SkillCard
            icon={<FigmaIcon />}
            skill="Figma"
            desc={`Mendesain dan memprototipe\nantarmuka dengan efisien.`}
            bgColor="bg-[#F3F4F6]"
          />
          <SkillCard
            icon={<UXDesignIcon />}
            skill="UX Design"
            desc={`Memahami kebutuhan\npengguna dan menciptakan\npengalaman yang intuitif.`}
            bgColor="bg-[#3B82F6]"
          />
        </ul>
      </div>
    );
  } else if (
    (orientation === "landscape" && width > 0 && width < 768) ||
    (orientation === "landscape" && width >= 1024)
  ) {
    return (
      <div
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex`}
      >
        <ul className="w-full h-full flex justify-center pt-[10vh] flex-row flex-wrap gap-y-[3vh]">
          <SkillCard
            icon={<FigmaIcon />}
            skill="Figma"
            desc={`Mendesain dan memprototipe\nantarmuka dengan efisien.`}
            bgColor="bg-[#F3F4F6]"
          />
          <SkillCard
            icon={<UXDesignIcon />}
            skill="UX Design"
            desc={`Memahami kebutuhan\npengguna dan menciptakan\npengalaman yang intuitif.`}
            bgColor="bg-[#3B82F6]"
          />
        </ul>
      </div>
    );
  } else if (width > 768 && orientation === "landscape" && width < 1024) {
    return (
      <div
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex`}
      >
        <ul className="w-full h-full flex justify-center pt-[20vh] flex-row flex-wrap gap-x-[3vw]">
          <SkillCardMD
            icon={<FigmaIcon />}
            skill="Figma"
            desc={`Mendesain dan memprototipe\nantarmuka dengan efisien.`}
            bgColor="bg-[#F3F4F6]"
          />
          <SkillCardMD
            icon={<UXDesignIcon />}
            skill="UX Design"
            desc={`Memahami kebutuhan\npengguna dan menciptakan\npengalaman yang intuitif.`}
            bgColor="bg-[#3B82F6]"
          />
        </ul>
      </div>
    );
  }
};

export default SkillContentDesign;
