import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  fadeIn,
  fadeUp,
  staggerContainer,
} from '@config/animations';

import styles from './Hero.module.scss';

const Hero = (): React.JSX.Element => {
  const { t } = useTranslation('homepage');

  return (
    <section
      id="home"
      className={styles.hero}
    >
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className={styles.badge}
          variants={fadeIn}
        >
          {t('hero.badge')}
        </motion.span>

        <motion.h1
          className={styles.name}
          variants={fadeUp}
        >
        </motion.h1>

        <motion.p
          className={styles.description}
          variants={fadeUp}
        >
        </motion.p>

        <motion.div
          className={styles.actions}
          variants={fadeUp}
        >
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
        </motion.div>

        <motion.div
          className={styles.stats}
          variants={fadeUp}
        >
          <div className={styles.stat}>
            {t('hero.statOne')}
          </div>

          <div className={styles.stat}>
            {t('hero.statTwo')}
          </div>

          <div className={styles.stat}>
            {t('hero.statThree')}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;