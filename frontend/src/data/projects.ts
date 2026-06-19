import type {
  Project,
} from '@shared-types/project';

export const projects: Project[] = [
  {
    id: 'automation-framework',
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
    stack: [
      'JMeter',
      'K6',
    ],
    githubUrl: '#',
    featured: false,
    category: 'performance',
  },
];