export interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "GraphQL", "PostgreSQL", "Stored Procedures"],
  },
  {
    category: "Dev Tools / Cloud",
    items: ["Azure", "Git", "CI/CD", "Power BI"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Communication", "Team Collaboration"],
  },
];

export default skills;
