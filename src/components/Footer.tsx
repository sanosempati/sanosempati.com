"use client";

import { contact, hero, site, ui } from "@/lib/content";
import { openWhatsApp } from "@/lib/whatsapp";
import { BilingualBlock, BilingualText } from "./BilingualText";
import { useLanguage } from "./LanguageProvider";
import { PrimaryButton } from "./PrimaryButton";
import { SectionShell } from "./SectionShell";

export function Footer() {
  const { t } = useLanguage();

  return (
    <SectionShell
      id="kontak"
      tone="dark"
      innerClassName="section-pad pt-16 md:pt-[clamp(5rem,9vw,9rem)]"
    >
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
        <BilingualBlock
          value={contact.footerCta}
          className="font-display max-w-xl text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-[1.3] tracking-tight text-white"
        />
        <PrimaryButton variant="secondary" size="lg" onClick={() => openWhatsApp()}>
          {t(hero.cta)}
        </PrimaryButton>
      </div>

      <div className="mt-16 h-px w-full bg-white/15 md:mt-24" />

      <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:py-14">
        <div>
          <BilingualText
            value={ui.phone}
            as="p"
            className="mb-2 text-sm font-medium text-dh-soft"
          />
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
          >
            {site.phone}
          </a>
        </div>
        <div>
          <BilingualText
            value={ui.email}
            as="p"
            className="mb-2 text-sm font-medium text-dh-soft"
          />
          <a
            href={`mailto:${site.email}`}
            className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
          >
            {site.email}
          </a>
        </div>
        <div>
          <BilingualText
            value={ui.social}
            as="p"
            className="mb-2 text-sm font-medium text-dh-soft"
          />
          <div className="flex flex-col gap-1.5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
            >
              Instagram
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="sm:text-right md:text-right">
          <p className="mb-2 text-sm font-medium text-dh-soft">
            &copy; {site.year}
          </p>
          <p className="text-base font-medium text-white/50 md:text-lg">
            {site.name}
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none select-none overflow-hidden pb-0 pt-6"
        aria-hidden
      >
        <p className="font-display translate-y-[28%] whitespace-nowrap text-center text-[clamp(3.5rem,14vw,12rem)] font-medium leading-none tracking-[-0.03em] text-white/10">
          {site.nameCompact}
        </p>
      </div>
    </SectionShell>
  );
}
