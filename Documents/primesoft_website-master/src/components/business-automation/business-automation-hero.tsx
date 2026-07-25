// src/components/business-automation/business-automation-hero.tsx
"use client";

import React from "react";
import Link from "next/link";

export const BusinessAutomationHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a111e] px-4 pt-28 pb-10 sm:pt-32 sm:pb-12 text-white">
      {/* Background Grid Pattern & Orange Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Top Pill Badge - Orange */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-medium text-orange-400 backdrop-blur-md mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Next-Gen Business Process Automation
        </div>

        {/* Main Headline with Orange/Amber Gradient */}
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
          Intelligent Workflow & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Business Automation
          </span>
        </h1>

        {/* Sub-Headline */}
        <p className="mt-3 text-xs sm:text-base md:text-lg font-semibold text-slate-200">
          Eliminate Manual Tasks, Accelerate Approvals & Scale Enterprise Operations
        </p>

        {/* Paragraph Description */}
        <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Empower your organization in Tanzania and East Africa with end-to-end process automation. Connect legacy systems, automate document processing, and optimize daily operations seamlessly.
        </p>

        {/* Metrics / Key Stats Grid - Orange Text */}
        <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl mx-auto border-t border-slate-800/80 pt-4">
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-orange-400">
              85%+
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Manual Tasks Reduced
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-orange-400">
              10x
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Faster Workflow Execution
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-orange-400">
              100%
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Accuracy & Audit Compliance
            </div>
          </div>
        </div>

        {/* CTA Buttons - Orange Theme */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-full bg-orange-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:bg-orange-500 hover:-translate-y-0.5 cursor-pointer"
          >
            Automate Your Business
          </Link>
          <button className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-900/80 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer">
            Schedule Automation Demo
          </button>
        </div>

        {/* Hero Video / Dashboard Showcase Container */}
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-orange-500/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-2xl"
          >
            <source src="/assets/automation.mp4" type="video/mp4" />
            Browser yako haisawazishi kucheza video hii.
          </video>
        </div>

      </div>
    </section>
  );
};