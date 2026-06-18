import type {
  Experience,
} from '@shared-types/experience';

export const experiences: Experience[] =
  [
    {
      id: 'company-1',

      company:
        'Enterprise Company',

      role:
        'QA Automation Engineer',

      period:
        '2023 - Present',

      projects: [
        {
          id: 'project-1',

          duration:
            '10 months',

          technologies: [
            'Playwright',
            'TypeScript',
            'Jenkins',
            'GitHub Actions',
          ],
        },

        {
          id: 'project-2',

          duration:
            '8 months',

          technologies: [
            'Selenium',
            'Java',
            'Maven',
          ],
        },
      ],
    },
  ];