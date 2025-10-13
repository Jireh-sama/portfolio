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
  location: string
  period: string
  duration: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]

}

type NavNames = 'Home' | 'Experience' | 'Education' | 'Tech Stack' | 'Projects'
export interface NavItemI {
  name: NavNames
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  fn: () => void
}