"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/constants/navigation-items";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/icons";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/80 text-white backdrop-blur-md transition hover:bg-slate-700/80"
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
              {navigationItems.map((nav) => (
                <Link
                  key={nav.path}
                  href={nav.path}
                  className={`rounded-full px-3 py-2 text-sm text-white transition ${
                    pathname === nav.path
                      ? "bg-primary"
                      : "hover:bg-slate-700/50"
                  }`}
                >
                  {nav.label}
                </Link>
              ))}
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

      {/* DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-[70%] flex flex-col bg-[#0f172b] text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER WITH CLOSE BUTTON */}
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

        <div className="grid gap-2 px-6 py-6">
          {navigationItems.map((nav) => (
            <Link
              key={nav.path}
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
