"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderImage = () => {
  const [avatar, setAvatar] = useState("start");
  useEffect(() => {
    if (avatar === "start") {
      setTimeout(() => {
        setAvatar("real");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (avatar === "real") {
    setTimeout(() => {
      setAvatar("avatar");
    }, 8000);
  } else if (avatar === "avatar") {
    setTimeout(() => {
      setAvatar("real");
    }, 8000);
  }

  return (
    <>
      <Image
        src={"/assets/anthony-profile.png"}
        alt="my-avatar"
        className={`${
          avatar === "real" ? "opacity-100" : "opacity-0"
        } absolute transition-all duration-500 ease-in-out h-[55vh] w-[55vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] lg:w-[85vh] lg:h-[85vh] object-cover `}
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/myAvatar-edited.png"
        alt="my-avatar"
        className={`${
          avatar === "start" || avatar === "avatar"
            ? "opacity-100"
            : "opacity-0"
        } transition-all duration-500 ease-in-out h-[55vh] w-[55vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[47vh] md:h-[47vh] lg:w-[85vh] lg:h-[85vh] object-cover`}
        width={1000}
        height={1000}
      />
    </>
  );
};

export default HeaderImage;

const HeaderImageMD = () => {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setAvatar("start");
  }, []);

  if (avatar === "start") {
    setTimeout(() => {
      setAvatar("real");
    }, 3000);
  } else if (avatar === "real") {
    setTimeout(() => {
      setAvatar("avatar");
    }, 8000);
  } else if (avatar === "avatar") {
    setTimeout(() => {
      setAvatar("real");
    }, 8000);
  }

  return (
    <>
      <Image
        src={"/assets/anthony-profile.png"}
        alt="my-avatar"
        className={`${
          avatar === "real" ? "opacity-100" : "opacity-0"
        } absolute transition-all duration-500 ease-in-out h-[55vh] w-[55vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[150vh] md:h-[170vh] lg:w-[170vh] lg:h-[85vh] object-cover  `}
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/myAvatar-edited.png"
        alt="my-avatar"
        className={`${
          avatar === "start" || avatar === "avatar"
            ? "opacity-100"
            : "opacity-0"
        } transition-all duration-500 ease-in-out h-[55vh] w-[55vh] sm:h-[clamp(500px,55vh,1000px)] sm:w-[clamp(500px,55vh,1000px)] md:w-[150vh] md:h-[170vh] lg:w-[170vh] lg:h-[85vh] object-cover `}
        width={1000}
        height={1000}
      />
    </>
  );
};

export { HeaderImageMD };
