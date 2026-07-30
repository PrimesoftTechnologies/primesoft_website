// src/components/business-automation/business-automation-features.tsx
"use client";

import React from "react";

const features = [
  {
    title: "Workflow Engine",
    description: "Design and execute complex multi-step approvals, tasks, and notification triggers.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Document Processing (IDP)",
    description: "Extract data instantly from PDFs, invoices, contracts, and national IDs using OCR.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "System Integration & API Gateway",
    description: "Connect legacy ERPs, CRMs, banks, and TRA EFD systems into a unified automated pipeline.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "Deploy AI bots to handle repetitive data entry and back-office administrative tasks.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Automated Notifications & SLA",
    description: "Instant SMS, Email, and WhatsApp alerts for pending task approvals and SLA bottlenecks.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Compliance & Executive Dashboard",
    description: "Real-time visibility into business operations, bottleneck tracking, and automated reporting.",
    icon: (
      <svg className="size-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export const BusinessAutomationFeatures = () => {
  return (
    <section className="bg-white py-14 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Core Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Engineered for <span className="text-orange-600">Enterprise Automation</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Everything you need to transform slow manual procedures into lightning-fast digital workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition hover:border-orange-400 hover:bg-white hover:shadow-md"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-orange-100 mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};