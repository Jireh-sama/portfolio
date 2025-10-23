import type { EducationItemI, ProjectItemI, WorkExperienceItemI } from "./types";

export const educationData: EducationItemI[] = [
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "Cavite State University - Bacoor Campus",
    location: "Cavite, Philippines",
    period: "2021 — 2025",
    description:
      "Focused on Object-Oriented Programming, Data Structures, and Human–Computer Interaction, with interests in Machine Learning applications.",
  },
  {
    degree: "Technical-Vocational Livelihood",
    field: "Information and Communication Technology",
    institution: "AMA Computer College - Las Piñas",
    location: "Las Piñas City, Philippines",
    period: "2019 — 2021",
    description:
      "Studied Java development, networking fundamentals, and web technologies with an emphasis on software design and user experience.",
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
    logo: "/src/assets/apstii-logo.avif",
    location: "Las Piñas City, Philippines",
    period: "April 2025 - June 2025",
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

export const projectsData: ProjectItemI[] = [
  {
    title: "City of Bacoor Chatbot",
    description: "This project was built to help the City of Bacoor, Cavite, engage with its citizens more effectively. The system features an NLP.js-powered chatbot for public queries and a comprehensive, secure admin panel for city employees.",
    image: "/src/assets/chatbot-mockup-cover.avif",
    link: "rawr",
    techStack: ["React", "TailwindCSS", "Express.js", "NLP.js", "MongoDB"]
  },
  {
    title: "Enroll Ease",
    description: "The goal of this project was to create a single, reliable source of truth for student enrollment. The system is a Django-based web application that serves two key user groups.",
    image: "/src/assets/enrollease-mockup-cover.avif",
    link: "rawr",
    techStack: ["Django", "Python", "HMTL", "CSS", "Bootstrap"]
  }
]
