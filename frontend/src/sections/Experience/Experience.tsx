import { useTranslation } from 'react-i18next';

import { experiences } from '@data/experience';

import styles from './Experience.module.scss';

const Experience =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'homepage',
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
              'experience.title',
            )}
          </h2>

          <p
            className={
              styles.description
            }
          >
            {t(
              'experience.description',
            )}
          </p>

          <div
            className={
              styles.timeline
            }
          >
            {experiences.map(
              (item) => (
                <article
                  key={item.id}
                  className={
                    styles.card
                  }
                >
                  <span
                    className={
                      styles.period
                    }
                  >
                    {item.period}
                  </span>

                  <h3>
                    {item.role}
                  </h3>

                  <h4>
                    {item.company}
                  </h4>

                  <p>
                    {
                      item.description
                    }
                  </p>

                  <div
                    className={
                      styles.badges
                    }
                  >
                    {item.technologies.map(
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
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    );
  };

export default Experience;