"use client";

import { LightningIcon } from "../icons";
import { motion } from "motion/react";
import Notify from "../notify";
import ActionBox from "./action-box";
import ProcessOne from "./process-one";
import ProcessThree from "./process-three";
import ProcessTwo from "./process-two";

const ProcessSection = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 text-center"
      >
        <div className="flex justify-center gap-2">
          <Notify className="flex w-fit gap-2 border-none bg-secondary-50 px-4 py-2">
            <LightningIcon className="size-4 text-secondary-700" />
            <div className="text-secondary-800">
              Automated Workflows with Odoo
            </div>
          </Notify>
        </div>
        <div className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Automate What Matters.
          <span className="text-secondary-600"> Scale with Confidence.</span>
        </div>
        <div className="mx-auto max-w-3xl text-lg text-gray-500">
          Start with the services you need today, then expand as your business
          grows.
        </div>
      </motion.div>

      <div className="mt-14 grid gap-12">
        <ProcessOne />
        <ProcessTwo />
        <ProcessThree />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center"
        >
          <ActionBox />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
