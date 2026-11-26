"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects/", label: "Projects" },
  { href: "/experience/", label: "Experience" },
  { href: "/esports/", label: "Esports" },
  { href: "/games/", label: "Games" },
];

const normalize = (p: string) => p.replace(/\/+$/, "") || "/";

export default function SiteHeader() {
  const current = normalize(usePathname() ?? "/");

  return (
    <header className="border-b border-line">
      <div className="page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <Link href="/" className="font-display text-2xl font-semibold text-fg hover:text-white">
          Anderson Allen
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-lg">
            {links.map(({ href, label }) => {
              const active = current === normalize(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-fg underline decoration-accent decoration-2 underline-offset-8"
                        : "text-muted transition-colors hover:text-fg"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
