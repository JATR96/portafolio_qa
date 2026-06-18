export type ProjectCategory =
  | 'automation'
  | 'api'
  | 'performance'
  | 'frontend';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 'automation-framework',
    title: 'QA Automation Framework',
    description:
      'Framework empresarial para automatización E2E con Playwright y TypeScript.',
    stack: [
      'Playwright',
      'TypeScript',
      'CI/CD',
    ],
    githubUrl: '#',
    featured: true,
    category: 'automation',
  },

  {
    id: 'api-testing-suite',
    title: 'API Testing Suite',
    description:
      'Automatización de pruebas API para servicios REST.',
    stack: [
      'Postman',
      'REST Assured',
      'Swagger',
    ],
    githubUrl: '#',
    featured: false,
    category: 'api',
  },

  {
    id: 'performance-lab',
    title: 'Performance Lab',
    description:
      'Laboratorio de pruebas de carga y rendimiento.',
    stack: [
      'JMeter',
      'K6',
    ],
    githubUrl: '#',
    featured: false,
    category: 'performance',
  },
];