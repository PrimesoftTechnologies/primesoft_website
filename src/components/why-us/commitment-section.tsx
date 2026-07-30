"use client";

import { motion } from "motion/react";

const CommitmentSection = () => {
  return (
    <section className="relative mx-auto mt-24 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] border border-primary-100 bg-linear-to-br from-primary-50 via-white to-secondary-50 px-6 py-16 text-center sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 size-64 rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 size-72 rounded-full bg-secondary-200/30 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Your Growth Is{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-secondary-500">
              Our Mission
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Whether you&apos;re implementing ERP, modernizing your
            infrastructure, building custom software, or integrating complex
            business systems, we&apos;re committed to delivering technology
            that creates measurable business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentSection;
