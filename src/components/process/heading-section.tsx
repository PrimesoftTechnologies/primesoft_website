"use client";

import { motion } from "motion/react";

export interface HeadingSectionProps {
  number: number;
  title: string;
}

const HeadingSection = ({ number, title }: HeadingSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.45 }}
      className="flex items-center gap-4"
    >
      <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary-500 text-lg font-bold text-white shadow-[0_12px_30px_rgba(255,115,0,0.25)]">
        {number}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900">{title}</div>
        <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-secondary-600 to-secondary-400" />
      </div>
    </motion.div>
  );
};

export default HeadingSection;
