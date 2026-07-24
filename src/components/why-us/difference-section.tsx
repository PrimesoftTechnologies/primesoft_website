"use client";

import { SVGProps } from "react";
import { motion } from "motion/react";
import Notify from "@/components/notify";
import { RightIcon, LightningIcon } from "@/components/icons";

const iconClassName = "size-7";

const differentiators = [
  {
    title: "Business-First Approach",
    description:
      "Every solution begins by understanding your business processes before writing a single line of code.",
    icon: <TargetIcon className={iconClassName} />,
    accent: "primary" as const,
  },
  {
    title: "Experienced Team",
    description:
      "Our consultants, developers, and engineers bring deep expertise across ERP, cloud infrastructure, integrations, and enterprise software.",
    icon: <TeamIcon className={iconClassName} />,
    accent: "secondary" as const,
  },
  {
    title: "Tailored Solutions",
    description:
      "No one-size-fits-all systems. Every implementation is customized to meet your unique operational requirements.",
    icon: <PuzzleIcon className={iconClassName} />,
    accent: "primary" as const,
  },
  {
    title: "End-to-End Delivery",
    description:
      "From consulting and planning to implementation, training, and ongoing support—we stay with you throughout the journey.",
    icon: <PathIcon className={iconClassName} />,
    accent: "secondary" as const,
  },
  {
    title: "Reliable Support",
    description:
      "Fast response times, continuous improvements, proactive maintenance, and long-term partnerships.",
    icon: <ShieldIcon className={iconClassName} />,
    accent: "primary" as const,
  },
  {
    title: "Future Ready",
    description:
      "Our solutions are scalable, secure, cloud-ready, and designed to grow alongside your business.",
    icon: <OrbitIcon className={iconClassName} />,
    accent: "secondary" as const,
  },
];

const accentStyles = {
  primary: {
    iconWrap: "bg-primary-50 text-primary-600",
    activeBorder: "group-hover:border-primary-300 group-hover:ring-primary-100",
    activeText: "group-hover:text-primary-600",
    activeArrow: "group-hover:bg-primary-500 group-hover:text-white",
  },
  secondary: {
    iconWrap: "bg-secondary-50 text-secondary-600",
    activeBorder:
      "group-hover:border-secondary-300 group-hover:ring-secondary-100",
    activeText: "group-hover:text-secondary-600",
    activeArrow: "group-hover:bg-secondary-500 group-hover:text-white",
  },
} as const;

const DifferenceSection = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 text-center"
      >
        <div className="flex justify-center">
          <Notify className="flex w-fit gap-2 border-none bg-secondary-50 px-4 py-2">
            <LightningIcon className="size-4 text-secondary-700" />
            <div className="text-secondary-800">What Makes Us Different</div>
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Technology That Solves{" "}
          <span className="text-secondary-600">Real Business Problems</span>
        </div>
        <div className="mx-auto max-w-3xl text-lg text-gray-500">
          Six reasons growing organizations partner with PrimeSoft to plan,
          build, and support their technology long term.
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {differentiators.map((item, index) => {
          const styles = accentStyles[item.accent];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 text-left shadow-[0_6px_18px_rgba(15,23,42,0.06)] ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${styles.activeBorder}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-white/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div
                className={`flex size-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 group-hover:-rotate-6 ${styles.iconWrap}`}
              >
                {item.icon}
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h3
                    className={`text-xl font-bold leading-tight text-slate-900 transition ${styles.activeText}`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mb-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 ${styles.activeArrow}`}
                >
                  <RightIcon className="size-5" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
  );
}

function TeamIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="3" />
    <circle cx="16.5" cy="9" r="2.5" />
    <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
    <path d="M14 18.5a3.5 3.5 0 0 1 7 0" />
  </svg>
  );
}

function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M9 4.5h3.2a1.3 1.3 0 0 1 1.3 1.5 1.4 1.4 0 0 0 1.4 1.6h1.6a1.5 1.5 0 0 1 1.5 1.5v1.6a1.4 1.4 0 0 0 1.6 1.4 1.3 1.3 0 0 1 1.5 1.3V16h-3.5a1.6 1.6 0 0 0 0 3.2H19.5" />
    <path d="M9 4.5H5.5A1.5 1.5 0 0 0 4 6v3.5a1.6 1.6 0 0 0 3.2 0V9H9v3.5a1.6 1.6 0 0 1-3.2 0V16H4v3.5A1.5 1.5 0 0 0 5.5 21H9" />
  </svg>
  );
}

function PathIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M5 8v4a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4" />
  </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" />
    <path d="M9.5 11.5 11 13l3.5-3.5" />
  </svg>
  );
}

function OrbitIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="2.2" />
    <ellipse cx="12" cy="12" rx="9" ry="4" />
    <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(35 12 12)" />
  </svg>
  );
}

export default DifferenceSection;
