import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

const About = (): React.JSX.Element => {
  const { t } =
    useTranslation(
      'homepage',
    );

  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t('about.title')}
        </h2>

        <p
          className={
            styles.description
          }
        >
          {t(
            'about.description',
          )}
        </p>

        <div
          className={
            styles.specialties
          }
        >
          <div className={styles.card}>
            {t(
              'about.specialties.one',
            )}
          </div>

          <div className={styles.card}>
            {t(
              'about.specialties.two',
            )}
          </div>

          <div className={styles.card}>
            {t(
              'about.specialties.three',
            )}
          </div>

          <div className={styles.card}>
            {t(
              'about.specialties.four',
            )}
          </div>

          <div className={styles.card}>
            {t(
              'about.specialties.five',
            )}
          </div>

          <div className={styles.card}>
            {t(
              'about.specialties.six',
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;