"use client";

import { motion } from "framer-motion";
import { experience, experienceIntro } from "@/lib/content";
import { CompanyBadge } from "./CompanyBadge";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Experience() {
  return (
    <SectionShell
      id="pengalaman"
      tone="light"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>{experienceIntro.label}</SectionLabel>
      <h2 className="font-display mt-2 max-w-2xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-dh-dark">
        {experienceIntro.heading}
      </h2>

      <div className="mt-10 md:mt-14">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.org}`}
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
            <p className="pt-1 text-sm font-medium text-dh-medium md:text-base">
              {item.period}
            </p>
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
                  <h3 className="font-display text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-[1.25] tracking-tight text-dh-dark">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] font-medium text-dh-medium md:text-base">
                    {item.org}
                  </p>
                </div>
              </div>
              <p className="mt-3 max-w-[62ch] text-[0.9375rem] font-medium leading-relaxed text-dh-medium md:text-base">
                {item.summary}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
