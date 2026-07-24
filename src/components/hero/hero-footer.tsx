"use client";
import { UserGroupIcon } from "@/components/icons";
import { motion } from "motion/react";

const HeroFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay: 0.65 }}
      className="flex justify-center items-center gap-2 text-sm text-slate-400"
    >
      <UserGroupIcon className=" text-secondary-400 size-5" />
      <div>
        Support for manufacturing, distribution, and service teams with phased
        rollout and ongoing guidance
      </div>
    </motion.div>
  );
};
export default HeroFooter;
