"use client";

import { motion } from "framer-motion";
import { speaking, speakingIntro } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Speaking() {
  return (
    <SectionShell
      id="pembicara"
      tone="white"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>{speakingIntro.label}</SectionLabel>
      <h2 className="font-display mt-2 max-w-2xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-dh-dark">
        {speakingIntro.heading}
      </h2>

      <div className="mt-10 md:mt-14">
        <div className="hidden grid-cols-[minmax(5rem,0.18fr)_1.4fr_1fr] gap-8 border-b border-dh-dark/15 pb-3 text-xs font-medium uppercase tracking-[0.08em] text-dh-medium md:grid">
          <span>Tahun</span>
          <span>Judul</span>
          <span>Organisasi</span>
        </div>

        {speaking.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.year}`}
            className="grid grid-cols-1 gap-2 border-t border-dh-dark/15 py-7 md:grid-cols-[minmax(5rem,0.18fr)_1.4fr_1fr] md:items-baseline md:gap-8 md:border-t-0 md:border-b md:py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.05, 0.16),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-sm font-medium text-dh-medium md:text-base">
              <span className="md:hidden">Tahun · </span>
              {item.year}
            </p>
            <h3 className="font-display text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-[1.25] tracking-tight text-dh-dark">
              {item.title}
            </h3>
            <p className="text-[0.9375rem] font-medium text-dh-medium md:text-base">
              <span className="md:hidden">Organisasi · </span>
              {item.org}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
