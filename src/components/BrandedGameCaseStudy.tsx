import Facts from "./Facts";
import { brandedGame } from "@/data/projects";

const fmt = (n: number) => n.toLocaleString("en-US");

/** Featured client build with its real engagement numbers. */
export default function BrandedGameCaseStudy() {
  const g = brandedGame;
  const total = g.channels.reduce((sum, c) => sum + c.value, 0);

  return (
    <article className="border-t border-line pt-6">
      <h3 className="font-display text-3xl font-semibold leading-tight text-fg">{g.title}</h3>
      <p className="mt-1 font-medium text-fg/90">{g.client}</p>
      <p className="mt-3 max-w-2xl text-fg/80">{g.summary}</p>

      <div className="mt-6">
        <Facts items={g.headline} />
      </div>

      <h4 className="mt-8 font-display text-xl font-semibold text-fg">Where it was played</h4>
      <ul className="mt-3 max-w-2xl space-y-2">
        {g.channels.map((c) => {
          const pct = (c.value / total) * 100;
          return (
            <li key={c.label} className="grid grid-cols-[8.5rem_1fr_auto] items-center gap-3 text-sm">
              <span className="text-fg/90">{c.label}</span>
              <span className="h-2 rounded-full bg-line" aria-hidden="true">
                <span className="block h-full rounded-full bg-accent" style={{ width: `${Math.max(pct, 0.6)}%` }} />
              </span>
              <span className="tabular-nums text-muted">
                {fmt(c.value)} <span className="sr-only">plays, </span>({pct < 1 ? pct.toFixed(1) : Math.round(pct)}%)
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        {fmt(total)} plays in all. {fmt(g.guestPlays)} were guest plays from people who scanned a walk-up QR code and
        skipped the sign-up form.
      </p>
    </article>
  );
}
