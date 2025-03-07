// pages/resume.tsx
import Head from "next/head";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Resume | Anderson Allen</title>
        <meta name="description" content="Resume of Anderson Allen, Software Engineer and Unity Developer" />
      </Head>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Anderson Allen</h1>
        <p className="mt-2">
          Software Engineer | Unity Developer | Game Dev & Esports Advocate
        </p>
        <p>Jupiter, Florida, United States</p>
        <div className="mt-2">
          <a href="mailto:daa729@gmail.com" className="underline">daa729@gmail.com</a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/dandersonallen" target="_blank" rel="noopener noreferrer" className="underline">
            LinkedIn
          </a>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="mt-2">
          I’m a recent Computer Science graduate from the University of Florida with a passion for software engineering, technical project management, game development, and collegiate esports. My hands-on experience spans from creating high-fidelity simulations as a Unity Developer in academic research to guiding students as a Teaching Assistant in game production and C# programming. In collegiate esports, I’ve played pivotal roles—from coordinating events as an Esports Intern at UF RecSports to leading organizational transformations as President of UF Club Esports and collaborating with industry leaders like Gen.G.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Top Skills</h2>
        <ul className="mt-2 list-disc list-inside">
          <li>Documentation</li>
          <li>JavaScript</li>
          <li>Cascading Style Sheets (CSS)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="mt-2 list-disc list-inside">
          <li>Microsoft Technology Associate: Software Development Fundamentals (MTA)</li>
          <li>Office Excel 2016</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Honors &amp; Awards</h2>
        <ul className="mt-2 list-disc list-inside">
          <li>Buddy of the Year for the State of Florida</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-4 space-y-4">
          <article>
            <h3 className="text-xl font-semibold">J. Wayne Reitz Union – Esports Consultant</h3>
            <p className="text-sm">January 2025 – Present | Gainesville, Florida, United States</p>
            <ul className="list-disc list-inside mt-2">
              <li>"Developed policies, guidelines, and objectives for Reitz Union's Esports Space."</li>
              <li>Researched similar programs to ensure a successful launch of the new Esports Space.</li>
            </ul>
          </article>
          <article>
            <h3 className="text-xl font-semibold">University of Florida Rinker School of Construction Management – Unity / VR Developer</h3>
            <p className="text-sm">August 2021 – Present | Gainesville, Florida, United States</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed interactive construction scenes for multiple research projects funded by prestigious organizations.</li>
              <li>Utilized tools such as Blender, Unity, C#, and AWS to create realistic scenarios.</li>
            </ul>
          </article>
          {/* Add additional experience entries as desired */}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">
          <strong>University of Florida</strong> – Bachelor of Science in Computer Science (August 2020 – December 2024)
        </p>
      </section>

      <footer className="mt-8">
        <Link href="/" className="underline">← Back to Home</Link>
      </footer>
    </div>
  );
}
