// src/app/services/ai-solutions/page.tsx
import { AISolutionsHero } from "@/components/ai-solutions/ai-solutions-hero";
import { AISolutionsFeatures } from "@/components/ai-solutions/ai-solutions-features";
import { AISolutionsComparison } from "@/components/ai-solutions/ai-solutions-comparison";
import { AISolutionsRoadmap } from "@/components/ai-solutions/ai-solutions-roadmap"; // <-- Import mpya

export const metadata = {
  title: "AI & Machine Learning Solutions | PrimeSoft",
  description: "Predictive analytics, custom LLMs, NLP Swahili voice agents, and enterprise AI models.",
};

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      {/* 1. Hero */}
      <AISolutionsHero />

      {/* 2. Features */}
      <AISolutionsFeatures />

      {/* 3. Operational Transformation (Before & After Table) */}
      <AISolutionsComparison />

      {/* 4. Deployment Roadmap & Impact Metrics (BILA CTA) */}
      <AISolutionsRoadmap />

    </main>
  );
}