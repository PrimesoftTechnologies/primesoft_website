// src/components/ai-solutions/ai-solutions-roadmap.tsx
import React from "react";

const roadmapSteps = [
  {
    step: "01",
    title: "Data Audit & Feasibility",
    description: "Assessment of existing infrastructure, data readiness, and defining core enterprise AI use cases.",
    timeline: "Weeks 1 - 2",
  },
  {
    step: "02",
    title: "Model Architecture & Training",
    description: "Custom fine-tuning of LLMs, neural networks, and Swahili NLP agents using clean company data.",
    timeline: "Weeks 3 - 6",
  },
  {
    step: "03",
    title: "Integration & Testing",
    description: "Seamless deployment into existing ERP/CRM systems with zero downtime and rigorous validation.",
    timeline: "Weeks 7 - 9",
  },
  {
    step: "04",
    title: "Continuous Machine Learning",
    description: "Real-time monitoring, autonomous feedback loops, and automated model re-training.",
    timeline: "Ongoing",
  },
];

const impactMetrics = [
  { value: "10x", label: "Faster Data Processing" },
  { value: "99.2%", label: "Model Accuracy Threshold" },
  { value: "65%", label: "Operational Cost Reduction" },
  { value: "< 50ms", label: "Real-Time Inference Speed" },
];

export function AISolutionsRoadmap() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Background Subtle Green Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4">
            Deployment Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Deploy Enterprise AI
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A structured, risk-mitigated framework designed to take enterprise AI models from raw data validation to production-scale deployment.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {roadmapSteps.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/80 border border-slate-200 hover:border-emerald-500/50 rounded-2xl p-6 relative transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-emerald-600 font-mono">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-sm">
                    {item.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-1/4 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Banner - White with Light Green Border */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Measurable Enterprise Impact
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Benchmark performance gains delivered through customized machine learning models.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}