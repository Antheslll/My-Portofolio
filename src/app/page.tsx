// import Image from "next/image";

import ActionSection from "@/components/features/landing-page/action-section";
import HomePageHeader from "@/components/features/landing-page/header";
import InterestSection from "@/components/features/landing-page/interest-section";

export default function HomePage() {
  return (
    <>
      <HomePageHeader />
      <InterestSection />
      <ActionSection />
    </>
  );
}
