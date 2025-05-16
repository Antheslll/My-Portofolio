"use client";
import useScreenOrientation from "@/hook/useScreenOrientation";
interface ServiceListProps {
  text: string;
  icon: React.ReactNode;
}

const ServiceList = ({ text, icon }: ServiceListProps) => {
  const { orientation } = useScreenOrientation();

  if (orientation === "portrait") {
    return (
      <li
        className={`w-[35vw] h-[35vw] md:w-[27vw] md:h-[27vw] ${
          text === `Negotiation\nSupport Docs` ? "bg-[#1F2937]" : "bg-[#3B82F6]"
        }  rounded-[10%] flex justify-center`}
      >
        <div
          className={`w-[23vw] h-[11vw] ${
            text === `Negotiation\nSupport Docs`
              ? "bg-[#2C3A4D]"
              : "bg-[#4B90FF]"
          }  rounded-b-full`}
        ></div>
        <div className="absolute w-[35vw] h-[35vw] md:w-[27vw] md:h-[27vw] flex-centered flex-col gap-y-[1vh] pt-[2vh]">
          <div className="scale-[70%] md:scale-[80%]">{icon}</div>
          <h5 className="text-center text-white poppins-font font-semibold text-[2.7vw] text-shadow-[0_2px_2.6px_rgba(0,0,0,0.25)] whitespace-pre-line">
            {text}
          </h5>
        </div>
      </li>
    );
  } else if (orientation === "landscape") {
    return (
      <li
        className={`w-[35vw] h-[35vw] sm:w-[15vw] sm:h-[15vw] lg:w-[17vw] lg:h-[17vw] xl:w-[13vw] xl:h-[13vw] ${
          text === `Negotiation\nSupport Docs` ? "bg-[#1F2937]" : "bg-[#3B82F6]"
        }  rounded-[10%] flex justify-center`}
      >
        <div
          className={`w-[10vw] h-[7vw] lg:w-[13vw] xl:w-[11vw] ${
            text === `Negotiation\nSupport Docs`
              ? "bg-[#2C3A4D]"
              : "bg-[#4B90FF]"
          }  rounded-b-full`}
        ></div>
        <div className="absolute w-[15vw] h-[15vw] lg:w-[16vw] lg:h-[16vw] flex-centered flex-col gap-y-[1vh] pt-[2vh]">
          <div className="scale-[70%] lg:scale-[90%] xl:scale-[80%]">
            {icon}
          </div>
          <h5 className="text-center text-white poppins-font font-semibold text-[2.7vw] sm:text-[1.5vw] xl:text-[1.1vw] text-shadow-[0_2px_2.6px_rgba(0,0,0,0.25)] whitespace-pre-line">
            {text}
          </h5>
        </div>
      </li>
    );
  }
};

export default ServiceList;
