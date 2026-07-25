// src/components/erp/erp-features.tsx
"use client";

import React from "react";

const erpModules = [
  {
    title: "Financials & Accounting",
    description:
      "Automate general ledger, multi-currency invoicing, tax reporting, and real-time financial analytics.",
    icon: (
      <svg className="size-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 12v-2m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Inventory & Warehouse Management",
    description:
      "Track stock levels, barcode scanning, multi-warehouse routing, and automated replenishment orders.",
    icon: (
      <svg className="size-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Human Resources & Payroll",
    description:
      "Manage employee records, automated payroll processing, leave management, and performance tracking.",
    icon: (
      <svg className="size-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain & Procurement",
    description:
      "Optimize vendor management, purchase orders, automated RFQs, and logistics tracking.",
    icon: (
      <svg className="size-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Track leads, pipeline stages, automated email workflows, and sales team productivity metrics.",
    icon: (
      <svg className="size-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function ERPFeatures() {
  return (
    <section id="erp-modules" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200 mb-3">
            Core Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Enterprise Modules</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Modular, cloud-ready ERP tools tailored to seamlessly power every department of your enterprise.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Column: First 2 Modules */}
          <div className="space-y-6 flex flex-col justify-between">
            {erpModules.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-purple-300 hover:bg-white hover:shadow-md transition-all duration-200 flex-1 flex flex-col justify-center"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Expanded Column: Video Feature Showcase with GRADIENT BACKGROUND */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#0B132B] via-[#161f3f] to-[#2d1b4e] border border-purple-900/40 rounded-3xl p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden text-white">
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/9] shadow-inner">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/assets/video.mp4" type="video/mp4" />
                Browser yako haisawazishi kucheza video hii.
              </video>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1">
                <span className="size-2 rounded-full bg-purple-400 animate-ping" />
                Live Workflow Demonstration
              </div>
              <h3 className="text-base font-bold text-white">Integrated Business Automation</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Watch how transactions seamlessly transition from sales orders to inventory deduction and accounting logs automatically.
              </p>
            </div>
          </div>

          {/* Right Column: Remaining Modules */}
          <div className="space-y-6 flex flex-col justify-between">
            {erpModules.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-purple-300 hover:bg-white hover:shadow-md transition-all duration-200 flex-1 flex flex-col justify-center"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Row for 5th Module (CRM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-purple-300 hover:bg-white hover:shadow-md transition-all duration-200">
            <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 mb-3">
              {erpModules[4].icon}
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">{erpModules[4].title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{erpModules[4].description}</p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
                Custom Enterprise Integration
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                Need specialized modules for manufacturing, healthcare, or logistics? We build custom Odoo & ERP extensions tailored precisely to your operational workflow.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 ml-4 rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-purple-700 transition"
            >
              Request Custom Build
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}