// src/components/call-center/call-center-process.tsx
"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Customer Contact",
    description: "Customer reaches out via Phone Call, WhatsApp, Live Chat, or Email.",
  },
  {
    number: "02",
    title: "AI & Smart Routing",
    description: "Swahili/English AI Agent resolves simple FAQs or routes complex queries intelligently.",
  },
  {
    number: "03",
    title: "Unified Agent Resolution",
    description: "Agents view caller history, CRM details, and assist the customer seamlessly.",
  },
  {
    number: "04",
    title: "Analytics & Ticket Closed",
    description: "The interaction is logged, SLA metrics are tracked, and actionable insights are generated.",
  },
];

export const CallCenterProcess = () => {
  return (
    <section className="bg-slate-50 py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
          
          {/* 1. Maandishi juu */}
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
            Seamless Workflow
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How Our Call Center <span className="text-blue-600">System Works</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl">
            A simple 4-step process designed to optimize response times and agent productivity.
          </p>

          {/* 2. Picha Kubwa Zaidi (Extra Large Image Display) */}
          <div className="mt-8 relative w-full max-w-2xl h-72 sm:h-96 md:h-[420px] flex items-center justify-center">
            <Image
              src="/assets/c.jpg"
              alt="Call Center Workflow Diagram"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-400 hover:shadow-md transition duration-200"
            >
              <div className="text-2xl font-black text-blue-600/30 mb-2">
                {step.number}
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};