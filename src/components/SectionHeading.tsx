"use client";

import type { Bilingual } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { BilingualText } from "./BilingualText";
import { SectionLabel } from "./SectionLabel";

type Props = {
  label: Bilingual;
  heading: Bilingual;
  description?: Bilingual;
  headingClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  label,
  heading,
  description,
  headingClassName = "font-display mt-2 max-w-2xl text-[clamp(1.5rem,2.6vw,2.75rem)] font-medium leading-[1.2] tracking-tight text-dh-dark",
  descriptionClassName = "mt-3 max-w-[52ch] text-sm font-medium text-dh-medium md:text-base",
}: Props) {
  const { locale } = useLanguage();

  return (
    <>
      <SectionLabel bilingual={label} />
      <BilingualText value={heading} as="h2" className={headingClassName} key={`heading-${locale}`} />
      {description ? (
        <BilingualText
          value={description}
          as="p"
          className={descriptionClassName}
          key={`desc-${locale}`}
        />
      ) : null}
    </>
  );
}
