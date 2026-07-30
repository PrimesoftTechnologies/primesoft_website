// src/app/services/custom-software/page.tsx
import { CustomSoftwareHero } from "@/components/sections/custom-software-hero";
import { CustomSoftwareFeatures } from "@/components/sections/custom-software-features";
import { CustomSoftwareProcess } from "@/components/sections/custom-software-process";
import { CustomSoftwareMetrics } from "@/components/sections/custom-software-metrics";

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-[#070D1F] text-slate-300 flex flex-col justify-between">
      <CustomSoftwareHero />
      <CustomSoftwareFeatures />
      <CustomSoftwareProcess />
      
      {/* Metrics & Architecture Overview Section */}
      <CustomSoftwareMetrics />

    </main>
  );
}