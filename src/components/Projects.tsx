"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { SectionShell } from "./SectionShell";

export function Projects() {
  return (
    <SectionShell
      id="proyek"
      tone="white"
      joinTop
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <SectionLabel>proyek</SectionLabel>

      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.7,
              delay: (index % 2) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-dh-light">
              <Image
                src={project.bg}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 45vw"
              />
              <div className="absolute inset-[12%] overflow-hidden rounded-lg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 80vw, 35vw"
                />
              </div>
            </div>
            <h3 className="font-display mt-5 text-[clamp(1.25rem,1.5vw,1.5rem)] font-medium tracking-tight text-dh-dark">
              {project.title}
            </h3>
            <p className="mt-1 text-[clamp(0.9375rem,1.1vw,1.125rem)] font-medium text-dh-medium">
              {project.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
