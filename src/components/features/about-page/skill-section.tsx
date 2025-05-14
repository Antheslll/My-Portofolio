"use client";
import SkillNavigationList from "./elements/skill-nav-list";
import SkillContentCopywriting from "./skill-content-copywriting";
import SkillContentFrontend from "./skill-content-frontend";
import SkillContentDesign from "./skill-content-uiux";
import SkillContentBefore from "./skill-content-before";
import { useState } from "react";

const AboutPageSkill = () => {
  const [skillPage, setSkillPage] = useState("");

  const handleSetPage = (page: string) => {
    if (skillPage === page) {
      setSkillPage("");
    } else {
      setSkillPage(page);
    }
  };
  return (
    <main className="w-full h-[100vh] grid grid-rows-[20vh_80vh]">
      <div className="w-full h-full flex justify-center items-end">
        <ul className="w-[80%] h-[50%] bg-[#F3F4F6] grid grid-cols-3 rounded-[20px] border-3 border-black">
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
};

export default AboutPageSkill;
