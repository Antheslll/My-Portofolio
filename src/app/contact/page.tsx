import ContactAvatar from "@/components/features/contact-page/contact-avatar";
import ContactButton from "@/components/features/contact-page/contact-button";
import { InstagramIcon, LinkedInIcon, WhatsappIcon } from "@/svg/contact-icon";

export default function ContactPage() {
  return (
    <main className=" w-[full] h-[90vh] sm:h-[150vh] md:h-[90vh]  grid grid-rows-[clamp(70px,15vh,140px)_clamp(230px,35vh,350px)_clamp(240px,40vh,400px)] sm:grid-rows-[20vh_150vh_100vh] md:grid-rows-[15vh_35vh_40vh] lg:grid-rows-[55vh_5vh_20vh] xl:pt-[5vh]">
      <div className=" lg:hidden flex justify-center sm:pt-[15vh] md:pt-0 items-center sm:items-start md:items-center">
        <h1 className="poppins-font font-bold text-[2.7vw]">
          Ayo ngobrol 📞 — langkah kecil bisa jadi awal yang besar.✨
        </h1>
      </div>
      <div className="flex-centered">
        <ContactAvatar />
      </div>
      <div className="hidden lg:flex justify-center items-center md:items-center">
        <h1 className="poppins-font font-bold text-[2vw] xl:text-[1.7vw]">
          Ayo ngobrol 📞 — langkah kecil bisa jadi awal yang besar.✨
        </h1>
      </div>
      <div className="flex-centered flex-col gap-y-[1vh] sm:gap-y-[5vh] lg:gap-y-[2vh] xl:gap-y-[1vh] pt-3">
        <span className="flex-centered">
          <p className="text-[3vw] lg:text-[2vw] xl:text-[1.3vw] text-[#6B7280]">
            Hubungi Saya Via:
          </p>
        </span>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-[3vw]">
          <ContactButton
            icon={<WhatsappIcon />}
            contact="Whatsapp"
            border="border-[#25D366]"
            color="text-[#25D366]"
            href="https://api.whatsapp.com/send?phone=628111167867&text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda."
          />
          <ContactButton
            icon={<InstagramIcon />}
            contact="Instagram"
            border="border-[#8134AF]"
            color="text-[#8134AF]"
            href="https://www.instagram.com/anthonylog.id?igsh=MWRjYzBrZnFxYW8yZg=="
          />
          <ContactButton
            icon={<LinkedInIcon />}
            contact="LinkedIn"
            border="border-[#0A66C2]"
            color="text-[#0A66C2]"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          />
        </div>
      </div>
    </main>
  );
}
