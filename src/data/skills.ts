export interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Angular", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "GraphQL", "PostgreSQL", "Stored Procedures", "Laravel", "RESTful API development", "PocketBase"],
  },
  {
    category: "Dev Tools / Cloud",
    items: ["Azure", "Git", "CI/CD", "Power BI", "Domain integration", "Network monitoring with Grafana"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Communication", "Team Collaboration"],
  },
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript", "SQL", "TypeScript"],
  },
  {
    category: "Software Architecture",
    items: ["Software Architecture", "RESTful API development", "ERD Design"],
  },
];


export default skills;
