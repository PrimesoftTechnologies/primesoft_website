"use client";

import { motion } from "motion/react";
import Notify from "@/components/notify";
import { GlobeIcon } from "@/components/icons";

const technologies = [
  "Odoo",
  "Docker",
  "Linux",
  "PostgreSQL",
  "Python",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "Laravel",
  "REST APIs",
  "Cloud Platforms",
] as const;

const loopedTechnologies = [...technologies, ...technologies];

const TechStackSection = () => {
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
          <Notify className="flex w-fit gap-2 border-none bg-secondary-50 px-4 py-2">
            <GlobeIcon className="size-4 text-secondary-700" />
            <div className="text-secondary-800">Technologies We Work With</div>
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          A Modern, <span className="text-secondary-600">Battle-Tested Stack</span>
        </div>
        <div className="mx-auto max-w-3xl text-lg text-gray-500">
          We build on reliable, industry-standard technologies so your systems
          stay secure, scalable, and easy to maintain.
        </div>
      </motion.div>

      <div className="mt-12 overflow-hidden [mask:linear-gradient(90deg,#0000,#000_10%,#000_90%,#0000)]">
        <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {loopedTechnologies.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition hover:border-secondary-300 hover:shadow-md"
            >
              <span className="size-2 rounded-full bg-linear-to-r from-primary-500 to-secondary-500" />
              <span className="text-sm font-semibold text-slate-700">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
