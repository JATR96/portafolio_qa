import { useTranslation } from 'react-i18next';

import styles from './Hero.module.scss';

const Hero = (): React.JSX.Element => {
  const { t } = useTranslation('homepage');

  return (
    <section
      id="home"
      className={styles.hero}
    >
      <div className={styles.container}>
        <span className={styles.badge}>
          {t('hero.badge')}
        </span>

        <h1 className={styles.name}>
          {t('hero.name')}
        </h1>

        <p className={styles.description}>
          {t('hero.description')}
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className={styles.primaryButton}
          >
            {t('hero.primaryButton')}
          </a>

          <a
            href="#contact"
            className={styles.secondaryButton}
          >
            {t('hero.secondaryButton')}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            {t('hero.statOne')}
          </div>

          <div className={styles.stat}>
            {t('hero.statTwo')}
          </div>

          <div className={styles.stat}>
            {t('hero.statThree')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;