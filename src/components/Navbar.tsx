"use client";

import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { hero, navLinks } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitch } from "./LanguageSwitch";
import { openWhatsApp } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, locale } = useLanguage();

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const activeSectionRef = useRef(activeSection);

  activeSectionRef.current = activeSection;

  const syncPillStates = useCallback(() => {
    navLinks.forEach((link, index) => {
      const tl = tlRefs.current[index];
      if (!tl) return;

      activeTweenRefs.current[index]?.kill();
      activeTweenRefs.current[index] = null;

      if (activeSectionRef.current === link.href) {
        tl.progress(1);
      } else {
        tl.progress(0);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const updateActiveSection = () => {
      const offset = 140;
      let next = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          next = `#${id}`;
        }
      }

      if (window.scrollY < 160) {
        next = "";
      }

      setActiveSection(next);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const ease = "power3.out";

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        if (w === 0 || h === 0) return;

        const R = (w * w) / 4 / h + h / 2;
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0, opacity: 1 });
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 20), opacity: 0 });
        }

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          {
            scale: 1.2,
            xPercent: -50,
            duration: 0.8,
            ease,
            overwrite: "auto",
          },
          0,
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), opacity: 0, duration: 0.6, ease, overwrite: "auto" },
            0,
          );
        }

        if (hoverLabel) {
          tl.to(
            hoverLabel,
            { y: 0, opacity: 1, duration: 0.6, ease, overwrite: "auto" },
            0,
          );
        }

        tlRefs.current[index] = tl;
      });

      syncPillStates();
    };

    layout();
    window.addEventListener("resize", layout);
    if (document.fonts) {
      void document.fonts.ready.then(layout).catch(() => {});
    }

    return () => window.removeEventListener("resize", layout);
  }, [syncPillStates, locale]);

  useEffect(() => {
    syncPillStates();
  }, [activeSection, syncPillStates]);

  const handleEnter = (i: number, href: string) => {
    if (activeSectionRef.current === href) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number, href: string) => {
    if (activeSectionRef.current === href) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.3,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    setMenuOpen(false);
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[25] flex justify-center px-3 pt-3 md:px-4 md:pt-4">
        <div className="pointer-events-auto flex w-full max-w-[1100px] items-center justify-between gap-3 rounded-full border border-black/[0.06] bg-white/55 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-[20px] backdrop-saturate-150 [-webkit-backdrop-filter:blur(20px)_saturate(1.5)] md:gap-4 md:px-4 md:py-2.5">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTop();
            }}
            className="shrink-0 pl-1.5"
            aria-label="Sano Sempati — home"
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  onMouseEnter={() => handleEnter(i, link.href)}
                  onMouseLeave={() => handleLeave(i, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-3.5 text-[0.875rem] font-medium tracking-tight text-dh-dark/80 lg:px-4"
                >
                  <span
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                    className="pointer-events-none absolute bottom-0 left-1/2 z-[1] block rounded-full bg-dh-dark"
                    aria-hidden
                  />
                  <span className="relative z-[2] inline-block overflow-hidden leading-none">
                    <span className="pill-label relative z-[2] inline-block">
                      {t(link.label)}
                    </span>
                    <span
                      className="pill-label-hover pointer-events-none absolute top-0 left-0 z-[3] inline-block w-full text-center text-white"
                      aria-hidden
                    >
                      {t(link.label)}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitch className="hidden lg:inline-flex" />
            <PrimaryButton
              type="button"
              variant="nav"
              size="sm"
              onClick={() => openWhatsApp()}
              className="hidden lg:inline-flex"
            >
              {t(hero.cta)}
            </PrimaryButton>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-[#17140d] bg-white text-dh-dark shadow-[5px_5px_0_#17140d] transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#17140d] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
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
              <div className="flex items-center gap-2">
                <LanguageSwitch />
                <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} weight="bold" />
              </button>
              </div>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.button
                    key={link.href}
                    type="button"
                    onClick={() => handleNav(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-display text-left text-[clamp(2.5rem,11vw,4rem)] font-medium leading-[1.1] tracking-tight transition-opacity ${
                      isActive ? "text-white" : "text-white/45"
                    }`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.55,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    {t(link.label)}
                  </motion.button>
                );
              })}
            </nav>

            <motion.div
              className="mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <PrimaryButton
                type="button"
                variant="nav"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMenuOpen(false);
                  openWhatsApp();
                }}
              >
                {t(hero.cta)}
              </PrimaryButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
