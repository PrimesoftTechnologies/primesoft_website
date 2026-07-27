// src/components/ai-solutions/ai-solutions-comparison.tsx
"use client";

import React from "react";

const comparisons = [
  {
    metric: "Business Decision Making",
    before: "Based on reactive manual reports and intuition",
    after: "Data-driven predictive insights in real time",
    improvement: "5x Faster",
  },
  {
    metric: "Customer Query Resolution",
    before: "Human agents handling repetitive FAQs",
    after: "24/7 Swahili & English AI agents resolving FAQs",
    improvement: "80% Workload Saved",
  },
  {
    metric: "Data Processing & Extraction",
    before: "Hours spent manually reading PDFs and forms",
    after: "Instant OCR extraction in seconds",
    improvement: "99% Accuracy",
  },
  {
    metric: "Fraud & Risk Detection",
    before: "Post-event audit discovering losses late",
    after: "Real-time AI transaction monitoring & blocking",
    improvement: "Zero Leakage",
  },
  {
    metric: "Customer Churn Prediction",
    before: "Noticing lost customers after they leave",
    after: "Predictive alerts identifying churn risks early",
    improvement: "35% Churn Reduction",
  },
];

export const AISolutionsComparison = () => {
  return (
    <section className="bg-slate-50 py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1.5">
            Operational Transformation
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Before & After <span className="text-emerald-600">AI Adoption</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Comparative analysis of standard operations versus an AI-augmented enterprise environment.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Metric</th>
                  <th className="py-4 px-5 text-red-400 bg-slate-950/50">Before AI & ML</th>
                  <th className="py-4 px-5 text-emerald-400 bg-slate-950/80">After AI Integration</th>
                  <th className="py-4 px-5 text-emerald-400">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-800">
                      {item.metric}
                    </td>
                    <td className="py-4 px-5 text-slate-500 bg-rose-50/30">
                      <div className="flex items-start gap-2">
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold mt-0.5">
                          ✕
                        </span>
                        <span>{item.before}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-semibold text-slate-900 bg-emerald-50/30">
                      <div className="flex items-start gap-2">
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{item.after}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-extrabold text-emerald-600">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">
                        {item.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};