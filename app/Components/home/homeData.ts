export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  meta: string;
  description: string;
  panelLabel: string;
  skillsLabel: string;
  skills: string[];
  side: "left" | "right";
  color: "purple" | "pink" | "cyan";
};

export type ToolkitColumn = {
  title: string;
  dot: string;
  items: string[];
};

export const timelineItems: TimelineItem[] = [
  {
    period: "Now · Ongoing",
    title: "Frontend Developer",
    company: "Independent & Internships",
    meta: "FES · Skinstric · self-directed builds",
    description:
      "Designing and shipping playful, accessible products in React, Next.js, TypeScript, and Tailwind.",
    panelLabel: "What I'm building with",
    skillsLabel: "Current toolkit",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Accessibility",
      "Procreate",
    ],
    side: "right",
    color: "purple",
  },
  {
    period: "Dec 2022 - Present",
    title: "Audio Technician",
    company: "Audiology Practice",
    meta: "Hearing aids",
    description:
      "Maintaining and repairing hearing aids with precision, complete documentation, and reliable quality checks.",
    panelLabel: "Why it maps to dev",
    skillsLabel: "Transferable strengths",
    skills: [
      "Methodical debugging",
      "Attention to detail",
      "Precision work",
      "Empathy for end users",
      "Clear documentation",
    ],
    side: "left",
    color: "pink",
  },
  {
    period: "Earlier - Same practice",
    title: "Patient Service Coordinator",
    company: "Audiology Practice",
    meta: "Front office",
    description:
      "Supported patients, coordinated schedules, and kept a busy office clear and organized under pressure.",
    panelLabel: "Why it maps to dev",
    skillsLabel: "Transferable strengths",
    skills: [
      "User-centered thinking",
      "Communication",
      "Prioritization",
      "Calm under pressure",
    ],
    side: "right",
    color: "cyan",
  },
  {
    period: "2019 - 2022",
    title: "Criminal Records Specialist",
    company: "Background Screening Company",
    meta: "Records reporting",
    description:
      "Researched and reported records under strict accuracy standards with careful verification and edge-case handling.",
    panelLabel: "Why it maps to dev",
    skillsLabel: "Transferable strengths",
    skills: [
      "Data accuracy",
      "Systems and databases",
      "Compliance mindset",
      "Edge-case thinking",
    ],
    side: "left",
    color: "purple",
  },
  {
    period: "2015 - 2017",
    title: "Retail and Customer Service",
    company: "RITE AID · Dunkin' · Office Temp",
    meta: "Foundations",
    description:
      "Built reliability, adaptability, and service-first communication through fast-paced customer-facing work.",
    panelLabel: "Why it maps to dev",
    skillsLabel: "Transferable strengths",
    skills: ["Reliability", "Adaptability", "Teamwork", "Service mindset"],
    side: "right",
    color: "pink",
  },
];

export const toolkitColumns: ToolkitColumn[] = [
  {
    title: "Build",
    dot: "bg-violet-500",
    items: [
      "React and Next.js",
      "TypeScript and JavaScript",
      "HTML, CSS, and Tailwind",
      "Responsive and accessible UI",
    ],
  },
  {
    title: "Craft",
    dot: "bg-pink-500",
    items: [
      "UI and UX design",
      "Procreate and custom icons",
      "Animation and micro-interactions",
      "Clean, documented code",
    ],
  },
  {
    title: "Bring",
    dot: "bg-sky-500",
    items: [
      "Methodical problem-solving",
      "Detail and data accuracy",
      "Empathy for real users",
      "Reliability and follow-through",
    ],
  },
];
