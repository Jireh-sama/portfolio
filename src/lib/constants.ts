import type {
  EducationItemI,
  ProjectItemI,
  WorkExperienceItemI,
} from "./types";

export const educationData: EducationItemI[] = [
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "Cavite State University - Bacoor Campus",
    location: "Cavite, Philippines",
    period: "2021 — 2025",
    description:
      "Focused on Object-Oriented Programming, Data Structures, and Human–Computer Interaction, with interests in Machine Learning applications.",
    achievements: ["Graduated with Latin honors, Cum Laude"],
  },
  {
    degree: "Technical-Vocational Livelihood",
    field: "Information and Communication Technology",
    institution: "AMA Computer College - Las Piñas",
    location: "Las Piñas City, Philippines",
    period: "2019 — 2021",
    description:
      "Studied Java development, networking fundamentals, and web technologies with an emphasis on software design and user experience.",
    achievements: ["Graduated with High Honors"],
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
    logo: "/images/apstii-logo.avif",
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
    id: "city-of-bacoor-chatbot",
    title: "City of Bacoor Chatbot",
    about:
      "This project was developed as our thesis capstone, where I served as both the frontend and backend developer. The system was designed to enhance citizen engagement by providing an interactive platform for accessing city information and services through an intelligent chatbot. My classmate, moonbamijam, collaborated with me on this project as a fellow thesis group member. Together, we aimed to create a system that improves the accessibility, efficiency, and user-friendliness of local government services through conversational interaction.",
    description:
      "The Interactive Chatbot for the City of Bacoor, Cavite is a smart, conversational system designed to assist citizens in accessing city information and services more efficiently. Built to serve as a digital front desk for the local government, it provides instant responses to common inquiries about city officials, services, requirements, navigation, and announcements.",
    features: [
      "NLP-powered chatbot for instant responses",
      "Secure admin panel for content management",
      "Offers navigation guidance within city hall facilities",
      "Delivers links to forms, documents, and social media pages",
    ],
    image: "/images/chatbot-mockup-cover.avif",
    githubLink: "https://github.com/Jireh-sama/chatbot-api",
    liveLink: "https://www.bacoorchatbot.com",
    techStack: ["React", "TailwindCSS", "Express.js", "NLP.js", "MongoDB"],
    problemsAndSolutions: [
      {
        title: "Natural Language Understanding",
        problem:
          "Processing diverse user queries with varying phrasing and local dialect required a sophisticated NLP implementation.",
        solution:
          "Implemented NLP.js with custom intent training and entity recognition, supporting multiple query variations and local terminologies.",
      },
      {
        title: "Scalability & Performance",
        problem:
          "The system needed to handle high concurrent user loads during peak hours without degrading response times.",
        solution:
          "Utilized Redis for caching frequent queries and implemented connection pooling in Express.js to optimize database interactions.",
      },
    ],
  },
  {
    id: "enroll-ease",
    title: "Enroll Ease",
    about:
      "EnrollEase was developed to streamline and modernize the student enrollment process for educational institutions. The goal was to create a user-friendly platform that simplifies enrollment management for both students and administrators — reducing manual work, improving communication, and ensuring a smoother overall experience. This project was built as part of a freelance commission for a client who required a fully functional enrollment management web application. It reflects a practical and scalable solution developed using Django, designed to handle real-world enrollment workflows efficiently.",
    description:
      "EnrollEase is a Django-based student enrollment management system designed to simplify and automate the enrollment process for educational institutions. It provides dedicated interfaces for students and administrators, enabling efficient handling of applications, announcements, and notifications — all in one streamlined platform.",
    features: [
      "Secure user registration and email-based authentication",
      "Personalized dashboards for students and administrators",
      "Simple enrollment request and approval workflow",
      "Profile management for updating personal information",
      "Course catalog with available academic programs",
      "Admin controls for managing applications and tracking statistics",
    ],
    image: "/images/enrollease-mockup-cover.avif",
    githubLink: "https://github.com/Jireh-sama/enrollease",
    techStack: ["Django", "Python", "HMTL", "CSS", "Bootstrap", "SQLite"],
    problemsAndSolutions: [
      {
        title: "Data Integrity and Validation",
        problem:
          "Ensuring that all student data was accurate, complete, and valid upon submission was critical to prevent administrative errors.",
        solution:
          "Leveraged Django's ORM with built-in model validation and created custom forms with server-side checks to enforce strict data rules.",
      },
      {
        title: "User Experience for Admins",
        problem:
          "The administrative backend needed to be intuitive for non-technical staff to manage thousands of student records and course schedules.",
        solution:
          "Customized the Django Admin interface to provide a clean, organized, and searchable dashboard with bulk-action capabilities for efficient management.",
      },
    ],
  },
];
