"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { RightIcon } from "../icons";

type Accent =
  | "secondary"
  | "primary"
  | "purple"
  | "green"
  | "red"
  | "amber"
  | "indigo"
  | "pink"
  | "teal";

type ProcessCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: Accent;
  delay?: number;
};

const accentStyles = {
  secondary: {
    iconWrap: "bg-secondary-50 text-secondary-600",
    activeBorder:
      "group-hover:border-secondary-300 group-hover:ring-secondary-100",
    activeText: "group-hover:text-secondary-600",
    activeArrow: "group-hover:bg-secondary-500 group-hover:text-white",
  },
  primary: {
    iconWrap: "bg-primary-50 text-primary-600",
    activeBorder: "group-hover:border-primary-300 group-hover:ring-primary-100",
    activeText: "group-hover:text-primary-600",
    activeArrow: "group-hover:bg-primary-500 group-hover:text-white",
  },
  purple: {
    iconWrap: "bg-violet-50 text-violet-600",
    activeBorder: "group-hover:border-violet-300 group-hover:ring-violet-100",
    activeText: "group-hover:text-violet-600",
    activeArrow: "group-hover:bg-violet-500 group-hover:text-white",
  },
  green: {
    iconWrap: "bg-emerald-50 text-emerald-600",
    activeBorder: "group-hover:border-emerald-300 group-hover:ring-emerald-100",
    activeText: "group-hover:text-emerald-600",
    activeArrow: "group-hover:bg-emerald-500 group-hover:text-white",
  },
  red: {
    iconWrap: "bg-rose-50 text-rose-600",
    activeBorder: "group-hover:border-rose-300 group-hover:ring-rose-100",
    activeText: "group-hover:text-rose-600",
    activeArrow: "group-hover:bg-rose-500 group-hover:text-white",
  },
  amber: {
    iconWrap: "bg-amber-50 text-amber-600",
    activeBorder: "group-hover:border-amber-300 group-hover:ring-amber-100",
    activeText: "group-hover:text-amber-600",
    activeArrow: "group-hover:bg-amber-500 group-hover:text-white",
  },
  indigo: {
    iconWrap: "bg-indigo-50 text-indigo-600",
    activeBorder: "group-hover:border-indigo-300 group-hover:ring-indigo-100",
    activeText: "group-hover:text-indigo-600",
    activeArrow: "group-hover:bg-indigo-500 group-hover:text-white",
  },
  pink: {
    iconWrap: "bg-pink-50 text-pink-600",
    activeBorder: "group-hover:border-pink-300 group-hover:ring-pink-100",
    activeText: "group-hover:text-pink-600",
    activeArrow: "group-hover:bg-pink-500 group-hover:text-white",
  },
  teal: {
    iconWrap: "bg-teal-50 text-teal-600",
    activeBorder: "group-hover:border-teal-300 group-hover:ring-teal-100",
    activeText: "group-hover:text-teal-600",
    activeArrow: "group-hover:bg-teal-500 group-hover:text-white",
  },
} as const;

const ProcessCard = ({
  icon,
  title,
  description,
  accent = "secondary",
  delay = 0,
}: ProcessCardProps) => {
  const styles = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 text-left shadow-[0_6px_18px_rgba(15,23,42,0.06)] ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${styles.activeBorder}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-white/80 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div
        className={`flex size-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 group-hover:-rotate-12 ${styles.iconWrap}`}
      >
        {icon}
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="max-w-60">
          <h4
            className={`text-xl font-bold leading-tight text-slate-900 transition ${styles.activeText}`}
          >
            {title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
        </div>

        <div
          className={`mb-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 ${styles.activeArrow}`}
        >
          <RightIcon className="size-5" />
        </div>
      </div>
    </motion.article>
  );
};

export default ProcessCard;
