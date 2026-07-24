"use client";
import { motion } from "framer-motion";

const HeroHeader = () => {
  return (
    <header className=" grid text-center gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className=""
      >
        Transform Your Business with Odoo{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary-500"
      >
        & Call Center Solutions
      </motion.div>
    </header>
  );
};
export default HeroHeader;
