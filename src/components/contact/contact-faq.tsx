"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Notify from "@/components/notify";
import { CautionIcon } from "@/components/icons";

const faqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "A member of our senior team reviews every enquiry and responds within one business day, often sooner.",
  },
  {
    question: "Do you offer a free initial consultation?",
    answer:
      "Yes. We start with a free, no-obligation call to understand your business processes before proposing a solution.",
  },
  {
    question: "Can you support businesses outside Dar es Salaam?",
    answer:
      "Absolutely. We deliver remote implementation, training, and support for clients across Tanzania and beyond, alongside on-site visits when needed.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "A short description of your current challenges, the systems you use today, and what you're hoping to achieve helps us prepare for our first call.",
  },
] as const;

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 text-center"
      >
        <div className="flex justify-center">
          <Notify className="w-fit text-sm bg-secondary-50 border-secondary-200 text-secondary-700">
            <CautionIcon />
            FAQs
          </Notify>
        </div>
        <div className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Common Questions
        </div>
      </motion.div>

      <div className="mt-10 grid gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 ${
                    isOpen ? "rotate-45 border-secondary-300 text-secondary-600" : ""
                  }`}
                >
                  <PlusIcon />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default ContactFaq;
