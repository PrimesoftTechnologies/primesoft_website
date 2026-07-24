"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { RightIcon } from "@/components/icons";
import { navigationItems } from "@/constants/navigation-items";

const services = [
  { label: "Odoo Implementation", href: "/services" },
  { label: "Call Center Solutions", href: "/services" },
  { label: "Software Development", href: "/services" },
  { label: "Hosting & Infrastructure", href: "/services" },
  { label: "IT Consulting", href: "/services" },
  { label: "Ongoing Support", href: "/services" },
] as const;

const phones = [
  { label: "+255 746 805 383", href: "tel:+255746805383" },
  { label: "+255 782 557 913", href: "tel:+255782557913" },
] as const;

const whatsappHref = "https://wa.me/255746805383";

const socials = [
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Twitter", href: "#", icon: <TwitterIcon /> },
  { label: "Tiktok", href: "#", icon: <TiktokIcon /> },
] as const;

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172b_0%,#182540_45%,#0f172b_100%)] px-4 pt-10 pb-6 text-white sm:px-6 lg:px-8 lg:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary-400/60 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[78px_64px]" />
        <div className="absolute left-1/4 top-0 size-72 -translate-y-1/2 rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute right-1/5 bottom-0 size-80 translate-y-1/3 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-7"
        >
          <div>
            <div className="text-lg font-bold sm:text-xl">
              Have a project in mind?
            </div>
            <p className="mt-1 text-sm text-slate-300">
              Let&apos;s talk about how PrimeSoft can support your growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold shadow-lg shadow-primary-500/25 transition-all duration-200 hover:gap-3 hover:bg-primary-700"
          >
            Get a Free Consultation
            <RightIcon />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
        >
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src="/images/primesoft-logo-cropped.png"
              alt="PrimeSoft Technologies"
              width={220}
              height={103}
              className="h-12 w-auto object-contain sm:h-14"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Helping growing businesses modernize operations with practical
              Odoo implementation, call center solutions, and long-term
              technical support.
            </p>
            <div className="mt-5 flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 text-secondary-400">
                <LocationIcon />
              </span>
              <span className="max-w-xs leading-6">
                Survey Plaza, 1st Floor, Sam Nujoma Rd 35091 Mwenge, Dar es
                Salaam
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-sm font-semibold tracking-wide text-white uppercase">
              Quick Links
            </div>
            <div className="mt-4 grid gap-2.5 text-sm">
              {navigationItems.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="group flex w-fit items-center gap-1.5 text-slate-300 transition hover:text-white"
                >
                  <span className="h-px w-2.5 bg-secondary-400 opacity-0 transition group-hover:opacity-100" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold tracking-wide text-white uppercase">
              Services
            </div>
            <div className="mt-4 grid gap-2.5 text-sm">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="group flex w-fit items-center gap-1.5 text-slate-300 transition hover:text-white"
                >
                  <span className="h-px w-2.5 bg-secondary-400 opacity-0 transition group-hover:opacity-100" />
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <div className="text-sm font-semibold tracking-wide text-white uppercase">
              Get In Touch
            </div>
            <div className="mt-4 grid gap-2.5 text-sm">
              {phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-secondary-400">
                    <PhoneIcon />
                  </span>
                  {phone.label}
                </a>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-secondary-400/60 hover:bg-white/10"
            >
              <WhatsAppIcon className="size-4 text-secondary-400" />
              Chat on WhatsApp
            </a>

            <div className="mt-4 flex gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-secondary-400/50 hover:bg-secondary-500 hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-5 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <span>© {year} PrimeSoft Technologies. All rights reserved.</span>
          <span>Dar es Salaam, Tanzania</span>
        </div>
      </div>
    </footer>
  );
};

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7 9.9a16 16 0 0 0 7.1 7.1l1.8-1.8a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.23-3.55A1.96 1.96 0 1 0 3.25 5a1.96 1.96 0 0 0 3.92-.05ZM20.75 20h-3.38v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V20H9.99V8.5h3.25v1.57h.05a3.56 3.56 0 0 1 3.2-1.76c3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.76A18.7 18.7 0 0 0 14.2 5c-2.06 0-3.48 1.26-3.48 3.56v1.71H8.38V14h2.34v7h2.78Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
      <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" />
    </svg>
  );
}

export default SiteFooter;
