import AnimatedTitle from "./AnimatedTitle";

/** Inner-page frame: animated title, optional one-line intro, then content. */
export default function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="page pt-10 sm:pt-14">
      <AnimatedTitle text={title} />
      {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
      <div className="mt-12 space-y-16">{children}</div>
    </div>
  );
}

export function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-3xl font-semibold text-fg">{title}</h2>
      {note && <p className="mt-1 text-muted">{note}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
