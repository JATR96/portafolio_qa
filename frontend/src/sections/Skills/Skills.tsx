import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

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
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
            once: true,
            amount: 0.2,
        }}
      >
        <motion.h2
        className={styles.title}
        variants={fadeUp}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.p
        className={styles.description}
        variants={fadeUp}
        >
          {t(
            'skills.description',
          )}
        </motion.p>

        <motion.div
        className={styles.grid}
        variants={staggerContainer}
        >
          {skillGroups.map(
            (group) => (
              <motion.article
                key={group.title}
                className={styles.card}
                variants={fadeUp}
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
              </motion.article>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;