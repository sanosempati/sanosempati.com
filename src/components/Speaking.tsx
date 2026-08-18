"use client";

import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { speaking, speakingIntro } from "@/lib/content";
import { CompanyBadge } from "./CompanyBadge";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

const PAGE_SIZE = 6;

const COVER_TONES = [
  "bg-dh-sky",
  "bg-dh-mint",
  "bg-dh-peach",
  "bg-dh-light",
] as const;

function SpeakingCover({
  title,
  org,
  year,
  tone,
}: {
  title: string;
  org: string;
  year: string;
  tone: (typeof COVER_TONES)[number];
}) {
  return (
    <div
      className={`flex h-full flex-col justify-between p-5 md:p-6 ${tone}`}
      aria-hidden
    >
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-dh-medium">
        {org}
      </p>
      <p className="font-display text-[clamp(1rem,1.15vw,1.2rem)] font-medium leading-snug tracking-tight text-dh-dark">
        {title}
      </p>
      <p className="text-sm font-medium text-dh-medium">{year}</p>
    </div>
  );
}

export function Speaking() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(speaking.length / PAGE_SIZE);
  const visible = useMemo(
    () => speaking.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page],
  );

  const goToPage = (next: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)));
  };

  return (
    <SectionShell
      id="speaking"
      tone="white"
      joinTop
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>{speakingIntro.label}</SectionLabel>
      <h2 className="font-display mt-2 max-w-2xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-dh-dark">
        {speakingIntro.heading}
      </h2>
      <p className="mt-3 max-w-[52ch] text-sm font-medium text-dh-medium md:text-base">
        {speakingIntro.description}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {visible.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              className="group"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-[3px] border-[#17140d] bg-[#f8f7f5] shadow-[6px_6px_0_#17140d] transition-[transform,box-shadow] duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[4px_4px_0_#17140d]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                ) : (
                  <SpeakingCover
                    title={item.title}
                    org={item.org}
                    year={item.year}
                    tone={COVER_TONES[index % COVER_TONES.length]}
                  />
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display min-w-0 flex-1 text-[clamp(1rem,1.2vw,1.25rem)] font-medium leading-snug tracking-tight text-dh-dark">
                    {item.title}
                  </h3>
                  <span className="shrink-0 pt-0.5 text-sm font-medium text-dh-medium">
                    {item.year}
                  </span>
                </div>
                <div className="mt-2 flex min-w-0 items-center gap-2.5">
                  <CompanyBadge
                    label={item.org}
                    domain={item.domain}
                    badge={item.badge}
                  />
                  <p className="text-sm font-medium text-dh-medium md:text-[0.9375rem]">
                    {item.subtitle}
                  </p>
                </div>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-medium text-dh-dark underline decoration-dh-dark/30 underline-offset-4 transition-colors hover:text-dh-medium hover:decoration-dh-medium"
                  >
                    Link
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 ? (
        <nav
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-dh-dark/15 pt-8"
          aria-label="Speaking pagination"
        >
          <p className="text-sm font-medium text-dh-medium">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-[#17140d] bg-white text-dh-dark shadow-[5px_5px_0_#17140d] transition-[transform,box-shadow,opacity] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#17140d] disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={page === i ? "page" : undefined}
                  className={`inline-flex min-w-10 items-center justify-center rounded-[14px] border-[3px] border-[#17140d] px-3 py-2 text-sm font-medium tracking-tight transition-[transform,box-shadow,background-color,color] duration-150 ${
                    page === i
                      ? "bg-[#17140d] text-white shadow-[5px_5px_0_#17140d]"
                      : "bg-white text-dh-dark shadow-[5px_5px_0_#17140d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#17140d]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages - 1}
              aria-label="Next page"
              className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-[#17140d] bg-white text-dh-dark shadow-[5px_5px_0_#17140d] transition-[transform,box-shadow,opacity] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#17140d] disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </nav>
      ) : null}
    </SectionShell>
  );
}
