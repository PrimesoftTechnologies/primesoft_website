"use client";

import { motion } from "motion/react";

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;

const trustPoints = [
  "Response within 1 business day",
  "Free initial consultation",
  "No obligation project scoping",
] as const;

const phoneNumbers = [
  { local: "0746 805 383", href: "tel:+255746805383" },
  { local: "0782 557 913", href: "tel:+255782557913" },
] as const;

const ContactDetailsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid gap-5"
    >
      <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
        <div className="relative h-56 w-full sm:h-64">
          <iframe
            title="PrimeSoft Location Map"
            src="https://www.google.com/maps?q=-6.7844192,39.2196537&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
          <div className="absolute top-4 left-4">
            <a
              href="https://maps.app.goo.gl/BoKTemrDjNVispeG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-slate-800"
            >
              Open in Maps
              <ExternalIcon />
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5">
          <span className="mt-0.5 text-secondary-500">
            <PinIcon />
          </span>
          <p className="text-sm leading-6 text-slate-600">
            30 Mseleleko St, Dar es Salaam
          </p>
        </div>
        <div className="grid gap-2.5 border-t border-slate-100 px-5 pb-5 pt-4 sm:grid-cols-2">
          {phoneNumbers.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 transition hover:text-primary-600"
            >
              <TanzaniaFlagIcon className="size-4 shrink-0 rounded-[2px]" />
              {phone.local}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <ClockIcon />
          Office Hours
        </div>
        <div className="mt-4 grid gap-2.5">
          {officeHours.map((row) => (
            <div
              key={row.day}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-slate-500">{row.day}</span>
              <span className="font-semibold text-slate-800">
                {row.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border border-primary-100 bg-linear-to-br from-primary-50 to-secondary-50 p-6">
        <div className="grid gap-3">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2.5 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary-500 text-white">
                <CheckIcon />
              </span>
              <span className="font-medium text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function TanzaniaFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" {...props}>
      <rect width="30" height="20" fill="#1eb53a" />
      <polygon points="30,0 30,20 0,20" fill="#00a3dd" />
      <line x1="0" y1="20" x2="30" y2="0" stroke="#fcd116" strokeWidth="6.2" />
      <line x1="0" y1="20" x2="30" y2="0" stroke="#000000" strokeWidth="3.4" />
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
      className="size-4"
      aria-hidden="true"
    >
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4 text-primary-600"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="size-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default ContactDetailsPanel;
