import Image from "next/image";

const HeaderImage = () => {
  return (
    <Image
      src="/assets/myAvatar-edited.png"
      alt="my-avatar"
      className="h-[55vh] w-[55vh] object-cover overflow-hidden"
      width={1000}
      height={1000}
    />
  );
};

export default HeaderImage;
