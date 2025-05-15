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

const ServiceListSection = () => {
  const listofService = [
    { icon: <WebDevIcon />, text: `Website\nDevelopment` },
    { icon: <HostServiceIcon />, text: `Hosting\nService` },
    { icon: <WebBlueprintIcon />, text: `Website\nBlueprint` },
    { icon: <UXResearchIcon />, text: `UX\nResearch` },
    { icon: <WebsiteConsultationIcon />, text: `Website\nConsultation` },
    { icon: <StrategicWebFlowIcon />, text: `Strategic\nWebsite Flow` },
    { icon: <NegoSupIcon />, text: `Negotiation\nSupport Docs` },
  ];

  return (
    <div className="w-full h-[105vh] pb-[10vh] bg-[#F3F4F6]">
      <ul className="w-full h-full flex-centered flex-wrap gap-x-[10vw]">
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
};

export default ServiceListSection;
