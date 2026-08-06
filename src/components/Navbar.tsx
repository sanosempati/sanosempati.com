"use client";

import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { hero, navLinks } from "@/lib/content";
import { useContact } from "./ContactProvider";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setOpen: setContactOpen } = useContact();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href === "#kontak") {
      setContactOpen(true);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[25] flex justify-center px-3 pt-3 md:px-4 md:pt-4">
        <div className="pointer-events-auto flex w-full max-w-[920px] items-center justify-between gap-3 rounded-full border border-black/[0.06] bg-white/55 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-[20px] backdrop-saturate-150 [-webkit-backdrop-filter:blur(20px)_saturate(1.5)] md:gap-6 md:px-4 md:py-2.5">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTop();
            }}
            className="shrink-0 pl-1.5"
            aria-label="Sano Sempati — beranda"
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex lg:gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="rounded-full px-3 py-2 text-[0.875rem] font-medium tracking-tight text-dh-dark/80 transition-colors duration-300 hover:text-dh-dark lg:px-3.5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hidden rounded-full bg-dh-dark px-4 py-2 text-[0.8125rem] font-medium text-white transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-dh-dark/90 active:scale-[0.98] md:inline-flex lg:px-5 lg:py-2.5 lg:text-[0.875rem]"
            >
              {hero.cta}
            </button>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full bg-dh-dark/5 text-dh-dark transition-colors hover:bg-dh-dark/10 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Buka menu"
            >
              <List size={20} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black/40 backdrop-blur-xl section-pad"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="mt-3 flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-xl">
              <Logo invert className="h-7 md:h-8" />
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="font-display text-left text-[clamp(2.5rem,11vw,4rem)] font-medium leading-[1.1] tracking-tight text-white"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.55,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setContactOpen(true);
              }}
              className="mb-10 w-full rounded-full bg-white py-4 text-base font-medium text-dh-dark transition-transform active:scale-[0.98]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              {hero.cta}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
