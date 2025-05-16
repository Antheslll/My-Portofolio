"use client";
import useScreenSize from "@/hook/useScreenSize";
import FooterPotrait from "./footer-potrait/footer-potrait";
import FooterLandscape from "./footer-landscape/footer-landscape";
import useCurrentUrl from "@/hook/useCurrentUrl";

const Footer = () => {
  const { width } = useScreenSize();
  const { pathname } = useCurrentUrl();

  if (pathname === "/contact") {
    return <></>;
  } else {
    if (width < 1024) {
      return <FooterPotrait />;
    } else if (width >= 1024) {
      return <FooterLandscape />;
    }
  }
};

export default Footer;
