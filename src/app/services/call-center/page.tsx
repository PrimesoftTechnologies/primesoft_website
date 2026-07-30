// src/app/services/call-center/page.tsx
import { CallCenterHero } from "@/components/call-center/call-center-hero";
import { CallCenterFeatures } from "@/components/call-center/call-center-features";
import { CallCenterProcess } from "@/components/call-center/call-center-process";
import { CallCenterMetrics } from "@/components/call-center/call-center-metrics";

export default function CallCenterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <CallCenterHero />
      <CallCenterFeatures />
      <CallCenterProcess />
      
      {/* 2x2 Dashboard Metrics Section */}
      <CallCenterMetrics />

    </main>
  );
}