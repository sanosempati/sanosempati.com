"use client";

import type { ElementType } from "react";
import { type Bilingual } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

type Props = {
  value: Bilingual | string;
  as?: ElementType;
  className?: string;
};

export function BilingualText({
  value,
  as: Tag = "span",
  className = "",
}: Props) {
  const { t } = useLanguage();
  return <Tag className={className}>{t(value)}</Tag>;
}

export function BilingualBlock({
  value,
  className = "",
}: {
  value: Bilingual;
  className?: string;
}) {
  return <BilingualText value={value} as="div" className={className} />;
}
