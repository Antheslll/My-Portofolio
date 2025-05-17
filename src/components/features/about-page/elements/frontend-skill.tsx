interface FrontendSkillProps {
  icon: React.ReactNode;
  skill: string;
  desc: string;
  bgColor: string;
}

const SkillCard = ({ icon, skill, desc, bgColor }: FrontendSkillProps) => {
  return (
    <li className="w-[50%] h-[25vh] sm:w-[25%] sm:h-[50vh] md:w-[50%] md:h-[25vh] lg:w-[25%] lg:h-[50vh] flex flex-col gap-y-[3vh]">
      <div>
        <div className="flex-centered">
          <div
            className={`w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] md:w-[25vw] md:h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full flex-centered ${bgColor} `}
          >
            {icon}
          </div>
        </div>
        <h3 className="poppins-font text-center text-[3vw] sm:text-[2vw] md:text-[3vw] lg:text-[2vw] mt-[1vh]">
          {skill}
        </h3>
      </div>
      <span className="inter-font text-center text-[#6B7280] text-[2.5vw] sm:text-[1.5vw] md:text-[2.5vw] lg:text-[1.5vw] whitespace-pre-line">
        {desc}
      </span>
    </li>
  );
};

export default SkillCard;

const SkillCardSM = ({ icon, skill, desc, bgColor }: FrontendSkillProps) => {
  return (
    <li className="w-[50%] h-[25vh] sm:w-[50%] sm:h-[25vh] md:w-[50%] md:h-[25vh] lg:w-[25%] lg:h-[50vh] flex flex-col gap-y-[3vh]">
      <div>
        <div className="flex-centered">
          <div
            className={`w-[25vw] h-[25vw] sm:w-[25vw] sm:h-[25vw] md:w-[25vw] md:h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full flex-centered ${bgColor} `}
          >
            {icon}
          </div>
        </div>
        <h3 className="poppins-font text-center text-[3vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw] mt-[1vh]">
          {skill}
        </h3>
      </div>
      <span className="inter-font text-center text-[#6B7280] text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] whitespace-pre-line">
        {desc}
      </span>
    </li>
  );
};

export { SkillCardSM };

const SkillCardMD = ({ icon, skill, desc, bgColor }: FrontendSkillProps) => {
  return (
    <li className="h-[25vh] md:w-[25%] md:h-[130vh] lg:w-[25%] lg:h-[50vh] flex flex-col gap-y-[3vh]">
      <div>
        <div className="flex-centered">
          <div
            className={`w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] md:w-[15vw] md:h-[15vw] lg:w-[15vw] lg:h-[15vw] rounded-full flex-centered ${bgColor} `}
          >
            {icon}
          </div>
        </div>
        <h3 className="poppins-font text-center text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[2vw] mt-[1vh]">
          {skill}
        </h3>
      </div>
      <span className="inter-font text-center text-[#6B7280] text-[2.5vw] sm:text-[1.5vw] md:text-[1.4vw] lg:text-[1.5vw] whitespace-pre-line">
        {desc}
      </span>
    </li>
  );
};

export { SkillCardMD };
