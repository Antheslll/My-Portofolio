import ConsultationBookingSection from "@/components/features/service-page/consultation-booking-section";
import ServicePageHeader from "@/components/features/service-page/header";
import ProcessSection from "@/components/features/service-page/process-section";
import ServiceListSection from "@/components/features/service-page/service-list-section";

export default function ServicePage() {
  return (
    <div>
      <ServicePageHeader />
      <ServiceListSection />
      <ConsultationBookingSection />
      <ProcessSection />
    </div>
  );
}
