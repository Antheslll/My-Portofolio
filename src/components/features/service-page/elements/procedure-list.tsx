interface ProcedureListProps {
  no: number;
  headings: string;
  text: string;
}

const ProcedureList = ({ no, headings, text }: ProcedureListProps) => {
  return (
    <li className="w-[85%] h-[9vh] grid grid-cols-[1.3fr_5fr]">
      <div className="w-full h-full flex-centered">
        <div className="w-[12vw] h-[12vw] lg:w-[6vw] lg:h-[6vw] xl:w-[5vw] xl:h-[5vw] bg-[#3B82F6] rounded-full flex-centered">
          <span className="text-[6.5vw] lg:text-[3vw] xl:text-[2.5vw] poppins-font text-white">
            {no}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="poppins-font font-semibold text-[3.1vw] lg:text-[1.7vw]">
          {headings}
        </h5>
        <p className="text-[#6B7280] inter-font text-[1.8vw] lg:text-[0.9vw]">
          {text}
        </p>
      </div>
    </li>
  );
};

export default ProcedureList;
