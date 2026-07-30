// src/components/erp/erp-architecture.tsx
"use client";

import React from "react";
import Image from "next/image";

const architectureLayers = [
  {
    step: "01",
    title: "Cloud & On-Premise Infrastructure",
    description:
      "Flexible deployment options. Run your ERP securely on AWS, Google Cloud, Azure, or private on-premise dedicated servers with automated encrypted backups.",
    icon: (
      <svg className="size-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M3 15a4 4 0 014-4h10a4 4 0 014 4M3 15V9a4 4 0 014-4h10a4 4 0 014 4v6" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Modular Core & Business Logic",
    description:
      "Powered by robust microservices and modular APIs. Each department (Finance, HR, Supply Chain) operates independently while synchronizing core data in real time.",
    icon: (
      <svg className="size-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Secure REST APIs & Third-Party Integration",
    description:
      "Connect seamlessly with payment gateways (Stripe, Mobile Money), tax authority systems, e-commerce stores (Shopify, WooCommerce), and legacy banking APIs.",
    icon: (
      <svg className="size-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Role-Based Access & Advanced Security",
    description:
      "Enterprise-grade security featuring role-based access control (RBAC), end-to-end data encryption at rest and in transit, and immutable audit logs.",
    icon: (
      <svg className="size-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function ERPArchitecture() {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200 mb-3">
            Technical Architecture & Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Scale, Security, & Speed</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Explore the high-performance framework powering uninterrupted operations across your enterprise.
          </p>
        </div>

        {/* Featured Odoo Image Showcase in the Center */}
        <div className="mb-14 relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-2xl group max-w-5xl mx-auto">
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px]">
            <Image
              src="/assets/featured-odoo.jpg"
              alt="Odoo Enterprise Architecture Showcase"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-600/80 text-white mb-2 backdrop-blur-sm">
                Enterprise Dashboard Preview
              </span>
              <h3 className="text-lg sm:text-xl font-bold">Unified Odoo & Custom ERP Core Framework</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Real-time data synchronization across all business units ensuring maximum throughput and minimal system latency.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center text-xs font-semibold text-purple-300 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                Secure & Scalable
              </span>
            </div>
          </div>
        </div>

        {/* Architecture Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureLayers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                    {layer.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    {layer.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{layer.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{layer.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-purple-700">
                <span>Learn specifications</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}