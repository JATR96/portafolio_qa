import { useTranslation } from 'react-i18next';

import styles from './HomePage.module.scss';

const HomePage = (): React.JSX.Element => {
  const { t } =
    useTranslation(
      'homepage',
    );

  return (
    <main
      id="home"
      className={styles.home}
    >
      <section
        className={styles.hero}
      >
        <h1
          className={styles.title}
        >
          {t(
            'hero.title',
          )}
        </h1>

        <p
          className={
            styles.subtitle
          }
        >
          {t(
            'hero.subtitle',
          )}
        </p>
      </section>
    </main>
  );
};

export default HomePage;