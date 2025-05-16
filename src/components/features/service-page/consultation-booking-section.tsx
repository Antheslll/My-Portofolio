import { TelephoneIcon } from "@/svg/contact-icon";

const ConsultationBookingSection = () => {
  return (
    <div className="w-full h-[5vh] flex-centered">
      <div className="w-[80%]  h-[60px] sm:h-[90px] md:h-[120px] lg:h-[130px] bg-[#1F2937] flex-centered rounded-md ">
        <div className="w-full h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] rounded-[5%] grid grid-cols-[2fr_2fr_1.5fr]">
          <div className="w-full grid grid-cols-[2fr_5fr_0.5fr] border-r-1 border-white">
            <div className="flex-centered">
              <div className="scale-[50%] sm:scale-[70%] lg:scale-[100%]">
                <TelephoneIcon />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-[1.2vw] text-white poppins-font font-semibold">
                Get A Free Consultation
              </h5>
              <h6 className="text-[2vw] text-white poppins-font font-bold">
                +62 811 1167 867
              </h6>
            </div>
          </div>
          <div className=" flex items-center pl-[2vw] ">
            <p className="text-[1.4vw] lg:text-[1.2vw] text-white">
              Masih ragu arah personal brand atau portofoliomu? Konsultasi
              gratis bisa bantu kamu bikin website yang profesional dan tepat
              sasaran.
            </p>
          </div>
          <div className="flex-centered">
            <button
              className={` w-[80%] h-[40%] text-[1.5vw] rounded-full bg-[#3B82F6] text-white`}
            >
              Jadwalkan Konsultasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBookingSection;
