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