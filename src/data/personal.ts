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
  email: "ziyadhilalluddin@example.com",
  phone: "+60 11-1880 0756",
  location: "Kuala Lumpur, Malaysia",
  summary: "Passionate developer with experience in React, Node.js, and PostgreSQL.",
  linkedin: "https://www.linkedin.com/in/muhammad-ziyad-hilalluddin-7602321b8/",
  github: "https://github.com/ziyad",
};

export default personal;
