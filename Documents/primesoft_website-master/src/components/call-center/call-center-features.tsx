// src/components/call-center/call-center-features.tsx
"use client";

import React from "react";

const features = [
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Omnichannel Support",
    description: "Manage Voice Calls, WhatsApp, SMS, Email, and Live Chat from a unified agent dashboard.",
  },
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <path d="M20 2l-2 4 4 2" />
      </svg>
    ),
    title: "Swahili & English AI Agents",
    description: "Intelligent IVR with local Natural Language Processing that handles regional accents.",
  },
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Smart Agent Workspace",
    description: "Equip agents with complete customer histories, interaction logs, and auto-profiles.",
  },
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Real-Time Call Analytics",
    description: "Track SLA metrics, Average Handling Time (AHT), and recordings for quality assurance.",
  },
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Automated Helpdesk",
    description: "Automatically turn complex queries into tickets and route them to department heads.",
  },
  {
    icon: (
      <svg className="size-5 text-blue-600 transition-colors duration-200 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Enterprise Security & SLA",
    description: "Encrypted communications, 99.9% uptime guarantee, and compliant cloud hosting.",
  },
];

export const CallCenterFeatures = () => {
  return (
    <section className="bg-white py-14 text-slate-900 border-t border-slate-200">
      {/* Upana umerudishwa kidogo kuwa max-w-5xl */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
            Core Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Everything You Need for a <span className="text-blue-600">Modern Call Center</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Engineered with modern AI to solve customer issues faster and enhance loyalty.
          </p>
        </div>

        {/* Medium-Sized Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {/* Icon Container */}
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100/90 text-blue-600 transition-colors duration-200 group-hover:bg-blue-200 group-hover:text-blue-700">
                  {feature.icon}
                </div>

                <div>
                  {/* Feature Title */}
                  <h4 className="text-sm font-bold text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
                    {feature.title}
                  </h4>
                  {/* Feature Description */}
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};