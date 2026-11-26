"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";

const quicky = localFont({ src: "../fonts/quicky-story-font/QuickyStory-8Oa82.otf" });
const diaclone = localFont({ src: "../fonts/dia-clone-font/DiacloneGradient-KV7a7.otf" });
const runtoe = localFont({ src: "../fonts/runtoe-font/Runtoe-R9vKo.otf" });
const superPencil = localFont({ src: "../fonts/super-pencil-font/SuperPencil-ARGw7.ttf" });
const youchat = localFont({ src: "../fonts/youchat-font/Youchat-DYYP9.otf" });

const FONTS = [quicky, diaclone, runtoe, superPencil, youchat].map((f) => f.style.fontFamily);
const INTERVAL_MS = 500;

/** Page heading whose letters cycle through display fonts. */
export default function AnimatedTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-letter]"));

    const shuffle = () => {
      for (const letter of letters) {
        letter.style.fontFamily = FONTS[Math.floor(Math.random() * FONTS.length)];
      }
    };

    shuffle();
    // Respect users who have asked the OS to reduce motion: one random pass, no loop.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(shuffle, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <h1
      ref={ref}
      aria-label={text}
      className="flex h-[1.25em] items-center overflow-hidden text-[clamp(3rem,11vw,5.5rem)] leading-none text-fg"
    >
      {text.split("").map((char, i) => (
        <span key={i} data-letter aria-hidden="true">
          {char}
        </span>
      ))}
    </h1>
  );
}
