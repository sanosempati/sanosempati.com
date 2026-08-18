import type { ReactNode } from "react";

export type SectionTone = "light" | "dark" | "white" | "sky" | "mint" | "peach";

const tones: Record<SectionTone, string> = {
  light: "bg-dh-light text-dh-dark",
  white: "bg-white text-dh-dark",
  dark: "bg-dh-dark text-white",
  sky: "bg-dh-sky text-dh-dark",
  mint: "bg-dh-mint text-dh-dark",
  peach: "bg-dh-peach text-dh-dark",
};

const paperByTone: Record<SectionTone, string> = {
  light: "paper-texture paper-texture--light",
  white: "paper-texture paper-texture--light",
  dark: "paper-texture paper-texture--dark",
  sky: "paper-texture paper-texture--sky",
  mint: "paper-texture paper-texture--mint",
  peach: "paper-texture paper-texture--peach",
};

type Props = {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Gabung dengan section sebelumnya (warna sama) */
  joinTop?: boolean;
  /** Gabung dengan section berikutnya (warna sama) */
  joinBottom?: boolean;
  /** Matikan paper texture (untuk media/illustration) */
  paper?: boolean;
  /** Full-bleed: tanpa padding shell & tanpa radius panel */
  flush?: boolean;
};

export function SectionShell({
  id,
  tone = "white",
  children,
  className = "",
  innerClassName = "",
  joinTop = false,
  joinBottom = false,
  paper = true,
  flush = false,
}: Props) {
  const shellJoin = [
    flush ? "section-shell--flush" : "",
    joinTop ? "section-shell--join-top" : "",
    joinBottom ? "section-shell--join-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const panelJoin = [
    flush ? "section-panel--flush" : "",
    joinTop ? "section-panel--join-top" : "",
    joinBottom ? "section-panel--join-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={`section-shell ${shellJoin} ${className}`}>
      <div
        className={`section-panel relative overflow-hidden ${tones[tone]} ${panelJoin} ${innerClassName}`}
      >
        {paper ? <div className={paperByTone[tone]} aria-hidden /> : null}
        <div className="relative z-[1] min-h-full">{children}</div>
      </div>
    </section>
  );
}
