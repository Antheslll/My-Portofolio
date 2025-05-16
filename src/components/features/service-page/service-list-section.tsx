"use client";

import {
  HostServiceIcon,
  NegoSupIcon,
  StrategicWebFlowIcon,
  UXResearchIcon,
  WebBlueprintIcon,
  WebDevIcon,
  WebsiteConsultationIcon,
} from "@/svg/services-icon";
import ServiceList from "./elements/service-list";
import useScreenSize from "@/hook/useScreenSize";
import useScreenOrientation from "@/hook/useScreenOrientation";

const ServiceListSection = () => {
  const listofService = [
    { icon: <WebDevIcon />, text: `Website\nDevelopment` },
    { icon: <HostServiceIcon />, text: `Hosting\nService` },
    { icon: <WebBlueprintIcon />, text: `Website\nBlueprint` },
    { icon: <UXResearchIcon />, text: `UX\nResearch` },
    { icon: <WebsiteConsultationIcon />, text: `Website\nConsultation` },
    { icon: <StrategicWebFlowIcon />, text: `Strategic\nWebsite Flow` },
    { icon: <NegoSupIcon />, text: `Strategic Sales\nIntelligent Document` },
  ];

  const { width } = useScreenSize();
  const { orientation } = useScreenOrientation();

  if (width >= 768 && width < 1024 && orientation === "landscape") {
    return (
      <div className="w-full h-[105vh] sm:h-[160vh] md:h-[130vh] pb-[10vh] sm:pb-[30vh] md:pb-[10vh] lg:pb-[20vh] lg:pt-[10vh] bg-[#F3F4F6]">
        <ul className="w-full h-full flex-centered flex-wrap gap-x-[10vw] lg:gap-x-[5vw] xl:gap-x-[10vw]">
          {listofService.map((service) => (
            <ServiceList
              key={service.text}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[105vh] sm:h-[160vh] md:h-[105vh] pb-[10vh] sm:pb-[30vh] md:pb-[10vh] lg:pb-[20vh] lg:pt-[10vh] bg-[#F3F4F6]">
        <ul className="w-full h-full flex-centered flex-wrap gap-x-[10vw] lg:gap-x-[5vw] xl:gap-x-[10vw]">
          {listofService.map((service) => (
            <ServiceList
              key={service.text}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default ServiceListSection;
