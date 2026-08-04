"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RightIcon } from "@/components/icons";

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100";

const labelClassName =
  "mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase";

const ContactForm = () => {
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
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Tell us about your project
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Fill in the details and we&apos;ll get back to you shortly.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="grid justify-items-center gap-4 py-14 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="flex size-14 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-500"
            >
              <CheckIcon />
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900">
              Message Sent Successfully!
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Thank you for reaching out. One of our technology experts will
              review your details and get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClassName}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Company</label>
                <input
                  type="text"
                  required
                  placeholder="Your organization"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClassName}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="business@company.com"
                  className={inputClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+255 7XX XXX XXX"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label className={labelClassName}>Service Needed</label>
              <select
                required
                defaultValue=""
                className={`${inputClassName} cursor-pointer`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="odoo-implementation">
                  Odoo Implementation
                </option>
                <option value="call-center">Call Center Solutions</option>
                <option value="custom-software">
                  Custom Software Development
                </option>
                <option value="ai-automation">AI & Automation</option>
                <option value="cloud-devops">
                  Cloud & DevOps Engineering
                </option>
                <option value="consulting">IT Consulting & Strategy</option>
              </select>
            </div>

            <div>
              <label className={labelClassName}>Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell us what you're working on..."
                className={`${inputClassName} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:gap-3 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <RightIcon />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7"
      aria-hidden="true"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default ContactForm;
