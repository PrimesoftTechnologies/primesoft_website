// src/components/call-center/call-center-hero.tsx
"use client";

import React from "react";
import Link from "next/link";

export const CallCenterHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a111e] px-4 pt-28 pb-10 sm:pt-32 sm:pb-12 text-white">
      {/* Background Grid Pattern & Blue Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[11px] font-medium text-blue-400 backdrop-blur-md mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AI-Powered Call Center & Support Partner
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
          Call Center & Support for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Modern Enterprises
          </span>
        </h1>

        {/* Sub-Headline */}
        <p className="mt-3 text-xs sm:text-base md:text-lg font-semibold text-slate-200">
          Smart Omnichannel Routing, AI Voice Agents & Real-Time CRM Analytics
        </p>

        {/* Paragraph Description */}
        <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transform your customer experience across Tanzania and East Africa with automated voice response (IVR), 24/7 intelligent AI chatbots, and seamless agent ticketing integration.
        </p>

        {/* Metrics / Key Stats Grid */}
        <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl mx-auto border-t border-slate-800/80 pt-4">
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-blue-400">
              70%+
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Call Resolution Rate
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-blue-400">
              24/7
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Uptime & AI Response
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black text-blue-400">
              3x
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium">
              Faster Support Speed
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-blue-500 hover:-translate-y-0.5 cursor-pointer"
          >
            Deploy Call Center Now
          </Link>
          <button className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-900/80 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer">
            Book Live AI Demo
          </button>
        </div>

        {/* Video `call.mp4` Chini ya Buttons */}
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-500/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-2xl"
          >
            <source src="/assets/c.mp4" type="video/mp4" />
            Browser yako haisawazishi kucheza video hii.
          </video>
        </div>

      </div>
    </section>
  );
};