"use client";
import Link from "next/link";

interface ContactListProps {
  text: string;
  icon: React.ReactNode;
  link: string;
}

const ContactList = ({ text, icon, link }: ContactListProps) => {
  return (
    <Link href={link} target="_blank">
      <li className="grid grid-cols-[1fr_3fr] gap-x-[0.5vw]">
        <span className="scale-[80%]">{icon}</span>{" "}
        <span className="flex items-center">{text}</span>
      </li>
    </Link>
  );
};

export default ContactList;
