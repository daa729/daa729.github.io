// pages/experience.tsx
import Head from 'next/head';
import Link from 'next/link';
import Hard from '../Assets/LokiTitle.jsx';

type Experience = {
  company: string;
  title: string;
  years: string;
  description: string;
  image: string;
  link?: string;
};

const experiences: Experience[] = [
  {
    company: "J. Wayne Reitz Union",
    title: "Esports Consultant",
    years: "Jan 2025 – Present",
    description:
      "Developed policies and guidelines for Reitz Union's Esports Space and researched similar programs for a successful launch.",
    image: "/images/reitz-logo.png", // update with your actual image path
  },
  {
    company: "University of Florida Rinker School of Construction Management",
    title: "Unity / VR Developer",
    years: "Aug 2021 – Present",
    description:
      "Developed interactive construction scenes using Unity, Blender, C#, and AWS for multiple research projects.",
    image:
      "https://dcp.ufl.edu/rinker/wp-content/uploads/sites/40/2021/09/FullColor_RinkerSeal-1.png",
  },
  // ...add additional experience entries here
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Experience | Anderson Allen</title>
        <meta name="description" content="Work experience of Anderson Allen" />
      </Head>
      <header className="mb-8 text-center">
        <Hard text="Experience" />
      </header>
      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={exp.image}
              alt={`${exp.company} logo`}
              className="w-full h-32 object-contain mb-4"
            />
            <h2 className="text-2xl font-semibold">{exp.company}</h2>
            <h3 className="text-xl">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.years}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block underline"
              >
                Learn More
              </a>
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
