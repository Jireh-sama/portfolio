import type {
  NowI,
  PrincipleI,
  ProjectItemI,
  ReleaseI,
  TechItemI,
} from "@/lib/types";
import chatbotMockup from "@/assets/images/chatbot-mockup-cover.avif";
import enrollEaseMockup from "@/assets/images/enrollease-mockup-cover.avif";

/** The journey, oldest first. Drives the hero git log, the commit graph and the stage panels. */
export const journeyData: ReleaseI[] = [
  {
    id: "ama-tvl",
    tag: "v0.1.0",
    year: "2019",
    kind: "init",
    lane: "main",
    title: "Tech-voc ICT at AMA",
    logLine: "init: TVL ICT @ AMA",
    meta: "AMA Computer College · Las Piñas · 2019 – 2021",
    summary:
      "Senior high school on the Information and Communication Technology track: Java, networking fundamentals and the basics of the web, with an emphasis on software design and user experience.",
    added: [
      "first Java programs",
      "networking and web fundamentals",
      "graduated with high honors",
    ],
    stack: ["java"],
  },
  {
    id: "first-web",
    tag: "v0.2.0",
    year: "2022",
    kind: "feat",
    lane: "main",
    title: "HTML, CSS & JavaScript, then React",
    logLine: "feat: HTML, CSS & JS → React",
    meta: "Self-taught · 2022 – 2023",
    summary:
      "It started as curiosity about how websites work. In 2023 React was the turning point: seeing components, state and logic come together into something interactive felt less like coding and more like creating.",
    added: [
      "HTML, CSS & JavaScript fundamentals",
      "React: components, state, real interactivity",
    ],
    removed: ['"it\'s just curiosity"'],
    stack: ["html", "css", "javascript", "react"],
  },
  {
    id: "freelance",
    tag: "v0.3.0",
    year: "2024",
    kind: "branch",
    lane: "branch",
    title: "Freelance web developer",
    logLine: "branch: freelance, EnrollEase",
    meta: "Self-employed · Remote · 2024 – 2025",
    summary:
      "Built and maintained web apps for clients: full-stack Next.js with TypeScript, React frontends and Django backends. One commission became EnrollEase, a student enrollment system.",
    added: [
      "full-stack Next.js + TypeScript apps",
      "Clerk auth, PostgreSQL with Prisma ORM",
      "requirements gathered directly with clients",
    ],
    stack: ["next", "typescript", "tailwindcss", "django", "prisma", "postgresql", "clerk"],
    projectId: "enroll-ease",
  },
  {
    id: "apstii",
    tag: "v0.4.0",
    year: "Apr 2025",
    kind: "feat",
    lane: "main",
    title: "IT intern at APSTII",
    logLine: "feat: IT intern @ APSTII",
    meta: "Archipelago Philippine Seafarers' Training Institute · Apr – Jun 2025",
    summary:
      "Supported the IT department in a real office: trainee records, document tracking and first-line troubleshooting.",
    added: [
      "digital records for trainee registration and attendance",
      "basic computer and network troubleshooting",
      "IT documentation practices",
    ],
    link: { label: "apstii.com", href: "https://apstii.com/" },
  },
  {
    id: "bacoor-chatbot",
    tag: "v1.0.0",
    year: "2025",
    kind: "release",
    lane: "main",
    title: "City of Bacoor Chatbot",
    logLine: "release: Bacoor chatbot, cum laude",
    meta: "Thesis capstone · Cavite State University · 2025",
    summary:
      "Our thesis: an NLP chatbot that works as the city hall's digital front desk. I built both the frontend and the backend. It shipped alongside my degree: BS Information Technology, cum laude.",
    added: [
      "NLP.js intents trained on local phrasing",
      "secure admin panel for content management",
      "graduated BS IT, cum laude",
    ],
    stack: ["express", "mongodb", "nlp.js", "jwt", "firebase"],
    projectId: "city-of-bacoor-chatbot",
  },
  {
    id: "nerve",
    tag: "v1.1.0",
    year: "Dec 2025",
    kind: "merge",
    lane: "main",
    title: "Full-stack developer at Nerve Technologies",
    logLine: "merge: freelance → Nerve Technologies",
    meta: "Remote · Dec 2025 – Feb 2026",
    summary:
      "Freelance experience merged into a team. Built frontend features and backend services, worked alongside designers and took part in code reviews.",
    added: [
      "secure authentication and RESTful CRUD APIs",
      "pixel-accurate UI, built with designers",
      "code reviews that reduced post-release bugs",
    ],
    link: { label: "nerve-technologies.com", href: "https://nerve-technologies.com/" },
  },
  {
    id: "ifort",
    tag: "v1.2.0",
    year: "Feb 2026",
    kind: "feat",
    lane: "main",
    title: "Junior software engineer at iFort",
    logLine: "feat: junior SWE @ iFort",
    meta: "Remote · Perth, Western Australia · Feb – Jul 2026",
    summary:
      "Built features for a Next.js platform on a microservices architecture, taking problems from the first conversation with the people who had them through to a shipped feature.",
    added: [
      "owned features end to end, from requirements to delivery",
      "shipped GitHub issues assigned by a senior engineer",
      "AI tools in the daily workflow",
    ],
    stack: ["copilot", "claude", "antigravity"],
  },
];

export const nowData: NowI = {
  headline: "Open to remote full-stack roles.",
  facts: [
    { label: "last commit", value: "Junior Software Engineer, iFort · Feb – Jul 2026" },
    { label: "based in", value: "Las Piñas, Philippines · UTC+8 · remote" },
    { label: "education", value: "BS IT, Cum Laude · Cavite State University" },
  ],
};

export const techStackData: TechItemI[] = [
  { name: "next", role: "framework" },
  { name: "react", role: "ui" },
  { name: "typescript", role: "language" },
  { name: "tailwindcss", role: "styling" },
  { name: "node", role: "runtime" },
  { name: "prisma", role: "orm" },
  { name: "mongodb", role: "database" },
  { name: "firebase", role: "backend" },
];

export const devToolsData: TechItemI[] = [
  { name: "figma", role: "design" },
  { name: "postman", role: "api testing" },
  { name: "github", role: "version control" },
  { name: "biome", role: "lint + format" },
  { name: "excalidraw", role: "diagrams" },
  { name: "affinity", role: "graphics" },
  { name: "chatgpt", role: "ai" },
  { name: "gemini", role: "ai" },
  { name: "v0", role: "ai ui" },
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
    image: chatbotMockup,
    githubLink: "https://github.com/Jireh-sama/chatbot-api",
    liveLink: "https://www.bacoorchatbot.com",
    techStack: [
      "React.js",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Express.js",
      "NLP.js",
      "JWT",
      "Firebase",
      "MongoDB",
      "NoSQL",
    ],
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
    image: enrollEaseMockup,
    githubLink: "https://github.com/Jireh-sama/enrollease",
    techStack: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite"],
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

export const principlesData: PrincipleI[] = [
  {
    title: "Code craftsmanship",
    description:
      "Writing clean, maintainable, and expressive code that balances readability with performance.",
  },
  {
    title: "Structured design",
    description:
      "Building applications with clear layers, defined responsibilities, and minimal coupling.",
  },
  {
    title: "Make it work, make it right, make it fast",
    description:
      "Focusing on correctness first, refining for clarity next, and optimizing for performance only when it truly matters.",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with teams and clients to translate technical decisions into meaningful product value.",
  },
];
