// src/app/services/erp/page.tsx
import { ERPHero } from "@/components/erp/erp-hero";
import { ERPFeatures } from "@/components/erp/erp-features";
import { ERPArchitecture } from "@/components/erp/erp-architecture";
import { ERPComparison } from "@/components/erp/erp-comparison";

export const metadata = {
  title: "ERP & Business Systems | PrimeSoft",
  description: "Centralized enterprise resource planning, Odoo implementations, and automated operations.",
};

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-[#0B132B] text-white flex flex-col justify-between">
      {/* 1. ERP Hero */}
      <ERPHero />

      {/* 2. Core Modules Grid with Video (public/assets/video.mp4) */}
      <ERPFeatures />

      {/* 3. ERP Technical Architecture & Ecosystem */}
      <ERPArchitecture />

      {/* 4. Operational Comparison (Before vs. After ERP) */}
      <ERPComparison />

    </main>
  );
}