// src/app/contact/page.tsx
import ContactHero from "@/components/contact/contact-hero";
import ContactQuickInfo from "@/components/contact/contact-quick-info";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactFaq from "@/components/contact/contact-faq";

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc]">
      <ContactHero />
      <ContactQuickInfo />
      <ContactFormSection />
      <ContactFaq />
    </div>
  );
}
