import Entry, { EntryGrid } from "./Entry";
import { researchProjects } from "@/data/projects";

export default function ResearchProjects() {
  return (
    <EntryGrid>
      {researchProjects.map((project) => (
        <Entry
          key={project.title}
          title={project.title}
          subtitle={project.role}
          meta={project.sponsor ? `Funded by ${project.sponsor}` : undefined}
        >
          <p>{project.details}</p>
          {project.publications && (
            <ul className="mt-4 space-y-3">
              {project.publications.map((pub) => (
                <li key={pub.link}>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="link font-medium text-fg">
                    {pub.title}
                  </a>
                  <p className="text-sm italic text-muted">{pub.journal}</p>
                </li>
              ))}
            </ul>
          )}
          {project.subProjects && (
            <ul className="mt-4 space-y-3">
              {project.subProjects.map((sub) => (
                <li key={sub.title}>
                  <p className="font-medium text-fg">{sub.title}</p>
                  <p className="text-sm text-muted">{sub.abstract}</p>
                </li>
              ))}
            </ul>
          )}
        </Entry>
      ))}
    </EntryGrid>
  );
}
