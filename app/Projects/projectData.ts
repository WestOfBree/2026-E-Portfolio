import type { ProjectEntry } from "../Components/ProjectShell";

export const projects: ProjectEntry[] = [
  {
    slug: "Summarist",
    title: "Summarist",
    tagline:
      "An in-class Next.js and Firebase app for reading and listening to concise book summaries.",
    summary:
      "Summarist focuses on helping students absorb key ideas quickly. I built an interface that keeps discovery and playback simple while keeping Firebase data organized and fast.",
    tag: "Next.js + Firebase",
    accent: "from-pink-200 to-violet-300",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    challenge:
      "Balancing a clean reading experience with an integrated audio player while keeping Firebase data sync fast and reliable.",
    solution:
      "Built a card-first discovery flow with clear visual hierarchy, reusable summary and audio components, and optimized Firebase queries for quick load times.",
    impact:
      "Delivered a smooth, low-friction study tool that lets students browse, read, and listen without interruption.",
    liveUrl: "https://fes-second-internship.vercel.app/",
    githubUrl: "https://github.com/WestOfBree/FES-Second-Internship",
  },
  {
    slug: "Notflix",
    title: "Notflix",
    tagline:
      "A playful movie database search engine that transforms user queries into dynamic results.",
    summary:
      "Notflix is another in-class project created to showcase understanding of retrieving and processing data from APIs. The main focus was building a movie database search engine that could handle user queries and display results dynamically.",
    tag: "React",
    accent: "from-blue-200 to-sky-300",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React", "JavaScript", "CSS", "HTML"],
    challenge:
      "Fetching and normalising data from an external movie API while keeping search results responsive and easy to browse.",
    solution:
      "Implemented a debounced search input, dynamic result rendering, and a clean card layout that surfaces key movie details at a glance.",
    impact:
      "Demonstrated a solid grasp of API integration and dynamic UI state, resulting in a fast and intuitive search experience.",
    liveUrl: "https://module-6-final-project.vercel.app/",
    githubUrl: "https://github.com/WestOfBree/Module-6__Final-Project",
  },
  {
    slug: "e-portfolio",
    title: "Sample E-Portfolio",
    tagline:
      "A personal portfolio site built with vanilla JavaScript to showcase projects, skills, and background.",
    summary:
      "Sample E-Portfolio helps users see their projects, skills, and background at a glance. I built an interaction model that stays fluid on desktop and mobile. This was also my first interaction with creating movable elements that responded to the location of the users cursor.",
    tag: "UI/UX",
    accent: "from-pink-100 to-blue-200",
    year: "2025",
    role: "Frontend Developer",
    stack: ["JavaScript", "HTML", "CSS"],
    challenge:
      "Building a fluid, responsive layout while also implementing cursor-reactive moving elements for the first time.",
    solution:
      "Crafted a vanilla JavaScript interaction model with cursor-position tracking to drive animated elements, keeping the layout readable on both desktop and mobile.",
    impact:
      "Produced a polished, interactive portfolio that showcased both technical range and an eye for engaging UI details.",
    liveUrl: "https://westofbree.github.io/advEportfolio/#",
    githubUrl: "https://github.com/WestOfBree/advEportfolio",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
