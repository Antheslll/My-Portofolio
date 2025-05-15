"use client";
import useScreenSize from "@/hook/useScreenSize";
import FooterPotrait from "./footer-potrait/footer-potrait";
import FooterLandscape from "./footer-landscape/footer-landscape";

const Footer = () => {
  const { width } = useScreenSize();

  if (width < 1024) {
    return <FooterPotrait />;
  } else if (width >= 1024) {
    return <FooterLandscape />;
  }
};

export default Footer;
