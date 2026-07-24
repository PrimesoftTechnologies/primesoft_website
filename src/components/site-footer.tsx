"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const quickLinks = [
  { label: "Solutions", href: "#" },
  { label: "Why us", href: "#" },
  { label: "ROI Calculator", href: "#" },
  { label: "Contact Us", href: "#" },
] as const;

const socials = [
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Twitter", href: "#", icon: <TwitterIcon /> },
  { label: "Tiktok", href: "#", icon: <TiktokIcon /> },
] as const;

const SiteFooter = () => {
  return (
    <footer className="bg-primary-900 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-10 rounded-[28px] border border-primary bg-primary-700 px-6 py-10 shadow-[0_18px_45px_rgba(5,10,25,0.24)] sm:px-8 lg:grid-cols-[1.5fr_0.9fr_1fr] lg:px-10"
        >
          <div className="space-y-5">
            <div className="text-3xl font-bold">PrimeSoft</div>
            <p className="max-w-md text-sm leading-7 text-black">
              Helping growing businesses modernize operations with practical
              Odoo implementation, training, and ongoing support.
            </p>

            <div className="space-y-3 text-sm text-black">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-black">
                  <LocationIcon />
                </span>
                <span>
                  Survey Plaza, 1st Floor, Sam Nujoma Rd 35091 Mwenge, Dar es
                  Salaam
                </span>
              </div>
              <div className="flex items-center gap-3 ">
                <span className="text-black">
                  <PhoneIcon />
                </span>
                <span>+255 746 805 383</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black">
                  <PhoneIcon />
                </span>
                <span>+255 782 557 913</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary bg-white text-black transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Quick Links</div>
            <div className="mt-5 grid gap-4 text-sm text-black">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-primary bg-white p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="flex justify-center">
              <Image
                src="/images/primesoft-logo-transparent.png"
                alt="PrimeSoft partner logo"
                width={88}
                height={48}
                className="h-12 w-auto rounded-lg object-contain"
              />
            </div>
            <div className="mt-4 text-lg font-semibold">Official Partner</div>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              Certified to deliver enterprise-grade digital transformation
              solutions.
            </p>
            <div className="mt-5 flex justify-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-6 border-t border-white/6 pt-6 text-center text-xs text-slate-500">
          © 2026 PrimeSoft. All rights reserved.
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

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="m12 3 2.47 5 5.53.8-4 3.9.95 5.5L12 15.9 7.05 18.2 8 12.7 4 8.8 9.53 8 12 3Z" />
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
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      stroke-width="1.5"
      stroke-linejoin="round"
    >
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
      <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" />
    </svg>
  );
}

export default SiteFooter;
