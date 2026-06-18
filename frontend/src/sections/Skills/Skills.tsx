import { useTranslation } from 'react-i18next';

import styles from './Skills.module.scss';

const skillGroups = [
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

const Skills = (): React.JSX.Element => {
  const { t } =
    useTranslation(
      'homepage',
    );

  return (
    <section
      id="skills"
      className={styles.skills}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t('skills.title')}
        </h2>

        <p
          className={
            styles.description
          }
        >
          {t(
            'skills.description',
          )}
        </p>

        <div className={styles.grid}>
          {skillGroups.map(
            (group) => (
              <article
                key={group.title}
                className={
                  styles.card
                }
              >
                <h3
                  className={
                    styles.cardTitle
                  }
                >
                  {group.title}
                </h3>

                <div
                  className={
                    styles.badges
                  }
                >
                  {group.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className={
                          styles.badge
                        }
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;