import { useTranslation } from 'react-i18next';

import { contactLinks } from '@data/contact';

import { motion } from 'framer-motion';

import {
  fadeUp,
  staggerContainer,
} from '../../config/animations';

import styles from './Contact.module.scss';

const Contact =
  (): React.JSX.Element => {
    const { t } =
      useTranslation(
        'homepage',
      );

    return (
      <section
        id="contact"
        className={styles.contact}
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
            {t('contact.title')}
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={fadeUp}
          >
            {t(
              'contact.description',
            )}
          </motion.p>

          <motion.div
            className={styles.grid}
            variants={staggerContainer}
          >
            {contactLinks.map(
              (contact) => (
                <motion.a
                  key={contact.id}
                  variants={fadeUp}
                  href={contact.href}
                  target={
                    contact.id !== 'email'
                      ? '_blank'
                      : undefined
                  }
                  rel="noreferrer"
                  className={styles.card}
                >
                  <h3>
                    {contact.label}
                  </h3>

                  <p>
                    {contact.value}
                  </p>
                </motion.a>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>
    );
  };

export default Contact;