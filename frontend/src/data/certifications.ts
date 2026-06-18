export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'istqb-foundation',
    title: 'ISTQB Foundation Level',
    issuer: 'ISTQB',
    year: '2025',
    credentialUrl: '#',
    featured: true,
  },

  {
    id: 'playwright-automation',
    title: 'Playwright Automation',
    issuer: 'Udemy',
    year: '2025',
    credentialUrl: '#',
    featured: false,
  },

  {
    id: 'api-testing',
    title: 'API Testing',
    issuer: 'Udemy',
    year: '2025',
    credentialUrl: '#',
    featured: false,
  },
];