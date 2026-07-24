"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WhyUsHero from "@/components/why-us/why-us-hero";
import DifferenceSection from "@/components/why-us/difference-section";
import StatsSection from "@/components/why-us/stats-section";
import TrustTimelineSection from "@/components/why-us/trust-timeline-section";
import CoreValuesSection from "@/components/why-us/core-values-section";
import TrustChecklistSection from "@/components/why-us/trust-checklist-section";
import TestimonialsSection from "@/components/why-us/testimonials-section";
import TechStackSection from "@/components/why-us/tech-stack-section";
import CommitmentSection from "@/components/why-us/commitment-section";
import FinalCtaSection from "@/components/why-us/final-cta-section";
import SiteFooter from "@/components/site-footer";
import WhatsAppPopup from "@/components/whatsapp-popup";

export default function WhyUsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <WhyUsHero />
      <DifferenceSection />
      <StatsSection />
      <TrustTimelineSection />
      <CoreValuesSection />
      <TrustChecklistSection />
      <TestimonialsSection />
      <TechStackSection />
      <CommitmentSection />
      <FinalCtaSection />
      <SiteFooter />
      <WhatsAppPopup />
      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_14px_28px_rgba(15,23,42,0.22)]"
          >
            <UpArrowIcon />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function UpArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-5"
      aria-hidden="true"
    >
      <path d="m6 14 6-6 6 6" />
    </svg>
  );
}
