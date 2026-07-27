// src/components/sections/custom-software-features.tsx
"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Tailored Architecture",
    description: "Designed from scratch to fit your exact operational logic, ensuring no bloat and maximum performance.",
    icon: <ArchitectureIcon />,
  },
  {
    title: "Secure API Integrations",
    description: "Connect seamlessly with third-party tools, payment gateways, legacy systems, and external databases.",
    icon: <ApiIcon />,
  },
  {
    title: "Cloud-Native Scaling",
    description: "Built for automated scaling, load balancing, and high availability across cloud infrastructures.",
    icon: <CloudIcon />,
  },
];

export function CustomSoftwareFeatures() {
  return (
    <section id="custom-features" className="py-16 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Engineered for Flexibility & High Performance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We employ modern development frameworks and rigorous testing protocols to build software that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-500/40 hover:shadow-lg transition group"
            >
              <div className="size-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ArchitectureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6" y2="6" /><line x1="6" y1="18" x2="6" y2="18" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}