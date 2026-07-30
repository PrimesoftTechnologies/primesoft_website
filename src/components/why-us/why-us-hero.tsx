"use client";

import Background from "@/components/background";
import BasicButton from "@/components/basic-button";
import Notify from "@/components/notify";
import { RightIcon } from "@/components/icons";
import { motion } from "motion/react";

const WhyUsHero = () => {
  return (
    <Background>
      <div className="relative overflow-hidden pb-28">
        <FloatingShapes />

        <div className="mt-32 grid justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Notify className="w-fit border-primary-900 bg-primary-500/20">
              <SparkIcon className="text-secondary-400 size-4" />
              <div className="text-sm">Why PrimeSoft Technologies</div>
            </Notify>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-4xl justify-items-center gap-8 px-4 py-16 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary-500">
              PrimeSoft Technologies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-3xl text-lg text-slate-300 sm:text-xl md:text-2xl"
          >
            We don&apos;t just build software—we help organizations transform
            operations, improve efficiency, and accelerate growth through
            reliable technology solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <BasicButton className="cursor-pointer bg-primary shadow-lg shadow-primary-500/25 hover:gap-4 hover:bg-primary-700 transition-all duration-200">
              <div>Let&apos;s Build Together</div>
              <RightIcon />
            </BasicButton>
            <BasicButton className="border border-neutral-600 bg-transparent hover:border-secondary-400">
              View Our Services
            </BasicButton>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <ScrollBackdropSvg />
        </div>
      </div>
    </Background>
  );
};

const shapes = [
  {
    className: "left-[6%] top-[18%] size-24 border-secondary-400/30 lg:size-32",
    duration: 7,
    delay: 0,
    shape: "rounded-3xl rotate-12 border",
  },
  {
    className: "right-[10%] top-[10%] size-16 border-primary-300/30 lg:size-20",
    duration: 6,
    delay: 0.4,
    shape: "rounded-full border",
  },
  {
    className:
      "left-[14%] bottom-[12%] size-14 border-primary-300/25 lg:size-16",
    duration: 8,
    delay: 0.8,
    shape: "rounded-xl -rotate-12 border",
  },
  {
    className:
      "right-[8%] bottom-[16%] size-20 border-secondary-400/25 lg:size-28",
    duration: 9,
    delay: 0.2,
    shape: "rounded-full border",
  },
  {
    className: "right-[28%] top-[6%] size-10 border-secondary-300/30 lg:size-12",
    duration: 5.5,
    delay: 1.1,
    shape: "rounded-lg rotate-45 border",
  },
] as const;

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
      aria-hidden="true"
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.shape} ${shape.className}`}
          animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/3 size-72 -translate-x-1/2 rounded-full bg-secondary-500/10 blur-3xl lg:size-96"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-0 size-64 rounded-full bg-primary-400/10 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

function ScrollBackdropSvg() {
  return (
    <svg
      viewBox="0 0 1920 160"
      className="h-auto w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 96 C 320 20, 640 20, 960 70 C 1280 120, 1600 120, 1920 60 L1920 160 L0 160 Z"
        fill="rgba(255,255,255,0.03)"
      />
    </svg>
  );
}

export default WhyUsHero;
