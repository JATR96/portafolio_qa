export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'QA Automation',
    skills: [
      'Playwright',
      'Selenium',
      'Cypress',
    ],
  },

  {
    title: 'API Testing',
    skills: [
      'Postman',
      'REST Assured',
      'Swagger',
    ],
  },

  {
    title: 'Performance',
    skills: [
      'JMeter',
      'K6',
      'Load Testing',
    ],
  },

  {
    title: 'Development',
    skills: [
      'Java',
      'TypeScript',
      'React',
      'Node.js',
    ],
  },

  {
    title: 'DevOps',
    skills: [
      'Git',
      'GitHub Actions',
      'Docker',
      'CI/CD',
    ],
  },
];