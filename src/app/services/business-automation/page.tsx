// src/app/services/business-automation/page.tsx
import { BusinessAutomationHero } from "@/components/business-automation/business-automation-hero";
import { BusinessAutomationFeatures } from "@/components/business-automation/business-automation-features";
import { BusinessAutomationProcess } from "@/components/business-automation/business-automation-process";
import { BusinessAutomationComparison } from "@/components/business-automation/business-automation-comparison";
import { BusinessAutomationMetrics } from "@/components/business-automation/business-automation-metrics";

export default function BusinessAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <BusinessAutomationHero />
      <BusinessAutomationFeatures />
      <BusinessAutomationProcess />
      
      {/* Table ya Before & After */}
      <BusinessAutomationComparison />

      <BusinessAutomationMetrics />
    </main>
  );
}