"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassMinus, MagnifyingGlassPlus, X } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

const MIN_SCALE = 1;
const MAX_SCALE = 4;

export function ProjectLightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);

  const zoomBy = useCallback((delta: number) => {
    setScale((current) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current + delta));
      if (next <= MIN_SCALE) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "+" || event.key === "=") zoomBy(0.4);
      if (event.key === "-" || event.key === "_") zoomBy(-0.4);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, zoomBy]);

  const onWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    zoomBy(event.deltaY < 0 ? 0.25 : -0.25);
  };

  const onPointerDown = (event: React.PointerEvent) => {
    if (scale <= MIN_SCALE) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    setOffset({
      x: drag.current.originX + (event.clientX - drag.current.startX),
      y: drag.current.originY + (event.clientY - drag.current.startY),
    });
  };

  const endDrag = (event: React.PointerEvent) => {
    if (drag.current?.pointerId === event.pointerId) drag.current = null;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="section-pad flex items-center justify-between gap-4 py-4 text-white"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-medium">{project.title}</p>
          <p className="truncate text-sm font-medium text-white/70">
            {project.subtitle} · {project.year}
          </p>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white/80"
              onClick={(event) => event.stopPropagation()}
            >
              Link
            </a>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-white bg-transparent text-white"
            onClick={() => zoomBy(-0.4)}
            aria-label="Perkecil"
          >
            <MagnifyingGlassMinus size={18} weight="bold" />
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-white bg-transparent text-white"
            onClick={() => zoomBy(0.4)}
            aria-label="Perbesar"
          >
            <MagnifyingGlassPlus size={18} weight="bold" />
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[14px] border-[3px] border-white bg-white text-dh-dark"
            onClick={onClose}
            aria-label="Tutup"
          >
            <X size={18} weight="bold" />
          </button>
        </div>
      </div>

      <div
        className="relative min-h-0 flex-1 overflow-hidden px-4 pb-8"
        onClick={(event) => event.stopPropagation()}
        onWheel={onWheel}
      >
        <div
          className={`relative mx-auto flex h-full max-w-5xl items-center justify-center ${
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
          }`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClick={() => {
            if (drag.current) return;
            if (scale === MIN_SCALE) zoomBy(1);
          }}
        >
          <motion.div
            className="relative aspect-[16/10] w-full max-h-[78dvh] overflow-hidden rounded-[14px] border-[3px] border-white will-change-transform"
            style={{
              scale,
              x: offset.x,
              y: offset.y,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain bg-dh-light"
              sizes="90vw"
              priority
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectLightboxHost({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project ? <ProjectLightbox project={project} onClose={onClose} /> : null}
    </AnimatePresence>
  );
}
