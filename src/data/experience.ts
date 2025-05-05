export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "IFCA MSC BERHAD",
    role: "Software Engineer",
    start: "February 2024",
    end: "April 2025",
    description: [
      "Developed digital reporting solutions for HR systems, focusing on payroll, time attendance, and claims management using DevExpress, SQL, and React.js.",
      "Built and integrated APIs to streamline data flow and enhance reporting functionality.",
      "Provided prompt hotfixes and bug resolutions, maintaining system stability.",
      "Collaborated with consultants to refine report layouts and functionalities.",
      "Managed deployment processes, ensuring smooth integration and updates.",
    ],
  },
  {
    company: "Micro Technology Solution Sdn Bhd",
    role: "IT Engineering Internship",
    start: "Sept 2023",
    end: "Dec 2022",
    description: [
      "Enhanced security by installing and configuring antivirus software, safeguarding company data.",
      "Provided IT solutions and vendor support for ChinHin Group Berhad.",
      "Demonstrated proficiency in domain integration using Prowitz.",
    ],
  },
  {
    company: "Software Developer Internship",
    role: "TM Research & Development",
    start: "Jul 2020",
    end: "Oct 2020",
    description: [
      "Developed a frontend application system using Angular and JavaScript, delivering responsive and user-friendly interfaces.",
      "Participated in weekly SCRUM meetings to track project progress, collaborate with team members, and ensure timely delivery of tasks.",
      "Gained hands-on exposure to network monitoring tools such as Prometheus and Grafana, enhancing system performance insights and troubleshooting capabilities.",
    ],
  },
  // {
  //   company: "Nori Tech",
  //   role: "Full Stack Development",
  //   start: "Dec 2024",
  //   end: "Present",
  //   description: [
  //     "Designed and developed responsive landing pages using Next.js and Tailwind CSS, achieving modern design standards.",
  //     "Optimized web performance, improving Lighthouse scores from 70 to 95+, enhancing user experience and SEO.",
  //     "Worked directly with clients to gather requirements and deliver solutions aligned with business goals.",
  //   ],
  // },
];

export default experience;
