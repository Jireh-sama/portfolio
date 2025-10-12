import type { EducationItemI, WorkExperienceItemI } from "./types";

export const educationData: EducationItemI[] = [
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "Cavite State University - Bacoor Campus",
    location: "Cavite, Philippines",
    period: "2021 — 2025",
    description:
      "Focused on Object-Oriented Programming, Data Structures, and Human–Computer Interaction, with interests in Machine Learning applications.",
    achievements: ["Cum Laude"],
  },
  {
    degree: "Technical-Vocational Livelihood",
    field: "Information and Communication Technology",
    institution: "AMA Computer College - Las Piñas",
    location: "Las Piñas City, Philippines",
    period: "2019 — 2021",
    description:
      "Studied Java development, networking fundamentals, and web technologies with an emphasis on software design and user experience.",
    achievements: ["With High Honors"],
  },
  {
    degree: "High School Diploma",
    field: "General Education",
    institution: "Las Piñas National High School – Almanza",
    location: "Las Piñas City, Philippines",
    period: "2015 — 2019",
  },
];

export const socialContacts = {
  gmail: "jirehtumbagahan@gmail.com",
  linkedIn: "https://linkedin.com/in/jireh-tumbagahan",
  github: "https://github.com/Jireh-sama",
};

export const workExperienceData: WorkExperienceItemI[] = [
  {
    role: "Information Technology Intern",
    company:
      "Archipelago Philippine Seafarers’ Training Institute, Inc. (APSTII)",
    location: "Las Piñas City, Philippines",
    period: "April 2024 - June 2024",
    duration: "3 months",
    current: false,
    description:
      "Supported the IT department in managing trainee data, troubleshooting basic technical issues, and maintaining the company’s digital records. Contributed to documentation processes and gained hands-on experience in IT operations within an office environment.",
    achievements: [
      "Encoded and organized digital records for trainee registration and attendance monitoring",
      "Assisted in troubleshooting basic computer and network issues within the department",
      "Assisted in inputting trainee information to the company’s database and document tracking system",
      "Observed and learned IT administrative procedures and proper documentation practices",
    ],
    technologies: ["Microsoft Office", "Google Drive"],
  },
];
