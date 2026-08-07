"use client";

import { motion } from "framer-motion";
import { GlobeHemisphereEast } from "@phosphor-icons/react";
import { hero, site } from "@/lib/content";
import { useContact } from "./ContactProvider";
import { PrimaryButton } from "./PrimaryButton";
import { RecedingHeroText } from "./RecedingHeroText";
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
        <RecedingHeroText line1={hero.line1} line2={hero.line2} />

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
            variant="primary"
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
