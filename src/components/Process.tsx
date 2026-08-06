"use client";

import { motion } from "framer-motion";
import { processIntro, processSteps } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Process() {
  return (
    <SectionShell
      tone="dark"
      joinTop
      joinBottom
      innerClassName="section-pad py-16 md:py-[clamp(6rem,9vw,9rem)]"
    >
      <SectionLabel tone="light">alur kerja</SectionLabel>

      <motion.p
        className="font-display mt-2 max-w-3xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-white"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {processIntro}
      </motion.p>

      <div className="mt-16 md:mt-24">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            className="grid grid-cols-1 gap-4 border-t border-white/15 py-8 md:grid-cols-[0.15fr_0.35fr_0.5fr] md:gap-8 md:py-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="text-[clamp(1.125rem,1.4vw,1.5rem)] font-medium text-white">
              {step.number}
            </span>
            <h3 className="font-display text-[clamp(1.125rem,1.4vw,1.5rem)] font-medium text-white">
              {step.title}
            </h3>
            <p className="max-w-[42ch] text-[clamp(1rem,1.2vw,1.25rem)] font-medium leading-[1.45] text-dh-soft md:justify-self-end md:text-left">
              {step.text}
            </p>
          </motion.div>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </SectionShell>
  );
}
