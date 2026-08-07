"use client";

import { contact, site } from "@/lib/content";
import { PrimaryButton } from "./PrimaryButton";
import { SectionShell } from "./SectionShell";
import { useContact } from "./ContactProvider";

export function Footer() {
  const { setOpen } = useContact();

  return (
    <SectionShell
      id="kontak"
      tone="dark"
      joinTop
      innerClassName="section-pad pt-16 md:pt-[clamp(5rem,9vw,9rem)]"
    >
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
        <p className="font-display max-w-xl text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-[1.3] tracking-tight text-white">
          {contact.footerCta}
        </p>
        <PrimaryButton variant="secondary" size="lg" onClick={() => setOpen(true)}>
          Mulai proyek
        </PrimaryButton>
      </div>

      <div className="mt-16 h-px w-full bg-white/15 md:mt-24" />

      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:gap-8 md:py-14">
        <div>
          <p className="mb-2 text-sm font-medium text-dh-soft">Telepon</p>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
          >
            {site.phone}
          </a>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-dh-soft">E-Mail</p>
          <a
            href={`mailto:${site.email}`}
            className="text-base font-medium text-white transition-opacity hover:opacity-60 md:text-lg"
          >
            {site.email}
          </a>
        </div>
        <div className="md:text-right">
          <p className="mb-2 text-sm font-medium text-dh-soft">
            &copy; {site.year}
          </p>
          <div className="flex gap-5 md:justify-end">
            <a
              href="#"
              className="text-base font-medium text-white transition-opacity hover:opacity-60"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-base font-medium text-white transition-opacity hover:opacity-60"
            >
              Privasi
            </a>
          </div>
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
