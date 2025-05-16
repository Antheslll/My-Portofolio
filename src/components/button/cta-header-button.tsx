"use client";
import Link from "next/link";

interface CTAButtonProps {
  width: string;
  height: string;
  textSize: string;
  text: string;
  link: string;
}
const CTAButton = ({ width, height, textSize, text, link }: CTAButtonProps) => {
  return (
    <Link href={link}>
      <button
        className={`${width} ${height} ${textSize} cursor-pointer rounded-sm bg-[#3B82F6] text-white`}
      >
        {text}
      </button>
    </Link>
  );
};

export default CTAButton;
