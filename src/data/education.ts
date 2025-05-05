export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  cgpa: string;
  focus: string;
}

const education: EducationItem[] = [
  {
    institution: "Universiti Poly-Tech Malaysia",
    degree: "Bachelor of Information Technology (Hons) in Computer Application Development",
    year: "2021 - 2023",
    cgpa: "3.69",
    focus: "Graduated from a program emphasizing IT skills, problem-solving, and ethical responsibility, with training for careers in software development, cybersecurity, data analysis, and IT consulting.",
  },
  {
    institution: "Kolej Universiti Poly-Tech Mara",
    degree: "Diploma in Computer Science",
    year: "2018 - 2020",
    cgpa: "3.79",
    focus: "Completed a diploma program focused on practical IT skills, problem-solving, and ethical awareness, preparing for roles in software support, IT operations, and technical assistance.",
  },
];

export default education;
