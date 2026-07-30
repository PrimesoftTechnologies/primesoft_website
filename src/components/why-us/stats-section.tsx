"use client";

import { motion } from "motion/react";
import AnimatedCounter from "./animated-counter";

const stats = [
  { value: 100, decimals: 0, suffix: "+", label: "Projects Delivered" },
  { value: 50, decimals: 0, suffix: "+", label: "Happy Organizations" },
  { value: 99.9, decimals: 1, suffix: "%", label: "System Reliability" },
  { value: 24, decimals: 0, suffix: "/7", label: "Technical Support" },
  { value: 10, decimals: 0, suffix: "+", label: "Industries Served" },
] as const;

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-900 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 size-72 -translate-y-1/2 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 size-72 translate-y-1/2 rounded-full bg-primary-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Results That Speak{" "}
            <span className="text-secondary-400">For Themselves</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Real numbers from real partnerships built on reliability and
            results.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition hover:border-secondary-400/40 hover:bg-white/8"
            >
              <div className="text-3xl font-bold text-secondary-400 sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: stats.length * 0.08 }}
            className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition hover:border-secondary-400/40 hover:bg-white/8 sm:col-span-3 lg:col-span-1"
          >
            <div className="text-3xl font-bold text-secondary-400 sm:text-4xl">
              100k+
            </div>
            <div className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
              End Users Empowered
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
