export interface ExperienceProject {
  id: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  projects: ExperienceProject[];
}