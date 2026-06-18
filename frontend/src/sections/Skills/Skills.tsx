import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { skillGroups } from '@data/skills';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Skills.module.scss';

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