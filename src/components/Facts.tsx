export type Fact = { value: string; label: string };

const LG_COLS: Record<number, string> = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** A row of headline numbers, divided by rules rather than boxed. */
export default function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className={`grid grid-cols-2 gap-y-6 border-y border-line py-6 ${LG_COLS[items.length] ?? "lg:grid-cols-4"}`}>
      {items.map((f, i) => (
        <div key={f.value} className={`flex flex-col-reverse px-4 ${i % 2 ? "border-l border-line" : ""} lg:border-l lg:first:border-l-0`}>
          <dt className="mt-1 text-sm leading-snug text-muted">{f.label}</dt>
          <dd className="font-display text-4xl font-bold leading-none text-accent">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
