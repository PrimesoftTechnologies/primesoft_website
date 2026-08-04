"use client";

import { motion } from "motion/react";
import { RightIcon } from "@/components/icons";

const quickInfo = [
  {
    label: "Call Us",
    value: "+255 746 805 383",
    href: "tel:+255746805383",
    icon: <PhoneIcon />,
  },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/255746805383",
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Email Us",
    value: "info@primesoft.co.tz",
    href: "mailto:info@primesoft.co.tz",
    icon: <MailIcon />,
  },
  {
    label: "Visit Us",
    value: "Mwenge, Dar es Salaam",
    href: "https://maps.app.goo.gl/BoKTemrDjNVispeG6",
    icon: <PinIcon />,
    external: true,
  },
] as const;

const ContactQuickInfo = () => {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickInfo.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-center gap-4 rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:border-secondary-300"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition duration-300 group-hover:scale-105 group-hover:bg-secondary-50 group-hover:text-secondary-600">
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                {item.label}
              </div>
              <div className="truncate text-sm font-bold text-slate-900">
                {item.value}
              </div>
            </div>
            <span className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full text-slate-300 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:text-secondary-500">
              <RightIcon className="size-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7 9.9a16 16 0 0 0 7.1 7.1l1.8-1.8a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 5.5L20 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

export default ContactQuickInfo;
