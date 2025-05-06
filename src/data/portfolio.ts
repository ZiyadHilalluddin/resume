import { StaticImageData } from "next/image";
import speech1 from "@/app/assets/speech1.jpg";
import speech2 from "@/app/assets/speech2.jpg";
import resumePortfolio1 from "@/app/assets/resume-portfolio1.jpg"; 
import resumePortfolio2 from "@/app/assets/resume-portfolio2.jpg";
import resumePortfolio3 from "@/app/assets/resume-portfolio3.jpg";
import resumeFreelance1 from "@/app/assets/resume-freelance-1.jpg";
import resumeFreelance2 from "@/app/assets/resume-freelance-2.jpg";
import resumeFreelance3 from "@/app/assets/resume-freelance-3.jpg";
import resumeFreelance4 from "@/app/assets/resume-freelance-4.jpg";


export interface PortfolioItem {
  title: string;
  date?: string;
  description: string;
  images: (string | StaticImageData)[]; 
  techStack?: string[];
  role?: string;
  tags?: string[];
  type?: "Developing" | "Completed" | "Presentation" | "Freelance" | "Personal" | "Research" | "Open Source";
}

const portfolio: PortfolioItem[] = [
  {
    title: "Final Year Project IT Talk at Universiti Poly-Tech Malaysia",
    date: "February 2025",
    description:
      "Gave a presentation to final-year students about career readiness, technical portfolios, and personal experience in the industry.",
    images: [speech1, speech2],
    tags: ["presentation", "public speaking", "career talk"],
    type: "Presentation",
  },
  {
    title: "Personal Resume Website",
    date: "Present",
    description:
      "Developed and deployed a fully responsive resume website using Next.js and Tailwind CSS. Features animated scroll sections, project showcase, and live deployment on Vercel.",
    images: [
        resumePortfolio1,
        resumePortfolio2,
        resumePortfolio3,
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Sole Developer – Design, implementation, deployment",
    tags: ["frontend", "portfolio", "responsive"],
    type: "Completed",
  },
  {
    title: "Freelance Project: Machine Checkup System",
    date: "December 2024 - Present",
    description:
      "Collaborated on a Machine Maintenance system for a client. Designed scalable file structure, handled database schema using Pocketbase, and managed merges across frontend (React, Vue) and backend (Node.js).",
    images: [
        resumeFreelance1,
        resumeFreelance2,
        resumeFreelance3,
        resumeFreelance4,
    ],
    techStack: ["React", "Vue", "Node.js", "Pocketbase"],
    role: "System Architect, DB Design, Code Merging, Development",
    tags: ["fullstack", "freelance", "collaboration"],
    type: "Freelance",
  },
];

export default portfolio;
