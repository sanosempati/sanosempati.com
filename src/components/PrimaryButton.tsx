"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "nav";
  size?: "sm" | "md" | "lg";
};

export function PrimaryButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base =
    "btn-memphis inline-flex items-center justify-center rounded-[14px] border-[3px] border-solid border-[#17140d] font-medium tracking-tight transition-[transform,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17140d]/40 focus-visible:ring-offset-2";

  const sizes = {
    sm: "btn-memphis--sm px-4 py-2 text-[0.8125rem]",
    md: "btn-memphis--md px-6 py-3 text-[0.875rem] md:px-7 md:py-3.5 md:text-[0.9375rem]",
    lg: "btn-memphis--lg px-8 py-3.5 text-[0.9375rem] md:px-10 md:py-4 md:text-base",
  }[size];

  const variants = {
    primary: "bg-[#ff5b57] text-white",
    secondary: "bg-white text-[#17140d]",
    nav: "bg-[#12b3a4] text-white",
  }[variant];

  return (
    <button className={`${base} ${sizes} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}
