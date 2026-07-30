// src/components/business-automation/business-automation-comparison.tsx
"use client";

import React from "react";

const comparisons = [
  {
    metric: "Task & Document Processing Time",
    before: "24 to 48 hours for approvals",
    after: "Instant to 10 minutes",
    improvement: "96% Faster",
  },
  {
    metric: "Data Entry & Verification Errors",
    before: "High human error rate (12%-15%)",
    after: "Zero manual data entry errors",
    improvement: "100% Accuracy",
  },
  {
    metric: "Operational Cost & Paperwork",
    before: "Heavy printing, physical signatures & filing",
    after: "100% Digital workflow & e-signatures",
    improvement: "72% Cost Savings",
  },
  {
    metric: "SLA Tracking & Compliance Audit",
    before: "Manual follow-ups & lost email threads",
    after: "Real-time dashboard & automated audit trails",
    improvement: "Full Transparency",
  },
  {
    metric: "Employee Time Spent on Routine Tasks",
    before: "15+ hours/week per employee",
    after: "Less than 1 hour/week",
    improvement: "15x Time Reclaimed",
  },
];

export const BusinessAutomationComparison = () => {
  return (
    <section className="bg-slate-50 py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Clear Operational Impact
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Before & After <span className="text-orange-600">Business Automation</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Direct comparison showing how transforming manual operations accelerates speed, cuts costs, and boosts accuracy.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Metric</th>
                  <th className="py-4 px-5 text-red-400 bg-slate-950/50">Before Automation</th>
                  <th className="py-4 px-5 text-orange-400 bg-slate-950/80">After Business Automation</th>
                  <th className="py-4 px-5 text-emerald-400">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    {/* Metric */}
                    <td className="py-4 px-5 font-bold text-slate-800">
                      {item.metric}
                    </td>

                    {/* Before */}
                    <td className="py-4 px-5 text-slate-500 bg-rose-50/30">
                      <div className="flex items-start gap-2">
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold mt-0.5">
                          ✕
                        </span>
                        <span>{item.before}</span>
                      </div>
                    </td>

                    {/* After */}
                    <td className="py-4 px-5 font-semibold text-slate-900 bg-orange-50/30">
                      <div className="flex items-start gap-2">
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{item.after}</span>
                      </div>
                    </td>

                    {/* Improvement */}
                    <td className="py-4 px-5 font-extrabold text-orange-600">
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">
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