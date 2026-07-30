// src/components/ai-solutions/ai-solutions-features.tsx
"use client";

import React from "react";

const features = [
  {
    title: "Swahili & English Natural Language Processing (NLP)",
    description: "Train LLMs to understand, analyze, and communicate seamlessly in local East African languages.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Anticipate market trends, customer churn, demand fluctuations, and inventory requirements.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Computer Vision & OCR Intelligence",
    description: "Extract text from identity cards, documents, invoices, and process real-time security video streams.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Recommendation Engines",
    description: "Personalize user experiences across your apps and web platforms with smart Machine Learning models.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Fraud Detection & Risk Management",
    description: "Identify anomalies in financial transactions and prevent fraudulent activities autonomously.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Custom LLM & Enterprise Fine-Tuning",
    description: "Fine-tune open-source models (Llama, Mistral) on your internal company data with strict privacy guarantees.",
    icon: (
      <svg className="size-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export const AISolutionsFeatures = () => {
  return (
    <section className="bg-white py-14 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1.5">
            AI Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Enterprise Grade <span className="text-emerald-600">AI & Machine Learning</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Transform raw corporate data into actionable intelligence with state-of-the-art AI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition hover:border-emerald-400 hover:bg-white hover:shadow-md"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 mb-3">
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