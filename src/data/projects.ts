import type { Term } from "./terms";

/* ---------- Client work (Multi Image Group) ---------- */

export type ClientProject = {
  title: string;
  client: string;
  summary: string;
  stat?: string;
};

/** The featured client build, shown as a case study with rounded headline numbers. */
export const brandedGame = {
  title: "Branded Game",
  client: "National personal-injury law firm",
  summary:
    "A branded game built for the firm's live brand activations and online audience, played on the web and on on-site setups at events. Players sign up to play, so the game doubles as a lead-capture tool for the client.",
  headline: [
    { value: "20,000+", label: "plays" },
    { value: "17,000+", label: "leads captured for the client" },
  ],
};

export const clientProjects: ClientProject[] = [
  {
    title: "PDF Viewer & Lead Generator",
    client: "Commercial truck manufacturer",
    summary: "An interactive PDF viewer paired with a lead-generation tool.",
  },
  {
    title: "Live Audience Quiz",
    client: "Corporate client",
    summary: "A Kahoot-style quiz and Q&A application for live audience participation.",
  },
  {
    title: "Prize Wheel",
    client: "Yacht-charter travel brand",
    summary: "A branded prize-wheel application.",
  },
];

export const clientTerms: Term[] = [
  {
    term: "Brand activation",
    meaning: "A live marketing event where people interact with a brand in person, such as a booth or a game.",
  },
  { term: "Lead", meaning: "A player who filled in the sign-up form, giving the client a contact to follow up with." },
];

/* ---------- Research (UF Rinker School of Construction Management) ---------- */

export type Publication = {
  title: string;
  journal: string;
  link: string;
};

export type ResearchProject = {
  title: string;
  sponsor?: string;
  role: string;
  details: string;
  publications?: Publication[];
  subProjects?: { title: string; abstract: string }[];
};

export const researchProjects: ResearchProject[] = [
  {
    title: "Working Safely with UAVs: Training Workers on Heights",
    sponsor: "US Department of Labor",
    role: "VR Developer",
    details:
      "Built a VR training module that lets construction workers practice drone (UAV) safety protocols in a controlled, interactive environment.",
    publications: [
      {
        title:
          "Using 360-Degree Virtual Reality Technology for Training Construction Workers about Safety Challenges of Drones",
        journal: "Journal of Computing in Civil Engineering, Vol. 37, No. 4",
        link: "https://ascelibrary.org/doi/10.1061/JCCEE5.CPENG-5140",
      },
    ],
  },
  {
    title: "Investigating the Safety Challenges of Co-drones in Future Construction Workplaces",
    sponsor: "National Science Foundation",
    role: "VR Developer",
    details:
      "Two experiments on the safety challenges of co-drones (drones that work alongside people) on construction sites.",
    publications: [
      {
        title: "Physical Risk Assessment of Drone Integration in Construction Using 4D Simulation",
        journal: "Automation in Construction, Vol. 156",
        link: "https://doi.org/10.1016/j.autcon.2023.105099",
      },
      {
        title: "Psychophysiological Impacts of Working at Different Distances from Drones on Construction Sites",
        journal: "Journal of Computing in Civil Engineering, Vol. 37, No. 5",
        link: "https://doi.org/10.1061/JCCEE5.CPENG-5225",
      },
    ],
  },
  {
    title: "Safety Challenges of UAV Integration for Workers on Heights",
    sponsor: "CPWR, the Center for Construction Research and Training (funded by NIOSH)",
    role: "VR Developer",
    details:
      "Built a VR module on the safety challenges of bringing drones onto sites where people work at heights, focused on reducing risk.",
    publications: [
      {
        title: "Impact of Drone Presence on Construction Individuals Working at Heights",
        journal: "Journal of Construction Engineering and Management, Vol. 149, No. 11",
        link: "https://ascelibrary.org/doi/abs/10.1061/JCEMD4.COENG-13861",
      },
    ],
  },
  {
    title: "Bi-Directional Human-Drone Communication",
    sponsor: "National Science Foundation",
    role: "VR Developer",
    details: "Two experiments on how workers and drones can communicate safely on construction sites.",
    subProjects: [
      {
        title: "Safe Human-Drone Interaction in Construction Using Gesture and Speech Modalities",
        abstract:
          "Tested whether hand gestures or voice commands are safer for directing drones, and which puts less mental load on workers.",
      },
      {
        title: "Bi-directional Communication Between Humans and Drones",
        abstract: "Studied how drones signaling to workers affects safety and how workers perceive the drones.",
      },
    ],
  },
  {
    title: "VR NCCER: Virtual Orientation for Construction Professionals",
    sponsor: "NCCER, the National Center for Construction Education & Research",
    role: "Lead VR Developer",
    details: "A virtual orientation program for construction professionals, built to NCCER's training standards.",
  },
  {
    title: "VirtuAI: LLM-Powered Interactive VR Safety Training for Construction Workers",
    role: "Lead VR Developer",
    details:
      "An interactive VR safety trainer for construction workers in which characters respond in real time using a large language model (LLM), the technology behind tools like ChatGPT.",
  },
];

export const researchTerms: Term[] = [
  { term: "VR", meaning: "Virtual reality: a headset puts the user inside a simulated 3D environment." },
  { term: "UAV", meaning: "Unmanned aerial vehicle, more commonly called a drone." },
  {
    term: "Psychophysiological",
    meaning: "Measuring how the body reacts (heart rate, stress) alongside how people feel and behave.",
  },
  { term: "ASCE", meaning: "American Society of Civil Engineers, which publishes the journals listed above." },
  { term: "NIOSH", meaning: "National Institute for Occupational Safety and Health, a US federal research agency." },
];

/* ---------- GitHub ---------- */

export const featuredRepos = [
  {
    url: "https://github.com/zachtyson/cnt4007-project",
    description:
      "Programmed a BitTorrent client in Java and used virtual machines to simulate a peer-to-peer download network.",
  },
  {
    url: "https://github.com/daa729/AccidentProject",
    description: "Built an accident heat map from public crash data on top of the Google Maps API.",
  },
  {
    url: "https://github.com/Musketeers-CEN/Gator-Round-Up",
    description: "A Flutter club check-in app backed by Firebase and tied to users' Google accounts.",
  },
  {
    url: "https://github.com/Dance-Marathon/DM-Website",
    description:
      "Customized and optimized UF Dance Marathon's website, a large project passed down for nearly a decade.",
  },
  {
    url: "https://github.com/daa729/daa729.github.io",
    description: "This website, built with Next.js and Tailwind CSS.",
  },
];
