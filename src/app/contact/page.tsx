// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-12 text-white overflow-hidden bg-[#0a0f1d]">
      {/* Subtle Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Full-Width Container */}
      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Two Column Layout - Balanced Centered Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Info & Map (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <span className="size-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Get in Touch
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-3 text-white leading-[1.15]">
                Let’s connect the dots <br />
                on your <span className="text-blue-500">Prime</span><span className="text-yellow-400">Soft</span> challenge.
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Reach out and a member of our senior team will respond within one business day.
              </p>
            </div>

            {/* Embedded Map Card (Clean White Light Theme) */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/85 bg-white shadow-2xl group">
              <div className="w-full h-64 sm:h-72 relative">
                <iframe 
                  title="PrimeSoft Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d39.2083!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDcuMzInUyAzOWKwMTInMjkuOSJF!5e0!3m2!1sen!2stz!4v1650000000000!5m2!1sen!2stz" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></iframe>
                
                {/* Floating Open in Maps Button */}
                <div className="absolute top-4 left-4">
                  <a 
                    href="https://maps.app.goo.gl/dt1vRacoq29VdZjH6?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs shadow-lg hover:bg-slate-800 transition-colors"
                  >
                    Open in Maps
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Contact Info Details */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <svg className="size-5 text-yellow-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">Dar es Salaam, Tanzania</p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="size-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@primesoft.co.tz" className="hover:text-yellow-400 transition-colors">info@primesoft.co.tz</a>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🇹🇿</span>
                  <a href="tel:+255746805383" className="hover:text-yellow-400 transition-colors">+255 746 805 383</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">🇹🇿</span>
                  <a href="tel:+255782557913" className="hover:text-yellow-400 transition-colors">+255 782 557 913</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Form Box */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-700/80 bg-slate-800/60 p-7 sm:p-9 backdrop-blur-2xl shadow-2xl relative">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Tell us about your project</h3>
              <p className="text-slate-300 text-xs sm:text-sm">Fill in the details and we'll get back to you shortly.</p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-1 border border-emerald-500/20">
                  <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our technological experts will review your details and get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl bg-slate-700 border border-slate-600 px-5 py-2.5 text-xs font-medium text-white hover:bg-slate-600 transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">FULL NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">COMPANY</label>
                    <input
                      type="text"
                      required
                      placeholder="Your organization"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="business@company.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">PHONE</label>
                    <input
                      type="tel"
                      required
                      placeholder="+255 7XX XXX XXX"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">SERVICE NEEDED</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-slate-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all shadow-inner cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500">Select a service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="cloud-devops">Cloud & DevOps Engineering</option>
                    <option value="consulting">IT Consulting & Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">MESSAGE</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you're working on..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold active:scale-[0.99] px-6 py-3.5 text-xs sm:text-sm shadow-lg shadow-yellow-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin size-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <span>Send message</span>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}