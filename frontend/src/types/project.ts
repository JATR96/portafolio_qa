export type ProjectCategory =
  | 'automation'
  | 'api'
  | 'performance'
  | 'frontend';

export interface Project {
  id: string;
  stack: string[];
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory;
}