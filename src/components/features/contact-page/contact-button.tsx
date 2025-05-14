interface ContactButtonProps {
  icon: React.ReactNode;
  contact: string;
  color: string;
  border: string;
}
const ContactButton = ({
  contact,
  icon,
  color,
  border,
}: ContactButtonProps) => {
  return (
    <button
      className={`w-[50vw] sm:w-[30vw] md:w-[50vw] lg:w-[20vw] xl:w-[17vw] h-[clamp(50px,7vh,150px)] sm:h-[20vh] md:h-[7vh] xl:h-[60px] border-5 rounded-full grid grid-cols-[40%_60%] sm:grid-cols-[30%_70%] md:grid-cols-[40%_60%] xl:grid-cols-[30%_70%] ${border}`}
    >
      <span className=" flex-centered pl-[20%]">
        <div className="w-[30%] sm:w-[50%] md:w-[50%]">{icon}</div>
      </span>
      <span
        className={`flex items-center text-[4vw] sm:text-[3vw] md:text-[4vw] lg:text-[2vw] xl:text-[25px] ${color}`}
      >
        {contact}
      </span>
    </button>
  );
};

export default ContactButton;
