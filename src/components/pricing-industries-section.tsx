"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Notify from "./notify";
import { LightningIcon, RightIcon } from "./icons";

const pricingCards = [
  {
    title: "Solution Design",
    description:
      "We analyze your business workflows and design a tailored AI, automation, or software solution aligned with your operations.",
    accent: "secondary",
    icon: <LicenseIcon />,
  },
  {
    title: "Implementation & Support",
    description:
      "We build, integrate, and deploy your system with training, monitoring, and ongoing technical support included.",
    accent: "primary",
    icon: <ShieldCheckIcon />,
  },
] as const;

const pricingPoints = [
  "Business workflow analysis",
  "AI & automation solution design",
  "System integration & deployment",
  "Training, support & optimization",
] as const;

const industries = [
  {
    title: "Call Center & Customer Support",
    description: "AI-powered communication and customer management systems",
    points: [
      "Smart call routing & IVR",
      "CRM integration",
      "Call analytics & reporting",
      "Automated customer workflows",
    ],
    accent: "primary",
    image: "/images/support.png",
    icon: <PeopleGridIcon />,
  },
  {
    title: "Business Automation",
    description: "Automate manual processes and improve productivity",
    points: [
      "Workflow automation",
      "Approval & notification systems",
      "Document processing",
      "Task & operations automation",
    ],
    accent: "primary",
    image: "/images/process.jpeg",
    icon: <LightningIcon className="size-5" />,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems powered by your data",
    points: [
      "Predictive analytics",
      "AI assistants & chatbots",
      "Image & data recognition",
      "Decision support systems",
    ],
    accent: "primary",
    image: "/images/steps-image.jpeg",
    icon: <FactoryIcon />,
  },
  {
    title: "ERP & Business Systems",
    description: "Centralized platforms for managing business operations",
    points: [
      "Finance & accounting",
      "Inventory management",
      "HR & payroll systems",
      "Sales & CRM integration",
    ],
    accent: "primary",
    image: "/images/advantage.png",
    icon: <BoxStackIcon />,
  },
  {
    title: "Custom Software Development",
    description: "Tailored applications built for your workflow",
    points: [
      "Web & mobile applications",
      "Dashboard & analytics",
      "API integrations",
      "Cloud-based platforms",
    ],
    accent: "primary",
    image: "/images/software-dev.jpeg",
    icon: <StorefrontIcon />,
  },
  {
    title: "Digital Transformation",
    description: "Modernize operations with smart technology",
    points: [
      "Process digitization",
      "System integrations",
      "Performance analytics",
      "Scalable architecture",
    ],
    accent: "primary",
    image: "/images/transformation-image.jpeg",
    icon: <FactoryIcon />,
  },
] as const;

const accentClasses = {
  secondary: {
    soft: "bg-secondary-50 text-secondary-600",
    point: "text-secondary-500",
    link: "text-secondary-600",
  },
  primary: {
    soft: "bg-primary-50 text-primary-600",
    point: "text-primary-500",
    link: "text-primary-600",
  },
  purple: {
    soft: "bg-violet-50 text-violet-600",
    point: "text-violet-500",
    link: "text-violet-600",
  },
  green: {
    soft: "bg-emerald-50 text-emerald-600",
    point: "text-emerald-500",
    link: "text-emerald-600",
  },
  pink: {
    soft: "bg-pink-50 text-pink-600",
    point: "text-pink-500",
    link: "text-pink-600",
  },
  teal: {
    soft: "bg-teal-50 text-teal-600",
    point: "text-teal-500",
    link: "text-teal-600",
  },
} as const;

const PricingIndustriesSection = () => {
  return (
    <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="rounded-[36px] border border-slate-200 bg-white px-5 py-12 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex justify-center">
              <Notify className="w-fit border-secondary-100 bg-secondary-50 text-secondary-700">
                <PriceTagIcon />
                Pricing
              </Notify>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Clear Pricing, Built for Real-World Rollouts
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              We keep pricing simple: Odoo licensing + implementation. Fixed
              flat-rate implementation scope is defined up front.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pricingCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClasses[card.accent].soft}`}
                >
                  {card.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <CheckShieldIcon />
              What is included
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {pricingPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-1 text-emerald-500">
                    <CheckCircleIcon />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl bg-secondary-500 px-6 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,115,0,0.25)] transition hover:bg-secondary-600"
            >
              Request a Pricing Breakdown
              <RightIcon className="size-4" />
            </a>
            <p className="mt-4 text-xs text-slate-400">
              Final pricing depends on user count, selected modules, and
              migration complexity.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex justify-center">
              <Notify className="w-fit border-secondary-100 bg-secondary-50 text-secondary-700">
                <IndustryIcon />
                Industry Expertise
              </Notify>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Odoo implementations tailored for your industry, processes, and
              growth goals.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12),rgba(255,255,255,0.92)_78%,#ffffff_100%)]" />
                </div>
                <div className="px-5 pb-5">
                  <div
                    className={`-mt-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white shadow-sm ${accentClasses[industry.accent].link}`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {industry.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span
                          className={`mt-1 ${accentClasses[industry.accent].point}`}
                        >
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${accentClasses[industry.accent].link}`}
                  >
                    Learn more
                    <RightIcon className="size-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function PriceTagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M20 10.5 12.5 3H5v7.5l7.5 7.5a2 2 0 0 0 2.8 0l4.7-4.7a2 2 0 0 0 0-2.8Z" />
      <circle cx="8" cy="8" r="1.2" />
    </svg>
  );
}

function LicenseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h8M8 12h5M8 16h4" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 11.5 1.7 1.7 3.8-3.8" />
    </svg>
  );
}

function CheckShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4 text-emerald-600"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 11.5 1.7 1.7 3.8-3.8" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3 4.7-4.8" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M4 20V8l8-4 8 4v12H4Z" />
      <path d="M9 20v-6h6v6M9 9h.01M15 9h.01" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M3 20V9l6 3V9l6 3V5l6 3v12H3Z" />
    </svg>
  );
}

// function UtensilsIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className="size-5"
//       aria-hidden="true"
//     >
//       <path d="M7 3v8M4.5 3v4a2.5 2.5 0 0 0 5 0V3M7 11v10M16 3c-2.2 0-4 1.8-4 4v6h4V3ZM16 13v8" />
//     </svg>
//   );
// }

function BoxStackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 3 4.5 7 12 11l7.5-4L12 3Z" />
      <path d="m4.5 12 7.5 4 7.5-4M4.5 17l7.5 4 7.5-4" />
    </svg>
  );
}

function StorefrontIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M4 10.5h16M6 10.5V20h12v-9.5M5 6h14l1 4.5H4L5 6Z" />
    </svg>
  );
}

function PeopleGridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <circle cx="8" cy="16" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
    </svg>
  );
}

export default PricingIndustriesSection;
