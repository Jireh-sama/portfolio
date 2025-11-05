export interface EducationItemI {
  degree: string
  field: string
  institution: string
  location: string
  period: string
  description?: string
  achievements?: string[]
}

export interface WorkExperienceItemI {
  role: string
  company: string
  logo: string
  location: string
  period: string
  duration: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]

}

export interface ProblemSolutionI {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectItemI {
  id: string
  title: string
  about: string
  description: string
  features: string[]
  image: string
  githubLink: string
  liveLink?: string
  techStack: string[]
  problemsAndSolutions?: ProblemSolutionI[]
}

type NavNames = 'Home' | 'Experience' | 'Education' | 'Tech Stack' | 'Projects'
export interface NavItemI {
  name: NavNames
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  fn: () => void
}

export interface TechStackItemI {
  logo: React.ReactNode
  name: string
}