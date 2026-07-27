// src/components/site-footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const quickLinks = [
  { label: "Solutions", href: "/services/erp" },
  { label: "Why Us", href: "/#why-us" },
  { label: "ROI Calculator", href: "/#roi" },
  { label: "Contact Us", href: "/contact" },
] as const;

const services = [
  { label: "Enterprise Resource Planning (ERP)", href: "/services/erp" },
  { label: "Odoo Implementations", href: "/services/erp" },
  { label: "Cloud & Infrastructure", href: "/services/erp" },
  { label: "Custom Software Extensions", href: "/services/erp" },
] as const;

const socials = [
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Twitter", href: "#", icon: <TwitterIcon /> },
  { label: "Tiktok", href: "#", icon: <TiktokIcon /> },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#070D1F] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800"
        >
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <div className="relative h-20 w-80 sm:w-96 flex items-center">
                <Image
                  src="/assets/primelog.png"
                  alt="PrimeSoft Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering growing businesses and enterprises with modern operational workflows, seamless Odoo ERP implementations, and dedicated technical support.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-purple-400 shrink-0">
                  <LocationIcon />
                </span>
                <span className="leading-relaxed">
                  Survey Plaza, 1st Floor, Sam Nujoma Rd 35091 Mwenge, Dar es Salaam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 shrink-0">
                  <PhoneIcon />
                </span>
                <span>+255 746 805 383 / +255 782 557 913</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Expertise</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Partner Badge Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 p-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <Image
                  src="/images/primesoft-logo-transparent.png"
                  alt="PrimeSoft partner logo"
                  width={80}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
              
              <div className="text-xs font-bold text-white uppercase tracking-wider">Official Partner Status</div>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                Certified enterprise-grade solutions provider delivering end-to-end digital transformation.
              </p>
              
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-purple-400 font-semibold">
                <span>Verified Specialist</span>
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PrimeSoft. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link href="/security" className="hover:text-slate-400 transition">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden="true">
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7 9.9a16 16 0 0 0 7.1 7.1l1.8-1.8a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.23-3.55A1.96 1.96 0 1 0 3.25 5a1.96 1.96 0 0 0 3.92-.05ZM20.75 20h-3.38v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V20H9.99V8.5h3.25v1.57h.05a3.56 3.56 0 0 1 3.2-1.76c3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.76A18.7 18.7 0 0 0 14.2 5c-2.06 0-3.48 1.26-3.48 3.56v1.71H8.38V14h2.34v7h2.78Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
      <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
      <path d="m12 3 2.47 5 5.53.8-4 3.9.95 5.5L12 15.9 7.05 18.2 8 12.7 4 8.8 9.53 8 12 3Z" />
    </svg>
  );
}