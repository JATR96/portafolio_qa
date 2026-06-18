import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

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
          {t('about.title')}
        </motion.h2>

        <motion.p
          className={styles.description}
          variants={fadeUp}
        >
          {t(
            'about.description',
          )}
        </motion.p>

        <motion.div
          className={styles.specialties}
          variants={staggerContainer}
        >
          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.one',
            )}
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.two',
            )}
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.three',
            )}
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.four',
            )}
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.five',
            )}
          </motion.div>

          <motion.div
            className={styles.card}
            variants={fadeUp}
          >
            {t(
              'about.specialties.six',
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;