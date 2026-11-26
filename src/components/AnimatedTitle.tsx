"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";

const quicky = localFont({ src: "../fonts/quicky-story-font/QuickyStory-8Oa82.latin.woff2" });
const diaclone = localFont({ src: "../fonts/dia-clone-font/DiacloneGradient-KV7a7.latin.woff2" });
const runtoe = localFont({ src: "../fonts/runtoe-font/Runtoe-R9vKo.latin.woff2" });
const superPencil = localFont({ src: "../fonts/super-pencil-font/SuperPencil-ARGw7.latin.woff2" });
const youchat = localFont({ src: "../fonts/youchat-font/Youchat-DYYP9.latin.woff2" });

const FONTS = [quicky, diaclone, runtoe, superPencil, youchat].map((f) => f.style.fontFamily);
const INTERVAL_MS = 500;

const randomFont = () => FONTS[Math.floor(Math.random() * FONTS.length)];

/**
 * Page heading whose letters cycle through display fonts.
 *
 * The fonts have very different glyph widths, so each letter gets a fixed slot
 * as wide as its widest font, with the glyph centered in it. Shuffling then
 * never changes the spacing or moves anything after the title. Slots are in
 * em, so they scale with the heading's responsive font size.
 */
export default function AnimatedTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-letter]"));
    let cancelled = false;
    let timer: number | undefined;

    const shuffle = () => {
      for (const letter of letters) letter.style.fontFamily = randomFont();
    };

    const lockWidths = () => {
      const fontSize = parseFloat(getComputedStyle(el).fontSize);
      for (const letter of letters) {
        letter.style.width = "";
        let widest = 0;
        for (const font of FONTS) {
          letter.style.fontFamily = font;
          widest = Math.max(widest, letter.getBoundingClientRect().width);
        }
        letter.style.width = `${widest / fontSize}em`;
      }
    };

    // Measure only once every font has loaded; fallback metrics would give the wrong slots.
    Promise.all(FONTS.map((font) => document.fonts.load(`1em ${font}`)))
      .catch(() => undefined)
      .then(() => {
        if (cancelled) return;
        lockWidths();
        shuffle();
        // Respect users who have asked the OS to reduce motion: one random pass, no loop.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        timer = window.setInterval(shuffle, INTERVAL_MS);
      });

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [text]);

  return (
    <h1
      ref={ref}
      aria-label={text}
      className="flex h-[1.25em] items-center overflow-hidden text-[clamp(3rem,11vw,5.5rem)] leading-none text-fg"
    >
      {Array.from(text).map((char, i) => (
        <span key={i} data-letter aria-hidden="true" className="shrink-0 text-center">
          {/* A plain space would collapse to zero width inside a flex item. */}
          {char === " " ? " " : char}
        </span>
      ))}
    </h1>
  );
}
