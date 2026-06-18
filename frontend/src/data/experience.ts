export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'experience-1',
    company: 'Enterprise Company',
    role: 'QA Automation Engineer',
    period: '2023 - Present',
    description:
      'Diseño e implementación de frameworks de automatización, pruebas API y procesos CI/CD.',
    technologies: [
      'Playwright',
      'TypeScript',
      'Jenkins',
      'GitHub Actions',
    ],
  },

  {
    id: 'experience-2',
    company: 'Technology Company',
    role: 'QA Engineer',
    period: '2021 - 2023',
    description:
      'Ejecución de pruebas funcionales, automatizadas y de regresión.',
    technologies: [
      'Selenium',
      'Postman',
      'SQL',
    ],
  },
];