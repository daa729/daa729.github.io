import type { Metadata } from "next";
import Image from "next/image";
import PageShell, { Section } from "@/components/PageShell";
import Entry, { Bullets } from "@/components/Entry";
import { education, experiences, type Experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Anderson Allen.",
};

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3);
}

/** Uniform 64px logo tile. Logos sit on white so mixed artwork looks consistent. */
function Logo({ exp }: { exp: Experience }) {
  if (!exp.image) {
    return (
      <div
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-md border border-line bg-surface font-display text-xl font-bold text-fg"
      >
        {initials(exp.company)}
      </div>
    );
  }
  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-white p-1.5">
      <Image
        src={exp.image}
        alt={`${exp.company} logo`}
        width={64}
        height={64}
        className="max-h-full w-auto object-contain"
      />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <PageShell title="Experience" intro="Most recent first.">
      <div className="max-w-3xl space-y-10">
        {experiences.map((exp) => (
          <Entry
            key={`${exp.company}-${exp.title}`}
            title={exp.company}
            subtitle={exp.title}
            meta={exp.years}
            media={<Logo exp={exp} />}
          >
            <Bullets items={exp.highlights} />
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block">
                Learn more
              </a>
            )}
          </Entry>
        ))}
      </div>

      <Section title="Education">
        <div className="max-w-3xl">
          <Entry title={education.school} subtitle={education.degree} meta={education.years}>
            <p>Activities: {education.activities.join(", ")}.</p>
          </Entry>
        </div>
      </Section>
    </PageShell>
  );
}
