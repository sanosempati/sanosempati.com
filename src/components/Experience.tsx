"use client";

import { motion } from "framer-motion";
import { experience, experienceIntro } from "@/lib/content";
import { BilingualText } from "./BilingualText";
import { CompanyBadge } from "./CompanyBadge";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";

export function Experience() {
  return (
    <SectionShell
      id="pengalaman"
      tone="light"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionHeading label={experienceIntro.label} heading={experienceIntro.heading} />

      <div className="mt-10 md:mt-14">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role.en}-${item.org}`}
            className="grid grid-cols-1 gap-3 border-t border-dh-dark/15 py-8 md:grid-cols-[minmax(10rem,0.35fr)_1fr] md:gap-10 md:py-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: Math.min(index * 0.06, 0.18),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <BilingualText
              value={item.period}
              as="p"
              className="pt-1 text-sm font-medium text-dh-medium md:text-base"
            />
            <div>
              <div className="flex items-start gap-3">
                <CompanyBadge
                  label={item.org}
                  domain={item.domain}
                  badge={item.badge}
                  size="md"
                  className="mt-0.5"
                />
                <div className="min-w-0">
                  <BilingualText
                    value={item.role}
                    as="h3"
                    className="font-display text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-[1.25] tracking-tight text-dh-dark"
                  />
                  <p className="mt-1 text-[0.9375rem] font-medium text-dh-medium md:text-base">
                    {item.org}
                  </p>
                </div>
              </div>
              <BilingualText
                value={item.summary}
                as="p"
                className="mt-3 max-w-[62ch] text-[0.9375rem] font-medium leading-relaxed text-dh-medium md:text-base"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
