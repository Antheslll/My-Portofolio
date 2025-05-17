import {
  NextJsIcon,
  ReactIcon,
  ResponsiveIcon,
  TailwindCSSIcon,
} from "@/svg/skill-icon";
import SkillCard, { SkillCardMD, SkillCardSM } from "./elements/frontend-skill";
import useScreenOrientation from "@/hook/useScreenOrientation";
import { useEffect, useState } from "react";

const SkillContentFrontend = () => {
  const { orientation } = useScreenOrientation();
  const { width } = useScreenOrientation();
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  if (orientation === "portrait") {
    return (
      <div
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex gap-y-[10vh] pt-[5vh]`}
      >
        <ul className="w-full h-full flex flex-wrap">
          {width > 640 && width < 768 ? (
            <>
              <SkillCardSM
                icon={<TailwindCSSIcon />}
                skill="Tailwind CSS"
                desc={`Styling cepat dan efisien \n dengan utility-first framework.`}
                bgColor="bg-[#3B82F6]"
              />
              <SkillCardSM
                icon={<ReactIcon />}
                skill="React"
                desc={`Membuat UI interaktif dan\nkomponen reusable.`}
                bgColor="bg-[#F3F4F6]"
              />
              <SkillCardSM
                icon={<NextJsIcon />}
                skill="Next.js"
                desc={`Framework React untuk SSR\ndan optimasi performa web.`}
                bgColor="bg-[#F3F4F6]"
              />
              <SkillCardSM
                icon={<ResponsiveIcon />}
                skill={`Responsive Design`}
                desc={`Membuat website yang optimal\ndi semua ukuran layar.`}
                bgColor="bg-[#3B82F6]"
              />
            </>
          ) : (
            <>
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
            </>
          )}
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
        } transition-all duration-500 ease-in-out w-full h-full flex gap-y-[10vh] sm:flex-centered md:pt-[10vh] lg:pt-[15vh]`}
      >
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
  } else if (width > 768 && orientation === "landscape" && width < 1024) {
    return (
      <div
        className={`${
          appear ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out w-full h-full flex gap-y-[10vh] md:flex-centered md:pt-[20vh] lg:pt-[15vh]`}
      >
        <ul className="w-full h-full flex flex-wrap">
          <SkillCardMD
            icon={<TailwindCSSIcon />}
            skill="Tailwind CSS"
            desc={`Styling cepat dan efisien \n dengan utility-first framework.`}
            bgColor="bg-[#3B82F6]"
          />
          <SkillCardMD
            icon={<ReactIcon />}
            skill="React"
            desc={`Membuat UI interaktif dan\nkomponen reusable.`}
            bgColor="bg-[#F3F4F6]"
          />
          <SkillCardMD
            icon={<NextJsIcon />}
            skill="Next.js"
            desc={`Framework React untuk SSR\ndan optimasi performa web.`}
            bgColor="bg-[#F3F4F6]"
          />
          <SkillCardMD
            icon={<ResponsiveIcon />}
            skill={`Responsive Design`}
            desc={`Membuat website yang optimal\ndi semua ukuran layar.`}
            bgColor="bg-[#3B82F6]"
          />
        </ul>
      </div>
    );
  }
};

export default SkillContentFrontend;
