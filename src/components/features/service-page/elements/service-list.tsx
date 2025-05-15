interface ServiceListProps {
  text: string;
  icon: React.ReactNode;
}

const ServiceList = ({ text, icon }: ServiceListProps) => {
  return (
    <li
      className={`w-[35vw] h-[35vw] ${
        text === `Negotiation\nSupport Docs` ? "bg-[#1F2937]" : "bg-[#3B82F6]"
      }  rounded-[10%] flex justify-center`}
    >
      <div
        className={`w-[30vw] h-[15vw] ${
          text === `Negotiation\nSupport Docs` ? "bg-[#2C3A4D]" : "bg-[#4B90FF]"
        }  rounded-b-full`}
      ></div>
      <div className="absolute w-[35vw] h-[35vw] flex-centered flex-col gap-y-[1vh] pt-[2vh]">
        <div className="scale-[70%]">{icon}</div>
        <h5 className="text-center text-white poppins-font font-semibold text-[2.7vw] text-shadow-[0_2px_2.6px_rgba(0,0,0,0.25)] whitespace-pre-line">
          {text}
        </h5>
      </div>
    </li>
  );
};

export default ServiceList;
