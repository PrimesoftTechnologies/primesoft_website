// src/app/navigation.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/constants/navigation-items";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/icons";

// SVG Icons with Dynamic Accent Colors
const Icons = {
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-blue-400">
      <path d="M4 12a8 8 0 1 1 16 0" />
      <rect x="3" y="11" width="4" height="7" rx="2" />
      <rect x="17" y="11" width="4" height="7" rx="2" />
      <path d="M19 18a3 3 0 0 1-3 3h-2" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-orange-400">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-emerald-400">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6v6l4 2" />
      <path d="M20 2l-2 4 4 2" />
    </svg>
  ),
  erp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-purple-400">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h6" />
      <path d="M9 17h4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-cyan-400">
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13 3l-2 18" />
    </svg>
  ),
  transform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-amber-400">
      <path d="M21 12a9 9 0 1 1-9-9" />
      <path d="M12 3v6l3-3-3-3z" />
      <path d="M6 16l1.5-1.5" />
    </svg>
  ),
};

// Custom Hover Styles per Item Based on Theme Color
const getItemStyle = (icon: string) => {
  switch (icon) {
    case "automation":
      return {
        hoverBg: "hover:bg-orange-500/15",
        hoverText: "group-hover:text-orange-400",
        activeIconBg: "group-hover:bg-orange-600 group-hover:text-white",
      };
    case "ai":
      return {
        hoverBg: "hover:bg-emerald-500/15",
        hoverText: "group-hover:text-emerald-400",
        activeIconBg: "group-hover:bg-emerald-600 group-hover:text-white",
      };
    case "erp":
      return {
        hoverBg: "hover:bg-purple-500/15",
        hoverText: "group-hover:text-purple-400",
        activeIconBg: "group-hover:bg-purple-600 group-hover:text-white",
      };
    case "code":
      return {
        hoverBg: "hover:bg-cyan-500/15",
        hoverText: "group-hover:text-cyan-400",
        activeIconBg: "group-hover:bg-cyan-600 group-hover:text-white",
      };
    case "transform":
      return {
        hoverBg: "hover:bg-amber-500/15",
        hoverText: "group-hover:text-amber-400",
        activeIconBg: "group-hover:bg-amber-600 group-hover:text-white",
      };
    default:
      return {
        hoverBg: "hover:bg-blue-600/20",
        hoverText: "group-hover:text-blue-400",
        activeIconBg: "group-hover:bg-blue-600 group-hover:text-white",
      };
  }
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

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
        className={`fixed inset-x-0 top-4 z-50 px-4 transition-transform duration-300 sm:px-6 lg:px-10 ${
          isVisible ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <Link href="/" className="py-2 cursor-pointer">
              <Image
                src="/images/primesoft-logo-transparent.png"
                alt="Primesoft Logo"
                width={100}
                height={40}
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-0 bg-[#101928]/90 text-white backdrop-blur-md transition hover:bg-slate-800 cursor-pointer shadow-lg"
            >
              <MenuIcon />
            </button>
          </div>

          {/* DESKTOP HEADER WITH BLUE PILL NAVIGATION */}
          <div className="hidden items-center justify-between gap-4 lg:flex">
            {/* Logo Left */}
            <Link href="/" className="shrink-0 cursor-pointer">
              <Image
                src="/images/primesoft-logo-transparent.png"
                alt="Primesoft Logo"
                width={110}
                height={42}
                priority
              />
            </Link>

            {/* FLOATING PILL CONTAINER */}
            <div className="flex items-center gap-1 rounded-full border border-slate-700/60 bg-[#101928]/80 p-1.5 backdrop-blur-md shadow-2xl">
              {navigationItems.map((nav) => {
                const isActive =
                  pathname === nav.path ||
                  (nav.path !== "/" && pathname.startsWith(nav.path));
                const hasDropdown = Boolean(nav.dropdown);

                return (
                  <div
                    key={nav.path}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleMouseEnter(nav.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <button
                        className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                          isActive || openDropdown === nav.label
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "text-slate-300 hover:text-blue-400 hover:bg-blue-600/20"
                        }`}
                      >
                        <span>{nav.label}</span>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === nav.label
                              ? "rotate-180 text-white"
                              : "text-slate-400"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={nav.path}
                        className={`inline-flex items-center px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "text-slate-300 hover:text-blue-400 hover:bg-blue-600/20"
                        }`}
                      >
                        {nav.label}
                      </Link>
                    )}

                    {/* ULTRA-CLEAN FLOATING DROPDOWN CARD */}
                    {hasDropdown && openDropdown === nav.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="w-80 rounded-2xl border-0 bg-[#131d31] p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="space-y-1">
                            {nav.dropdown?.map((item) => {
                              const style = getItemStyle(item.icon);
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`group flex items-center gap-3.5 rounded-xl p-2.5 border-0 transition-all duration-200 ${style.hoverBg} cursor-pointer`}
                                >
                                  <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 transition-colors ${style.activeIconBg}`}>
                                    {Icons[item.icon as keyof typeof Icons]}
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <span className={`text-xs font-semibold text-slate-200 ${style.hoverText} transition-colors`}>
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-slate-400 leading-tight mt-0.5">
                                      {item.label === "Call Center & Customer Support" && "AI-powered communication systems"}
                                      {item.label === "Business Automation" && "Automate manual workflows & tasks"}
                                      {item.label === "AI & Machine Learning" && "Data-driven predictive systems"}
                                      {item.label === "ERP & Business Systems" && "Centralized enterprise operations"}
                                      {item.label === "Custom Software Development" && "Tailored software applications"}
                                      {item.label === "Digital Transformation" && "Modernize business architecture"}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button Right */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-blue-500 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-[80%] max-w-sm flex flex-col bg-[#101928] text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Menu Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid gap-2 px-4 py-6 overflow-y-auto">
          {navigationItems.map((nav) => (
            <div key={nav.path}>
              {nav.dropdown ? (
                <div className="space-y-1">
                  <div className="block rounded-xl px-4 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {nav.label}
                  </div>
                  <div className="ml-3 space-y-1 pl-3">
                    {nav.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs text-slate-300 hover:bg-blue-600/15 hover:text-blue-400 transition cursor-pointer"
                      >
                        {Icons[item.icon as keyof typeof Icons]}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={nav.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-full px-4 py-2.5 text-xs font-semibold transition cursor-pointer ${
                    pathname === nav.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-blue-600/20 hover:text-blue-400"
                  }`}
                >
                  {nav.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-slate-800/80 p-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center rounded-full bg-blue-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 cursor-pointer"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
};