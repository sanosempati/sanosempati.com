"use client";

import { useMemo, useState } from "react";
import { companyInitials, faviconUrl } from "@/lib/favicon";

type Props = {
  label: string;
  domain?: string;
  badge?: string;
  size?: "sm" | "md";
  className?: string;
};

const shellBySize = {
  sm: "size-8 rounded-[10px] border-[2.5px] shadow-[3px_3px_0_#17140d]",
  md: "size-10 rounded-[12px] border-[2.5px] shadow-[4px_4px_0_#17140d]",
} as const;

const iconBySize = {
  sm: "size-[18px]",
  md: "size-[22px]",
} as const;

export function CompanyBadge({
  label,
  domain,
  badge,
  size = "sm",
  className = "",
}: Props) {
  const sources = useMemo(() => {
    const list: string[] = [];
    if (badge) list.push(`/badges/${badge}.png`);
    if (domain) {
      list.push(faviconUrl(domain, 128));
      list.push(
        `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`,
      );
    }
    return list;
  }, [badge, domain]);

  const [index, setIndex] = useState(0);
  const src = sources[index];
  const failed = index >= sources.length;

  const shell = `${shellBySize[size]} inline-flex shrink-0 items-center justify-center overflow-hidden border-[#17140d] bg-white ${className}`;

  if (failed || !src) {
    return (
      <span className={shell} aria-hidden>
        <span className="font-display text-[0.625rem] font-semibold tracking-tight text-dh-dark">
          {companyInitials(label)}
        </span>
      </span>
    );
  }

  return (
    <span className={shell} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className={`${iconBySize[size]} object-contain`}
        loading="lazy"
        decoding="async"
        onError={() => setIndex((current) => current + 1)}
      />
    </span>
  );
}
