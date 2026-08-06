"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "@phosphor-icons/react";
import { faqIntro, faqs } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell
      tone="dark"
      joinTop
      joinBottom
      innerClassName="section-pad py-16 md:py-[clamp(6rem,9vw,9rem)]"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
        <div className="lg:w-[40%]">
          <SectionLabel tone="light">faq</SectionLabel>
          <motion.p
            className="font-display mt-2 text-[clamp(1.35rem,2.2vw,2.25rem)] font-medium leading-[1.25] tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {faqIntro}
          </motion.p>
        </div>

        <div className="lg:w-[50%]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-t border-white/15">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[clamp(1.0625rem,1.35vw,1.35rem)] font-medium leading-[1.35] text-white">
                    {item.q}
                  </span>
                  <span className="mt-1 shrink-0 text-white">
                    {isOpen ? (
                      <Minus size={20} weight="bold" />
                    ) : (
                      <Plus size={20} weight="bold" />
                    )}
                  </span>
                </button>
                <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
                  <div>
                    <p className="pb-7 text-[clamp(1rem,1.15vw,1.2rem)] font-medium leading-[1.5] text-dh-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-white/15" />
        </div>
      </div>
    </SectionShell>
  );
}
