import Link from "next/link";
import Image from "next/image";
import Facts from "@/components/Facts";
import { profileLinks } from "@/components/SiteFooter";

const facts = [
  { value: "21,100", label: "plays of a branded game I built for a national law firm" },
  { value: "17,468", label: "leads that game captured for the client" },
  { value: "6", label: "funded VR research projects I built scenes for" },
  { value: "$2M", label: "Gator Esports Center, which I helped take from petition to opening" },
];

const skills = ["Unity", "C#", "Java", "C++", "Python", "React", "Vue", "Blender", "AWS", "OBS"];

export default function Home() {
  return (
    <div className="page pt-10 sm:pt-16">
      <section className="grid items-start gap-10 md:grid-cols-[minmax(0,15rem)_1fr]">
        <Image
          src="/IMG_1471.jpg"
          alt="Portrait of Anderson Allen"
          width={631}
          height={946}
          priority
          sizes="(min-width: 768px) 240px, 60vw"
          className="aspect-[4/5] w-48 rounded-lg object-cover md:w-full"
        />
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl font-bold leading-none text-fg sm:text-7xl">Anderson Allen</h1>
          <p className="mt-3 text-xl text-muted">
            Unity developer, interactive engineer, and collegiate esports builder.
          </p>
          <div className="mt-6 space-y-4 text-lg text-fg/85">
            <p>
              I&apos;m a Unity developer on Multi Image Group&apos;s Interactive team. I design and deploy real-time
              interactive apps and web experiences for brand activations, the live marketing events where people
              interact with a brand in person. One branded game I built has been played 21,100 times and captured
              17,468 leads for its client.
            </p>
            <p>
              Before that, I spent nearly four years as a software engineer at the University of Florida&apos;s Rinker
              School of Construction Management, building virtual reality construction scenes for six research
              projects funded by groups including the National Science Foundation and the US Department of Labor.
            </p>
            <p>
              I also build collegiate esports. I helped take the Gator Esports Center, UF&apos;s $2 million esports
              space, from a student petition to its opening, led UF Club Esports as Vice President and President, and
              still advise the program.
            </p>
          </div>
          <p className="mt-4 text-sm text-muted">B.S. Computer Science, minor in Digital Arts, University of Florida</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg">
            <Link href="/projects/" className="link">
              See my projects
            </Link>
            {profileLinks.map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="link">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Facts items={facts} />
      </div>

      <section className="mt-10">
        <h2 className="sr-only">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded border border-line px-3 py-1 text-sm text-muted">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
