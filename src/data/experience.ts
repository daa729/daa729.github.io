// Titles, dates, and descriptions mirror LinkedIn (linkedin.com/in/dandersonallen).

export type Experience = {
  company: string;
  title: string;
  years: string;
  highlights: string[];
  /** Logo path; cards without one show an initials badge. */
  image?: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "Multi Image Group",
    title: "Unity Developer, Interactive Team",
    years: "Jun 2025 – Present",
    highlights: [
      "Design and deploy real-time interactive applications and web experiences that power live brand activations for national enterprise clients.",
      "Work across the full technical stack, from IT infrastructure to 3D rendering, content management, and gamified engagement tools, turning creative concepts into reliable, event-ready software.",
      "Built a branded game for a national personal-injury law firm: 20,000+ plays and 17,000+ leads captured.",
      "Collaborate with clients throughout production to shape design direction and technical execution for high-visibility events.",
    ],
  },
  {
    company: "J. Wayne Reitz Union",
    title: "Esports Consultant",
    years: "Jan 2025 – Jun 2025",
    highlights: [
      "Wrote most of the policies, booking standards, and objectives for the Gator Esports Center, UF's $2 million esports space.",
      "Helped plan the logistics and day-to-day operations for the space ahead of its opening.",
      "Researched similar collegiate programs to set the center up for a successful launch.",
    ],
    image: "/images/Student.jpg",
  },
  {
    company: "UF Rinker School of Construction Management",
    title: "Software Engineer (Unity/VR)",
    years: "Aug 2021 – Jun 2025",
    highlights: [
      "Built interactive virtual reality (VR) construction scenes for six research projects funded by organizations including the National Science Foundation and the US Department of Labor.",
      "Used Unity, C#, Blender, and AWS to create realistic scenarios that tested PhD candidates' research questions.",
      "Work contributed to papers in ASCE's Journal of Computing in Civil Engineering and Journal of Construction Engineering and Management.",
    ],
    image: "/images/Rinker.png",
  },
  {
    company: "UF RecSports",
    title: "Esports Intern",
    years: "Aug 2024 – Dec 2024",
    highlights: [
      "Organized and ran esports intramurals (campus-wide recreational leagues) and other initiatives for UF students.",
      "Increased student involvement in esports activities by 400%.",
      "Partnered with UF's Division of Student Life to promote esports engagement and participation.",
    ],
    image: "/images/RecSports.png",
  },
  {
    company: "UF Digital Worlds Institute",
    title: "Teaching Assistant",
    years: "Aug 2024 – Dec 2024",
    highlights: [
      "Supported students in Game Content Production 1 with video game development in Unity and C# scripting.",
      "Provided extra help with coursework and troubleshot technical issues.",
      "Worked with instructors to improve the learning experience.",
    ],
    image: "/images/DigWorlds.jpg",
  },
  {
    company: "UF Club Esports",
    title: "Vice President, then President",
    years: "Apr 2022 – Apr 2024",
    highlights: [
      "Led the club's transition from UF Esports to Gator Esports and managed business relations, including partners like Gen.G.",
      "Directed branding, risk management, and strategic partnerships to raise the club's visibility.",
      "Improved operations to support team performance and community engagement.",
    ],
    image: "/images/GatorEsports.svg",
  },
  {
    company: "Summit Wash Holdings",
    title: "Research and Development Intern",
    years: "May 2023 – Aug 2023",
    highlights: [
      "Designed an analytics dashboard in Python and SQL for monitoring customer and inventory metrics across a large car wash business.",
      "Explored large language model (LLM) integration to support data-driven decisions.",
    ],
    image: "/images/Summit.jpg",
  },
  {
    company: "Code Wiz",
    title: "Code Coach",
    years: "Aug 2021 – Sep 2022",
    highlights: [
      "Taught children aged 7–16 coding and game development in Unity and Roblox.",
      "Built hands-on projects and lessons that strengthened programming fundamentals.",
    ],
    image: "/images/CodeWiz.png",
  },
  {
    company: "Agritisan Farms",
    title: "Digital Marketing & Software Development Intern",
    years: "Jun 2022 – Aug 2022",
    highlights: [
      "Built a website and a Flutter mobile app to support the company's shift from farming to sustainability education.",
      "Used digital marketing to grow consumer engagement and awareness.",
    ],
    image: "/images/Agritisan.png",
  },
  {
    company: "Chick-fil-A",
    title: "Team Member, then Trainer",
    years: "5 years, before college",
    highlights: ["Promoted from team member to trainer, training new staff."],
  },
];

export const education = {
  school: "University of Florida",
  degree: "B.S. Computer Science, minor in Digital Arts",
  years: "Aug 2020 – Dec 2024",
  activities: [
    "UF Club Esports",
    "UF Student Government",
    "UF Dance Marathon",
    "UF Big Event",
    "UF Study Abroad",
    "Delta Sigma Phi",
  ],
};
