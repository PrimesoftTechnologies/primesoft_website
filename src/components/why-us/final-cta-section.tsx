"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { RightIcon } from "@/components/icons";

const FinalCtaSection = () => {
  return (
    <section className="relative mt-24 overflow-hidden bg-[linear-gradient(180deg,#182540_0%,#1c2943_42%,#1a2740_100%)] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(255,115,0,0.14),transparent_30%),radial-gradient(circle_at_12%_20%,rgba(255,125,64,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(64,124,255,0.1),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[78px_64px]" />
        <motion.div
          className="absolute left-1/3 top-0 size-80 -translate-y-1/2 rounded-full bg-secondary-500/15 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-0 size-72 translate-y-1/2 rounded-full bg-primary-400/15 blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl lg:text-5xl"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Let&apos;s discuss how PrimeSoft Technologies can help streamline
          your operations and accelerate your digital transformation journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="/contact"
            className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary px-8 py-6 text-base font-semibold shadow-lg shadow-primary-500/25 transition-all duration-200 hover:gap-4 hover:bg-primary-700 sm:text-lg"
          >
            <span>Get Started</span>
            <RightIcon />
          </Link>
          <Link
            href="/contact"
            className="flex w-fit items-center gap-2 rounded-xl border border-neutral-600 bg-transparent px-8 py-6 text-base transition hover:border-secondary-400 sm:text-lg"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
