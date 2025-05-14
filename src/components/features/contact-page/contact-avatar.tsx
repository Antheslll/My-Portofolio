import Image from "next/image";

const ContactAvatar = () => {
  return (
    <div className="w-[70%] flex-centered">
      <div className="w-[50vw] h-[50vw] lg:w-[30vw] lg:h-[30vw] xl:w-[clamp(50px,23vw,350px)] xl:h-[clamp(50px,23vw,350px)] bg-[#F3F4F6] rounded-full z-0"></div>
      <Image
        className="w-[70vw] md:w-[60vw] lg:w-[40vw] xl:w-[25vw] absolute z-10"
        src="/assets/Contact us Character.png"
        alt="contact us image"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ContactAvatar;
