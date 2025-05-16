"use client";
import SkillNavigationList from "./elements/skill-nav-list";
import SkillContentCopywriting from "./skill-content-copywriting";
import SkillContentFrontend from "./skill-content-frontend";
import SkillContentDesign from "./skill-content-uiux";
import SkillContentBefore from "./skill-content-before";
import { useState } from "react";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const AboutPageSkill = () => {
  const [skillPage, setSkillPage] = useState("");
  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  const handleSetPage = (page: string) => {
    if (skillPage === page) {
      setSkillPage("");
    } else {
      setSkillPage(page);
    }
  };

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <main className="w-full sm:h-[200vh] md:h-[200vh] grid sm:grid-rows-[30vh_130vh] md:grid-rows-[40vh_160vh]">
        <div className="w-full h-full flex justify-center md:items-end lg:items-center">
          <ul className="w-[80%] lg:w-[50%] h-[50%] sm:h-[90%] md:h-[50%] bg-[#F3F4F6] grid grid-cols-3 rounded-[20px] lg:rounded-[15px] border-3 border-black">
            <SkillNavigationList
              nav="Frontend"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
            <SkillNavigationList
              nav="UI/UX"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
            <SkillNavigationList
              nav="Copywriting"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
          </ul>
        </div>
        <div className="w-full h-full">
          {skillPage === "Frontend" ? (
            <SkillContentFrontend />
          ) : skillPage === "UI/UX" ? (
            <SkillContentDesign />
          ) : skillPage === "Copywriting" ? (
            <SkillContentCopywriting />
          ) : (
            <SkillContentBefore />
          )}
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full h-[100vh] sm:h-[200vh] md:h-[100vh] lg:h-[120vh] xl:h-[170vh] grid grid-rows-[20vh_80vh] sm:grid-rows-[30vh_130vh] md:grid-rows-[20vh_80vh] lg:grid-rows-[20vh_80vh] xl:grid-rows-[30vh_100vh]">
        <div className="w-full h-full flex justify-center md:items-end lg:items-center">
          <ul className="w-[80%] lg:w-[50%] h-[50%] sm:h-[90%] md:h-[50%] bg-[#F3F4F6] grid grid-cols-3 rounded-[20px] lg:rounded-[15px] border-3 border-black">
            <SkillNavigationList
              nav="Frontend"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
            <SkillNavigationList
              nav="UI/UX"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
            <SkillNavigationList
              nav="Copywriting"
              skillPage={skillPage}
              handleSetPage={handleSetPage}
            />
          </ul>
        </div>
        <div className="w-full h-full">
          {skillPage === "Frontend" ? (
            <SkillContentFrontend />
          ) : skillPage === "UI/UX" ? (
            <SkillContentDesign />
          ) : skillPage === "Copywriting" ? (
            <SkillContentCopywriting />
          ) : (
            <SkillContentBefore />
          )}
        </div>
      </main>
    );
  }
};

export default AboutPageSkill;
