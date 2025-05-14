import {
  NextJsIcon,
  ReactIcon,
  ResponsiveIcon,
  TailwindCSSIcon,
} from "@/svg/skill-icon";
import SkillCard from "./elements/frontend-skill";

const SkillContentFrontend = () => {
  return (
    <div className="w-full h-full flex gap-y-[10vh] pt-[5vh]">
      <ul className="w-full h-full flex flex-wrap">
        <SkillCard
          icon={<TailwindCSSIcon />}
          skill="Tailwind CSS"
          desc={`Styling cepat dan efisien \n dengan utility-first framework.`}
          bgColor="bg-[#3B82F6]"
        />
        <SkillCard
          icon={<ReactIcon />}
          skill="React"
          desc={`Membuat UI interaktif dan\nkomponen reusable.`}
          bgColor="bg-[#F3F4F6]"
        />
        <SkillCard
          icon={<NextJsIcon />}
          skill="Next.js"
          desc={`Framework React untuk SSR\ndan optimasi performa web.`}
          bgColor="bg-[#F3F4F6]"
        />
        <SkillCard
          icon={<ResponsiveIcon />}
          skill={`Responsive Design`}
          desc={`Membuat website yang optimal\ndi semua ukuran layar.`}
          bgColor="bg-[#3B82F6]"
        />
      </ul>
    </div>
  );
};

export default SkillContentFrontend;
