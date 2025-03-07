// src/app/experience/page.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import Hard from "../Assets/LokiTitle.jsx";
import Image from "next/image";

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
        "• Developed policies and guidelines for Reitz Union Esports Space, ensuring a structured launch.\n• Researched best practices from similar programs to optimize community engagement.\n• Collaborated with stakeholders to drive innovation in esports event management.",
      image: "/images/Student.jpg", // update with your actual image path
    },
    {
      company: "University of Florida Rinker School of Construction Management",
      title: "Unity / VR Developer",
      years: "Aug 2021 – Present",
      description:
        "• Developed interactive construction scenes using Unity, Blender, C#, and AWS, contributing to multiple research projects.\n• Collaborated with academic teams to simulate real-world construction challenges.\n• Optimized simulation performance and enhanced user interactivity.",
      image:
        "https://dcp.ufl.edu/rinker/wp-content/uploads/sites/40/2021/09/FullColor_RinkerSeal-1.png",
    },
    {
      company: "UF RecSports",
      title: "Esports Intern",
      years: "Aug 2024 – Dec 2024",
      description:
        "• Organized and executed esports intramurals and initiatives, increasing student involvement by 400%.\n• Coordinated event logistics and campus communications.\n• Implemented engagement strategies that fostered a vibrant esports community.",
      image: "/images/RecSports.png", // replace with your actual image path
    },
    {
      company: "UF Digital Worlds Institute",
      title: "Teaching Assistant",
      years: "Aug 2024 – Dec 2024",
      description:
        "• Assisted students in game production and C# programming, ensuring clear comprehension and hands-on support.\n• Troubleshot technical issues during classes and lab sessions.\n• Enhanced curriculum delivery through interactive demonstrations and practical exercises.",
      image: "/images/DigWorlds.jpg", // replace with your actual image path
    },
    {
      company: "UF Club Esports",
      title: "Vice President - President",
      years: "Apr 2022 – Apr 2024",
      description:
        "• Led organizational transformation and managed business relations during the transition from UF Esports to Gator Esports.\n• Directed branding, risk management, and strategic partnerships to boost club visibility.\n• Implemented operational improvements to drive team performance and community engagement.",
      image: "/images/GatorEsports.svg", // replace with your actual image path
    },
    {
      company: "Code Wiz",
      title: "Code Coach",
      years: "Aug 2021 – Sep 2022",
      description:
        "• Taught children aged 7–16 basic coding and game development using Unity and Roblox.\n• Fostered creativity and technical skills through hands-on projects and interactive lessons.\n• Developed curriculum enhancements that improved programming fundamentals.",
      image: "/images/CodeWiz.png",
    },
    {
      company: "Summit Wash Holdings",
      title: "Research and Development Intern",
      years: "May 2023 – Aug 2023",
      description:
        "• Developed an analytics dashboard to visualize key performance metrics for corporate operations.\n• Explored large language model integration to enhance data-driven decision making.\n• Collaborated with cross-functional teams to streamline business processes.",
      image: "/images/Summit.jpg", // replace with your actual image path
    },
    {
      company: "Agritisan Farms",
      title: "Digital Marketing & Software Development Intern",
      years: "Jun 2022 – Aug 2022",
      description:
        "• Developed a website and mobile app to support Agritisan Farms’ transition from production to education.\n• Leveraged digital marketing strategies to boost consumer engagement and awareness.\n• Implemented interactive features that improved user experience and information dissemination.",
      image:
        "https://agritisan.sg/wp-content/uploads/2023/01/IMG-20230414-WA0003-1024x767.png",
    },
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
            <Image
              src={exp.image}
              alt={`${exp.company} logo`}
              width={300} // Adjust these values as needed
              height={128}
              className="object-contain mb-4"
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
