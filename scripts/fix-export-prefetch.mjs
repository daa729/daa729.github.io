// Works around a Next.js 16 static-export mismatch in link prefetching.
//
// The export writes per-segment prefetch files in a folder, e.g.
//   out/projects/__next.projects/__PAGE__.txt
// but the client router requests a flat, dotted name:
//   out/projects/__next.projects.__PAGE__.txt
// On a static host the request 404s, so prefetching fails and each click waits
// on a full page fetch. This copies every file under an `__next.*` folder to
// the dotted name next to it. Safe to remove once Next.js exports both forms.

import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";

/** Every file below `dir`, as paths. */
function filesUnder(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

let copied = 0;

function visit(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const file of filesUnder(path)) {
        // out/projects/__next.projects/__PAGE__.txt -> out/projects/__next.projects.__PAGE__.txt
        const flat = join(dir, relative(dir, file).split(sep).join("."));
        if (!existsSync(flat)) {
          copyFileSync(file, flat);
          copied++;
        }
      }
    } else {
      visit(path);
    }
  }
}

if (!existsSync(OUT)) {
  console.error(`fix-export-prefetch: "${OUT}" not found; run next build first.`);
  process.exit(1);
}
visit(OUT);
console.log(`fix-export-prefetch: added ${copied} prefetch file(s).`);
