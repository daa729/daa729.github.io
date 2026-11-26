"use client";

import { useState } from "react";

/** itch.io widget (fixed 165px tall) with a placeholder until the frame loads. */
export default function GameEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[167px] w-full max-w-[552px] overflow-hidden rounded-md border border-line bg-surface">
      {!loaded && (
        <p className="absolute inset-0 flex items-center justify-center font-display text-2xl text-muted">{title}</p>
      )}
      <iframe
        src={src}
        title={`${title} on itch.io`}
        width="100%"
        height="167"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        // The widget may run scripts and open itch.io in a new tab, but can't navigate this page.
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        onLoad={() => setLoaded(true)}
        className={`block border-0 ${loaded ? "" : "invisible"}`}
      />
    </div>
  );
}
