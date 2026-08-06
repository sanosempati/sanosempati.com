"use client";

import { motion } from "framer-motion";
import { GlobeHemisphereEast } from "@phosphor-icons/react";
import { hero, site } from "@/lib/content";
import { useContact } from "./ContactProvider";
import { PrimaryButton } from "./PrimaryButton";
import { SectionShell } from "./SectionShell";

export function Hero() {
  const { setOpen } = useContact();

  return (
    <SectionShell
      id="top"
      tone="sky"
      innerClassName="flex min-h-[calc(100dvh-1rem)] flex-col justify-end section-pad pb-[8vw] pt-28 md:min-h-[calc(100dvh-1.25rem)] md:pb-[5vw]"
    >
      <div className="relative z-[1] flex w-full flex-col">
        <motion.h1
          className="font-display max-w-[14ch] text-[clamp(2.5rem,7.5vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-dh-dark text-balance md:max-w-[16ch]"
          initial={{ y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.line1}
          <br />
          {hero.line2}
        </motion.h1>

        <motion.div
          className="mt-10 flex items-center justify-end gap-2 text-dh-dark md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <GlobeHemisphereEast size={18} weight="regular" />
          <span className="text-sm font-medium md:text-base">{site.location}</span>
        </motion.div>

        <div className="mt-12 h-px w-full bg-dh-dark/20 md:mt-16" />

        <motion.div
          className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-xl text-base font-medium leading-relaxed text-dh-dark/80 md:max-w-2xl md:text-[clamp(1rem,1.15vw,1.25rem)]">
            {hero.tagline}
          </p>
          <PrimaryButton
            size="lg"
            variant="dark"
            onClick={() => setOpen(true)}
            className="self-start md:self-auto"
          >
            {hero.cta}
          </PrimaryButton>
        </motion.div>
      </div>
    </SectionShell>
  );
}
