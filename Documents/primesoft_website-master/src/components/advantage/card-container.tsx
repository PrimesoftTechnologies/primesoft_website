"use client";

import { ReactNode } from "react";
import IconContainer from "../icon-container";
import { motion } from "framer-motion";

type CardContainerProps = {
  title: string;
  icon: ReactNode;
  description: string;
  className: string;
  delay?: number;
};

const CardContainer = ({
  title,
  icon,
  description,
  className,
  delay = 0,
}: CardContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay }}
      className={`absolute grid w-64 gap-2 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm 2xl:w-70 ${className}`}
    >
      <div className="flex items-center gap-3">
        <IconContainer>{icon}</IconContainer>
        <div className="text-lg font-bold">{title}</div>
      </div>
      <div className="text-sm text-slate-600">{description}</div>
    </motion.div>
  );
};

export default CardContainer;
