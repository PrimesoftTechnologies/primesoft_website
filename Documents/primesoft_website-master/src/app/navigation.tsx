// src/app/navigation.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/constants/navigation-items";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/icons";

// ACTUAL SVG ICONS - NICE DROPDOWN MENU
const Icons = {
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <path d="M4 12a8 8 0 1 1 16 0" />
      <rect x="3" y="11" width="4" height="7" rx="2" />
      <rect x="17" y="11" width="4" height="7" rx="2" />
      <path d="M19 18a3 3 0 0 1-3 3h-2" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6v6l4 2" />
      <path d="M20 2l-2 4 4 2" />
    </svg>
  ),
  erp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h6" />
      <path d="M9 17h4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13 3l-2 18" />
    </svg>
  ),
  transform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
      <path d="M21 12a9 9 0 1 1-9-9" />
      <path d="M12 3v6l3-3-3-3z" />
      <path d="M6 16l1.5-1.5" />
    </svg>
  ),
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 24;
      if (isNearTop) setIsVisible(true);
      else if (currentScrollY < lastScrollY) setIsVisible(true);
      else if (!isOpen) setIsVisible(false);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-transform duration-300 sm:px-6 lg:px-10 ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <div className="mx-auto">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <div className="py-2">
              <Image
                src="/images/primesoft-logo-transparent.png"
                alt="Primesoft Logo"
                width={100}
                height={40}
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/80 text-white backdrop-blur-md transition hover:bg-slate-700/80"
            >
              <MenuIcon />
            </button>
          </div>

          <div className="hidden items-center justify-between gap-4 lg:flex">
            <div>
              <Image
                src="/images/primesoft-logo-transparent.png"
                alt="Primesoft Logo"
                width={100}
                height={40}
              />
            </div>

            <div className="my-4 flex h-fit w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-slate-700/50 bg-slate-800/80 px-2 py-1.5 backdrop-blur-md">
              {navigationItems.map((nav) => (
                <div key={nav.path} className="relative group">
                  {nav.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(nav.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`rounded-full px-3 py-2 text-sm text-white transition ${
                          pathname.startsWith(nav.path) || openDropdown === nav.label
                            ? "bg-primary"
                            : "hover:bg-slate-700/50"
                        }`}
                      >
                        {nav.label} <span className="ml-1 text-[10px]">▾</span>
                      </button>
                      {openDropdown === nav.label && (
                        <div className="absolute left-0 mt-2 w-80 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-md py-2 shadow-2xl">
                          {nav.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-primary/20 hover:text-white transition group"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="text-secondary-400 group-hover:text-secondary-300 transition">
                                {Icons[item.icon as keyof typeof Icons]}
                              </span>
                              <div className="flex flex-col">
                                <span className="font-medium">{item.label}</span>
                                <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition">
                                  {item.label === "Call Center & Customer Support" && "AI-powered communication"}
                                  {item.label === "Business Automation" && "Automate manual processes"}
                                  {item.label === "AI & Machine Learning" && "Intelligent systems powered by your data"}
                                  {item.label === "ERP & Business Systems" && "Centralized platforms for operations"}
                                  {item.label === "Custom Software Development" && "Tailored applications for your workflow"}
                                  {item.label === "Digital Transformation" && "Modernize with smart technology"}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={nav.path}
                      className={`rounded-full px-3 py-2 text-sm text-white transition ${
                        pathname === nav.path
                          ? "bg-primary"
                          : "hover:bg-slate-700/50"
                      }`}
                    >
                      {nav.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button className="my-6 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600">
              Get Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-55 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-[70%] flex flex-col bg-[#0f172b] text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-700/70 px-6 py-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-700/50"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid gap-2 px-6 py-6 overflow-y-auto">
          {navigationItems.map((nav) => (
            <div key={nav.path}>
              {nav.dropdown ? (
                <div className="space-y-1">
                  <div className="block rounded-xl px-4 py-3 text-base font-light text-slate-300">
                    {nav.label}
                  </div>
                  <div className="ml-4 space-y-1 border-l-2 border-slate-700/50 pl-4">
                    {nav.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-slate-400 hover:bg-primary/20 hover:text-white transition"
                      >
                        <span className="text-secondary-400">
                          {Icons[item.icon as keyof typeof Icons]}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-[9px] text-slate-500">
                            {item.label === "Call Center & Customer Support" && "AI-powered communication"}
                            {item.label === "Business Automation" && "Automate manual processes"}
                            {item.label === "AI & Machine Learning" && "Intelligent systems"}
                            {item.label === "ERP & Business Systems" && "Centralized platforms"}
                            {item.label === "Custom Software Development" && "Tailored applications"}
                            {item.label === "Digital Transformation" && "Modernize operations"}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={nav.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-light transition ${
                    pathname === nav.path
                      ? "bg-primary text-white"
                      : "text-slate-100 hover:bg-slate-700/50"
                  }`}
                >
                  {nav.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-slate-700/70 px-6 py-6">
          <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-white transition hover:brightness-110">
            Free Consultation
          </button>
        </div>
      </div>
    </>
  );
};