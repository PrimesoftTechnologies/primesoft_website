"use client";
import Image from "next/image";
import Notify from "../notify";
import { CautionIcon, UserGroupIcon } from "../icons";
import CardContainer from "./card-container";
import { motion } from "framer-motion";
export const AdvantageSection = () => {
  const cards = [
    {
      title: "No Unified Customer View",
      description:
        "Customer data is scattered across CRM, accounting, and support tools.",
      className: "-top-20 left-18 2xl:left-30 2xl:-top:15",
      delay: 0,
    },
    {
      title: "Manual Processes Everywhere",
      description:
        "Agents switch between spreadsheets, emails, and tools causing delays and errors.",
      className: "top-44 -left-40 2xl:-left-16",
      delay: 0.2,
    },
    {
      title: "Slow Call Handling",
      description:
        "Agents waste time searching for customer details during calls.",
      className: "-bottom-15 left-18 2xl:left-30 2xl:bottom-2 ",
      delay: 0.4,
    },
    {
      title: "All-in-One Odoo System",
      description: "CRM, Sales, Support, and Accounting in one platform.",
      className: "-top-20 right-18 2xl:right-30 2xl:-top:15",
      delay: 0.6,
    },
    {
      title: "Integrated Call Center",
      description: "Incoming calls automatically show customer data.",
      className: "top-44 -right-40 2xl:-right-16",
      delay: 0.8,
    },
    {
      title: "Automated Workflows",
      description: "Tickets, leads, and follow-ups created automatically.",
      className: "-bottom-15 right-18 2xl:right-30 2xl:bottom-2",
      delay: 1,
    },
  ] as const;

  return (
    <section className="grid justify-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col justify-center gap-6 items-center"
      >
        <Notify className=" w-fit text-sm bg-secondary-50 border-secondary-200 text-secondary-700">
          <CautionIcon />
          Common Challenges
        </Notify>
        <div className="text-3xl font-bold">Is your business facing this?</div>
      </motion.div>
      <div className="relative mx-auto hidden w-full max-w-295 justify-center xl:flex mt-20">
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="w-full"
        >
          <Image
            src="/edited-advantage.png"
            alt="advantage"
            height={680}
            width={1100}
            className="h-auto w-full max-w-[1100px] object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1100px"
          />
        </motion.div>
        {cards.map((card) => (
          <CardContainer
            key={card.title}
            icon={<UserGroupIcon className="size-5 text-secondary-400" />}
            title={card.title}
            description={card.description}
            className={card.className}
            delay={card.delay}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-5 xl:hidden">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <Image
            src="/edited-advantage.png"
            alt="advantage"
            height={680}
            width={1100}
            className="h-auto w-full object-contain"
            sizes="100vw"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <motion.div
              key={`mobile-${card.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50">
                  <UserGroupIcon className="size-5 text-secondary-400" />
                </div>
                <div className="text-base font-bold text-slate-900">
                  {card.title}
                </div>
              </div>
              <div className="text-sm leading-6 text-slate-600">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-secondary-200 bg-linear-to-br from-secondary-50 to-white p-6 text-center sm:p-8">
          &quot;A successful Odoo rollout connects your sales, inventory, and
          finance workflows into one automated system - with end-to-end support
          from ICIT.&quot;
        </div>
      </div>
    </section>
  );
};
