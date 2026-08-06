"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import { testimonials } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <SectionShell
      tone="mint"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>testimoni</SectionLabel>

      <div className="mt-6 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <div className="relative min-h-[280px] flex-1 md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-10"
            >
              <blockquote className="font-display max-w-4xl text-[clamp(1.25rem,2vw,2rem)] font-medium leading-[1.3] tracking-tight text-dh-dark">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="size-12 rounded-md object-cover grayscale md:size-14"
                />
                <div>
                  <p className="text-base font-medium text-dh-dark md:text-lg">
                    {item.name}
                  </p>
                  <p className="text-sm font-medium text-dh-medium md:text-base">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 lg:pt-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="flex size-12 items-center justify-center rounded-full bg-white/55 text-dh-dark backdrop-blur-sm transition-transform duration-300 active:scale-95 md:size-14"
          >
            <ArrowLeft size={22} weight="regular" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Testimoni berikutnya"
            className="flex size-12 items-center justify-center rounded-full bg-white/55 text-dh-dark backdrop-blur-sm transition-transform duration-300 active:scale-95 md:size-14"
          >
            <ArrowRight size={22} weight="regular" />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
