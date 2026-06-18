import { useTranslation } from 'react-i18next';

import { certifications } from '@data/certifications';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Certifications.module.scss';

const Certifications =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'homepage',
      );

    const featuredCertification =
      certifications.find(
        (
          certification,
        ) =>
          certification.featured,
      );

    const secondaryCertifications =
      certifications.filter(
        (
          certification,
        ) =>
          !certification.featured,
      );

    return (
      <section
        id="certifications"
        className={
          styles.certifications
        }
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
              'certifications.title',
            )}
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={fadeUp}
          >
            {t(
              'certifications.description',
            )}
          </motion.p>

          {featuredCertification && (
            <motion.article
              className={styles.featured}
              variants={fadeUp}
            >
              <span
                className={
                  styles.featuredBadge
                }
              >
                Featured
              </span>

              <h3
                className={
                  styles.featuredTitle
                }
              >
                {
                  featuredCertification.title
                }
              </h3>

              <p>
                {
                  featuredCertification.issuer
                }
              </p>

              <p>
                {
                  featuredCertification.year
                }
              </p>
            </motion.article>
          )}

          <motion.div
            className={styles.grid}
            variants={staggerContainer}
          >
            {secondaryCertifications.map(
              (
                certification,
              ) => (
                <motion.article
                  key={certification.id}
                  className={styles.card}
                  variants={fadeUp}
                >
                  <h3>
                    {
                      certification.title
                    }
                  </h3>

                  <p>
                    {
                      certification.issuer
                    }
                  </p>

                  <p>
                    {
                      certification.year
                    }
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>
    );
  };

export default Certifications;