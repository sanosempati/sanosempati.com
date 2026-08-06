"use client";

import { motion } from "framer-motion";
import { services, servicesIntro } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Services() {
  return (
    <SectionShell
      id="layanan"
      tone="dark"
      joinBottom
      innerClassName="section-pad py-16 md:py-[clamp(6rem,9vw,9rem)]"
    >
      <SectionLabel tone="light">layanan saya</SectionLabel>

      <motion.p
        className="font-display mt-2 max-w-3xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-white"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {servicesIntro}
      </motion.p>

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 md:gap-y-16">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: (i % 2) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[clamp(1.25rem,1.5vw,1.75rem)] font-medium text-dh-medium">
                {service.number}
              </span>
              <h3 className="font-display text-[clamp(1.25rem,1.5vw,1.75rem)] font-medium text-white">
                {service.title}
              </h3>
            </div>
            <div className="my-4 h-px w-full bg-[#666]" />
            <p className="max-w-[46ch] text-[clamp(1rem,1.25vw,1.25rem)] font-medium leading-[1.45] text-dh-soft">
              {service.text}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
