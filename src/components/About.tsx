"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { PrimaryButton } from "./PrimaryButton";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";
import { useContact } from "./ContactProvider";

export function About() {
  const { setOpen } = useContact();

  return (
    <SectionShell
      id="tentang"
      tone="white"
      joinBottom
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div>
          <SectionLabel>{about.label}</SectionLabel>
          <motion.div
            className="mt-8 w-[42%] max-w-[180px] overflow-hidden rounded-lg md:mt-16 md:w-[40%] md:max-w-none"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={about.image}
              alt="Sano Sempati"
              width={400}
              height={400}
              className="aspect-square w-full object-cover grayscale"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display whitespace-pre-line text-[clamp(1.75rem,3.2vw,3.25rem)] font-medium leading-[1.15] tracking-tight text-dh-dark">
            {about.heading}
          </h2>
          <p className="mt-8 max-w-[58ch] text-[clamp(1rem,1.2vw,1.25rem)] font-medium leading-[1.55] text-dh-medium">
            {about.body}
          </p>
          <div className="mt-10">
            <PrimaryButton onClick={() => setOpen(true)}>{about.cta}</PrimaryButton>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
