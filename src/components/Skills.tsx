"use client";

import { Graph, ListBullets } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skills, skillsIntro, ui } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { BilingualText } from "./BilingualText";
import { SectionHeading } from "./SectionHeading";
import { SectionShell } from "./SectionShell";
import { SkillsGraph } from "./SkillsGraph";

type SkillView = "graph" | "list";

function SkillsList() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-12">
      {skills.map((group, index) => (
        <motion.article
          key={group.group.en}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BilingualText
            value={group.group}
            as="h3"
            className="font-display text-[clamp(1.15rem,1.4vw,1.35rem)] font-medium tracking-tight text-dh-dark"
          />
          <BilingualText
            value={group.summary}
            as="p"
            className="mt-2 text-sm font-medium leading-relaxed text-dh-medium md:text-[0.9375rem]"
          />
          <ul className="mt-4 divide-y divide-dh-dark/15 border-t border-dh-dark/15">
            {group.items.map((item) => (
              <li
                key={item}
                className="py-3 text-[0.9375rem] font-medium text-dh-dark md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

function ViewToggle({
  view,
  onChange,
}: {
  view: SkillView;
  onChange: (next: SkillView) => void;
}) {
  const { t } = useLanguage();
  const options: { id: SkillView; label: typeof ui.graph; icon: typeof Graph }[] = [
    { id: "graph", label: ui.graph, icon: Graph },
    { id: "list", label: ui.list, icon: ListBullets },
  ];

  return (
    <div
      className="inline-flex rounded-[14px] border-[3px] border-[#17140d] bg-white p-1 shadow-[5px_5px_0_#17140d]"
      role="tablist"
      aria-label="Skills view"
    >
      {options.map((option) => {
        const active = view === option.id;
        const Icon = option.icon;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className={`inline-flex items-center gap-2 rounded-[10px] px-3 py-2 text-sm font-medium tracking-tight transition-colors ${
              active ? "bg-[#17140d] text-white" : "bg-transparent text-dh-dark"
            }`}
          >
            <Icon size={16} weight={active ? "bold" : "regular"} />
            {t(option.label)}
          </button>
        );
      })}
    </div>
  );
}

export function Skills() {
  const [view, setView] = useState<SkillView>("graph");

  return (
    <SectionShell
      id="skill"
      tone="white"
      innerClassName="section-pad py-16 md:py-[clamp(5rem,8vw,8rem)]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading
            label={skillsIntro.label}
            heading={skillsIntro.heading}
            description={view === "graph" ? skillsIntro.graphHint : skillsIntro.listHint}
            descriptionClassName="mt-3 max-w-[52ch] text-sm font-medium text-dh-medium md:text-base"
          />
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      <div className="mt-10 md:mt-14">
        <AnimatePresence mode="wait">
          {view === "graph" ? (
            <motion.div
              key="graph"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsGraph />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsList />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
