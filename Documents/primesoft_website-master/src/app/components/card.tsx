"use client"
import IconContainer from "@/components/icon-container";
import { motion } from "motion/react";
import { ReactNode } from "react";
export type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
};
const Card = ({ icon, title, description, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay }}
      className="group flex w-full min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-600 p-5 text-center backdrop-blur-sm hover:border-secondary-400 sm:p-6"
    >
      <IconContainer className="group-hover:bg-secondary-800 group-hover:text-secondary">
        {icon}
      </IconContainer>
      <div className=" text-lg sm:text-xl leading-tight">{title}</div>
      <div className="text-sm text-slate-600">{description}</div>
    </motion.div>
  );
};
export default Card;
