// src/components/business-automation/business-automation-metrics.tsx
"use client";

import React from "react";

export const BusinessAutomationMetrics = () => {
  return (
    <section className="bg-white py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Measurable Impact & Cost Savings
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Proven ROI for <span className="text-orange-600">Enterprise Workflows</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            See how replacing manual paperwork with automated pipelines slashes operational expenses.
          </p>
        </div>

        {/* 2x2 Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Processing Speed Gains */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-6">Workflow Processing Time</h4>
            
            <div className="space-y-5">
              {/* Metric 1 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Document & Invoice Approval</span>
                  <span>48 hrs → <strong className="text-orange-600">10 mins</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "10%" }}></div>
                  <div className="bg-orange-600 h-full" style={{ width: "90%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-orange-600 mt-1 block">96% faster approval time</span>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Data Entry & Verification</span>
                  <span>15 hrs/wk → <strong className="text-orange-600">Instant</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "5%" }}></div>
                  <div className="bg-orange-600 h-full" style={{ width: "95%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-orange-600 mt-1 block">95% manual effort reduced</span>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Audit & Compliance Reporting</span>
                  <span>5 days → <strong className="text-orange-600">Real-time</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "15%" }}></div>
                  <div className="bg-orange-600 h-full" style={{ width: "85%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-orange-600 mt-1 block">100% automated audit trail</span>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-slate-400"></span>
                <span>Manual Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-orange-600"></span>
                <span>Automated Workflow</span>
              </div>
            </div>
          </div>

          {/* Card 2: ROI Timeline */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm flex flex-col justify-between">
            <h4 className="text-sm font-bold text-slate-800 mb-4">ROI Growth Timeline</h4>

            {/* Simulated Chart Visual */}
            <div className="relative h-44 w-full flex items-end justify-between pt-8 pb-2 border-b border-slate-300">
              <svg className="absolute inset-0 size-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path
                  d="M 0 85 Q 30 80, 50 55 T 100 10"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="3"
                />
                <path
                  d="M 0 85 Q 30 80, 50 55 T 100 10 L 100 100 L 0 100 Z"
                  fill="url(#orange-gradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="orange-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Milestones */}
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-slate-400">0mo</span>
                <span className="text-[10px] text-slate-500">Audit</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-slate-500">1mo</span>
                <span className="text-[10px] text-slate-500">Go-Live</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-orange-600">2mo</span>
                <span className="text-[10px] text-orange-600 font-semibold">Break-Even</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-orange-600">6mo</span>
                <span className="text-[10px] font-bold text-orange-600">220% ROI</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-orange-700">12mo</span>
                <span className="text-[10px] font-bold text-orange-700">410% ROI</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 text-center leading-relaxed">
              Recover automation investment within 60 days through labor efficiency and error reduction.
            </p>
          </div>

          {/* Card 3: Operational Cost Comparison */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm flex flex-col justify-between">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Annual Cost Reduction</h4>

            <div className="flex items-center gap-6 my-2">
              <div className="relative flex size-28 shrink-0 items-center justify-center rounded-full border-[10px] border-amber-500 border-t-slate-700">
                <div className="text-center">
                  <span className="block text-base font-black text-amber-600">72%</span>
                  <span className="block text-[9px] font-semibold text-slate-400 uppercase tracking-tighter">Savings</span>
                </div>
              </div>

              <div className="w-full space-y-2">
                <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Manual Process Cost</span>
                  <span className="text-xs font-bold text-slate-700">$95,000/yr</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50 border border-orange-200">
                  <span className="text-xs text-orange-700 font-medium">Automated Cost</span>
                  <span className="text-xs font-bold text-orange-700">$26,600/yr</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 flex justify-between items-center text-amber-900">
              <span className="text-xs font-semibold">Net Annual Savings</span>
              <span className="text-sm font-extrabold">$68,400 / year</span>
            </div>
          </div>

          {/* Card 4: Implementation Roadmap */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Deployment Roadmap</h4>

            <div className="relative border-l-2 border-orange-500/30 pl-4 space-y-4">
              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-orange-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-orange-600">Week 1</span>
                <h5 className="text-xs font-bold text-slate-800">Process Audit & Specification</h5>
                <p className="text-[11px] text-slate-500">Mapping current workflows and business rules.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-orange-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-orange-600">Week 2 - 3</span>
                <h5 className="text-xs font-bold text-slate-800">RPA & API Integration</h5>
                <p className="text-[11px] text-slate-500">Connecting databases, ERP, and setting triggers.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-orange-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-orange-600">Week 4</span>
                <h5 className="text-xs font-bold text-slate-800">Testing & Team Onboarding</h5>
                <p className="text-[11px] text-slate-500">Simulating process flows & user permissions.</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-emerald-500 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-emerald-600">Week 5</span>
                <h5 className="text-xs font-bold text-slate-800">Live Launch & SLA Monitoring</h5>
                <p className="text-[11px] text-slate-500">Full system activation with automated alerts.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};