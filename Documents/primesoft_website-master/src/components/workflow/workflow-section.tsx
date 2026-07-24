"use client";

import { LightningIcon } from "../icons";
import { motion } from "motion/react";
import Notify from "../notify";
import { workflows } from "./workflow-items";

const colorClasses = {
  secondary: "text-secondary-600",
  primary: "text-primary-600",
  red: "text-secondary-600",
};

const bgColorClasses = {
  secondary: "bg-secondary-100",
  primary: "bg-primary-100",
  red: "bg-secondary-100",
};

const bgColor600Classes = {
  secondary: "bg-secondary-600",
  primary: "bg-primary-600",
  red: "bg-secondary-600",
};

const borderColor600Classes = {
  secondary: "border-secondary-600",
  primary: "border-primary-600",
  red: "border-secondary-600",
};

const workflowLabels = {
  "Sales Workflow": "Quote to Cash Cycle",
  "Call Center & Operations": "Support Operations",
  "Finance & Reporting": "Record to Report",
} as const;

const WorkflowSection = () => {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6"
        >
          <div className="flex justify-center">
            <Notify className=" flex gap-2 border-gray-200 w-fit shadow-lg">
              <LightningIcon className=" text-secondary-600" />
              End-to-End Process Automation
            </Notify>
          </div>
          <div className="flex justify-center">
            <div className="grid max-w-2xl justify-center gap-6 text-center">
              <div className="text-4xl font-bold">
                Streamline Workflows in Odoo
              </div>
              <div className="text-sm text-gray-500">
                We implement practical sales, inventory, and finance workflows -
                including Quote to Cash, Procure to Pay, and Record to Report.
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-16">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="w-full"
            >
              <div className="flex flex-col gap-4 justify-center items-center">
                <Notify
                  className={`${bgColorClasses[workflow.color as keyof typeof bgColorClasses]} ${borderColor600Classes[workflow.color as keyof typeof borderColor600Classes]} ${colorClasses[workflow.color as keyof typeof colorClasses]} `}
                >
                  {
                    workflowLabels[
                      workflow.title as keyof typeof workflowLabels
                    ]
                  }
                </Notify>
                <div className="text-center text-2xl font-bold sm:text-3xl">
                  {workflow.title}
                </div>
                <div className="max-w-3xl px-2 text-center text-gray-500">
                  {workflow.description}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {workflow.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: itemIndex * 0.08 }}
                    className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 ${bgColorClasses[workflow.color as keyof typeof bgColorClasses]} rounded-full shrink-0`}
                      >
                        <div
                          className={`size-8 ${bgColor600Classes[workflow.color as keyof typeof bgColor600Classes]} rounded-full flex items-center justify-center`}
                        >
                          <span className="text-white font-bold text-sm">
                            {itemIndex + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 text-lg font-bold">{item.title}</div>
                    <div className="mb-4 text-sm text-gray-600">
                      {item.description}
                    </div>
                    <ul className="mb-4 space-y-2">
                      {item.processes.map((process, processIndex) => (
                        <li
                          key={processIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-500 shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{process}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`p-2 ${bgColorClasses[workflow.color as keyof typeof bgColorClasses]} flex items-center gap-2 ${colorClasses[workflow.color as keyof typeof colorClasses]} font-semibold pl-4 text-sm rounded-lg `}
                    >
                      <span>↗</span>
                      <span>{item.final}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkflowSection;
