"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/content";
import { ProjectLightboxHost } from "./ProjectLightbox";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <SectionShell
      id="proyek"
      tone="white"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>proyek</SectionLabel>

      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={`${project.title}-${project.year}`}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.7,
              delay: (index % 2) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <button
              type="button"
              onClick={() => setActive(project)}
              className="w-full cursor-pointer text-left"
              aria-label={`Perbesar gambar ${project.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-[3px] border-[#17140d] bg-[#f8f7f5] shadow-[6px_6px_0_#17140d]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-3 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 45vw"
                />
              </div>
            </button>
            <div className="mt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[clamp(1.125rem,1.35vw,1.375rem)] font-medium leading-snug tracking-tight text-dh-dark">
                  {project.title}
                </h3>
                <span className="shrink-0 text-sm font-medium text-dh-medium">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 text-[clamp(0.9375rem,1.05vw,1.0625rem)] font-medium text-dh-medium">
                {project.subtitle}
              </p>
              {project.url ? (
                <a
                  href={project.url}
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
      </div>

      <ProjectLightboxHost project={active} onClose={() => setActive(null)} />
    </SectionShell>
  );
}
