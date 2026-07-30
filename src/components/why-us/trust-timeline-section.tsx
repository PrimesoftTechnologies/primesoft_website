"use client";

import { SVGProps } from "react";
import { motion } from "motion/react";
import Notify from "@/components/notify";
import { CautionIcon } from "@/components/icons";

const iconClassName = "size-5";

const timelineSteps = [
  {
    title: "Understand Your Business",
    description: "We map your workflows, goals, and pain points first.",
    icon: <CompassIcon className={iconClassName} />,
  },
  {
    title: "Design the Right Solution",
    description: "We architect a system tailored to how you operate.",
    icon: <BlueprintIcon className={iconClassName} />,
  },
  {
    title: "Build & Customize",
    description: "We configure, develop, and integrate around your needs.",
    icon: <WrenchIcon className={iconClassName} />,
  },
  {
    title: "Deploy & Train",
    description: "We launch the system and get your team fully onboard.",
    icon: <LaunchIcon className={iconClassName} />,
  },
  {
    title: "Support & Optimize",
    description: "We monitor, improve, and support you long term.",
    icon: <SupportOptIcon className={iconClassName} />,
  },
];

const TrustTimelineSection = () => {
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
          <Notify className="w-fit text-sm bg-secondary-50 border-secondary-200 text-secondary-700">
            <CautionIcon />
            How We Work
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Why Clients <span className="text-secondary-600">Trust Us</span>
        </div>
        <div className="mx-auto max-w-3xl text-lg text-gray-500">
          A proven, transparent process that takes you from first
          conversation to long-term partnership.
        </div>
      </motion.div>

      {/* Mobile / tablet vertical layout */}
      <div className="mt-12 grid gap-6 lg:hidden">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative flex gap-4 pl-1"
          >
            {index !== timelineSteps.length - 1 && (
              <span className="absolute left-6 top-14 h-[calc(100%-1.5rem)] w-px bg-linear-to-b from-secondary-300 to-transparent" />
            )}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-secondary-100 bg-white text-secondary-500 shadow-md">
              {step.icon}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-bold tracking-[0.2em] text-secondary-500">
                STEP {index + 1}
              </div>
              <div className="mt-1 text-base font-bold text-slate-900">
                {step.title}
              </div>
              <div className="mt-1 text-sm text-slate-500">
                {step.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop horizontal timeline */}
      <div className="relative mt-16 hidden lg:block">
        <div className="absolute left-0 right-0 top-6 h-px bg-slate-200" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-6 h-px bg-linear-to-r from-secondary-500 via-secondary-400 to-primary-500"
        />

        <div className="relative grid grid-cols-5 gap-6">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-secondary-100 bg-white text-secondary-500 shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:border-secondary-300 group-hover:text-secondary-600 group-hover:shadow-lg">
                {step.icon}
              </div>
              <div className="mt-5 text-xs font-bold tracking-[0.2em] text-secondary-500">
                STEP {index + 1}
              </div>
              <div className="mt-2 text-base font-bold text-slate-900 xl:text-lg">
                {step.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-500">
                {step.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function CompassIcon(props: SVGProps<SVGSVGElement>) {
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
    <circle cx="12" cy="12" r="9" />
    <path d="m14.5 9.5-1.6 5-5 1.6 1.6-5Z" />
  </svg>
  );
}

function BlueprintIcon(props: SVGProps<SVGSVGElement>) {
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
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 9h6v6H4zM14 8h6M14 12h6M14 16h4" />
  </svg>
  );
}

function WrenchIcon(props: SVGProps<SVGSVGElement>) {
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
    <path d="M14.5 6.5a4 4 0 0 0-5.4 4.7L4 16.3V19h2.7l5.1-5.1a4 4 0 0 0 4.7-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
  </svg>
  );
}

function LaunchIcon(props: SVGProps<SVGSVGElement>) {
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
    <path d="M13.5 4.5c2.9.6 5.4 3.1 6 6-1.4 3.2-4.3 6.1-7.5 7.5-.8-1.8-1.4-4.7 1.5-7.5s5.7-2.3 7.5-1.5Z" />
    <path d="M10 14 5 19M8.5 21c.2-1.8 1-3.6 2.2-4.8" />
  </svg>
  );
}

function SupportOptIcon(props: SVGProps<SVGSVGElement>) {
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
    <path d="M4 12a8 8 0 1 1 16 0" />
    <rect x="3" y="11" width="4" height="7" rx="2" />
    <rect x="17" y="11" width="4" height="7" rx="2" />
    <path d="M19 18a3 3 0 0 1-3 3h-2" />
  </svg>
  );
}

export default TrustTimelineSection;
