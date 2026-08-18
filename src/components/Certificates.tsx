"use client";

import { motion } from "framer-motion";
import { certificates, certificatesIntro } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

export function Certificates() {
  return (
    <SectionShell
      id="sertifikat"
      tone="light"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>{certificatesIntro.label}</SectionLabel>
      <h2 className="font-display mt-2 max-w-2xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-dh-dark">
        {certificatesIntro.heading}
      </h2>

      <div className="mt-10 md:mt-14">
        {certificates.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");
          const meta = [item.issuer, item.issueDate].filter(Boolean).join(" · ");
          const className =
            "group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-dh-dark/15 py-7 md:gap-8 md:py-9";

          const body = (
            <>
              <span className="pt-1 text-sm font-medium text-dh-medium md:text-base">
                {number}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-dh-medium">
                  {meta}
                </p>
                <h3 className="font-display mt-2 text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-[1.25] tracking-tight text-dh-dark transition-colors group-hover:text-dh-dark/70">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-3 max-w-[62ch] text-[0.9375rem] font-medium leading-relaxed text-dh-medium md:text-base">
                    {item.description}
                  </p>
                ) : null}
                {item.skills.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-dh-dark/15 bg-white px-3 py-1 text-xs font-medium text-dh-dark"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {item.credentialUrl ? (
                <ArrowIcon className="mt-1 shrink-0 text-dh-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              ) : (
                <span className="mt-1 w-[22px] shrink-0" aria-hidden />
              )}
            </>
          );

          return (
            <motion.div
              key={`${item.title}-${item.issueDate}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.05, 0.16),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.credentialUrl ? (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  aria-label={`View certificate ${item.title}`}
                >
                  {body}
                </a>
              ) : (
                <div className={className}>{body}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
