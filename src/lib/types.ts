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

/** Commit-message prefix shown before a release title, e.g. "release: City of Bacoor Chatbot" */
export type ReleaseKind = 'init' | 'feat' | 'branch' | 'release' | 'merge'

/** Which lane of the commit graph a release sits on. "branch" is the freelance side branch. */
export type GraphLane = 'main' | 'branch'

/** One stop of the journey. Rendered as a stage panel, a graph node and a line in the hero git log. */
export interface ReleaseI {
  /** Stable slug; also seeds the decorative commit hash */
  id: string
  /** Semver tag, e.g. "v1.0.0" */
  tag: string
  /** Label next to the graph node */
  year: string
  kind: ReleaseKind
  lane: GraphLane
  title: string
  /** Short commit message for the hero git log */
  logLine: string
  /** Who / where / when, shown in monospace under the title */
  meta: string
  summary: string
  /** Rendered as "+" diff lines */
  added: string[]
  /** Rendered as "-" diff lines */
  removed?: string[]
  /** Tools picked up at this stop, shown as "+dep" */
  stack?: string[]
  /** Links the stop to /projects/:id and shows that project's screenshot */
  projectId?: string
  link?: { label: string; href: string }
}

export interface NowFactI {
  label: string
  value: string
}

export interface NowI {
  headline: string
  facts: NowFactI[]
}

/** A tool rendered as a package.json entry: "name": "role" */
export interface TechItemI {
  name: string
  role: string
}

export interface PrincipleI {
  title: string
  description: string
}
