interface FrontendSkillProps {
  icon: React.ReactNode;
  skill: string;
  desc: string;
  bgColor: string;
}

const SkillCard = ({ icon, skill, desc, bgColor }: FrontendSkillProps) => {
  return (
    <li className="w-[50%] h-[25vh] flex flex-col gap-y-[3vh]">
      <div>
        <div className="flex-centered">
          <div
            className={`w-[25vw] h-[25vw] rounded-full flex-centered ${bgColor} `}
          >
            {icon}
          </div>
        </div>
        <h3 className="poppins-font text-center text-[3vw] mt-[1vh]">
          {skill}
        </h3>
      </div>
      <span className="inter-font text-center text-[#6B7280] text-[2.5vw] whitespace-pre-line">
        {desc}
      </span>
    </li>
  );
};

export default SkillCard;
