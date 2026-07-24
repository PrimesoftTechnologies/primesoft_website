"use client"
import BasicButton from "@/components/basic-button"
import { RightIcon } from "@/components/icons";
import { motion } from "motion/react";

const HeroButtons=()=>{
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        <BasicButton className="cursor-pointer bg-primary shadow-lg shadow-primary-500/25 hover:gap-4 hover:bg-primary-700 transition-all duration-200">
          <div>Get a Free Odoo Consultation</div>
          <RightIcon />
        </BasicButton>
        <BasicButton className="border border-neutral-600 bg-transparent hover:border-secondary-400">
          See Implementation Plan
        </BasicButton>
      </motion.div>
    );
}
export default HeroButtons
