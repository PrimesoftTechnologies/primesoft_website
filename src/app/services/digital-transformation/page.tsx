// src/app/services/digital-transformation/page.tsx
import { DigitalTransformationHero } from "@/components/sections/digital-transformation-hero";
import { DigitalTransformationFeatures } from "@/components/sections/digital-transformation-features";
import { DigitalTransformationProcess } from "@/components/sections/digital-transformation-process";
import { DigitalTransformationMetrics } from "@/components/sections/digital-transformation-metrics";

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <DigitalTransformationHero />
      <DigitalTransformationFeatures />
      <DigitalTransformationProcess />

      {/* Metrics & Impact Overview Section */}
      <DigitalTransformationMetrics />
    </main>
  );
}