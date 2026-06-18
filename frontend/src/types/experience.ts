export interface ExperienceProject {
  id: string;
  duration: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
}