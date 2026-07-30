// src/components/sections/custom-software-metrics.tsx
"use client";

import { motion } from "motion/react";

const metrics = [
  { label: "Deployment Speed", value: "3x Faster", desc: "Accelerated go-to-market timeline." },
  { label: "System Uptime", value: "99.9%", desc: "Reliable architecture to eliminate downtime." },
  { label: "Client Retention", value: "100%", desc: "Long-term dedicated engineering support." },
  { label: "Code Coverage", value: "95%+", desc: "Thoroughly tested software ensuring minimum bugs." },
];

export function CustomSoftwareMetrics() {
  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1.5 shadow-xs"
            >
              <div className="text-2xl font-extrabold text-purple-600 font-mono">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-900">{item.label}</div>
              <p className="text-[11px] text-slate-600 leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}