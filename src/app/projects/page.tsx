// pages/projects.tsx
import Head from 'next/head';
import Link from 'next/link';
import Hard from '../Assets/LokiTitle.jsx';

type SubProject = {
  title: string;
  link?: string;
  abstract?: string;
};

type Project = {
  id: number;
  title: string;
  sponsor: string;
  role: string;
  details: string;
  link?: string;
  subProjects?: SubProject[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Working Safely with UAVs: Training Workers on Heights',
    sponsor: 'US Department of Labor',
    role: 'VR Developer',
    details:
      'Developed a VR training module providing an interactive experience for safety protocols with UAVs.',
    link: 'https://ascelibrary.org/doi/10.1061/JCCEE5.CPENG-5140',
  },
  {
    id: 2,
    title: 'Investigating Safety Challenges of Co-drones in Construction',
    sponsor: 'National Science Foundation',
    role: 'VR Developer',
    details:
      'Conducted experiments focusing on safety challenges of co-drones in construction sites.',
    subProjects: [
      {
        title: 'Experiment 1',
        link: 'https://www.sciencedirect.com/science/article/pii/S092658052300359X',
      },
      {
        title: 'Experiment 2',
        link: 'https://doi.org/10.1061/JCCEE5.CPENG-5225',
      },
    ],
  },
  // ...add additional project entries here
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Projects | Anderson Allen</title>
        <meta name="description" content="Projects by Anderson Allen" />
      </Head>
      <header className="mb-8 text-center">
        <Hard text="Projects" />
      </header>
      <main className="grid gap-6 md:grid-cols-2">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">
              <strong>Sponsor:</strong> {project.sponsor}
            </p>
            <p className="mt-1">
              <strong>Role:</strong> {project.role}
            </p>
            <p className="mt-2 text-gray-300">{project.details}</p>
            {project.link && (
              <p className="mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Find Out More
                </a>
              </p>
            )}
            {project.subProjects && (
              <ul className="mt-2 list-disc list-inside">
                {project.subProjects.map((sub, idx) => (
                  <li key={idx}>
                    <strong>{sub.title}</strong>
                    {sub.link && (
                      <span>
                        :{' '}
                        <a
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {sub.link}
                        </a>
                      </span>
                    )}
                    {sub.abstract && (
                      <p className="text-sm text-gray-400">{sub.abstract}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>
      <footer className="mt-8 text-center">
        <Link href="/">
          <p className="underline">← Back to Home</p>
        </Link>
      </footer>
    </div>
  );
}
