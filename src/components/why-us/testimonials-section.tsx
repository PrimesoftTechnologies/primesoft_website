"use client";

import { motion } from "motion/react";
import Notify from "@/components/notify";
import { UserGroupIcon } from "@/components/icons";

const testimonials = [
  {
    quote:
      "PrimeSoft transformed our operations with an ERP solution that significantly improved efficiency.",
    name: "Operations Director",
    role: "Manufacturing & Distribution",
    initials: "OD",
  },
  {
    quote:
      "Their team understood our requirements and delivered beyond expectations.",
    name: "Head of IT",
    role: "Financial Services",
    initials: "HI",
  },
  {
    quote:
      "Reliable, professional, and always available when we need support.",
    name: "General Manager",
    role: "Retail & Services",
    initials: "GM",
  },
] as const;

const TestimonialsSection = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 text-center"
      >
        <div className="flex justify-center">
          <Notify className="flex w-fit gap-2 border-none bg-primary-50 px-4 py-2">
            <UserGroupIcon className="size-4 text-primary-700" />
            <div className="text-primary-800">Client Testimonials</div>
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Trusted by <span className="text-primary-600">Growing Businesses</span>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group relative flex flex-col gap-5 rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <QuoteIcon className="size-8 text-secondary-300 transition group-hover:text-secondary-400" />
            <blockquote className="grow text-base leading-7 text-slate-700">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
              <div className="flex size-11 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-secondary-500 text-sm font-bold text-white">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-xs text-slate-500">{testimonial.role}</div>
              </div>
              <div className="ml-auto flex gap-0.5 text-secondary-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="size-3.5" />
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5v6h6v-6H6.6C7 9.8 8.6 8.4 10.7 8V6h-1.2Zm9 0c-3 0-5.5 2.5-5.5 5.5v6h6v-6h-2.9c.4-1.7 2-3.1 4.1-3.5V6h-1.7Z" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 3 2.47 5 5.53.8-4 3.9.95 5.5L12 15.9 7.05 18.2 8 12.7 4 8.8 9.53 8 12 3Z" />
    </svg>
  );
}

export default TestimonialsSection;
