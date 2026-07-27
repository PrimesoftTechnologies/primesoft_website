// src/components/business-automation/business-automation-process.tsx
"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Process Discovery & Mapping",
    description: "We audit your manual workflows, identify bottlenecks, and map out automated rules.",
  },
  {
    number: "02",
    title: "Integration & RPA Setup",
    description: "Connecting your legacy databases, ERPs, and APIs with custom automation scripts.",
  },
  {
    number: "03",
    title: "User Acceptance & Testing",
    description: "Testing automated approval hierarchies, document extraction, and alert notifications.",
  },
  {
    number: "04",
    title: "Go-Live & Continuous Optimization",
    description: "Full system deployment with real-time analytics monitoring and SLA enforcement.",
  },
];

export const BusinessAutomationProcess = () => {
  return (
    <section className="bg-slate-50 py-14 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
          
          {/* 1. Header Text */}
          <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Seamless Implementation
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How Our Automation <span className="text-orange-600">Engine Works</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl">
            A simple 4-step deployment framework engineered to digitize manual enterprise processes.
          </p>

          {/* 2. Image Section - Center & Extra Large */}
          <div className="mt-8 relative w-full max-w-2xl h-72 sm:h-96 md:h-[420px] flex items-center justify-center">
            <Image
              src="/assets/bs.png" // Badilisha jina la picha hapa ukiweka mpya
              alt="Business Automation Workflow Diagram"
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
              className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-orange-400 hover:shadow-md transition duration-200"
            >
              <div className="text-2xl font-black text-orange-600/30 mb-2">
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