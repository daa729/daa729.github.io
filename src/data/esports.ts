import type { Term } from "./terms";

export type EsportsItem = {
  title: string;
  role?: string;
  years?: string;
  summary: string;
  /** For multi-year efforts: what happened at each stage, in order. */
  steps?: { when: string; what: string }[];
};

/** Headline numbers shown at the top of the Esports page. */
export const esportsStats = [
  { value: "$2M", label: "Gator Esports Center, which I helped take from a 2022 petition to its opening" },
  { value: "400%", label: "growth in student involvement in UF esports intramurals" },
  { value: "2 yrs", label: "leading UF Club Esports as Vice President, then President" },
];

export const builtAtUF: EsportsItem[] = [
  {
    title: "Gator Esports Center",
    role: "Advocate, planning committee member, then Esports Consultant",
    years: "2022 – 2025",
    summary: "UF's $2 million esports space in the Reitz Union, now open for student use.",
    steps: [
      {
        when: "Early 2022",
        what: "With two fellow students, petitioned the Reitz Union for a permanent home for gaming on campus.",
      },
      {
        when: "Planning",
        what: "Joined the planning committee and helped define the space's scope and goals.",
      },
      {
        when: "Jan – Jun 2025",
        what: "As Esports Consultant, wrote most of the policies and booking standards and helped plan day-to-day operations.",
      },
      { when: "2025", what: "The center opened to students." },
    ],
  },
  {
    title: "UF Club Esports",
    role: "Vice President, then President",
    years: "Apr 2022 – Apr 2024",
    summary:
      "Led the club through its rebrand from UF Esports to Gator Esports, directing branding, risk management, and partnerships with organizations like Gen.G.",
  },
  {
    title: "Gator Nation Game Play",
    role: "Producer, commentator, and organizer, with the UF Alumni Association",
    years: "Fall 2024",
    summary:
      "A weekly livestream where students from UF and the schools on Florida's football schedule played showmatches in EA Sports College Football 25 ahead of Florida's games. I drew on my SEC esports contacts to set up the matchups and recruited and prepared the student competitors. I started on streaming and production, then took on commentating and organizing the competitions.",
  },
  {
    title: "Gen.G × Idahoan Foods campus activation",
    role: "Event support, with Gen.G",
    summary:
      "Gen.G, a UF Club Esports partner, asked me to help bring their partner Idahoan Foods to campus. I researched and pitched ideas, then helped Gen.G set up a marketing activation for Idahoan's Shreds product the weekend before the LSU football game.",
  },
  {
    title: "UF RecSports Esports",
    role: "Esports Intern",
    years: "Aug 2024 – Dec 2024",
    summary: "Ran esports intramurals and tournaments, increasing student involvement by 400%.",
  },
];

export const speaking: EsportsItem[] = [
  {
    title: "Florida Esports Summit",
    role: "Speaker",
    summary:
      "Spoke to educators and parents about growing K–12 esports and preparing students for the move to college and beyond.",
  },
  {
    title: "NAECAD National Convention",
    role: "Attendee",
    years: "2024",
    summary:
      "My first professional conference. I brought back lessons for early-stage programs and handed them to UF Club Esports' new executive board.",
  },
];

export const ongoing: EsportsItem[] = [
  {
    title: "UF Esports",
    role: "Advisor",
    summary: "Continue to advise the UF esports program.",
  },
  {
    title: "FEC",
    role: "Builder",
    summary: "Developing a scholastic esports product for K–12 schools, in preparation for DreamHack.",
  },
  {
    title: "Amateur League of Legends Broadcasts",
    role: "Producer and streamer",
    summary: "Stream amateur League of Legends matches as a side gig.",
  },
];

export const esportsTerms: Term[] = [
  { term: "Esports", meaning: "Organized, competitive video gaming, played in leagues and tournaments." },
  { term: "Intramurals", meaning: "Recreational leagues run by the university and open to any student." },
  { term: "Showmatch", meaning: "An exhibition match played for an audience rather than for league standings." },
  { term: "EA Sports College Football 25", meaning: "EA's college football video game, released in 2024." },
  { term: "SEC", meaning: "The Southeastern Conference, UF's athletic conference." },
  { term: "Gen.G", meaning: "A professional esports organization that partnered with UF Club Esports." },
  {
    term: "Activation",
    meaning: "A live marketing event where people interact with a brand in person, often around a game or booth.",
  },
  { term: "K–12 / scholastic esports", meaning: "Esports programs run by elementary, middle, and high schools." },
  { term: "DreamHack", meaning: "A large gaming festival and esports event series." },
  { term: "NAECAD", meaning: "The National Association of Esports Coaches and Directors." },
  { term: "League of Legends", meaning: "A popular five-versus-five competitive team game." },
];
