// src/components/erp/erp-comparison.tsx
"use client";

import React from "react";

const comparisonRows = [
  {
    feature: "Data Management",
    before: "Siloed spreadsheets, disconnected databases, and high risk of human data entry errors.",
    after: "Single source of truth with real-time automated data synchronization across all departments.",
  },
  {
    feature: "Inventory Visibility",
    before: "Manual stock counts, frequent stockouts, and delayed fulfillment cycles.",
    after: "Live barcode tracking, automated stock alerts, and multi-warehouse route optimization.",
  },
  {
    feature: "Financial Reporting",
    before: "Takes weeks to reconcile monthly ledgers, close accounts, and generate tax reports.",
    after: "Instantaneous automated general ledger, real-time analytics, and click-of-a-button compliance.",
  },
  {
    feature: "Customer Response Time",
    before: "Slow query handling because sales teams lack visibility into inventory and shipping status.",
    after: "Instant access to order history, live fulfillment tracking, and integrated CRM workflows.",
  },
  {
    feature: "Scalability & Growth",
    before: "Systems crash or slow down significantly as transaction volumes and user counts increase.",
    after: "Cloud-ready microservices architecture built to seamlessly scale with enterprise expansion.",
  },
];

export function ERPComparison() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200 mb-3">
            Operational Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Transform Your Operations: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Before vs. After ERP</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See how upgrading from fragmented spreadsheets and disconnected tools to an integrated enterprise system radically optimizes performance.
          </p>
        </div>

        {/* Comparison Table / Cards Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          
          {/* Table Header for Desktop */}
          <div className="hidden md:grid md:grid-cols-3 bg-slate-900 text-white p-6 font-bold text-sm tracking-wide">
            <div>Core Operational Area</div>
            <div className="text-rose-400">Before Integrated ERP (Legacy/Spreadsheets)</div>
            <div className="text-emerald-400">After HAPA Integrated ERP</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 items-center hover:bg-slate-100/60 transition-colors">
                
                {/* Feature Title */}
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="md:hidden text-xs font-mono text-purple-600 uppercase">Area:</span>
                  {row.feature}
                </div>

                {/* Before ERP */}
                <div className="text-xs sm:text-sm text-slate-600 bg-rose-50/60 border border-rose-100 rounded-xl p-4 md:bg-transparent md:border-none md:p-0">
                  <span className="md:hidden block text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1">Before ERP</span>
                  {row.before}
                </div>

                {/* After ERP */}
                <div className="text-xs sm:text-sm text-slate-700 font-medium bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 md:bg-transparent md:border-none md:p-0">
                  <span className="md:hidden block text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">After ERP</span>
                  {row.after}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Ready to eliminate operational bottlenecks? <a href="/contact" className="font-semibold text-purple-600 hover:underline">Schedule an audit with our enterprise specialists today.</a>
          </p>
        </div>

      </div>
    </section>
  );
}