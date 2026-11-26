/**
 * One item on a page (a job, project, program). Entries are separated by a
 * hairline rule rather than boxed, so lists read as lists.
 */
export default function Entry({
  title,
  subtitle,
  meta,
  stat,
  media,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Muted secondary line: dates, sponsor, etc. */
  meta?: string;
  /** A headline number for this entry, shown in the accent color. */
  stat?: string;
  /** Optional logo or badge shown to the left. */
  media?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <article className="flex min-w-0 gap-5 border-t border-line pt-6">
      {media && <div className="shrink-0">{media}</div>}
      <div className="min-w-0 flex-1 break-words">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-display text-2xl font-semibold leading-tight text-fg">{title}</h3>
          {stat && <p className="font-display text-xl font-semibold text-accent">{stat}</p>}
        </div>
        {subtitle && <p className="mt-1 font-medium text-fg/90">{subtitle}</p>}
        {meta && <p className="text-sm text-muted">{meta}</p>}
        {children && <div className="mt-3 text-fg/80">{children}</div>}
      </div>
    </article>
  );
}

/** Two-column list of entries on wide screens, one column on phones. */
export function EntryGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">{children}</div>;
}

/** Bullet list used inside entries. */
export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-line">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
