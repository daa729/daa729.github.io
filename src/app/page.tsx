// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Head>
        <title>Anderson Allen Portfolio</title>
        <meta name="description" content="Portfolio of Anderson Allen" />
      </Head>
      <header className="w-full py-6 text-center">
        <h1 className="text-5xl font-bold">Anderson Allen</h1>
        <p className="mt-2 text-xl">
          Software Engineer | Unity Developer | Game Dev &amp; Esports Advocate
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/dandersonallen"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/daa729"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </header>
      <main className="flex flex-col items-center p-8">
        <section className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/IMG_1471.jpg" // Ensure this image is in your public folder
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="max-w-lg text-gray-300">
            <p className="mb-4">
              {"Hi, I'm Anderson—a recent Computer Science graduate from the University of Florida. I specialize in software engineering, game development, and collegiate esports."}
            </p>
            <p className="mb-4">
              {"With a strong foundation in both traditional software engineering and the dynamic world of game development, I have embraced roles that demand leadership, creativity, and technical expertise. My experiences range from developing interactive simulations in Unity to coordinating esports events and crafting innovative software solutions."}
            </p>
            <p>
              Explore my work below and download my resumes for more details.
            </p>
          </div>
        </section>
        {/* Primary Navigation Row */}
        <nav className="mt-8 flex flex-wrap gap-6 justify-center">
          <Link href="/experience">
            <p className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Experience
            </p>
          </Link>
          <Link href="/projects">
            <p className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Projects
            </p>
          </Link>
          <Link href="/games">
            <p className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
              Games
            </p>
          </Link>
        </nav>
        {/* Resume Links Row */}
        <nav className="mt-4 flex flex-wrap gap-6 justify-center">
          <a
            href="/Allen_Esports.pdf"
            download
            className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 underline"
          >
            Esports Resume
          </a>
          <a
            href="/Allen_Software.pdf"
            download
            className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 underline"
          >
            Software Engineering Resume
          </a>
        </nav>
      </main>
      <footer className="py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Anderson Allen</p>
      </footer>
    </div>
  );
}
