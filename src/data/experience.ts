export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "ABC Tech Sdn Bhd",
    role: "Full Stack Developer",
    start: "Jan 2023",
    end: "Present",
    description: [
      "Engineered and maintained HR modules using React and GraphQL, delivering robust and user-friendly interfaces.",
      "Integrated .NET APIs with PostgreSQL databases, streamlining data processing and reducing backend response time by 20%.",
      "Collaborated cross-functionally with QA, UI/UX, and stakeholders to ensure end-to-end delivery of high-quality features.",
      "Proactively created technical documentation, including ERDs and UML diagrams, improving team onboarding and project clarity.",
    ],
  },
  {
    company: "XYZ Freelance",
    role: "Frontend Developer",
    start: "Aug 2022",
    end: "Dec 2022",
    description: [
      "Designed and developed responsive landing pages using Next.js and Tailwind CSS, achieving modern design standards.",
      "Optimized web performance, improving Lighthouse scores from 70 to 95+, enhancing user experience and SEO.",
      "Worked directly with clients to gather requirements and deliver solutions aligned with business goals.",
    ],
  },
  {
    company: "1231 Freelance",
    role: "Frontend Developer",
    start: "Aug 2021",
    end: "Dec 2021",
    description: [
      "Designed and developed responsive landing pages using Next.js and Tailwind CSS, achieving modern design standards.",
      "Optimized web performance, improving Lighthouse scores from 70 to 95+, enhancing user experience and SEO.",
      "Worked directly with clients to gather requirements and deliver solutions aligned with business goals.",
    ],
  },
  {
    company: "001 Freelance",
    role: "Frontend Developer",
    start: "Aug 2020",
    end: "Dec 2020",
    description: [
      "Designed and developed responsive landing pages using Next.js and Tailwind CSS, achieving modern design standards.",
      "Optimized web performance, improving Lighthouse scores from 70 to 95+, enhancing user experience and SEO.",
      "Worked directly with clients to gather requirements and deliver solutions aligned with business goals.",
    ],
  },
];

export default experience;
