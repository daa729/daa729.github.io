import type { Metadata } from "next";
import PageShell, { Section } from "@/components/PageShell";
import Entry, { EntryGrid } from "@/components/Entry";
import ResearchProjects from "@/components/ResearchProjects";
import BrandedGameCaseStudy from "@/components/BrandedGameCaseStudy";
import Terms from "@/components/Terms";
import { clientProjects, clientTerms, featuredRepos, researchTerms } from "@/data/projects";
import { getRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description: "Client work, research, and software projects by Anderson Allen.",
};

export default async function ProjectsPage() {
  const repos = await getRepos(featuredRepos);

  return (
    <PageShell
      title="Projects"
      intro="Interactive builds for brands, published construction-safety research, and code. Unfamiliar terms are explained at the bottom of the page."
    >
      <Section
        title="Client work"
        note="Built at Multi Image Group for live brand activations. Clients are described by industry for confidentiality."
      >
        <BrandedGameCaseStudy />
        <div className="mt-12">
          <EntryGrid>
            {clientProjects.map((p) => (
              <Entry key={p.title} title={p.title} subtitle={p.client} stat={p.stat}>
                <p>{p.summary}</p>
              </Entry>
            ))}
          </EntryGrid>
        </div>
      </Section>

      <Section
        title="Research"
        note="Virtual reality (VR) construction-safety research at the UF Rinker School of Construction Management, funded by federal agencies and industry groups."
      >
        <ResearchProjects />
      </Section>

      <Section title="On GitHub">
        <EntryGrid>
          {repos.map((repo) => (
            <Entry key={repo.url} title={repo.name}>
              <p>{repo.description}</p>
              {repo.languages.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted" aria-label="Languages">
                  {repo.languages.slice(0, 4).map(({ name, percent }) => (
                    <li key={name} className="flex items-center gap-3">
                      <span className="w-20 shrink-0 truncate">{name}</span>
                      <span className="h-1.5 w-28 shrink-0 rounded-full bg-line" aria-hidden="true">
                        <span
                          className="block h-full rounded-full bg-accent"
                          style={{ width: `${Math.max(percent, 2)}%` }}
                        />
                      </span>
                      <span>{percent.toFixed(1)}%</span>
                    </li>
                  ))}
                </ul>
              )}
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block">
                View repository
              </a>
            </Entry>
          ))}
        </EntryGrid>
      </Section>

      <Terms items={[...clientTerms, ...researchTerms]} />
    </PageShell>
  );
}
