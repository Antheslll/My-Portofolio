import { FigmaIcon, UXDesignIcon } from "@/svg/skill-icon";
import SkillCard from "./elements/frontend-skill";

const SkillContentDesign = () => {
  return (
    <div className="w-full h-full flex ">
      <ul className="w-full h-full flex-centered flex-col flex-wrap gap-y-[3vh]">
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
};

export default SkillContentDesign;
