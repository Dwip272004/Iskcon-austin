"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CornerFrame } from "@/components/ornaments";
import { virtualTourImages } from "@/lib/data";

type Group = (typeof virtualTourImages)[number]["group"];

export default function VirtualTourGallery() {
  const [filter, setFilter] = useState<Group | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    filter === "All"
      ? virtualTourImages
      : virtualTourImages.filter((img) => img.group === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length));
  }, [visible.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length
    );
  }, [visible.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  const groups: (Group | "All")[] = ["All", "Exterior", "Interior"];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => {
              setFilter(g);
              setOpenIndex(null);
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === g
                ? "bg-gold text-white shadow-sm"
                : "bg-white text-navy border border-cream-deep hover:bg-cream"
            }`}
          >
            {g === "All" ? "All Views" : g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((img, i) => (
          <button
            key={img.key}
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-deep bg-cream text-left shadow-sm"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/0 to-transparent" />
            <CornerFrame tone="white" size={16} inset={8} />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-light backdrop-blur-sm">
                {img.group}
              </span>
              <p className="mt-1.5 font-display text-lg font-semibold text-white">
                {img.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && visible[openIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={visible[openIndex].title}
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ×
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="hidden sm:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="hidden sm:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ›
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image
                src={visible[openIndex].src}
                alt={visible[openIndex].title}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
              <CornerFrame tone="white" size={24} inset={12} />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                {visible[openIndex].group} · {openIndex + 1} of {visible.length}
              </p>
              <p className="mt-1 font-display text-xl font-semibold">
                {visible[openIndex].title}
              </p>
              <p className="mt-1 text-sm text-white/70 max-w-xl mx-auto">
                {visible[openIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
