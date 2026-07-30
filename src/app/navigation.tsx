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

const getItemStyle = (icon: string) => {
  switch (icon) {
    case "automation":
      return {
        activeBg: "bg-orange-500/25",
        activeText: "text-orange-400",
        activeIconBg: "bg-orange-600 text-white",
        hoverBg: "hover:bg-orange-500/25",
        hoverText: "group-hover:text-orange-400",
        hoverIconBg: "group-hover:bg-orange-600 group-hover:text-white",
      };
    case "ai":
      return {
        activeBg: "bg-emerald-500/25",
        activeText: "text-emerald-400",
        activeIconBg: "bg-emerald-600 text-white",
        hoverBg: "hover:bg-emerald-500/25",
        hoverText: "group-hover:text-emerald-400",
        hoverIconBg: "group-hover:bg-emerald-600 group-hover:text-white",
      };
    case "erp":
      return {
        activeBg: "bg-purple-500/25",
        activeText: "text-purple-400",
        activeIconBg: "bg-purple-600 text-white",
        hoverBg: "hover:bg-purple-500/25",
        hoverText: "group-hover:text-purple-400",
        hoverIconBg: "group-hover:bg-purple-600 group-hover:text-white",
      };
    case "code":
      return {
        activeBg: "bg-cyan-500/25",
        activeText: "text-cyan-400",
        activeIconBg: "bg-cyan-600 text-white",
        hoverBg: "hover:bg-cyan-500/25",
        hoverText: "group-hover:text-cyan-400",
        hoverIconBg: "group-hover:bg-cyan-600 group-hover:text-white",
      };
    case "transform":
      return {
        activeBg: "bg-amber-500/25",
        activeText: "text-amber-400",
        activeIconBg: "bg-amber-600 text-white",
        hoverBg: "hover:bg-amber-500/25",
        hoverText: "group-hover:text-amber-400",
        hoverIconBg: "group-hover:bg-amber-600 group-hover:text-white",
      };
    default:
      return {
        activeBg: "bg-blue-600/30",
        activeText: "text-blue-400",
        activeIconBg: "bg-blue-600 text-white",
        hoverBg: "hover:bg-blue-600/30",
        hoverText: "group-hover:text-blue-400",
        hoverIconBg: "group-hover:bg-blue-600 group-hover:text-white",
      };
  }
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  
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
        className={`fixed inset-x-0 -top-3 z-50 px-4 transition-transform duration-300 sm:px-6 lg:px-10 ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <div className="mx-auto">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <div className="py-2">
              <Image
                src="/images/primesoft-logo-cropped.png"
                alt="Primesoft Logo"
                width={172}
                height={81}
                className="h-9 w-auto object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/80 text-white backdrop-blur-md transition hover:bg-slate-700/80"
            >
              <MenuIcon />
            </button>
          </div>

          <div className="hidden items-center justify-between gap-4 lg:flex">
            {/* Logo */}
            <div>
              <Image
                src="/images/primesoft-logo-cropped.png"
                alt="Primesoft Logo"
                width={172}
                height={81}
                className="h-9 w-auto object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="my-4 flex h-fit w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-slate-700/50 bg-slate-800/80 px-2 py-1.5 backdrop-blur-md">
              {navigationItems.map((nav) => {
                const hasDropdown = Boolean(nav.dropdown);
                const isDropdownActive = nav.dropdown?.some((item) => pathname === item.href);

                return (
                  <div
                    key={nav.path}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleMouseEnter(nav.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <button
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-white transition cursor-pointer ${
                          isDropdownActive || (pathname.startsWith(nav.path) && nav.path !== "/")
                            ? "bg-primary"
                            : "hover:bg-slate-700/50"
                        }`}
                      >
                        <span>{nav.label}</span>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === nav.label ? "rotate-180" : ""
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
                        className={`rounded-full px-3 py-2 text-sm text-white transition block ${
                          pathname === nav.path
                            ? "bg-primary"
                            : "hover:bg-slate-700/50"
                        }`}
                      >
                        {nav.label}
                      </Link>
                    )}

                    {/* DESKTOP DROPDOWN MENU */}
                    {hasDropdown && openDropdown === nav.label && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-64 rounded-2xl border border-slate-700/80 bg-[#090d16]/95 p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="space-y-1">
                            {nav.dropdown?.map((item) => {
                              const style = getItemStyle(item.icon);
                              const isSelected = pathname === item.href;

                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`group flex items-center gap-3 rounded-xl p-2 transition-all duration-200 cursor-pointer ${
                                    isSelected 
                                      ? `${style.activeBg}` 
                                      : `${style.hoverBg}`
                                  }`}
                                >
                                  <div className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-slate-800/90 transition-colors ${
                                    isSelected ? `${style.activeIconBg}` : `${style.hoverIconBg}`
                                  }`}>
                                    {Icons[item.icon as keyof typeof Icons]}
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <span className={`text-xs font-semibold transition-colors line-clamp-1 ${
                                      isSelected ? `${style.activeText}` : `text-slate-100 ${style.hoverText}`
                                    }`}>
                                      {item.label}
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

            {/* CTA */}
            <button className="my-6 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200">
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

      {/* DRAWER YA SIMU */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm flex flex-col bg-[#090d16]/80 backdrop-blur-xl border-l border-slate-700/50 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER WITH CLOSE BUTTON */}
        <div className="flex items-center justify-between border-b border-slate-700/50 px-6 py-4">
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
          {navigationItems.map((nav) => {
            const hasDropdown = Boolean(nav.dropdown);
            const isDropdownActive = nav.dropdown?.some((item) => pathname === item.href);

            return (
              <div key={nav.path}>
                {hasDropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === nav.label ? null : nav.label
                        )
                      }
                      className={`w-full flex items-center justify-between rounded-lg px-4 py-3 text-base font-light transition cursor-pointer ${
                        isDropdownActive || mobileDropdownOpen === nav.label
                          ? "bg-primary/30 text-blue-400 border border-blue-500/30"
                          : "text-slate-100 hover:bg-slate-700/50"
                      }`}
                    >
                      <span>{nav.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 text-slate-300 ${
                          mobileDropdownOpen === nav.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {mobileDropdownOpen === nav.label && (
                      <div className="ml-3 space-y-1 pt-1 animate-in fade-in duration-200">
                        {nav.dropdown?.map((item) => {
                          const isSelected = pathname === item.href;
                          const style = getItemStyle(item.icon);

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition cursor-pointer ${
                                isSelected 
                                  ? `${style.activeBg} ${style.activeText}` 
                                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                              }`}
                            >
                              <div className={`flex size-7 shrink-0 items-center justify-center rounded-md bg-slate-800/80 transition-colors ${
                                isSelected ? `${style.activeIconBg}` : ""
                              }`}>
                                {Icons[item.icon as keyof typeof Icons]}
                              </div>
                              <span className="whitespace-nowrap">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={nav.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-light transition ${
                      pathname === nav.path
                        ? "bg-primary/30 text-blue-400 border border-blue-500/30"
                        : "text-slate-100 hover:bg-slate-700/50"
                    }`}
                  >
                    {nav.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-auto border-t border-slate-700/50 px-6 py-6">
          <button className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:brightness-110">
            Free Consultation
          </button>
        </div>
      </div>
    </>
  );
};