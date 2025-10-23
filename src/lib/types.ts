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

export interface ProjectItemI {
  title: string
  description: string
  image: string
  link: string
  techStack: string[]
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