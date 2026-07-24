"use client";

import Image from "next/image";
import { motion } from "motion/react";
import steps from "./steps-items";
const StepsSection = () => {
  return (
    <section className="bg-primary-900 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-18 mt-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Clear Digital Transformation Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            We guide your business from assessment to full Odoo and Call
            Center deployment.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Our process covers consulting, solution design, implementation,
            training, and long-term support.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-14">
          <div className="space-y-5 lg:hidden">
            {steps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 shadow-[0_20px_60px_rgba(255,122,26,0.18)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1e6] text-[#ff6b00]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.22em] text-[#ff6b00]">
                      {item.step}
                    </p>
                    <p className="mt-1 text-base font-bold">{item.title}</p>
                  </div>
                  <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b00] text-base font-bold text-white shadow-[0_12px_30px_rgba(255,107,0,0.35)]">
                    {item.id}
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto hidden w-full max-w-280 lg:block"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[#1d2738] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_64px_rgba(255,122,26,0.16)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,64,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
              <Image
                src="/images/steps-image.jpeg"
                alt="Illustrated Odoo implementation roadmap"
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="steps-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8b38" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              {steps.map((item) => (
                <g key={`line-${item.id}`}>
                  <line
                    x1={item.line.x1}
                    y1={item.line.y1}
                    x2={item.line.x2}
                    y2={item.line.y2}
                    stroke="url(#steps-line-gradient)"
                    strokeWidth="0.22"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={item.line.x1}
                    cy={item.line.y1}
                    r="0.33"
                    fill="#ff9b54"
                  />
                  <circle
                    cx={item.line.x2}
                    cy={item.line.y2}
                    r="0.28"
                    fill="#ff7a1a"
                  />
                </g>
              ))}
            </svg>

            {steps.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 + 0.12 }}
                className={`absolute ${item.cardPosition} rounded-[18px] border border-slate-200/70 bg-white p-3.5 text-slate-900 shadow-[0_18px_40px_rgba(10,20,40,0.28)] xl:p-4`}
              >
                <div className="mb-2.5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff1e6] text-[#ff6b00]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold tracking-[0.22em] text-[#ff6b00]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-5">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-9 flex justify-center lg:mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition duration-200 hover:bg-[#ff7d1f] sm:text-base"
          >
            Book Free Consultation
            <span aria-hidden="true" className="text-xl leading-none">
              →
            </span>
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-4 text-center text-sm text-slate-400 sm:text-sm"
        >
          Start Your Implementation Journey
          <br />
          Book a consultation and get a tailored Odoo &amp; Call Center plan.
        </motion.p>
      </div>
    </section>
  );
};

export default StepsSection;
