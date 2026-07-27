// src/components/sections/custom-software-process.tsx
"use client";

import { motion } from "motion/react";

const steps = [
  { step: "01", title: "Discovery & Blueprint", desc: "Deep dive into your workflow requirements and system mapping." },
  { step: "02", title: "Agile Development", desc: "Sprint-driven coding with clean code and rigorous QA testing." },
  { step: "03", title: "Deployment & Scaling", desc: "Smooth cloud migration and production launch with zero downtime." },
  { step: "04", title: "Support & Maintenance", desc: "Ongoing monitoring, optimization, and security updates." },
];

export function CustomSoftwareProcess() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            Development Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How We Turn Your Vision Into Code</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs relative"
            >
              <div className="text-2xl font-extrabold text-purple-600/40 font-mono mb-2">{item.step}</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}