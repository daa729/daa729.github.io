"use client";
import Image from "next/image";

export default function Home() {
  return (
      <main
          className="flex flex-col items-center justify-between p-24"
          style={{ backgroundColor: "#111", color: "#fff" }}
      >
        <div className="flex bio-container">
          <Image
              src="/IMG_1471.jpg" // Replace with actual image URL
              alt="Profile Picture"
              width={300}
              height={300}
              className="profile-image"
          />
         <div className="bio-text-container">
          <p className="bio-text">
            Hi, my name is Anderson. I'm a recent Computer Science graduate from the University of Florida with a passion for software engineering, game development, and collegiate esports.
          </p>
          <p className="bio-text">
            My experience spans from developing high-fidelity Unity simulations in academic research to leading esports initiatives, including roles as President of UF Club Esports and an Esports Intern at UF RecSports. I'm proficient with technologies such as Unity, Blender, AWS, and enjoy creating engaging user experiences through thoughtful design and robust programming.
          </p>
          <p className="bio-text">
            I'm eager to apply my technical skills and leadership experience to innovative projects and collaborative teams.
          </p>
          <a href="mailto:daa729@gmail.com" className="email-link">
            daa729@gmail.com
          </a>
        </div>
      </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <a
              href="/projects"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find out about some of the code I&#39;ve written.
            </p>
          </a>

          <a
              href="/experience"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Experience
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              What other work have I done?
            </p>
          </a>

          <a
              href="/games"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Games
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Play some of the games I&#39;ve made.
            </p>
          </a>
        </div>

        <style jsx>{`
          .bio-container {
            margin-bottom: 4rem; /* Increased bottom margin for more spacing */
            display: flex;
            align-items: flex-start; /* Align items at the start to avoid stretching */
            justify-content: center;
            max-width: 900px;
            gap: 2rem; /* Added gap between image and text */
          }
          .profile-image {
            border-radius: 50%;
            margin-right: 2rem;
          }
          .bio-text-container {
            max-width: 500px;
            color: #ccc;
          }
          .bio-text {
            margin-bottom: 1.5rem; /* Increased bottom margin for more spacing between paragraphs */
          }
          .email-link {
            color: #fff;
            text-decoration: underline;
            margin-top: 1rem;
          }
          .group {
            background: #000;
            border: 1px solid #555;
            border-radius: 0.5rem;
            box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            color: #fff;
            text-decoration: none;
            margin-bottom: 2rem; /* Added bottom margin for more spacing between groups */
          }
          .group:hover {
            transform: translateY(-0.3125rem);
            box-shadow: 0 0.375rem 0.9375rem rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </main>
  );
}
