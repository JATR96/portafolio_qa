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

      projects: [
        {
          id: 'project-1',

          technologies: [
            'Playwright',
            'TypeScript',
            'Jenkins',
            'GitHub Actions',
          ],
        },

        {
          id: 'project-2',

          technologies: [
            'Selenium',
            'Java',
            'Maven',
          ],
        },
      ],
    },
  ];