import type { Metadata } from "next";
import PageShell, { Section } from "@/components/PageShell";
import Entry, { EntryGrid } from "@/components/Entry";
import Facts from "@/components/Facts";
import Terms from "@/components/Terms";
import { builtAtUF, esportsStats, esportsTerms, ongoing, speaking, type EsportsItem } from "@/data/esports";

export const metadata: Metadata = {
  title: "Esports",
  description: "Collegiate esports programs, spaces, and events Anderson Allen has built and led.",
};

function Steps({ steps }: { steps: NonNullable<EsportsItem["steps"]> }) {
  return (
    <ol className="mt-4 space-y-3 border-l border-line pl-5">
      {steps.map((s) => (
        <li key={s.when} className="relative">
          <span aria-hidden="true" className="absolute -left-[1.6rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="text-sm font-medium text-fg">{s.when}</p>
          <p>{s.what}</p>
        </li>
      ))}
    </ol>
  );
}

function Item({ item }: { item: EsportsItem }) {
  return (
    <Entry title={item.title} subtitle={item.role} meta={item.years}>
      <p>{item.summary}</p>
      {item.steps && <Steps steps={item.steps} />}
    </Entry>
  );
}

export default function EsportsPage() {
  const [featured, ...rest] = builtAtUF;

  return (
    <PageShell
      title="Esports"
      intro="Programs, spaces, and events I've built and led in collegiate esports. Unfamiliar terms are explained at the bottom of the page."
    >
      <Facts items={esportsStats} />

      <Section title="Building UF Esports">
        <div className="max-w-3xl">
          <Item item={featured} />
        </div>
        <div className="mt-10">
          <EntryGrid>
            {rest.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </EntryGrid>
        </div>
      </Section>

      <Section title="Speaking and conferences">
        <EntryGrid>
          {speaking.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </EntryGrid>
      </Section>

      <Section title="Now">
        <EntryGrid>
          {ongoing.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </EntryGrid>
      </Section>

      <Terms items={esportsTerms} />
    </PageShell>
  );
}
