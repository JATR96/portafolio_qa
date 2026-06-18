import { useTranslation } from 'react-i18next';

import { experiences } from '@data/experience';

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
        <div
          className={styles.container}
        >
          <h2
            className={styles.title}
          >
            {t(
              'section.title',
            )}
          </h2>

          <p
            className={
              styles.description
            }
          >
            {t(
              'section.description',
            )}
          </p>

          <div
            className={
              styles.timeline
            }
          >
            {experiences.map(
              (
                experience,
              ) => (
                <article
                  key={
                    experience.id
                  }
                  className={
                    styles.companyCard
                  }
                >
                  <header
                    className={
                      styles.companyHeader
                    }
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
                      {
                        experience.period
                      }
                    </span>
                  </header>

                  <div
                    className={
                      styles.projects
                    }
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
                          <div
                            key={
                              project.id
                            }
                            className={
                              styles.projectCard
                            }
                          >
                            <h5>
                              {t(
                                `companies.${experience.id}.projects.${project.id}.name`,
                              )}
                            </h5>

                            <p
                              className={
                                styles.duration
                              }
                            >
                              {
                                project.duration
                              }
                            </p>

                            <p
                              className={
                                styles.projectDescription
                              }
                            >
                              {t(
                                `companies.${experience.id}.projects.${project.id}.description`,
                              )}
                            </p>

                            <ul
                              className={
                                styles.responsibilities
                              }
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
                            </ul>

                            <div
                              className={
                                styles.badges
                              }
                            >
                              {project.technologies.map(
                                (
                                  technology,
                                ) => (
                                  <span
                                    key={
                                      technology
                                    }
                                    className={
                                      styles.badge
                                    }
                                  >
                                    {
                                      technology
                                    }
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        );
                      },
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

export default Experience;