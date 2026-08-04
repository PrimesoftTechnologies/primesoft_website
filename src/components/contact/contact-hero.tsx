"use client";

import { motion } from "motion/react";
import Notify from "@/components/notify";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-28 text-white sm:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#182540_0%,#1c2943_42%,#1a2740_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(255,115,0,0.14),transparent_30%),radial-gradient(circle_at_12%_20%,rgba(255,125,64,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(64,124,255,0.1),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[78px_64px]" />

      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 size-72 -translate-y-1/2 rounded-full bg-secondary-500/15 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/5 bottom-0 size-80 translate-y-1/3 rounded-full bg-primary-400/15 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Notify className="w-fit border-primary-900 bg-primary-500/20">
            <span className="size-2 rounded-full bg-secondary-400 animate-pulse" />
            <div className="text-sm">Get In Touch</div>
          </Notify>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          Let&apos;s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary-500">
            Great Together
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Tell us about your project and a member of our senior team will get
          back to you within one business day.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
