"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Notify from "@/components/notify";
import { UserGroupIcon } from "@/components/icons";

const checklist = [
  "Business Process Expertise",
  "Certified Professionals",
  "Enterprise-grade Solutions",
  "Cloud & On-Premise Deployments",
  "Seamless Integrations",
  "Long-term Technical Support",
  "Security Focused",
  "Continuous Innovation",
] as const;

const TrustChecklistSection = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[36px] bg-linear-to-br from-primary-100 via-secondary-50 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.1)]">
            <Image
              src="/images/transformation-image.jpeg"
              alt="Collaboration across software, cloud, and business dashboards"
              width={900}
              height={720}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <UserGroupIcon className="size-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                50+ Organizations
              </div>
              <div className="text-xs text-slate-500">Trust PrimeSoft</div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4"
          >
            <Notify className="w-fit border-secondary-200 bg-secondary-50 text-secondary-700">
              <ShieldCheckIcon className="size-4" />
              Why Businesses Keep Choosing Us
            </Notify>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              A Technology Partner{" "}
              <span className="text-primary-600">You Can Rely On</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-500">
              Businesses stay with PrimeSoft because we combine deep technical
              expertise with a genuine commitment to their long-term success.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {checklist.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-secondary-300 hover:shadow-md"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: index * 0.06 + 0.15,
                  }}
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary-500 text-white"
                >
                  <CheckIcon />
                </motion.span>
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 11.5 1.7 1.7 3.8-3.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export default TrustChecklistSection;
