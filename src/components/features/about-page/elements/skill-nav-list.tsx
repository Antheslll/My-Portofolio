interface SkillNavigationListProps {
  nav: string;
  skillPage: string;
  handleSetPage: (page: string) => void;
}

const SkillNavigationList = ({
  nav,
  skillPage,
  handleSetPage,
}: SkillNavigationListProps) => {
  return (
    <li className="flex-centered">
      <span
        className={`w-[80%] h-[70%] flex-centered rounded-[10px] cursor-pointer ${
          nav === skillPage ? "bg-[#2DD4BF] text-white" : "bg-[#F3F4F6]"
        }`}
        onClick={() => {
          handleSetPage(nav);
        }}
      >
        <span className="text-[3vw] poppins-font">{nav}</span>
      </span>
    </li>
  );
};

export default SkillNavigationList;
