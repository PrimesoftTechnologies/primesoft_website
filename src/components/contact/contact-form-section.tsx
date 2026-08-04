"use client";

import ContactForm from "./contact-form";
import ContactDetailsPanel from "./contact-details-panel";

const ContactFormSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactDetailsPanel />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
