// src/components/call-center/call-center-metrics.tsx
"use client";

import React from "react";

export const CallCenterMetrics = () => {
  return (
    <section className="bg-white py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
            Measurable Impact & ROI
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Data-Driven Results for Your <span className="text-blue-600">Call Center</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            See how upgrading to our AI-powered support infrastructure reduces costs and boosts efficiency.
          </p>
        </div>

        {/* 2x2 Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Time Savings */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-6">Time Savings per Interaction</h4>
            
            <div className="space-y-5">
              {/* Metric 1 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Call Resolution Time</span>
                  <span>15 min → <strong className="text-blue-600">3.5 min</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "25%" }}></div>
                  <div className="bg-blue-600 h-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-blue-600 mt-1 block">76% faster resolution</span>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Customer Queue Wait Time</span>
                  <span>10 min → <strong className="text-blue-600">30 sec</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "10%" }}></div>
                  <div className="bg-blue-600 h-full" style={{ width: "90%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-blue-600 mt-1 block">90% faster response</span>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Ticket Escalation & Routing</span>
                  <span>8 min → <strong className="text-blue-600">Instant</strong></span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full" style={{ width: "5%" }}></div>
                  <div className="bg-blue-600 h-full" style={{ width: "95%" }}></div>
                </div>
                <span className="text-[10px] font-bold text-blue-600 mt-1 block">95% automated routing</span>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-slate-400"></span>
                <span>Traditional Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-blue-600"></span>
                <span>AI Call Center</span>
              </div>
            </div>
          </div>

          {/* Card 2: ROI Timeline */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm flex flex-col justify-between">
            <h4 className="text-sm font-bold text-slate-800 mb-4">ROI Growth Timeline</h4>

            {/* Simulated Chart Visual */}
            <div className="relative h-44 w-full flex items-end justify-between pt-8 pb-2 border-b border-slate-300">
              {/* Graph Curve Line SVG */}
              <svg className="absolute inset-0 size-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path
                  d="M 0 85 Q 30 80, 50 60 T 100 10"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                />
                <path
                  d="M 0 85 Q 30 80, 50 60 T 100 10 L 100 100 L 0 100 Z"
                  fill="url(#gradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Milestones */}
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-slate-400">0mo</span>
                <span className="text-[10px] text-slate-500">Setup</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-slate-500">1mo</span>
                <span className="text-[10px] text-slate-500">Go-Live</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-blue-600">3mo</span>
                <span className="text-[10px] text-blue-600 font-semibold">Break-Even</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-blue-600">6mo</span>
                <span className="text-[10px] font-bold text-blue-600">180% ROI</span>
              </div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] font-bold text-blue-700">12mo</span>
                <span className="text-[10px] font-bold text-blue-700">320% ROI</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 text-center leading-relaxed">
              Achieve total cost recovery within 90 days through automated voice deflection and higher agent productivity.
            </p>
          </div>

          {/* Card 3: Cost Comparison vs Legacy Support */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm flex flex-col justify-between">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Annual Cost Comparison</h4>

            <div className="flex items-center gap-6 my-2">
              {/* Donut Chart Simulation */}
              <div className="relative flex size-28 shrink-0 items-center justify-center rounded-full border-[10px] border-emerald-500 border-t-slate-700">
                <div className="text-center">
                  <span className="block text-base font-black text-emerald-600">65%</span>
                  <span className="block text-[9px] font-semibold text-slate-400 uppercase tracking-tighter">Savings</span>
                </div>
              </div>

              {/* Cost Rows */}
              <div className="w-full space-y-2">
                <div className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Legacy Call Center</span>
                  <span className="text-xs font-bold text-slate-700">$120,000/yr</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="text-xs text-blue-700 font-medium">AI Call Center</span>
                  <span className="text-xs font-bold text-blue-700">$42,000/yr</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex justify-between items-center text-emerald-800">
              <span className="text-xs font-semibold">Net Annual Savings</span>
              <span className="text-sm font-extrabold">$78,000 / year</span>
            </div>
          </div>

          {/* Card 4: 14-Day Rapid Deployment Roadmap */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-4">14-Day Deployment Roadmap</h4>

            <div className="relative border-l-2 border-blue-500/30 pl-4 space-y-4">
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-blue-600">Day 1 - 3</span>
                <h5 className="text-xs font-bold text-slate-800">Audit & Knowledge Base</h5>
                <p className="text-[11px] text-slate-500">IVR mapping, Swahili/English script training & system audit.</p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-blue-600">Day 4 - 8</span>
                <h5 className="text-xs font-bold text-slate-800">SIP & Telephony Integration</h5>
                <p className="text-[11px] text-slate-500">Connecting phone trunks, WhatsApp API, and CRM syncing.</p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-blue-600">Day 9 - 12</span>
                <h5 className="text-xs font-bold text-slate-800">Agent Training & Simulation</h5>
                <p className="text-[11px] text-slate-500">Live agent dashboard walkthroughs & load testing.</p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <span className="absolute -left-[21px] top-0 size-2.5 rounded-full bg-emerald-500 ring-4 ring-white" />
                <span className="text-[10px] font-bold uppercase text-emerald-600">Day 13 - 14</span>
                <h5 className="text-xs font-bold text-slate-800">Go-Live & Hypercare Support</h5>
                <p className="text-[11px] text-slate-500">Official launch with 24/7 technical monitoring.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};