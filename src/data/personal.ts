export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  linkedin: string;
  github: string;
}

const personal: PersonalInfo = {
  name: "Muhammad Ziyad Bin Hilalluddin",
  title: "Full Stack Developer",
  email: "ziyad@example.com",
  phone: "+60 12-345 6789",
  location: "Selangor, Malaysia",
  summary: "Passionate developer with experience in React, Node.js, and PostgreSQL.",
  linkedin: "https://www.linkedin.com/in/muhammad-ziyad-hilalluddin-7602321b8/",
  github: "https://github.com/ziyad",
};

export default personal;
