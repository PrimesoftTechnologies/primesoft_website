"use client";

import { SVGProps } from "react";
import { motion } from "motion/react";
import Notify from "@/components/notify";
import { LightningIcon } from "@/components/icons";

const iconClassName = "size-8";

const values = [
  {
    title: "Innovation",
    description:
      "We embrace modern technologies that keep businesses competitive.",
    icon: <BulbIcon className={iconClassName} />,
  },
  {
    title: "Integrity",
    description:
      "We build long-lasting relationships through transparency and honesty.",
    icon: <HandshakeIcon className={iconClassName} />,
  },
  {
    title: "Excellence",
    description:
      "We strive for exceptional quality in every project we deliver.",
    icon: <MedalIcon className={iconClassName} />,
  },
  {
    title: "Customer Success",
    description: "Your success defines our success.",
    icon: <HeartHandIcon className={iconClassName} />,
  },
];

const CoreValuesSection = () => {
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
          <Notify className="flex w-fit gap-2 border-none bg-primary-50 px-4 py-2">
            <LightningIcon className="size-4 text-primary-700" />
            <div className="text-primary-800">Our Core Values</div>
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          What Drives <span className="text-primary-600">Everything We Do</span>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center gap-4 rounded-[26px] border border-slate-200 bg-white p-8 text-center shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-secondary-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="relative flex size-20 items-center justify-center rounded-full bg-linear-to-br from-primary-50 to-secondary-50 text-primary-600 transition duration-300 group-hover:scale-105 group-hover:from-primary-100 group-hover:to-secondary-100">
              <div className="absolute inset-0 rounded-full border border-primary-100" />
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
            <p className="text-sm leading-6 text-slate-500">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45.9 1.15.9 1.9V16h5.2v-.2c0-.75.3-1.45.9-1.9A6 6 0 0 0 12 3Z" />
  </svg>
  );
}

function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m3 11 4-4 4.5 4-1.5 1.5a1.5 1.5 0 0 0 2.1 2.1l2.9-2.9 4 4" />
    <path d="M9 15.5 11 17.5a1.6 1.6 0 0 0 2.3-2.2M12 18l1 1a1.6 1.6 0 0 0 2.3-2.2" />
    <path d="M7 7 5.5 5.5 2 9M17 7l1.5-1.5L22 9" />
  </svg>
  );
}

function MedalIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="14.5" r="5.5" />
    <path d="m9.5 12.5 1.8 1.8 3.2-3.2" />
    <path d="M9 4.5 7 2M15 4.5l2-2.5M8 5l1.8 4M16 5l-1.8 4" />
  </svg>
  );
}

function HeartHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 20s-6.5-4-8.5-8.2C2.3 8.9 3.7 6 6.6 6c1.5 0 2.7.8 3.4 2 .7-1.2 1.9-2 3.4-2 2.9 0 4.3 2.9 3.1 5.8C18.5 16 12 20 12 20Z" />
  </svg>
  );
}

export default CoreValuesSection;
