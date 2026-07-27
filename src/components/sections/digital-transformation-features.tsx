// src/components/sections/digital-transformation-features.tsx
"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Legacy Modernization",
    description: "Upgrade outdated systems into agile, cloud-ready platforms without disrupting ongoing business operations.",
    icon: <ModernizeIcon />,
  },
  {
    title: "Workflow Digitization",
    description: "Eliminate manual paperwork by transitioning into automated, data-driven digital workflows.",
    icon: <WorkflowIcon />,
  },
  {
    title: "Cloud & Data Strategy",
    description: "Unlock deep business insights and secure scalability by migrating critical assets to modern cloud environments.",
    icon: <CloudStrategyIcon />,
  },
];

export function DigitalTransformationFeatures() {
  return (
    <section id="transformation-features" className="py-16 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            Core Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Driving Sustainable Business Evolution
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We guide your organization through structural shifts, aligning cutting-edge technology with your core business vision.
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

function ModernizeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function CloudStrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}