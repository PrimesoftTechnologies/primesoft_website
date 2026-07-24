"use client"
import { motion } from "motion/react";

const HeroDescription=()=>{
    return (
      <section>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.35 }} className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-center">
          From CRM and call center automation to hosting and IT consulting,
          <span className=" text-secondary-400">
             we design and implement scalable solutions that improve
            efficiency, reduce manual work, and elevate customer service.
          </span>
        </motion.div>
      </section>
    );
}
export default HeroDescription
