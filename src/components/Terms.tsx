import type { Term } from "@/data/terms";

/** Plain-language explanations of jargon used on a page. */
export default function Terms({ items, title = "Terms on this page" }: { items: Term[]; title?: string }) {
  return (
    <section aria-labelledby="terms-heading" className="border-t border-line pt-8">
      <h2 id="terms-heading" className="font-display text-2xl font-semibold text-fg">
        {title}
      </h2>
      <dl className="mt-5 grid gap-x-12 gap-y-4 sm:grid-cols-2">
        {items.map(({ term, meaning }) => (
          <div key={term}>
            <dt className="font-medium text-fg">{term}</dt>
            <dd className="text-muted">{meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
