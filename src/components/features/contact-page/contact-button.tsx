import Link from "next/link";

interface ContactButtonProps {
  icon: React.ReactNode;
  contact: string;
  color: string;
  border: string;
  href: string;
}

const ContactButton = ({
  contact,
  icon,
  color,
  border,
  href,
}: ContactButtonProps) => {
  return (
    <Link href={href} target="_blank">
      <button
        className={`cursor-pointer w-[50vw] sm:w-[30vw] md:w-[50vw] lg:w-[20vw] lg:h-[10vh] xl:w-[17vw] h-[clamp(50px,7vh,150px)] sm:h-[20vh] md:h-[7vh] xl:h-[clamp(40px,8vh,60px)] border-5 rounded-full grid grid-cols-[40%_60%] sm:grid-cols-[30%_70%] md:grid-cols-[30%_70%] xl:grid-cols-[30%_70%]  ${border}`}
      >
        <span className=" flex-centered pl-[20%]">
          <div className="w-[30%] sm:w-[50%] md:w-[50%]">{icon}</div>
        </span>
        <span
          className={`flex items-center text-[4vw] sm:text-[3vw] md:text-[4vw] lg:text-[2vw] xl:text-[clamp(20px,1.7vw,24px)] ${color}`}
        >
          {contact}
        </span>
      </button>
    </Link>
  );
};

export default ContactButton;

const ContactButtonMD = ({
  contact,
  icon,
  color,
  border,
  href,
}: ContactButtonProps) => {
  return (
    <Link href={href} target="_blank">
      <button
        className={`md:w-[30vw] md:h-[15vh] border-5 rounded-full grid md:grid-cols-[30%_70%]  ${border}`}
      >
        <span className=" flex-centered pl-[20%]">
          <div className="w-[30%] sm:w-[50%] md:w-[50%]">{icon}</div>
        </span>
        <span className={`flex items-center  md:text-[3.5vw] ${color}`}>
          {contact}
        </span>
      </button>
    </Link>
  );
};

export { ContactButtonMD };
