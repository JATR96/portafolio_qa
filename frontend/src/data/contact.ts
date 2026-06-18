export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'tu-correo@ejemplo.com',
    href: 'mailto:tu-correo@ejemplo.com',
  },

  {
    id: 'linkedin',
    label: 'LinkedIn',
    value:
      'linkedin.com/in/jesus-abel-t-a5b67b16a',
    href:
      'https://www.linkedin.com/in/jesus-abel-t-a5b67b16a/',
  },

  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/JATR96',
    href:
      'https://github.com/JATR96',
  },
];