"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "light" | "dark" | "ghost";
  size?: "md" | "lg";
};

export function PrimaryButton({
  children,
  variant = "dark",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dh-dark/30";

  const sizes =
    size === "lg"
      ? "px-8 py-3.5 text-[0.9375rem] md:px-10 md:py-4 md:text-base"
      : "px-6 py-3 text-[0.875rem] md:px-7 md:py-3.5 md:text-[0.9375rem]";

  const variants = {
    light:
      "bg-white/70 text-dh-dark backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] hover:bg-white/90",
    dark: "bg-dh-dark text-white hover:bg-dh-dark/90",
    ghost:
      "border border-black/10 bg-white/50 text-dh-dark backdrop-blur-sm hover:bg-white/80",
  }[variant];

  return (
    <button className={`${base} ${sizes} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}
