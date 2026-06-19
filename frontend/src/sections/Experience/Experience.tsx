import { useTranslation } from 'react-i18next';

import { experiences } from '@data/experience';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Experience.module.scss';

const Experience =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'experience',
      );

    return (
      <section
        id="experience"
        className={styles.experience}
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
            {t(
              'section.title',
            )}
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={fadeUp}
          >
            {t(
              'section.description',
            )}
          </motion.p>

          <motion.div
            className={styles.timeline}
            variants={fadeUp}
          >
            {experiences.map(
              (
                experience,
              ) => (
                <motion.article
                  key={experience.id}
                  className={styles.companyCard}
                  variants={fadeUp}
                >
                  <motion.header
                    className={styles.companyHeader}
                    variants={fadeUp}
                  >
                    <h3>
                      {
                        experience.role
                      }
                    </h3>

                    <h4>
                      {
                        experience.company
                      }
                    </h4>

                    <span>
                      {t(
                        `companies.${experience.id}.period`,
                      )}
                    </span>
                  </motion.header>

                  <motion.div
                    className={styles.projects}
                    variants={fadeUp}
                  >
                    {experience.projects.map(
                      (
                        project,
                      ) => {
                        const responsibilities =
                          t(
                            `companies.${experience.id}.projects.${project.id}.responsibilities`,
                            {
                              returnObjects:
                                true,
                            },
                          ) as string[];

                        return (
                          <motion.div
                            key={project.id}
                            className={styles.projectCard}
                            variants={fadeUp}
                          >
                            <h5>
                              {t(
                                `companies.${experience.id}.projects.${project.id}.name`,
                              )}
                            </h5>

                            <motion.p
                              className={styles.duration}
                              variants={fadeUp}
                            >
                              {t(
                                `companies.${experience.id}.projects.${project.id}.duration`,
                              )}
                            </motion.p>

                            <motion.p
                              className={styles.projectDescription}
                              variants={fadeUp}
                            >
                              {t(
                                `companies.${experience.id}.projects.${project.id}.description`,
                              )}
                            </motion.p>

                            <motion.ul
                              className={styles.responsibilities}
                              variants={fadeUp}
                            >
                              {responsibilities.map(
                                (
                                  responsibility,
                                ) => (
                                  <li
                                    key={
                                      responsibility
                                    }
                                  >
                                    {
                                      responsibility
                                    }
                                  </li>
                                ),
                              )}
                            </motion.ul>

                            <motion.div
                              className={styles.badges}
                              variants={fadeUp}
                            >
                              {project.technologies.map(
                                (
                                  technology,
                                ) => (
                                  <motion.span
                                    key={technology}
                                    className={styles.badge}
                                    variants={fadeUp}
                                  >
                                    {
                                      technology
                                    }
                                  </motion.span>
                                ),
                              )}
                            </motion.div>
                          </motion.div>
                        );
                      },
                    )}
                  </motion.div>
                </motion.article>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>
    );
  };

export default Experience;