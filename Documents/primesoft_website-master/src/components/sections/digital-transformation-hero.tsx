// src/components/sections/digital-transformation-hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function DigitalTransformationHero() {
  return (
    <section className="relative pt-36 pb-24 bg-[#0B132B] text-white overflow-hidden border-b border-slate-800">
      {/* Background Glows & Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-6 shadow-inner">
            <span className="size-2 rounded-full bg-purple-400 animate-pulse" />
            Strategic Digital Evolution
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Transform Your Enterprise for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
              Digital Era
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Future-proof your business operations, modernize legacy infrastructures, and build a culture of digital innovation to accelerate growth and customer satisfaction.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Transformation
            </Link>
            <a
              href="#transformation-features"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200"
            >
              Explore Framework
            </a>
          </div>
        </div>

        {/* HERO IMAGE CONTAINER */}
        <div className="relative mt-10 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/40 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9]">
              <Image
                src="/assets/odo.png"
                alt="Digital Transformation Dashboard"
                fill
                priority
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Metric Badge 1 - Left */}
          <div className="hidden sm:flex absolute -left-6 bottom-12 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl items-center gap-3">
            <div className="size-10 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold text-lg">
              100%
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Legacy Modernization</div>
              <div className="text-lg font-extrabold text-white">Seamless Transition</div>
            </div>
          </div>

          {/* Floating Metric Badge 2 - Right */}
          <div className="hidden sm:flex absolute -right-6 top-12 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl items-center gap-3">
            <div className="size-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-indigo-400 fill-indigo-400/20"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Efficiency Boost</div>
              <div className="text-lg font-extrabold text-white">4x Faster Agility</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}