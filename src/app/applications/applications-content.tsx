// app/applications/applications-content.tsx
"use client";

import Link from "next/link";
import { LocationIcon } from "@/components/icons";
import Notify from "@/components/notify";

// Core Applications Assets
const SAMPLE_IMAGE = "/assets/crm.svg";
const SAMPLE_IMAGE1 = "/assets/sale.svg";
const SAMPLE_IMAGE2 = "/assets/account.svg";
const SAMPLE_IMAGE3 = "/assets/invo.svg";
const SAMPLE_IMAGE4 = "/assets/inventory.svg";
const SAMPLE_IMAGE5 = "/assets/purc.svg";
const SAMPLE_IMAGE6 = "/assets/manu.svg";
const SAMPLE_IMAGE7 = "/assets/sale.svg";
const SAMPLE_IMAGE8 = "/assets/hr.svg";
const SAMPLE_IMAGE9 = "/assets/projec.svg";
const SAMPLE_IMAGE10 = "/assets/ecom.svg";
const SAMPLE_IMAGE11 = "/assets/pos.svg";

const odooApps = [
  { name: "CRM", icon: SAMPLE_IMAGE },
  { name: "Sales", icon: SAMPLE_IMAGE1 },
  { name: "Accounting", icon: SAMPLE_IMAGE2 },
  { name: "Invoicing", icon: SAMPLE_IMAGE3 },
  { name: "Inventory", icon: SAMPLE_IMAGE4 },
  { name: "Purchase", icon: SAMPLE_IMAGE5 },
  { name: "Manufacturing", icon: SAMPLE_IMAGE6 },
  { name: "HR", icon: SAMPLE_IMAGE7 },
  { name: "Project", icon: SAMPLE_IMAGE8 },
  { name: "eCommerce", icon: SAMPLE_IMAGE9 },
  { name: "Point of Sale", icon: SAMPLE_IMAGE10 },
  { name: "Email Marketing", icon: SAMPLE_IMAGE11 },
];

// Additional Categories Data with actual SVG components
const additionalCategories = [
  {
    title: "Website",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
      </svg>
    ),
    iconBg: "bg-cyan-100 text-cyan-600",
    apps: [
      { name: "Website", icon: "/assets/web.svg" },
      { name: "Blog", icon: "/assets/blog.svg" },
      { name: "Forum", icon: "/assets/forum.svg" },
      { name: "eLearning", icon: "/assets/elearn.svg" },
      { name: "Live Chat", icon: "/assets/live.svg" },
    ],
  },
  {
    title: "Sales",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    iconBg: "bg-blue-100 text-blue-600",
    apps: [
      { name: "Subscriptions", icon: "/assets/purc.svg" },
      { name: "Rental", icon: "/assets/manu.svg" },
    ],
  },
  {
    title: "Finance",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    iconBg: "bg-emerald-100 text-emerald-600",
    apps: [
      { name: "Expenses", icon: "/assets/account.svg" },
      { name: "Documents", icon: "/assets/invo.svg" },
      { name: "Spreadsheets", icon: "/assets/inventory.svg" },
      { name: "Sign", icon: "/assets/purc.svg" },
    ],
  },
  {
    title: "Inventory & MFG",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    iconBg: "bg-purple-100 text-purple-600",
    apps: [
      { name: "PLM", icon: "/assets/manu.svg" },
      { name: "Maintenance", icon: "/assets/inventory.svg" },
      { name: "Quality", icon: "/assets/purc.svg" },
    ],
  },
  {
    title: "Human Resources",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconBg: "bg-sky-100 text-sky-600",
    apps: [
      { name: "Recruitment", icon: "/assets/hr.svg" },
      { name: "Time Off", icon: "/assets/sale.svg" },
      { name: "Appraisals", icon: "/assets/crm.svg" },
      { name: "Referral", icon: "/assets/account.svg" },
      { name: "Fleet", icon: "/assets/invo.svg" },
      { name: "Timesheets", icon: "/assets/projec.svg" },
    ],
  },
  {
    title: "Marketing",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
    iconBg: "bg-pink-100 text-pink-600",
    apps: [
      { name: "Automation", icon: "/assets/ecom.svg" },
      { name: "SMS", icon: "/assets/pos.svg" },
      { name: "Social", icon: "/assets/crm.svg" },
      { name: "Events", icon: "/assets/sale.svg" },
      { name: "Survey", icon: "/assets/account.svg" },
    ],
  },
  {
    title: "Services",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    iconBg: "bg-blue-100 text-blue-600",
    apps: [
      { name: "Helpdesk", icon: "/assets/invo.svg" },
      { name: "Field Service", icon: "/assets/inventory.svg" },
      { name: "Planning", icon: "/assets/purc.svg" },
    ],
  },
  {
    title: "Productivity",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    iconBg: "bg-indigo-100 text-indigo-600",
    apps: [
      { name: "Knowledge", icon: "/assets/manu.svg" },
      { name: "Discuss", icon: "/assets/hr.svg" },
      { name: "Calendar", icon: "/assets/projec.svg" },
      { name: "Contacts", icon: "/assets/ecom.svg" },
      { name: "Notes", icon: "/assets/pos.svg" },
    ],
  },
];

// PrimeSoft Service-Focused Integration Features
const primeSoftServices = [
  {
    title: "Expert Odoo Implementation",
    description:
      "We tailor and configure Odoo modules specifically to match your business processes, ensuring zero workflow disruption.",
  },
  {
    title: "Staff Training & Onboarding",
    description:
      "Empower your team with practical, hands-on training sessions so everyone uses the system efficiently from day one.",
  },
  {
    title: "Ongoing Dedicated Support",
    description:
      "Get continuous technical support, system maintenance, and upgrades to keep your enterprise operations running smoothly.",
  },
];

export default function ApplicationsContent() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <div>
        {/* Hero Header Section - Upgraded Size & Rich Styling */}
        <section className="relative overflow-hidden bg-[#0a111e] px-4 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 text-white">
          {/* Background Grid Pattern & Ambient Glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-md mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              One Platform, Endless Enterprise Possibilities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]">
              Odoo Enterprise <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Applications Suite
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="mt-4 text-base sm:text-xl font-semibold text-slate-200">
              Integrated business applications designed to streamline every corner of your enterprise.
            </p>

            {/* Paragraph Description */}
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Over 40 fully integrated modules built to scale. Click any core app below to discover how PrimeSoft can customize and deploy it for your organization.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-blue-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-blue-500 hover:-translate-y-0.5 cursor-pointer"
              >
                Request Custom Solution
              </Link>
              <a
                href="#core-apps"
                className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-900/80 px-7 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer"
              >
                Explore Apps Below
              </a>
            </div>
          </div>
        </section>

        {/* Core Applications Grid Section */}
        <section id="core-apps" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-medium px-3.5 py-1 rounded-full mb-3">
              <LocationIcon className="size-3 text-blue-600" />
              <span>Core Applications</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Business Essentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Click any app to see how PrimeSoft configures it for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {odooApps.map((app, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center h-32"
                >
                  <div className="w-12 h-12 mb-2.5 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[12px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Applications Section - Narrow Container */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto bg-slate-50/50">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Additional Applications
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Extend your Odoo system with these specialized modules supported by PrimeSoft
            </p>
          </div>

          {/* Compact Categories Grid (2 columns on tablet/desktop to narrow width nicely) */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {additionalCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-slate-100/60 border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${category.iconBg}`}
                  >
                    {category.icon}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                {/* Sub-Apps Grid */}
                <div className="grid grid-cols-3 gap-1.5">
                  {category.apps.map((subApp, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-white rounded-lg p-1.5 border border-slate-100 flex flex-col items-center justify-center text-center hover:shadow-xs hover:border-blue-400 hover:text-blue-600 transition-all cursor-pointer min-h-[62px]"
                    >
                      <div className="w-6 h-6 mb-1 flex items-center justify-center">
                        <img
                          src={subApp.icon}
                          alt={subApp.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[9px] font-medium text-slate-600 leading-tight line-clamp-1 group-hover:text-blue-600">
                        {subApp.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PrimeSoft Implementation Services Section */}
        <section className="bg-[#101928] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* PrimeSoft Services Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium px-3 py-1 rounded-full mb-4">
              <svg
                className="w-3 h-3 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>PrimeSoft Services</span>
            </div>

            {/* Title & Description tailored for PrimeSoft */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Partner With PrimeSoft?
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Beyond software setup, we help growing businesses modernise operations with practical Odoo implementation, expert staff training, and long-term support in Tanzania.
            </p>

            {/* Rectangle Sharp Small Cards Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {primeSoftServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#162133] border border-slate-700/60 rounded-md p-4 transition-all duration-200 hover:border-blue-500/50"
                >
                  {/* Check Circle SVG */}
                  <div className="w-7 h-7 rounded-md bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-sm font-bold text-white mb-1">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}