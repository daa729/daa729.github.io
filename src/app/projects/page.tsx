// src/app/projects/page.tsx
import Head from 'next/head';
import Link from 'next/link';
import Hard from '../Assets/LokiTitle.jsx';
import { Octokit } from 'octokit';
import Image from 'next/image';

type SubProject = {
  title: string;
  link?: string;
  abstract?: string;
};

type ResearchProject = {
  id: number;
  title: string;
  sponsor: string;
  role: string;
  details: string;
  link?: string;
  subProjects?: SubProject[];
};

const researchProjects: ResearchProject[] = [
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
  {
    id: 3,
    title: 'VR NCCER: Virtual Orientation for Construction Professionals',
    sponsor: 'National Center for Construction Education & Research',
    role: 'Lead VR Developer',
    details:
      'Developed a virtual orientation program for construction professionals, adhering to NCCER standards. Ongoing project focusing on comprehensive VR training modules.',
  },
  {
    id: 4,
    title: 'Safety Challenges of UAV Integration for Workers on Heights',
    sponsor: 'NIOSH-funded Center for Construction Research and Training (CPWR)',
    role: 'VR Developer',
    details:
      'Developed a VR training module addressing safety challenges when integrating UAVs for workers at heights, focusing on risk mitigation and safe operational practices.',
    link: 'https://ascelibrary.org/doi/abs/10.1061/JCEMD4.COENG-13861',
  },
  {
    id: 5,
    title: 'Bi-Directional Human-Drone Communication',
    sponsor: 'National Science Foundation',
    role: 'VR Developer',
    details:
      'Conducted two experiments on human-drone communication in construction sites to evaluate gesture- and speech-based interactions.',
    subProjects: [
      {
        title: 'Safe Human-Drone Interaction in Construction Using Gesture and Speech Modalities',
        abstract:
          'Explored the effectiveness of gesture-based communication over speech for ensuring safety and reducing cognitive load.',
      },
      {
        title: 'Bi-directional Communication Between Humans and Drones',
        abstract:
          'Investigated the impacts of drone-initiated communication on safety and worker perceptions.',
      },
    ],
  },
  {
    id: 6,
    title: 'VirtuAI: LLM Powered Interactive VR Safety Training for Construction Workers',
    sponsor: 'TBD',
    role: 'Lead VR Developer',
    details:
      'Developing an interactive VR safety training program powered by large language models to create a highly responsive and immersive training environment for construction workers.',
  },
];

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  languages: { [key: string]: number };
};

function calculateLanguagePercentages(languages: { [key: string]: number }): { [key: string]: string } {
  const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
  const percentages: { [key: string]: string } = {};
  for (const [language, bytes] of Object.entries(languages)) {
    percentages[language] = ((bytes / totalBytes) * 100).toFixed(2);
  }
  return percentages;
}

// Set ISR revalidation time (in seconds)
export const revalidate = 3600;

export default async function ProjectsPage() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_API_KEY,
  });

  const desiredRepositories = [
    {
      url: "https://github.com/zachtyson/cnt4007-project",
      description:
        "Programmed a Bit-Torrent program using Java and virtual machines to simulate a UDP download network.",
    },
    {
      url: "https://github.com/zshenkman/grooveguru",
      description:
        "Created a prototype for an AI music suggestion tool utilizing Chat-GPT.",
    },
    {
      url: "https://github.com/daa729/AccidentProject",
      description:
        "Created an Accident Heat Map application utilizing public crash data and keying it into Google Maps API.",
    },
    {
      url: "https://github.com/Musketeers-CEN/Gator-Round-Up",
      description:
        "Used Flutter to create a Club Check in Application utilizing Firebase keyed into users' Google Accounts.",
    },
    {
      url: "https://github.com/daa729/AVLTrees",
      description: "Practice project building my first AVL Tree.",
    },
    {
      url: "https://github.com/daa729/ProgrammingLangaugeConcepts",
      description:
        "Built a custom programming language on top of the existing Java code base.",
    },
    {
      url: "https://github.com/Dance-Marathon/DM-Website",
      description:
        "Customized and optimized a large scale web project that has been passed down for nearly a decade.",
    },
    {
      url: "https://github.com/daa729/daa729.github.io",
      description:
        "The portfolio website itself—built with Next.js and Tailwind CSS to showcase my projects and experience.",
    },
  ];

  const repoPromises = desiredRepositories.map(async ({ url, description }) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      const owner = match[1];
      const repo = match[2];
      const response = await octokit.rest.repos.get({ owner, repo });
      const languagesResponse = await octokit.rest.repos.listLanguages({ owner, repo });
      return { ...response.data, languages: languagesResponse.data, description };
    }
    return null;
  });

  const repos = await Promise.all(repoPromises);
  const githubRepos = repos.filter((repo) => repo !== null) as GitHubRepo[];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Projects | Anderson Allen</title>
        <meta name="description" content="Projects by Anderson Allen" />
      </Head>
      <header className="mb-8 text-center">
        <Hard text="Projects" />
      </header>
      <main className="space-y-12">
        {/* Research Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Research Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
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
          </div>
        </section>

        {/* GitHub Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">GitHub Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {githubRepos.map((repo) => {
              const languagePercentages = calculateLanguagePercentages(repo.languages);
              return (
                <div
                  key={repo.id}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-semibold">{repo.name}</h3>
                  {repo.description && (
                    <p className="mt-2 text-gray-300">{repo.description}</p>
                  )}
                  <div className="mt-2">
                    {Object.entries(languagePercentages).map(([language, percentage]) => (
                      <div key={language} className="flex items-center">
                        <span className="mr-2 text-sm">{language}:</span>
                        <div className="w-32 h-2 bg-gray-600 mr-2">
                          <div
                            style={{ width: `${percentage}%` }}
                            className="h-full bg-blue-500"
                          ></div>
                        </div>
                        <span className="text-sm">{percentage}%</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block underline"
                  >
                    View Repository
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="mt-8 text-center">
        <Link href="/">
          <p className="underline">← Back to Home</p>
        </Link>
      </footer>
    </div>
  );
}
