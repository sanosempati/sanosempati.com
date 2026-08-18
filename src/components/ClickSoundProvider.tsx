"use client";

import { useEffect, useRef, type ReactNode } from "react";

const CLICK_SRC = "/sounds/click.mp3";
const VOLUME = 0.35;
/** Hindari dobel-play dari multi-pointer / bubbling sangat cepat */
const MIN_INTERVAL_MS = 45;

export function ClickSoundProvider({ children }: { children: ReactNode }) {
  const poolRef = useRef<HTMLAudioElement[]>([]);
  const indexRef = useRef(0);
  const lastPlayRef = useRef(0);

  useEffect(() => {
    // Pool kecil supaya klik cepat berturut-turut tidak terpotong
    poolRef.current = Array.from({ length: 4 }, () => {
      const audio = new Audio(CLICK_SRC);
      audio.preload = "auto";
      audio.volume = VOLUME;
      return audio;
    });

    const playClick = () => {
      const now = performance.now();
      if (now - lastPlayRef.current < MIN_INTERVAL_MS) return;
      lastPlayRef.current = now;

      const pool = poolRef.current;
      if (!pool.length) return;

      const audio = pool[indexRef.current % pool.length];
      indexRef.current += 1;

      try {
        audio.currentTime = 0;
        void audio.play();
      } catch {
        // ignore play failures (autoplay policies, etc.)
      }
    };

    const onPointerDown = () => playClick();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = event.target as HTMLElement | null;
      if (!target?.closest("button, a, [role='button'], [role='menuitem']")) {
        return;
      }
      playClick();
    };

    // pointerdown = mouse + touch + pen (satu event, tidak dobel dengan click)
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
      poolRef.current.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
      poolRef.current = [];
    };
  }, []);

  return children;
}
