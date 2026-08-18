"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GlobeHemisphereEast, LinkedinLogo } from "@phosphor-icons/react";
import { hero, site } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";
import { PrimaryButton } from "./PrimaryButton";
import { SectionShell } from "./SectionShell";

export function Hero() {
  return (
    <SectionShell
      id="top"
      tone="white"
      paper={false}
      flush
      joinBottom
      innerClassName="relative min-h-dvh overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-[center_20%] md:object-[70%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#fcf9f7]/95 via-[#fcf9f7]/82 to-[#fcf9f7]/15 md:from-[#fcf9f7]/92 md:via-[#fcf9f7]/55 md:to-transparent"
          aria-hidden
        />
      </div>

      <div className="section-pad relative z-[1] flex min-h-dvh flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-dh-medium">
              {hero.role} · {hero.company}
            </p>
            <h1 className="font-display mt-4 max-w-[12ch] text-[clamp(2.75rem,7vw,6.25rem)] font-medium leading-[0.95] tracking-[-0.04em] text-dh-dark">
              {site.name}
            </h1>
            <p className="mt-6 max-w-[52ch] whitespace-pre-line text-[clamp(1.05rem,1.4vw,1.35rem)] font-medium leading-relaxed text-dh-medium">
              {hero.bio}
            </p>

            <div className="mt-6 flex items-center gap-2 text-dh-dark/80">
              <GlobeHemisphereEast size={18} weight="regular" />
              <span className="text-sm font-medium md:text-base">
                {site.location}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <PrimaryButton
                size="lg"
                variant="primary"
                onClick={() => openWhatsApp()}
              >
                {hero.cta}
              </PrimaryButton>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis btn-memphis--lg inline-flex items-center justify-center gap-2 rounded-[14px] border-[3px] border-solid border-[#17140d] bg-white px-8 py-3.5 text-[0.9375rem] font-medium tracking-tight text-[#17140d] transition-[transform,box-shadow] duration-150 ease-out md:px-10 md:py-4 md:text-base"
              >
                <LinkedinLogo size={18} weight="bold" />
                {hero.linkedinCta}
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-dh-dark/15 pt-5 md:mt-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.08em] text-dh-medium">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-dh-dark md:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </SectionShell>
  );
}
